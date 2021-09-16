# Level 25
## Description
Challenge URL: http://websec.fr/level25/index.php?page=main  

You can *include any page so long as it is ~~black~~ not the `flag.txt` one*. As usual, the source code is [free](http://websec.fr/level25/source.php).

## Solution
The source code is:
```php
<?php
if (!isset($_GET['page'])) {
  header('Location: http://websec.fr/level25/index.php?page=main');
  die();
}
?>

// ...

<?php
parse_str(parse_url($_SERVER['REQUEST_URI'])['query'], $query);
foreach ($query as $k => $v) {
  if (stripos($v, 'flag') !== false)
    die('You are not allowed to get the flag, sorry :/');
  }

include $_GET['page'] . '.txt';
?>
```

After working around, I found [this](https://bugs.php.net/bug.php?id=79522) says that the `parse_url` function has a bug when the path in the URL absolute and has multiple `/`.  

For proof on concept, I tried:
```
http://websec.fr/level25//index.php?page=flag
http://websec.fr/level25///index.php?page=flag
http://websec.fr/level25////index.php?page=flag
...
```

And all failed. That means:
- `websec.fr` is the hostname
- `/level25/index.php` is the `path` which is parsed by `parse_url`
- `/level25///////index.php`, regardless the number of `/`, is still the path to the same `/level25/index.php` since the `//////` is now a ***relative*** path
- However, `parse_url()` fails when the `path` is `///level25/index.php` which is now an ***absolute*** path. As stated in the bug report [above](https://bugs.php.net/bug.php?id=79522), `parse_url()` fails to parse absolute path with multiple `/` correctly.

From these information, our worked URL could be:
```
http://websec.fr///level25/index.php?page=flag
```
> Flag: `WEBSEC{How_am_I_supposed_to_parse_uri_when_everything_is_so_broooken}`
