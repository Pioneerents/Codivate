#!/usr/bin/env python
import os
import logging
import argparse
import time
from twilio.rest import Client

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
SENDER = os.environ['SENDER']

client = Client(ACCOUNT_SID, AUTH_TOKEN)


def send_message(sender, recipient, msg, title):
    retry = 0
    while retry <= 10:
        try:
            msg = msg.replace("\\n", "\n")
            message = client.messages.create(
                to=recipient,
                from_="Codivate",
                body=f"*{title.capitalize()} Tip*\n\n{msg}\n\nEnjoy the content?\nSupport us on https://www.buymeacoffee.com/Codivate")
            logging.info(f"Sent text message to {recipient}!")
            break
        except Exception as e:
            logging.error("Unable to send SMS", e)
            retry += 1
            logging.info(f"Retrying text. Attempt #{count}")
            time.sleep(5)
            continue
