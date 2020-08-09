#!/usr/bin/env python
import os
import logging
import argparse
import time
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException

ACCOUNT_SID = os.environ['ACCOUNT_SID']
AUTH_TOKEN = os.environ['TWILIO_AUTH_TOKEN']
SENDER = os.environ['SENDER']

client = Client(ACCOUNT_SID, AUTH_TOKEN)
excl_countries = ["India", "Pakistan", "United States", "Netherlands"]

def send_message(sender, recipient, msg, title, name):
    retry = 0
    while retry <= 3:
        try:
            msg = msg.replace("\\n", "\n")
            message = client.messages.create(
                to=recipient,
                from_="Codivate",
                body=f"*{title.capitalize()} Tip*\n\nHey {name},\n\n{msg}\n\nEnjoy the content?\nSupport us on: \nhttps://www.buymeacoffee.com/Codivate")
            logging.info(f"Sent text message to {recipient}!")
            break
        except TwilioRestException as e:
            logging.error(f"Unable to send SMS to {recipient}", e)
            if e.code == 21211:
                break
            elif e.code == 21612:
                logging.info(f"Retrying using non alphanumeric id for {recipient}")
                time.sleep(2)
                client.messages.create(
                    to=recipient,
                    from_=SENDER,
                    body=f"*{title.capitalize()} Tip*\n\nHey {name},\n\n{msg}\n\nEnjoy the content?\nSupport us on: \nhttps://www.buymeacoffee.com/Codivate")
                logging.info(f"Sent text message to {recipient}!")
                break
            retry += 1
            logging.info(f"Retrying text. Attempt #{retry}")
            time.sleep(3)
            continue
