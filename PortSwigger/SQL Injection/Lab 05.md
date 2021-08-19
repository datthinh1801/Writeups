# Lab: SQL injection UNION attack, retrieving data from other tables
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response, so you can use a UNION attack to retrieve data from other tables. To construct such an attack, you need to combine some of the techniques you learned in previous labs.

The database contains a different table called `users`, with columns called `username` and `password`.

To solve the lab, perform an SQL injection UNION attack that retrieves all usernames and passwords, and use the information to log in as the `administrator` user.

## Solution
### Find the number of columns
`ORDER BY 2`:  

![image](https://user-images.githubusercontent.com/44528004/130060808-8d734de9-07c2-4658-83c8-2e4115999257.png)  
> No error.  

` ORDER BY 3`:  

![image](https://user-images.githubusercontent.com/44528004/130060849-7c0b6063-504c-48e7-b26b-93c86fc0ff2b.png)  
> Error.  

So the number of columns returned is **2**.  
> With this information, it is likely that both columns are string-compatible, so needless to test.  

### Perform a `UNION` attack
![image](https://user-images.githubusercontent.com/44528004/130061145-ec9b3249-a914-43f4-b530-536700735ed8.png)  

The `password` of the `administrator` user is `lntxonci0zia4gnf94cm`.

### Login with `administrator`'s credential
![image](https://user-images.githubusercontent.com/44528004/130061279-3455ea4d-5094-43a7-a983-8cf88e892fd6.png)  

![image](https://user-images.githubusercontent.com/44528004/130061295-5593020a-b925-42a8-b13b-dc93d5064a54.png)  
> Solved!

