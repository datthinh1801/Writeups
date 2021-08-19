# Lab: SQL injection attack, querying the database type and version on Oracle
## Task
This lab contains an SQL injection vulnerability in the product category filter. You can use a UNION attack to retrieve the results from an injected query.

To solve the lab, display the database version string.

## Solution
When figuring out the number of columns returned in the response, an error occurred when I queried `ORDER BY 3`. This means there are 2 columns returned.  

![image](https://user-images.githubusercontent.com/44528004/130065271-10e8f5cb-2d33-4107-b3e0-04df185f11ab.png)

In Oracle Sql, in order to `SELECT NULL`, we must specify the table `dual`; otherwise, an error is returned:
```sql
SELECT NULL FROM dual
```

Then, I figured out that the first column is string-compatible, so the information can be retrieved an put on this column.  

To get the Oracle sql version, the payload is:
```
/filter?category=Pets'+UNION+SELECT+banner,NULL+FROM+v$version--
```

![image](https://user-images.githubusercontent.com/44528004/130066310-c317251a-01cc-450d-8d17-b5ab4a6940aa.png)

> Solved!
