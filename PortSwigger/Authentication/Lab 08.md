# Lab: 2FA broken logic
## Task
This lab's two-factor authentication is vulnerable due to its flawed logic. To solve the lab, access Carlos's account page.

Your credentials: `wiener`:`peter`  
Victim's username: `carlos`  
You also have access to the email server to receive your 2FA verification code.

## Solution
First, we log in with our credential. Then we are redirected to the second stage at `/login2`:  

![image](https://user-images.githubusercontent.com/44528004/130578911-210efd87-5cc0-43ce-ae1d-53151db2fec5.png)

Here, we can see that there is a cookie named `verify` whose value is our username `wiener`.  

Open our email client and enter the security code:  

![image](https://user-images.githubusercontent.com/44528004/130579218-b8bfaa07-a896-4522-9bd0-e9fabaf2a134.png)  

![image](https://user-images.githubusercontent.com/44528004/130579129-bfd98dba-8ccd-45ec-9c73-505a396e790d.png)  

Logged in successfully.  

![image](https://user-images.githubusercontent.com/44528004/130579307-80a6cd74-a8f3-48b2-8358-35eaffb72dee.png)

Above is a normal login procedure. However, this application has a vulnerability that it doesn't check whether the same user performs both stages or not.
For this reason, we can use our credential to pass the first stage, and then modify the `verify` cookie to `carlos` and brute-force the 4-digit security code of this user.

First, login with our credential:  

![image](https://user-images.githubusercontent.com/44528004/130579665-b2a1c7c8-2414-4287-8a30-98ec53642fbe.png)

Second, modify the `verify` cookie value and start brute-forcing the `mfa-code`:  

![image](https://user-images.githubusercontent.com/44528004/130579806-5047c54a-3087-446c-b55d-82b0c5f1f0c4.png)  

On the **Payloads** tab, setup the payload options as follows and start attack:  

![image](https://user-images.githubusercontent.com/44528004/130580275-5e29ebb8-df4c-414e-b688-6345154bca23.png)

