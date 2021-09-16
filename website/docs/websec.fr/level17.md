# Level 17
## Description
Challege URL: https://websec.fr/level17/index.php  

Can you guess the flag? You can check the sources [here](https://websec.fr/level17/source.php).  

## Solution
The interesting code block in the source is this one:
```php
 <?php
if (! strcasecmp ($_POST['flag'], $flag))
    echo '<div class="alert alert-success">Here is your flag: <mark>' . $flag . '</mark>.</div>';   
else
    echo '<div class="alert alert-danger">Invalid flag, sorry.</div>';
?>
```
There are 2 things that I need to mention here:
1. `$_POST['flag']` gets the value of the `flag` parameter from the POST request.
2. If I pass a string to the `flag` parameter, `$_POST['flag']` is a literal string.

From (2), if `flag=$flag`, `$_POST['flag']='$flag'` which is a literal string rather than a variable string.

If `flag` is of a data type that is **string-incompatible**, in other words it can't be converted implicitly to a string, `strcasecmp()` returns `NULL`. With this information, I just need to change the parameter from `flag=$flag` to `flag[]='something'`.
> In PHP, `$var[] = 1` will append `1` to the array `$var` if it already exists; otherwise, an array `[1]` will be initialized and assigned to `$var`.

As a result, `!strcasecmp($_POST['flag'], $flag)` returns `true` and we got the flag.
> Flag: `WEBSEC{It_seems_that_php_could_use_a_stricter_typing_system}`
