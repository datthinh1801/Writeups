# Lab: SQL injection UNION attack, retrieving multiple values in a single column
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response so you can use a UNION attack to retrieve data from other tables.

The database contains a different table called `users`, with columns called `username` and `password`.

To solve the lab, perform an SQL injection UNION attack that retrieves all usernames and passwords, and use the information to log in as the `administrator` user.

## Solution
### Find the number columns returned
`ORDER BY 2`:  

![image](https://user-images.githubusercontent.com/44528004/130061863-df91c8da-f904-438a-a5f9-773242cd4c08.png)  
> No error.  

`ORDER BY 3`:  

![image](https://user-images.githubusercontent.com/44528004/130061901-751a9126-4a74-4a6a-990b-56345521a7fb.png)
> Error!  

So the number of columns returned is **2**.  

### Find a string-compatbile column
The first column:  

![image](https://user-images.githubusercontent.com/44528004/130062036-cd1fca48-0906-4c65-a6d1-05e0dafde2bb.png)
> Error => Incompatible  

The second column:  

![image](https://user-images.githubusercontent.com/44528004/130062093-3d19e4cd-ff32-4d80-881c-2aa53fb697bd.png)
> No error => Compatible  

### Perform a `UNION` attack
First of all, find a way to concatenate 2 strings:  

![image](https://user-images.githubusercontent.com/44528004/130062276-5f405545-29bb-4c9b-8826-a98579ce28d2.png)

Then, perform the attack:  

![image](https://user-images.githubusercontent.com/44528004/130062456-c4801750-0f45-4067-980c-1758d03201f0.png)

The `password` of the `administrator` user is `ptgnuqjcccsz0vs29yh8`.  

### Login
![image](https://user-images.githubusercontent.com/44528004/130062544-a3a8f84d-7c6c-4296-9016-ddf261c17742.png)  


![image](https://user-images.githubusercontent.com/44528004/130062565-8638524a-3729-4c79-8f47-6f0be93276de.png)  
> Solved!
