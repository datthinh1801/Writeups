# Level01
## Task
Challenge URL: https://websec.fr/level01/index.php  

![image](https://user-images.githubusercontent.com/44528004/132601995-9e60abba-e344-4271-83e8-3392e98229d1.png)
## Solution
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

