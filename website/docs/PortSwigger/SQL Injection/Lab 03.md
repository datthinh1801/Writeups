# Lab: SQL injection UNION attack, determining the number of columns returned by the query
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response, so you can use a UNION attack to retrieve data from other tables. The first step of such an attack is to determine the number of columns that are being returned by the query. You will then use this technique in subsequent labs to construct the full attack.

To solve the lab, determine the number of columns returned by the query by performing an SQL injection UNION attack that returns an additional row containing null values.

## Solution
The original GET request is:
```
GET /filter?category=Pets HTTP/1.1
```

To determine the number of columns returned by the query, we can use the `ORDER BY` clause or `UNION SELECT NULL, ...`. In this lab, I'll use `ORDER BY` clause to determine the number of columns.

First, modify the query with `ORDER BY 1` which means ordering the result according to the first column.  
![image](https://user-images.githubusercontent.com/44528004/130057408-08bd9c7c-06a1-4193-8d61-f4a2032bbfd9.png)  
> No error emerges.  

Try `ORDER BY 2`:  
![image](https://user-images.githubusercontent.com/44528004/130057476-d55808de-6d17-4504-a8c8-d406c819d467.png)  
> No error. 

Try `ORDER BY 3`:  
![image](https://user-images.githubusercontent.com/44528004/130057603-95889e14-b210-4b45-b18f-8a30830d5722.png)  
> Still no error.

Try `ORDER BY 4`:  
![image](https://user-images.githubusercontent.com/44528004/130057654-166003b9-08a7-4c7c-a595-4dc5f12c67f5.png)  
> This time, an error has occurred! This means there are 3 columns returned.

The task requires us to perform an UNION attack that returns an additional row containing null values, so the query is:  
![image](https://user-images.githubusercontent.com/44528004/130058011-38f0adf3-29ae-4102-93a3-387b65fb9c0b.png)  

![image](https://user-images.githubusercontent.com/44528004/130058118-70ab22f7-9459-45c9-9724-70744b12e536.png)  
> Solved!
