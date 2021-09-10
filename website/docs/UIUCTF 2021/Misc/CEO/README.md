# CEO
## Task
```
You just wirelessly captured the handshake of the CEO of a multi-million dollar company!
Use your password cracking skills to get the password! Wrap the password in the flag format.
E.g: uiuctf{password}

author: Rohans885
```
Attachment: [megacorp-01.cap](https://github.com/datthinh1801/CTF-Writeups/blob/main/UIUCTF%202021/Misc/CEO/megacorp-01.cap)

## Solution
From the instruction and the downloadable `.cap` file, I can guess that I need to crack the password from this file.  

When apllying the filter `eapol` in Wireshark, I can see some packets containing the exchanging key.  

![image](https://user-images.githubusercontent.com/44528004/127735351-d7e58d99-7233-4a1d-8b7f-b1bd968b9a20.png)  

> Also, here is the 4-way handshake of WPA1.  

To crack the password, I use `aircrack-ng` as follows:
```
# sudo aircrack-ng <.cap file> -w <wordlist>
sudo aircrack-ng megacorp-01.cap -w /usr/share/seclists/Passwords/bt4-password.txt
```  

The reason why I chose the `bt4-password.txt` is of randomness 🤣. As I tried some of them and this one worked.  

![image](https://user-images.githubusercontent.com/44528004/127735466-11448f92-30c2-46b5-887c-af4c3c47e4f6.png)  

Flag: `uiuctf{nanotechnology}`
