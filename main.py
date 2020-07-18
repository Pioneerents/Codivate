#!/usr/bin/env python
import json
from pprint import pprint
from db import Client

TABLE_NAME = "codivate_users"

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

def onboard_users():
    """Add users to the database"""
    new_users = read_file("codivate_local.json")
    # Create the table
    db = setup_db_conn()
    table = db.create_table(TABLE_NAME)

    # Add the users
    try:
        for user in new_users:
            key = {"name": user['name'], user['number']}
            name = user['name']
            db.add_item(table, key)
            print(f"Adding user: {name} to database")
    except Exception as e:
        print("Unable to onboard users")
        print(e)

def main():
    """Single entry point for application"""
    onboard_users()
    # }
    # db_conn.add_item(users_table, item)
    # db_conn.get_item(users_table, {"name": "Joef", "number": "084238423"})
    # Check existence of item
    # item = {"user"}
    # db_conn.get_item()

    # Wait until the table exists.
    # users_table.meta.client.get_waiter('table_exists').wait(TableName='codivate_users')
    # # Print out some data about the table.
    # print(users_table.item_count)


if __name__ == "__main__":
    main()
