def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def test_add():
    assert add(2, 3) == 5

def test_subtract():
    assert subtract(10, 4) == 6

def test_add_negative():
     assert add(-1, -1) == -2

import os
# telegram bot python
token = os.getenv('BOT_TOKEN')  
chat_id= os.getenv('CHAT_ID')

import requests 
message = 'hello there this is matrix github action running receive three message'
url = f"https://api.telegram.org/bot{token}/sendMessage?chat_id={chat_id}&text={message}"
r = requests.get(url)
print((r.json()))