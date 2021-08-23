# Lab: File path traversal, simple case
## Task
This lab contains a file path traversal vulnerability in the display of product images.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
When loading the home page, the browser needs images of times; therefore, it sends requests to get images. One of them is:  

![image](https://user-images.githubusercontent.com/44528004/130411364-d373d4ad-1140-47b8-8e3f-1058e0276972.png)  

Here, as there is a vulnerability in the display of product images, we can tamper with the `filename` parameter to read the `/etc/passwd` file:  

![image](https://user-images.githubusercontent.com/44528004/130411538-fd9718b1-424c-43b7-8095-99535a6a1f8d.png)

![image](https://user-images.githubusercontent.com/44528004/130411555-cc6ecc8e-92dc-4a1e-9293-2c2172463b2e.png)
> Solved!
