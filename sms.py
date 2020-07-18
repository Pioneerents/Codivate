#!/usr/bin/env python
import argparse
import os
from twilio.rest import Client

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
SENDER = os.environ['SENDER']

client = Client(ACCOUNT_SID, AUTH_TOKEN)

parser = argparse.ArgumentParser("Python helper script to send SMS messages")

parser.add_argument("--message", default=None, type=str, help="Message to be included in text message")
parser.add_argument("--sender", default=None, type=str, help="Phone number of sender")
parser.add_argument("--to", default=None, type=str, help="Phone number to send message to")

args = parser.parse_args()
def send_message(sender, recipient, msg):
    try:

        msg = msg.replace("\\n", "\n")
        message = client.messages.create(
            to=recipient, 
            from_=sender,
            body=msg)
        print(f"Sent text message to {recipient}!")
    except Exception as e:
        print(e)
    else:
        print(message.sid)

def main():
    print(args)
    send_message(args.sender, args.to, args.message)

if __name__ == "__main__":
    main()
