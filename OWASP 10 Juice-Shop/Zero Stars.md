#
## Task
Give a devastating zero-star feedback to the store.

## Solution
On the feedback page, I entered required information in the fields and specify whatever the star. Then, I intercepted the POST request in Burp Suite and modify the value for the `rating` property to `0`.  

![image](https://user-images.githubusercontent.com/44528004/130933798-a3a749ec-10d2-4e7c-81a7-7a8b32f78470.png)  

And then, solved!  

![image](https://user-images.githubusercontent.com/44528004/130934413-ced8ed74-7858-40ad-acd8-b7e323b9ef66.png)

