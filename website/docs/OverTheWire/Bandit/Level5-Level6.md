## Goal
The password for the next level is stored in a file somewhere under the **inhere** directory and has all of the following properties:
- human-readable
- 1033 bytes in size
- not executable

## Solution
```bash
bandit5@bandit:~/inhere$ ls -la maybehere07 | grep "1033"
-rw-r-----  1 root bandit5 1033 May  7  2020 .file2
bandit5@bandit:~/inhere$ cat maybehere07/.file2
DXjZPULLxYr17uwoI01bNLQbtFemEgo7
```
> Flag: `DXjZPULLxYr17uwoI01bNLQbtFemEgo7`
