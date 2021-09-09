# Goal
The password for the next level is stored in a hidden file in the **inhere** directory.

# Solution
```
bandit3@bandit:~$ ls
inhere
bandit3@bandit:~$ cd inhere/
bandit3@bandit:~/inhere$ ls
bandit3@bandit:~/inhere$ ls -a
.  ..  .hidden
bandit3@bandit:~/inhere$ cat .hidden 
pIwrPrtPN36QITSp3EQaw936yaFoFgAB
```
> Flag: `pIwrPrtPN36QITSp3EQaw936yaFoFgAB`
