# Task
![image](https://user-images.githubusercontent.com/44528004/132695985-bdd36389-247f-4795-b05e-527c431abfea.png)

# Solution
The source of code of this challenge is:
```php
<?php
ini_set('display_errors', 'on');

class LevelTwo {
    public function doQuery($injection) {
        $pdo = new SQLite3('leveltwo.db', SQLITE3_OPEN_READONLY);

        $searchWords = implode (['union', 'order', 'select', 'from', 'group', 'by'], '|');
        $injection = preg_replace ('/' . $searchWords . '/i', '', $injection);

        $query = 'SELECT id,username FROM users WHERE id=' . $injection . ' LIMIT 1';
        $getUsers = $pdo->query ($query);
        $users = $getUsers->fetchArray (SQLITE3_ASSOC);

        if ($users) {
            return $users;
        }

        return false;
    }
}

if (isset ($_POST['submit']) && isset ($_POST['user_id'])) {
    $lt = new LevelTwo ();
    $userDetails = $lt->doQuery ($_POST['user_id']);
}
?>
```

Here, the `implode()` function joins words from the array with a `|` as the separator. Next, the `preg_replace()` performs **find and replace** operation.
> The `/` and `/i` that wrap around the `$searchWords` is the syntax to declare a regular expression pattern. 

From these information, this application removes filtered words, namely `union`, `order`, `select`, `from`, `group`, `by`.
> Or we can see this on the challenge description.
