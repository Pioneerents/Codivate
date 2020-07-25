#!/usr/bin/env python
import os
import time
import logging
import json
import argparse
from pprint import pprint
from database.db import Client
from database.db_config import users_key_schema, users_attributes, quotes_key_schema, quotes_attributes
from helpers.sms import send_message
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer

# Twilio environment variables
SENDER = os.environ['SENDER']
DIR_PATH = os.path.dirname(os.path.realpath(__file__))

logging.basicConfig(filename='pyclient.log', level=logging.INFO)

TABLE_NAME = "nwe_fff"

parser = argparse.ArgumentParser(
    description='Create DynamoDB connection and insert data.\n\nCan also query database.')
parser.add_argument('--table',
                    default=None,
                    type=str,
                    help='Table name')
parser.add_argument('--name',
                    default=None,
                    type=str,
                    help='Name of user. Primary key consists of User and Phone number')
parser.add_argument('--number',
                    default=None,
                    type=str,
                    help='Phone number of user')

args = parser.parse_args()

cmd_args = {
    "name": args.name,
    "number": args.number
}


def read_file(file_name, clear=False):
    """Function that parses a JSON file and fetches new entries"""
    try:
        with open(file_name, 'r') as f_obj:
            data = json.loads(f_obj.read())
    except FileNotFoundError as e:
        logging.error(e)
    else:
        return data


def setup_db_conn():
    """Initiate database connection"""
    try:
        db_conn = Client("dynamodb")
    except Exception as e:
        logging.error(e)
    else:
        return db_conn


def validate_user(primary_key):
    """Check if a user exists in database"""
    db = setup_db_conn()
    table = db.create_table(TABLE_NAME, users_key_schema, users_attributes)

    if db.get_item(table, primary_key) is False:
        return True
    else:
        return False


def onboard_users():
    """Add users to the database"""
    new_users = read_file(f"{DIR_PATH}/codivate_local.json")
    # Create the table
    db = setup_db_conn()
    users_table = db.create_table(
        TABLE_NAME, users_key_schema, users_attributes)

    db_items = db.get_all_items(users_table, table_name=TABLE_NAME)

    # Add the users
    try:
        print("Onboarding new users...")
        for user in new_users:
            key = {"name": user['name'], "number": user['number']}
            row = {
                "name": user['name'], "number": user['number'],
                "country": user['country'], "tip": user['tipId']
            }
            name = user['name']
            key = {"name": user['name'], "number": user['number']}
            if db.get_item(users_table, key) is False or None:
                db.add_item(users_table, row, table_name=TABLE_NAME)

        # Update the users
        for item in db_items:
            key = {"name": item['name'], "number": item['number']}
            obj = from_dynamodb_to_json(item)
            tip_id = obj['tip'] + 1

            updated_attributes = {
                "name": obj['name'], "number": obj['number'],
                "country": obj['country'], "tip": tip_id
            }
            if db.get_item(TABLE_NAME, key) != False:
                db.update_item(users_table, key, "tip", updated_attributes)
                print("Finished onboarding new users.")
    except Exception as e:
        logging.error("Unable to onboard users", e)
    else:
        send_texts(db_items)
        # REMOVE!
        # db.delete_table(TABLE_NAME)


def from_dynamodb_to_json(item):
    d = TypeDeserializer()
    return {k: d.deserialize(value=v) for k, v in item.items()}


def save_quotes():
    """Add quotes to the database"""
    new_quotes = read_file(f"{DIR_PATH}/SoftwareTips.json")
    # Create the table
    db = setup_db_conn()
    quotes_table = db.create_table(
        "quotes", quotes_key_schema, quotes_attributes)
    try:
        print("Saving quotes to database...")
        for i, item in enumerate(new_quotes):
            key = {"tip_id": i}
            row = {
                "tip_id": i, "body": item,
            }
            if db.get_item(quotes_table, {"tip_id": i}) is False:
                db.add_item(quotes_table, row, table_name="quotes")
    except Exception as e:
        logging.error("Unable to save quotes to database")
    else:
        print("Finished adding quotes to database.")


def send_texts(rows):
    quotes = read_file(f"{DIR_PATH}/Backend/SoftwareTips.json")
    print('@@@@')
    print(quotes)
    for item in rows:
        obj = from_dynamodb_to_json(item)
        number = obj['number']
        tip_id = int(obj['tip'])

        message = quotes[tip_id]
        print(f"Sending text message to {number}")
        send_message(SENDER, obj['number'], message)


def main():
    """Single entry point for application"""
    onboard_users()
    save_quotes()


if __name__ == "__main__":
    main()
