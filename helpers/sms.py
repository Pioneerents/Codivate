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
SERVICE_SID = os.environ['SERVICE_SID']
ALPHA_SERVICE_SID = os.environ['ALPHA_SERVICE_SID']

client = Client(ACCOUNT_SID, AUTH_TOKEN)
excl_countries = ["United States", "Canada"]

def create_alpha_id():
    alpha_sender = client.messaging \
                        .services(ALPHA_SERVICE_SID) \
                        .alpha_senders \
                        .create(alpha_sender='Codivate')

    print(alpha_sender.sid)

def send_message(sender, recipient, msg, title, name, country):
    retry = 0

    while retry <= 2:
        try:
            if country in excl_countries:
                os.environ['SENDER'] = US_NUMBER
            msg = msg.replace("\\n", "\n")

            notification = client.notify.services(SERVICE_SID) \
                .notifications.create(
                    to_binding='{"binding_type":"sms", "address":"%s"}' % recipient,
                    title="Codivate",
                    body=f"*{title.capitalize()} Tip*\n\nHey {name},\n\n{msg}\n\nEnjoy the content?\nSupport us on: \nhttps://www.buymeacoffee.com/Codivate")
            logging.info(f"Sent text message to {recipient}!")
            break
        except TwilioRestException as e:
            logging.error(f"Unable to send SMS to {recipient}", e)
            if e.code == 21211:
                print(f"{recipient} is invalid. Not sending")
                break
            print(f"Retrying sending text to {recipient}. Attempt {retry}")
            retry += 1
            continue