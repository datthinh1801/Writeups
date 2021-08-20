# Lab: Username enumeration via response timing
## Task
This lab is vulnerable to username enumeration using its response times. To solve the lab, enumerate a valid username, brute-force this user's password, then access their account page.

Your credentials: `wiener:peter`

## Solution
First, in order not to be blocked, we need to add an additional header `X-Forwarded-For` with a different value for each request.  

Second, while brute-forcing the `username`, if a valid `username` is encountered, the server will check the long `password`, which in turn causes a delay.  
On Burp Suite Pro, I ran an attack and see that the `mysql` username had the longest response time, which is a signal of a valid `username`.  

![image](https://user-images.githubusercontent.com/44528004/130248381-febbd5ac-3147-4a25-a1c6-2ecf45c26060.png)


Then, brute-forcing the `password` of the `mysql` user and the response with `status code == 302` is the correct password.  

![image](https://user-images.githubusercontent.com/44528004/130248127-64eeda06-bbe6-4d19-8bc9-1552eed3fbdf.png)  

With these information, the valid credential is `mysql:777777`  

![image](https://user-images.githubusercontent.com/44528004/130248592-af757af9-1f3b-4e7a-870d-9408b8920324.png)
> Solved!
