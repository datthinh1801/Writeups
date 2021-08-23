# Lab: File path traversal, validation of file extension with null byte bypass
## Task
This lab contains a file path traversal vulnerability in the display of product images.

The application validates that the supplied filename ends with the expected file extension.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
In this lab, the application requires that the `filename` ends with `.png`. So, we can add a `null` byte to bypass this:  

![image](https://user-images.githubusercontent.com/44528004/130415312-d57a13df-d6d3-41cb-a6cf-223dc34cf53e.png)
> Solved!
