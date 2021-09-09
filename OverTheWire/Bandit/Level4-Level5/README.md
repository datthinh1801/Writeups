# Goal
The password for the next level is stored in the only human-readable file in the **inhere** directory.
> **Tip:** if your terminal is messed up, try the “reset” command.

# Solution
```
bandit4@bandit:~/inhere$ file ./-file00
./-file00: data
bandit4@bandit:~/inhere$ file ./-file01
./-file01: data
bandit4@bandit:~/inhere$ file ./-file02
./-file02: data
bandit4@bandit:~/inhere$ file ./-file03
./-file03: data
bandit4@bandit:~/inhere$ file ./-file04
./-file04: data
bandit4@bandit:~/inhere$ file ./-file05
./-file05: data
bandit4@bandit:~/inhere$ file ./-file06
./-file06: data
bandit4@bandit:~/inhere$ file ./-file07
./-file07: ASCII text
```
```
bandit4@bandit:~/inhere$ vim ./-file07
```
```
koReBOKuIDDepwhWk7jZC0RTdopnAYKh
```
> Password: `koReBOKuIDDepwhWk7jZC0RTdopnAYKh`
