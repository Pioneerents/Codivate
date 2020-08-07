#!/usr/bin/env python
import os
import time
import logging
import json
import argparse
from pprint import pprint
from database.db import Client
from database.db_config import users_key_schema, users_attributes, quotes_key_schema, quotes_attributes, question_key_schema, question_attributes
from helpers.sms import send_message
from boto3.dynamodb.types import TypeDeserializer, TypeSerializer

# Twilio environment variables
DIR_PATH = os.path.dirname(os.path.realpath(__file__))

logging.basicConfig(filename='./Logs/pyclient.log', level=logging.INFO)

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

def clear_file(file_name):
    """Function that clears a json file"""
    try:
        with open (file_name, "w") as userFile:
            json.dump([], userFile)
    except Exception as e:
        logging.error(e)
    
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

def save_questions(input_file, table_name):
    """Function that writes programming questions to the dynamo db database"""
    questions = read_file(f"{DIR_PATH}/resources/{input_file}.json")

    db = setup_db_conn()
    table = db.create_table(table_name, question_key_schema, question_attributes)

    db_items = db.get_all_items(table, table_name=table_name)

    try:
        print(f"Saving questions to {table_name} table...")
        for i, item in enumerate(questions):
            key = {"question_id": i}
            row = {
                "question_id": i, "body": item,
            }
            if db.get_item(table, {"question_id": i}) is False:
                db.add_item(table, row, table_name=table_name)
    except Exception as e:
        logging.error(f"Unable to save questions to {table_name} table")

def onboard_users():
    """Add users to the database"""
    new_users = read_file(f"{DIR_PATH}/resources/codivate_local.json")
    # Create the table
    db = setup_db_conn()
    users_table = db.create_table(
        "users", users_key_schema, users_attributes)

    db_items = db.get_all_items(users_table, table_name="users")

    # Add the users
    try:
        print("Onboarding new users...")
        for user in new_users:
            key = {"name": user['name'], "number": user['number']}
            row = {
                "name": user['name'], "number": user['number'],
                "country": user['country'], "tip": user['tipId'],
                "category": user['category'],
                "level": user['level'],
                "python_id": 0, "javascript_id": 0
            }
            # Add the premium user to the database
            if user['premium'] is not None:
                row.update(premium=user['premium'])

            name = user['name']
            key = {"name": user['name'], "number": user['number']}
            if db.get_item(users_table, key) is False or None:
                db.add_item(users_table, row, table_name="users")
    except Exception as e:
        logging.error(f"Unable to save users to {table_name} table")
    else:
        # Clear the user file 
        clear_file(f"{DIR_PATH}/resources/codivate_local.json")
        print("Finished onboarding new users.")


def from_dynamodb_to_json(item):
    d = TypeDeserializer()
    return {k: d.deserialize(value=v) for k, v in item.items()}


def save_quotes():
    """Add quotes to the database"""
    new_quotes = read_file(f"{DIR_PATH}/resources/SoftwareTips.json")
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

def main():
    """Single entry point for application"""
    onboard_users()
    # save_quotes()
    for language in ("python", "javascript"):
        save_questions(f"{language}_questions", f"{language}_questions")


if __name__ == "__main__":
    main()
