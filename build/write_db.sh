#!/bin/bash 
source venv/bin/activate
source .creds.sh
pip3 install -r requirements.txt
./main.py