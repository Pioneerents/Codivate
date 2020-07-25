import logging
import boto3
from boto3.dynamodb.conditions import Key
from pprint import pprint
import time
# Create the table and the items/attributes asynchronously


class Client:
    def __init__(self, service):
        self.connection = boto3.resource(service)
        self.client = boto3.client(service)

    def reset_client(self):
        self.client = boto3.client("dynamodb")

    def create_table(self, name, key_schema, attributes):
        """Method to create a table"""
        try:
            table_exists = self.table_exists(name)
            if not table_exists:
                table = self.connection.create_table(
                    TableName=name,
                    KeySchema=key_schema,
                    AttributeDefinitions=attributes,
                    ProvisionedThroughput={
                        'ReadCapacityUnits': 5,
                        'WriteCapacityUnits': 5
                    }
                )
                time.sleep(10)
            else:
                return table_exists
        except Exception as e:
            logging.error(f"Unable to create table {name}")
            raise Exception(e)
        else:
            return table

    def table_exists(self, name):
        try:
            table = self.connection.Table(name)
            date = table.creation_date_time
            return table
        except Exception as e:
            logging.error(e)
            return False

    def delete_table(self, table_name):
        try:
            print(f"Deleting table {table_name}")
            self.client.delete_table(TableName=table_name)
        except Exception as e:
            logging.error(e)

    def add_item(self, table, data, table_name=None):
        """Function that writes to an existing dynamoDB table"""
        retry = 0
        resp = self.client.describe_table(TableName=table_name)
        status = resp['Table']['TableStatus']

        while retry <= 10:
            if status != "ACTIVE":
                print(f"Retrying adding item. Attempt #{retry}")
                retry += 1
                time.sleep(10)
                continue
            try:
                with table.batch_writer() as batch:
                    batch.put_item(Item=data)
                    logging.info(f"Adding item: {data} to database")
                break
            except self.client.exceptions.ResourceNotFoundException as e:
                logging.error("Unable to add item: {data} into database!")
                print(f"Retrying adding item. Attempt #{retry}")
                logging.error(e)
                retry +=1
                time.sleep(5)
                continue

    def delete_item(self, table, data):
        """Function that writes to an existing dynamoDB table"""
        try:
            with table.batch_writer() as batch:
                batch.delete_item(Item=data)
            logging.info(f"Deleting item: {data}")
        except Exception as e:
            logging.error("Unable to delete item: {data} into database! {e}")

    def get_item(self, table_name, primary_key):
        """Function to fetch and item from dynamoDB."""
        try:
            print(primary_key)
            response = self.client.get_item(
                TableName=table_name,
                Key=primary_key
            )
            item = response['Item']
            return True
        except Exception as e:
            logging.info(f"Item with primary key {primary_key} NOT FOUND!")
            return False

    def update_item(self, table, primary_key, attribute, new_val):
        """Function to update existing item from database"""
        #primary key and attribute params not needed
        try:
            with table.batch_writer() as batch:
                batch.put_item(Item=new_val)
                logging.info(f"Updating item: {new_val} to database")
            user = primary_key['name']
            logging.info(f"Updated user {user}'s attribute: {attribute}")
        except Exception as e:
            logging.error(f"Unable to update item with attribute {primary_key}!", e)

    def get_all_items(self, table, primary_key=None, table_name=None):
        """Function takes in a primary key and returns a query"""
        # response = table.query(KeyConditionExpression=Key(primary_key))
        retry = 0
        items = []
        while retry <= 5:
            try:
                response = self.client.scan(TableName=table_name)
                items = response['Items']
                time.sleep(10)
                break
            except self.client.exceptions.ResourceNotFoundException as e:
                print(f"Retrying table scan. Attempt #{retry}")
                retry += 1
                time.sleep(5)
                logging.error(e)
                continue

        return items
