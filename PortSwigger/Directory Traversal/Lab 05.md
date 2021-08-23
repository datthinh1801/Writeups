# Lab: File path traversal, validation of start of path
## Task
This lab contains a file path traversal vulnerability in the display of product images.

The application transmits the full file path via a request parameter, and validates that the supplied path starts with the expected folder.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
In this lab, the application requires the `filename` to be absolute and start with an expected basename:  

![image](https://user-images.githubusercontent.com/44528004/130414794-f54fe434-14aa-4d50-8930-7a97951f7a73.png)

The solution is pretty straightforward:  

![image](https://user-images.githubusercontent.com/44528004/130414884-afd412ec-2948-44c6-a78a-10608c46b4f9.png)
> Solved!
