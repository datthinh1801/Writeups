# Lab: Password brute-force via password change
## Task
This lab's password change functionality makes it vulnerable to brute-force attacks. To solve the lab, use the list of candidate passwords to brute-force Carlos's account and access his "My account" page.

Your credentials: `wiener`:`peter`  
Victim's username: `carlos`  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)

## Solution
When I log in to our account and change our password, a POST request will be sent:  

![image](https://user-images.githubusercontent.com/44528004/131203611-d7790a9c-f063-4d5a-935d-63615d6d6534.png)  

If everything works fine, we'll get this page in return:  

![image](https://user-images.githubusercontent.com/44528004/131203834-598e5018-6fa2-44cf-9b83-abc69e2b0d52.png)  

There are some errornous situations:
- Wrong `current password`.
- Right `current password` but the new passwords do not match.  

In the first case, we'll receive a message **Current password is incorrect**. In the second case, we'll receive a message **New passwords do not match**.  

With this information, we can enter 2 different new passwords, and bruteforce the current password using these 2 messages to know if a password is correct.  


Here will be our POST request:  

![image](https://user-images.githubusercontent.com/44528004/131204133-a385cd9d-fb4c-48fb-9a95-23c098cd2dc9.png)  

Here is what we got:  

![image](https://user-images.githubusercontent.com/44528004/131204166-7e35390c-e91e-41c0-a443-1e0437fc129f.png)
> So the correct password of `carlos` is mom.  

Try to login to `carlos`:  

![image](https://user-images.githubusercontent.com/44528004/131204187-1c80a41a-5224-43f9-83db-a4c463e91113.png)  

![image](https://user-images.githubusercontent.com/44528004/131204191-eaf78e83-5cdd-4f2e-9e9e-d619ef406a68.png)
> Solved!


