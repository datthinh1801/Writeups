# Lab: SQL injection attack, listing the database contents on Oracle
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response so you can use a UNION attack to retrieve data from other tables.

The application has a login function, and the database contains a table that holds usernames and passwords. You need to determine the name of this table and the columns it contains, then retrieve the contents of the table to obtain the username and password of all users.

To solve the lab, log in as the `administrator` user.

## Solution
Steps are the same as [Lab 09](https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2009.md), except payloads.  

Find table name:  

![image](https://user-images.githubusercontent.com/44528004/130075951-d728531f-994a-4068-b8e2-aacc9648226b.png)  

Find columns' name:  

![image](https://user-images.githubusercontent.com/44528004/130076099-d1a56880-3f0b-478c-9e12-c35a25091d5b.png)  

Retrieve the password of the `administrator` user:  

![image](https://user-images.githubusercontent.com/44528004/130076213-948cb34a-b4c5-45a4-ad0a-16c1be2b448f.png)

Login:  

![image](https://user-images.githubusercontent.com/44528004/130076276-20d1d309-e3fb-40f8-92fa-3793f4e9ae42.png)

![image](https://user-images.githubusercontent.com/44528004/130076421-05d6e0bd-c4df-4a9f-aac7-4d772901b942.png)
> Solved!

