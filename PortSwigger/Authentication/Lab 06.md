# Lab: Broken brute-force protection, multiple credentials per request
## Task
This lab is vulnerable due to a logic flaw in its brute-force protection. To solve the lab, brute-force Carlos's password, then access his account page.

Victim's username: `carlos`  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)

## Solution
In this lab, the format of the posted data is a bit different than previous ones:  

![image](https://user-images.githubusercontent.com/44528004/130310128-b7ef0b7e-8828-41a0-8f2d-7dc90aa0d3e0.png)  

Here, the data is represented as JSON, and in JSON, we can specify multiple values as a list for a given key:
```
{
  "username":"test",
  "password":[
    "test",
    "123456",
    "password",
    ]
}
```

For this reason, we can test all possible passwords at once.  

Request:

![image](https://user-images.githubusercontent.com/44528004/130310135-383c0739-c2e3-4126-9dca-b59b32d41592.png)

Response:  

![image](https://user-images.githubusercontent.com/44528004/130310139-be9fb4ee-eeb4-4f7e-b914-2befdd088bbb.png)


In the response, we are assigned a new `session` cookie. What we need to do is make a GET request to `/my-account` and paste this `session` cookie into the request

![image](https://user-images.githubusercontent.com/44528004/130310205-5ea1a525-ab90-48eb-84f1-c81c39791abf.png)  

![image](https://user-images.githubusercontent.com/44528004/130310211-65a3ae78-19b9-435a-9bc7-c51eab8fdb33.png)
> Solved!
