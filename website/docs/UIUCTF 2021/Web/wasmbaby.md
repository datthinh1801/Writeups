# wasmbaby
## Task
```
wasm's a cool new technology! http://wasmbaby.chal.uiuc.tf
author: ian5v
```

## Solution
Visit the web page.  

![image](https://user-images.githubusercontent.com/44528004/127735135-2f5626b7-7988-43a1-8692-56153bbbce57.png)  

Open DevTool and go to the Debugger tab. Here, we can find the WebAssembly file.  

![image](https://user-images.githubusercontent.com/44528004/127735162-13d532e8-4da4-4f8f-9cac-4b3c65484e65.png)  

However, as I encountered an error while loading this file so I downloaded it. Then I use `strings` command and `grep` for `ctf` keyword.  
```
└─$ strings index.wasm | grep ctf                                                    
uiuctf{welcome_to_wasm_e3c3bdd1}
```
