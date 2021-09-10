# Lab: File path traversal, traversal sequences stripped non-recursively
## Task
This lab contains a file path traversal vulnerability in the display of product images.

The application strips path traversal sequences from the user-supplied filename before using it.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
From the theory post:
> You might be able to use nested traversal sequences, such as ....// or ....\/, which will revert to simple traversal sequences when the inner sequence is stripped.  

I know that if I replace `../` with `....//`, it will work (and indeed it does).  

![image](https://user-images.githubusercontent.com/44528004/130413782-211a7f5d-2d1f-49cc-9bfc-6871ddfd7240.png)

However, what the heck the application is stripping ?
> I guess it strips every `../` it finds from left to right. This means, first it ignores the `..`, then it encounters `../` which will be removed. At this time, the `filename` becomes `../....//....//etc/passwd`. That procedure repeats until all `../` are stripped (in the perspective of the application itself), which finally results in `../../../etc/passwd`.
