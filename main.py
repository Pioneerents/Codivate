#!/usr/bin/env python
import os
import json
import argparse
from pprint import pprint
from db import Client
from sms import send_message
from db_config import users_key_schema, users_attributes, quotes_key_schema, quotes_attributes

# Twilio environment variables
SENDER = os.environ['SENDER']

TABLE_NAME = "codivate_users"

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


def read_file(file_name):
    """Function that parses a JSON file and fetches new entries"""
    try:
        with open(file_name, 'r') as f_obj:
            data = json.loads(f_obj.read())
    except FileNotFoundError as e:
        print(e)
    else:
        return data


def setup_db_conn():
    """Initiate database connection"""
    try:
        db_conn = Client("dynamodb")
    except Exception as e:
        print(e)
    else:
        return db_conn


def validate_user(primary_key):
    """Check if a user exists in database"""
    db = setup_db_conn()
    table = db.create_table(TABLE_NAME, users_key_schema, users_attributes)

    if db.get_item(table, primary_key) is False:
        print("1")
        return True
    else:
        print("0")
        return False


def onboard_users():
    """Add users to the database"""
    new_users = read_file("codivate_local.json")
    # Create the table
    db = setup_db_conn()
    users_table = db.create_table(
        TABLE_NAME, users_key_schema, users_attributes)
    db_items = db.get_all_items(users_table)
    pprint(db_items)
    # for item in db_items:
    #     print(item)
    #     send_message(SENDER, item['number'], message)
    # Add the users
    try:
        for user in new_users:
            key = {"name": user['name'], "number": user['number']}
            row = {
                "name": user['name'], "number": user['number'],
                "country": user['country'], "tip": user['tipId']
            }
            name = user['name']
            key = {"name": user['name'], "number": user['number']}
            if db.get_item(users_table, key) is False:
                print(f"Adding user: {name} to database")
                db.add_item(users_table, row)

        # Update the users
        for item in db_items:
            key = {"name": item['name'], "number": item['number']}
            #send_message(SENDER, item['number'], message)
            # Update the database icon
            tip_id = item['tip'] + 1
            if db.get_item(users_table, key) != False:
                db.update_item(users_table, key, "tip", tip_id)
    except Exception as e:
        print("Unable to onboard users")
        print(e)


def onboard_quotes():
    """Add users to the database"""
    new_quotes = read_file("SoftwareTips.json")
    # Create the table
    db = setup_db_conn()
    quotes_table = db.create_table(
        "quotes", quotes_key_schema, quotes_attributes)
    # db_items = db.get_all_items(quotes_table)
    # pprint(db_items)
    for quote in new_quotes:
        print(quote)
    # for item in db_items:
    #     print(item)
    #     send_message(SENDER, item['number'], message)
    # Add the users
    try:
        for user in new_quotes:
            key = {"name": user['name'], "number": user['number']}
            row = {
                "name": user['name'], "number": user['number'],
                "country": user['country'], "tip": user['tipId']
            }
            name = user['name']
            if db.get_item(users_table, {"name": user['name'], "number": user['number']}) is False:
                print(f"Adding user: {name} to database")
                db.add_item(users_table, row)
    except Exception as e:
        print("Unable to onboard users")
        print(e)


def main():
    """Single entry point for application"""
    onboard_users()
    #onboard_quotes()
    # key = {"name": cmd_args['name'], "number": cmd_args['number']}
    # validate_user(key)


if __name__ == "__main__":
    main()
