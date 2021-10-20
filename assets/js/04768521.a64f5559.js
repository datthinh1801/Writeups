"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9923],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8268:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},u="Finding the scoreboard (\u2b50)",p={unversionedId:"OWASP 10 Juice-Shop/Finding the scoreboard",id:"OWASP 10 Juice-Shop/Finding the scoreboard",isDocsHomePage:!1,title:"Finding the scoreboard (\u2b50)",description:"Task",source:"@site/docs/OWASP 10 Juice-Shop/Finding the scoreboard.md",sourceDirName:"OWASP 10 Juice-Shop",slug:"/OWASP 10 Juice-Shop/Finding the scoreboard",permalink:"/Writeups/docs/OWASP 10 Juice-Shop/Finding the scoreboard",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OWASP 10 Juice-Shop/Finding the scoreboard.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab 2",permalink:"/Writeups/docs/Network Security Lab/Lab 2"},next:{title:"Privacy Policy",permalink:"/Writeups/docs/OWASP 10 Juice-Shop/Privacy Policy"}},s=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],l={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"finding-the-scoreboard-"},"Finding the scoreboard (\u2b50)"),(0,i.kt)("h2",{id:"task"},"Task"),(0,i.kt)("p",null,"Find the carefully hidden 'Score Board' page."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"DevTools")," and view the ",(0,i.kt)("inlineCode",{parentName:"p"},"main-es2018.js")," file.",(0,i.kt)("br",{parentName:"p"}),"\n","First, I searched for ",(0,i.kt)("inlineCode",{parentName:"p"},"scoreboard")," and looked through all matches but there are no path. Then, I searched for ",(0,i.kt)("inlineCode",{parentName:"p"},"score-board")," and found this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130930745-3737f705-6606-4a73-94d6-301c879de77f.png",alt:"image"}),"  "),(0,i.kt)("p",null,"Here, I found there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"score-board")," value for a ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," property so I tested and voila:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130931072-d417a398-af42-46ad-84a6-ae271401592d.png",alt:"image"})))}d.isMDXComponent=!0}}]);