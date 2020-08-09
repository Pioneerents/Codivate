users_key_schema = [
    {
        'AttributeName': 'number',
        'KeyType': 'RANGE'
    }
]

users_attributes = [
    {
        'AttributeName': 'number',
        'AttributeType': 'S'
    }
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


question_key_schema = [
    {
        'AttributeName': 'question_id',
        'KeyType': 'HASH'
    }
]

question_attributes = [
    {
        'AttributeName': 'question_id',
        'AttributeType': 'N'
    },
]
