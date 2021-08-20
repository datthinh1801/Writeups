# Lab: Blind SQL injection with time delays
## Task
This lab contains a blind SQL injection vulnerability. The application uses a tracking cookie for analytics, and performs an SQL query containing the value of the submitted cookie.

The results of the SQL query are not returned, and the application does not respond any differently based on whether the query returns any rows or causes an error. However, since the query is executed synchronously, it is possible to trigger conditional time delays to infer information.

To solve the lab, exploit the SQL injection vulnerability to cause a 10 second delay.

## Solution
Payload:  
```
'||pg_sleep(10)--
```

Result:  

![image](https://user-images.githubusercontent.com/44528004/130172028-5ab27366-3685-4f7b-865b-5d4be15b8e23.png)
> Solved!
