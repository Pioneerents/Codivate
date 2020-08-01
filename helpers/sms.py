#!/usr/bin/env python
import os
import logging
import argparse
from twilio.rest import Client

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
SENDER = os.environ['SENDER']

client = Client(ACCOUNT_SID, AUTH_TOKEN)


def send_message(sender, recipient, msg, title):
    try:
        msg = msg.replace("\\n", "\n")
        message = client.messages.create(
            to=recipient,
            from_="Codivate",
            body=f"*{title.capitalize()} Tip*\n\n{msg}\n\nEnjoy the content?\nSupport us on https://www.buymeacoffee.com/Codivate")
        logging.info(f"Sent text message to {recipient}!")
    except Exception as e:
        logging.error("Unable to send SMS", e)
