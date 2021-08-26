# Finding the scoreboard (⭐)
## Task
Find the carefully hidden 'Score Board' page.

## Solution
Open **DevTools** and view the `main-es2018.js` file.  
First, I searched for `scoreboard` and looked through all matches but there are no path. Then, I searched for `score-board` and found this:  

![image](https://user-images.githubusercontent.com/44528004/130930745-3737f705-6606-4a73-94d6-301c879de77f.png)  

Here, I found there is a `score-board` value for a `path` property so I tested and voila:  

![image](https://user-images.githubusercontent.com/44528004/130931072-d417a398-af42-46ad-84a6-ae271401592d.png)
