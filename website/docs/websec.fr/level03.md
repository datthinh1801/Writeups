# Level 3
## Description
Since php types are ~~idiotic~~[sloppy](https://secure.php.net/manual/en/language.operators.comparison.php), it's safer to hash the raw variables first, with [sha1](https://en.wikipedia.org/wiki/SHA-1) (that does accept arrays and other weird things), then to hash the result with password_hash to avoid funny stuff.
To compare them, we're using password_verify, since its [implementation](https://git.php.net/?p=php-src.git;a=blob;f=ext/standard/password.c;h=2a5cec3e93b33387ad3c478108647d2ccacf68a4;hb=HEAD) is foolproof.
[Check by yourself](https://websec.fr/level03/source.php) what's going on if you don't believe me. 

## Solution
