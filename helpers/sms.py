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
US_NUMBER = os.environ['US_NUM']

client = Client(ACCOUNT_SID, AUTH_TOKEN)
excl_countries = ["United States", "Canada"]

def send_message(sender, recipient, msg, title, name, country, lang):
    retry = 0
    while retry <= 1:
        try:
            from_num = "Codivate" if country not in excl_countries else US_NUMBER
            author = "@SennaCode" if lang == "python" else "Lateef."
            msg = msg.replace("\\n", "\n")
            message = client.messages.create(
                to=recipient,
                from_=from_num,
                body=f"*{title.capitalize()} Tip*\n\nHey {name},\n\n{msg}\n\nTip by {author}\n\nWe are in beta so we will be back soon!\nIf you wish to unsubscribe for future tips, please follow codivate.io/optout")
            logging.info(f"Sent text message to {recipient}!")
            break
        except TwilioRestException as e:
            logging.error(f"Unable to send SMS to {recipient}", e)
            if e.code == 21211:
                break
            elif e.code == 21612:
                logging.info(f"Retrying using non alphanumeric id for {recipient}")
                time.sleep(1.5)
                client.messages.create(
                    to=recipient,
                    from_=SENDER,
                    body=f"*{title.capitalize()} Tip*\n\nHey {name},\n\n{msg}\n\nTip By Lateef.\n\nWe are in beta so will be back soon!\n\nIf you wish to unsubscribe for futures updates, please visit codivate.io/optout")
                logging.info(f"Sent text message to {recipient}!")
                break
            retry += 1
            logging.info(f"Retrying text. Attempt #{retry}")
            time.sleep(1)
            continue
