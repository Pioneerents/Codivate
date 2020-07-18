import boto3
from boto3.dynamodb.conditions import Key

# Create the table and the items/attributes asynchronously


class Client:
    def __init__(self, service):
        self.connection = boto3.resource(service)

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
                print(f"Created table {name}")
            else:
                return table_exists
        except Exception as e:
            raise Exception(e)
        else:
            return table

    def table_exists(self, name):
        try:
            table = self.connection.Table(name)
            date = table.creation_date_time
            return table
        except Exception as e:
            print(e)
            return False

    def add_item(self, table, data):
        """Function that writes to an existing dynamoDB table"""
        try:
            table.put_item(
                Item=data
            )
            print(f"Adding item: {data}")
        except Exception as e:
            print("Unable to add item: {data} into database!")
            print(e)

    def get_item(self, table, primary_key):
        """Function to fetch and item from dynamoDB."""
        try:
            response = table.get_item(
                Key=primary_key
            )
            item = response['Item']
            print(f"Entry found: {item}")
        except Exception as e:
            print(f"Item with primary key {primary_key} NOT FOUND!")
            return False

    def update_item(self, table, primary_key, attribute, new_val):
        """Function to update existing item from database"""
        try:
            response = table.update_item(
                Key=primary_key,
                UpdateExpression=f"SET {attribute} = :val1",
                ExpressionAttributeValues={
                    ':val1': new_val
                }
            )
            user = primary_key['name']
            print(f"Updated user {user}'s attribute: {attribute}")
        except Exception as e:
            print(f"Unable to update item with attribute {primary_key}!")
            print(e)

    def get_all_items(self, table, primary_key=None):
        """Function takes in a primary key and returns a query"""
        # response = table.query(KeyConditionExpression=Key(primary_key))
        response = table.scan()
        items = response['Items']
        return items
