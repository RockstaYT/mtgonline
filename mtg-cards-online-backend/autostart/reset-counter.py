from pymongo import MongoClient
import schedule
from dotenv import load_dotenv
import time
import os

load_dotenv()


def action():
    print("connecting to db")
    # connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
    client = MongoClient(os.getenv("MONGO_URI"))
    db = client.test
    # Issue the serverStatus command and print the results
    call_count = db.call_counts.find_one({})

    db.call_counts.update_one(
        {'_id': call_count.get('_id')}, {'$set': {'count': 0}})


schedule.every().day.at("01:16").do(action)

while True:
    schedule.run_pending()
    time.sleep(1)
