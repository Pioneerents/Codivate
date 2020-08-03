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
from main import read_file, from_dynamodb_to_json

SENDER = os.environ['SENDER']
DIR_PATH = os.path.dirname(os.path.realpath(__file__))

def setup_db_conn():
    try:
        db_conn = Client("dynamodb")
    except Exception as e:
        logging.error(e)
    else:
        return db_conn


def send_texts(rows):
    python_questions = read_file(f"{DIR_PATH}/resources/python_questions.json")
    javascript_questions = read_file(f"{DIR_PATH}/resources/javascript_questions.json")

    for item in rows:
        obj = from_dynamodb_to_json(item)
        number = obj['number']
        if obj['category'] == "python":
            question_id = int(obj['python_id'])
            title = obj['category']
            message = python_questions[question_id]
        elif obj['category'] == "javascript":
            question_id = int(obj['javascript_id'])
            title = obj['category']
            message = javascript_questions[question_id]

        print(f"Sending text message to {number}")
        send_message(SENDER, obj['number'], message, title)


def main():
    try: 
        db = setup_db_conn()
        users_table = db.create_table(
            "users", users_key_schema, users_attributes)

        db_items = db.get_all_items(users_table, table_name="users")

        # Send the texts
        send_texts(db_items)
        # Update the users
        for item in db_items:
            key = {"name": item['name'], "number": item['number']}
            obj = from_dynamodb_to_json(item)
            tip_id = obj['tip']
            py_id = obj['python_id'] + 1
            js_id = obj['javascript_id'] + 1

            updated_attributes = {
                "name": obj['name'], "number": obj['number'],
                "country": obj['country'], "tip": tip_id,
                "python_id": py_id, "javascript_id": js_id,
                "category": obj['category']
            }
            if db.get_item("users", key) != False:
                for attribute in ("python_id", "javascript_id"):
                    db.update_item(users_table, key, attribute, updated_attributes)
    except Exception as e:
        logging.error(e)
    
if __name__ == "__main__":
    main()
