users_key_schema = [
    {
        'AttributeName': 'name',
        'KeyType': 'HASH'
    },
    {
        'AttributeName': 'number',
        'KeyType': 'RANGE'
    }
]

users_attributes = [
    {
        'AttributeName': 'name',
        'AttributeType': 'S'
    },
    {
        'AttributeName': 'number',
        'AttributeType': 'N'
    },
]

quotes_key_schema = [
    {
        'AttributeName': 'tip_id',
        'KeyType': 'HASH'
    }
]

quotes_attributes = [
    {
        'AttributeName': 'tip_id',
        'AttributeType': 'N'
    },
]
