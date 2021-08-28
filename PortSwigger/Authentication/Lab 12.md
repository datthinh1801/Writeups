# Lab: Password reset broken logic
## Task
This lab's password reset functionality is vulnerable. To solve the lab, reset Carlos's password then log in and access his "My account" page.

Your credentials: `wiener`:`peter`  
Victim's username: `carlos`

## Solution
In this application, if we click the `Forgot password?` option, we'll be asked to enter our email to get a **reset password link**.  

![image](https://user-images.githubusercontent.com/44528004/131203208-5ef1fe9f-8606-44a8-9974-69cc318ca1d9.png)  

After that, we'll receive an email with a link to redirect us to the reset password page:  

![image](https://user-images.githubusercontent.com/44528004/131203226-495c90df-3944-4151-bd4f-705780e29bf2.png)  

Click the link and enter a new password.  

![image](https://user-images.githubusercontent.com/44528004/131203238-102b40b3-ff2b-4acb-b1f7-11245f49b126.png)  

Here, when I click the **Submit** button, this POST request is sent:  

![image](https://user-images.githubusercontent.com/44528004/131203257-802d4494-ce36-499d-9551-c3dca8ca2333.png)  

On the theory page, we are mentioned that:
> However, some websites fail to also validate the token again when the reset form is submitted. In this case, an attacker could simply visit the reset form from their own account, delete the token, and leverage this page to reset an arbitrary user's password.  

So let's try to remove the `temp-forgot-password-token` and change the `username` to `carlos`.  

![image](https://user-images.githubusercontent.com/44528004/131203330-9041e854-4ab8-40e0-b6f0-1787ba6beb3f.png)
> This is not what we expected.  

So, let's try another way: Keep the token but change the `username` parameter to `carlos`:  

![image](https://user-images.githubusercontent.com/44528004/131203377-71a05cf4-77d5-4cf8-b4e3-d43236770139.png)  

And `302 Found`!  

![image](https://user-images.githubusercontent.com/44528004/131203384-df4e3bb7-2c36-4328-b350-684e45b95abf.png)

Now, let's login as `carlos` with our new password.  

![image](https://user-images.githubusercontent.com/44528004/131203397-c27af4d6-7292-4217-a2c7-b7e1637ff261.png)  

![image](https://user-images.githubusercontent.com/44528004/131203402-18064c42-8bf9-43ad-a432-a92c3671c405.png)
> Solved!
