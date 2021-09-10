# Lab: Blind OS command injection with time delays
## Task
This lab contains a blind OS command injection vulnerability in the feedback function.

The application executes a shell command containing the user-supplied details. The output from the command is not returned in the response.

To solve the lab, exploit the blind OS command injection vulnerability to cause a 10 second delay.

## Solution
As stated in the **task**, the application uses user-supplied details as parameters for a shell command.
With this information, we can inject the `ping -c 10 127.0.0.1` command in any field of our details to trigger the application to delay for 10 seconds.  

![image](https://user-images.githubusercontent.com/44528004/130426221-e54b4ad1-0497-422a-bb16-a8a710e1f58a.png)
> Here, I used the backtick \` to inject the `ping` command.  
```
name=hacker&email=hacker%40hacker.com&subject=hacked&message=hacker`ping -c 10 127.0.0.1`
```

![image](https://user-images.githubusercontent.com/44528004/130426538-2ec69d27-829e-4d14-ab85-65be2802f3d3.png)
> Solved!
