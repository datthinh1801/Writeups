# Lab: SQL injection UNION attack, finding a column containing text
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response, so you can use a UNION attack to retrieve data from other tables. To construct such an attack, you first need to determine the number of columns returned by the query. You can do this using a technique you learned in a [previous lab](https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2003.md). The next step is to identify a column that is compatible with string data.

The lab will provide a random value that you need to make appear within the query results. To solve the lab, perform an SQL injection UNION attack that returns an additional row containing the value provided. This technique helps you determine which columns are compatible with string data.

## Solution
As stated in the task statement, we need to find the number of columns returned in the response and find a string-compatible column to inject the given string.  

### Know the string to inject
The given string is: `fPzEe9`  
![image](https://user-images.githubusercontent.com/44528004/130059606-97ed7120-652b-4c0b-91a8-fa77c5f2beff.png)  

### Figure out the number columns  
I started with `ORDER BY 3--`:  
![image](https://user-images.githubusercontent.com/44528004/130059918-250df366-771a-477b-bfea-c2b2a68d307f.png)  
> No error.  

`ORDER BY 4--`:  
![image](https://user-images.githubusercontent.com/44528004/130059929-92d48e5f-6962-45f5-8f35-675085784fdf.png)  
> Internal Server Error!  

So the number of columns is **3**.  

### Find a string-compatible column
Test the first column:  
![image](https://user-images.githubusercontent.com/44528004/130060191-177da1c2-1ec8-4523-a43d-2fc9a02027d2.png)  
> Internal Server Error => The first column is not compatible with type string.  

Test the second column:  
![image](https://user-images.githubusercontent.com/44528004/130060310-2269db1d-e502-4e00-a212-a74cd3823d53.png)  
> No error => This columns is string-compatible.  

### Inject the random string
![image](https://user-images.githubusercontent.com/44528004/130060375-3eaf4a0b-3d59-49d0-8428-f8ed0eb530ed.png)


![image](https://user-images.githubusercontent.com/44528004/130060397-2bbd6928-68fb-494f-9616-5ef9d054d552.png)  
> Solved!

