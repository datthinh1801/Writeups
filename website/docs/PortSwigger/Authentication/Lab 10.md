# Lab: Brute-forcing a stay-logged-in cookie
## Task
This lab allows users to stay logged in even after they close their browser session. The cookie used to provide this functionality is vulnerable to brute-forcing.

To solve the lab, brute-force Carlos's cookie to gain access to his "My account" page.

Your credentials: `wiener`:`peter`  
Victim's username: `carlos`  
[Candidate passwords](https://portswigger.net/web-security/authentication/auth-lab-passwords)

## Solution
First, I used my credential to login to explore things.

On the login page, I ticked the **Stay logged in** option, which results in the `stay-logged-in` parameter set to `on`.  

![image](https://user-images.githubusercontent.com/44528004/130935667-e1f0b5b1-c9e0-4f03-b5ca-14bc8982d6fa.png)  

In the response, I was assigned a cookie named `stay-logged-in`.  

![image](https://user-images.githubusercontent.com/44528004/130935688-178a06ef-a596-4c1a-b71b-2762fd9220d7.png)  

When I decoded this cookie in Base64, I found something interesting:  

![image](https://user-images.githubusercontent.com/44528004/130935974-e2da2be7-5661-4890-98eb-e1366b2a3092.png)
> The cookie was constructed by appending the `username`, a colon, and a random string.  

Next, after working a round, I found that the random string is a hash digest of the password:  

![image](https://user-images.githubusercontent.com/44528004/130937406-9a27bf9f-68e2-4759-b192-8f4d9444a24d.png)
> Here, the password is hashed by MD5 algorithm.  

After knowing how the cookie is constructed, I logged out of my account and started to craft an attack.  

First, I send the authenticated GET request to `/my-account` to Intruder.
Then, I modified the URL from `/my-account?id=wiener` to `/my-account?id=carlos`.  

![image](https://user-images.githubusercontent.com/44528004/130940177-24f92007-1497-406b-aea6-c7d96dafed8b.png)  

Next, I changed the `stay-logged-in` cookie with my payload as follows:  
- Assign a password from the wordlist to the `stay-logged-in` cookie.  
  
  ![image](https://user-images.githubusercontent.com/44528004/130940393-710c9012-9605-464d-89f4-a702aecada2f.png)  
  
- Add 2 preprocessing steps:
  - Add a MD5 hash processing, which will hash the potential password
  - Add `carlos:` as a prefix
  - Add a Base64 encoding processing, which will encode the whole payload  
  
  ![image](https://user-images.githubusercontent.com/44528004/130938552-846d6a5a-6b73-4029-9799-b25d9bb4d594.png)  

To filter the successful attempt, I configured Burp Suite to grep `Update email` as only when an authenticated GET request to `/my-account` is sent, that button appears on the page.  

![image](https://user-images.githubusercontent.com/44528004/130941088-0e668f59-bffc-4570-a7e7-2f2d814d9563.png)  

After the attack finished, the lab was solved as well.  

![image](https://user-images.githubusercontent.com/44528004/130941776-9eee092b-6778-4e0f-8663-14cb1738b27e.png)  

Also, in the attack log, I can found the request with the valid password:  

![image](https://user-images.githubusercontent.com/44528004/130941526-eedf8b5a-d124-48a2-af75-245b3bc880b3.png)
> In case I want to get the password, I can add another payload and use Pitchfork attack to monitor which `password` has been used.
