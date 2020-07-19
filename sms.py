#!/usr/bin/env python
import argparse
import os
from twilio.rest import Client

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
SENDER = os.environ['SENDER']

client = Client(ACCOUNT_SID, AUTH_TOKEN)

def send_message(sender, recipient, msg):
    try:
        msg = msg.replace("\\n", "\n")
        message = client.messages.create(
            to=recipient, 
            from_="Codivate",
            body=f"*Tip of the Day*\n{msg}")
        print(f"Sent text message to {recipient}!")
    except Exception as e:
        print(e)
    else:
        print(message.sid)