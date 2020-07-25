import os
import json
DIR_PATH = os.path.dirname(os.path.realpath(__file__))
print(f"{DIR_PATH}/codivate_local.json")
with open (f"{DIR_PATH}/codivate_local.json", "w") as userFile:
    json.dump([], userFile)