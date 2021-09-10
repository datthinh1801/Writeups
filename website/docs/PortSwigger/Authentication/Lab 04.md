# Lab: Broken brute-force protection, IP block
## Task
This lab is vulnerable due to a logic flaw in its password brute-force protection. To solve the lab, brute-force the victim's password, then log in and access their account page.

Your credentials: `wiener:peter`  
Victim's username: `carlos`  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)

## Solution
In this lab, multiple failed login attempts will make our IP blocked; however, a successful login will reset that behavior. For that reason, to brute-force the `carlos`'s password, we just need to intervene the brute-force with our credential to reset any block imposed.  

`username` list:  
```
carlos
wiener
carlos
wiener
...
```

`password` list:
```
123456
peter
password
peter
...
```

When brute-forcing with Burp Suite Pro, filter the response for `carlos` with `status code == 302`.  

![image](https://user-images.githubusercontent.com/44528004/130308858-fae135fa-cb8f-4eda-bc63-1108398e95ab.png)

Login:  

![image](https://user-images.githubusercontent.com/44528004/130308888-77dbd4be-ed83-448f-96ae-594d2c0762e1.png)

![image](https://user-images.githubusercontent.com/44528004/130308895-03ba5e75-aa8c-427b-8787-6de0976507ab.png)
> Solved!
