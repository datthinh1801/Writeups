# Lab: Username enumeration via account lock
## Task
This lab is vulnerable to username enumeration. It uses account locking, but this contains a logic flaw. To solve the lab, enumerate a valid username, brute-force this user's password, then access their account page.

[Candidate usernames](https://portswigger.net/web-security/authentication/auth-lab-usernames)  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)  

## Solution
First, from observation, I can see that an invalid `username` causes the server to return `Invalid username or password.`. On the other hand, a valid `username` with inccorrect `password` for multiple times receives a message `You have made too many incorrect login attempts. Try to login again in 1 minute(s).`  

![image](https://user-images.githubusercontent.com/44528004/130309625-082431a0-6bee-4bf4-9cb9-db01288c0930.png)  

Here, I know that `analyzer` is a valid `username`; therefore, I started to brute-force the password.  
However, before moving on, I guess that with an incorrect password, the message could be `Invalid username or password.` or `You have made too many incorrect login attempts. Please try again in 1 minute(s).`. On the other hand, if a correct password is given, no message is returned.  

Indeed, after Burp Suite finished sniping, I got a password which didn't cause the server to return a message:  

![image](https://user-images.githubusercontent.com/44528004/130309820-5e57ba84-db7c-4160-9f85-f5076d255bc2.png)  

Let's try to login with this credential:  

![image](https://user-images.githubusercontent.com/44528004/130309836-1a2131cf-ccdf-4334-994e-2ba4503684e0.png)  

![image](https://user-images.githubusercontent.com/44528004/130309842-8e294397-16f9-4eef-9985-9b35ea63dfca.png)

![image](https://user-images.githubusercontent.com/44528004/130309844-0067403a-2d71-4186-81db-968b5f8f65fa.png)
> Solved!
