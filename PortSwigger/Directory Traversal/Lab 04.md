# Lab: File path traversal, traversal sequences stripped with superfluous URL-decode
## Task
This lab contains a file path traversal vulnerability in the display of product images.

The application blocks input containing path traversal sequences. It then performs a URL-decode of the input before using it.

To solve the lab, retrieve the contents of the `/etc/passwd` file.

## Solution
In this lab, the application blocks traversal sequences like `../`; furthermore, it performs a URL-decode before using the `filename`.
For this reason, we need to URL-encode the `../` in to `..%252f`.
> The proof is that URL-decoding `%25` results in `%`. Thus, `%252f` becomes `%2f` which is URL-decoded into `/`.  

With this encoding, our payload is:  

![image](https://user-images.githubusercontent.com/44528004/130416615-c5df2eb8-51dd-4505-bf8b-df739e00bb7b.png)
> Solved!
