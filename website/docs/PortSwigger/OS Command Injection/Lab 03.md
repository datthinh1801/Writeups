# Lab: Blind OS command injection with output redirection
## Task
This lab contains a blind OS command injection vulnerability in the feedback function.

The application executes a shell command containing the user-supplied details. The output from the command is not returned in the response. However, you can use output redirection to capture the output from the command. There is a writable folder at:

`/var/www/images/`

The application serves the images for the product catalog from this location. You can redirect the output from the injected command to a file in this folder, and then use the image loading URL to retrieve the contents of the file.

To solve the lab, execute the `whoami` command and retrieve the output.

## Solution
Firstly, we know that we have a writable folder `/var/www/images/` which stores images for the application.
For that reason, we will find a way to execute the `whoami` command and store the result in a file within that writable folder.
```
name=hacker&email=hacker%40hacker.com&subject=hacked&message=hacked`whoami > /var/www/images/whoami.txt`
```

![image](https://user-images.githubusercontent.com/44528004/130430258-75223ba0-83e6-40cf-b5df-f11a126954be.png)  

Next, we can leverage the [**directory traversal**](https://github.com/datthinh1801/Writeups/tree/main/PortSwigger/Directory%20Traversal) vulnerability of this application to read that file:  

![image](https://user-images.githubusercontent.com/44528004/130430405-d7b0a0a8-d7bd-4872-b90a-eb82acd5f8fb.png)
> Solved!

