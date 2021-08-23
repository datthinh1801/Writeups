# Lab: File path traversal, traversal sequences blocked with absolute path bypass
## Task
This lab contains a file path traversal vulnerability in the display of product images.

The application blocks traversal sequences but treats the supplied filename as being relative to a default working directory.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
Here, when we perform the same attack as in the previous lab with `../../../etc/passwd`, we'll get this response:  

![image](https://user-images.githubusercontent.com/44528004/130412123-3f3cb4e9-8111-4c47-91e0-297c8ffae86d.png)  

Here, as the application blocks traversal sequences, I guess it blocks `..`. Thus, our `filename` will become `///etc/passwd` which is obivously invalid.

Initially, I think that because the `filename` is relative to the default working directory, it could be appended to that path.
However, when we use the absolute path `/etc/passwd`, it works:  

![image](https://user-images.githubusercontent.com/44528004/130412436-dd6cd084-843f-4fe5-af8f-e15c7e83a296.png)
> Solved!
