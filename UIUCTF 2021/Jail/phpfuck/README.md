# phpfuck
## Task
i hate php  
http://phpfuck.chal.uiuc.tf

## Solution
Visit the web page, we got this code snippet:  
```php
<?php
// Flag is inside ./flag.php :)
($x=str_replace("`","",strval($_REQUEST["x"])))&&strlen(count_chars($x,3))<=5?print(eval("return $x;")):show_source(__FILE__)&&phpinfo();
```  

Needless to evaluate the code, we see the flag file there, `./flag.php`. So let visit that file.  

![image](https://user-images.githubusercontent.com/44528004/127736762-514c4a99-b0a5-4292-8004-ef52abe5a890.png)  

No flag for me? You're kidding!!  

Let view the source of the page.  

![image](https://user-images.githubusercontent.com/44528004/127736774-d95598e0-14f1-4368-b342-27a74e092a0f.png)  

Flag: `uiuctf{pl3as3_n0_m0rE_pHpee}`
