# Lab: 2FA simple bypass
## Task
This lab's two-factor authentication can be bypassed. You have already obtained a valid username and password, but do not have access to the user's 2FA verification code. To solve the lab, access Carlos's account page.

Your credentials: `wiener`:`peter`  
Victim's credentials `carlos`:`montoya`

## Solution
The vulnerability in this lab is that the application implements 2FA; however, after the first stage (where users provide their username and password), they are redicted to the second stage to enter their verification code and in this stage, they are already **logged in**.  

To solve this lab, we use `carlos`'s credential to log in. As I mentioned, in the second stage, instead of visiting `/login2`, we send a request directly to `/` and then visit `My account`.  

Boom! We're already logged in as `carlos` without his verification code.  

![image](https://user-images.githubusercontent.com/44528004/130578027-4964043a-0153-4ed8-8f52-cee4d45c511b.png)
> Solved!
