import boto3

# Create the table and the items/attributes asynchronously


class Client:
    def __init__(self, service):
        self.connection = boto3.resource(service)

    def create_table(self, name):
        """Method to create a table"""
        try:
            table_exists = self.table_exists(name)
            if not table_exists:
                table = self.connection.create_table(
                    TableName=name,
                    KeySchema=[
                        {
                            'AttributeName': 'name',
                            'KeyType': 'HASH'
                        },
                        {
                            'AttributeName': 'number',
                            'KeyType': 'RANGE'
                        }
                    ],
                    AttributeDefinitions=[
                        {
                            'AttributeName': 'name',
                            'AttributeType': 'S'
                        },
                        {
                            'AttributeName': 'number',
                            'AttributeType': 'S'
                        },
                    ],
                    ProvisionedThroughput={
                        'ReadCapacityUnits': 5,
                        'WriteCapacityUnits': 5
                    }
                )
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
