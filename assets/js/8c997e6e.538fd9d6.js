"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4463],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},643:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={},s="Lab: 2FA simple bypass",l={unversionedId:"PortSwigger/Authentication/Lab 07",id:"PortSwigger/Authentication/Lab 07",isDocsHomePage:!1,title:"Lab: 2FA simple bypass",description:"Task",source:"@site/docs/PortSwigger/Authentication/Lab 07.md",sourceDirName:"PortSwigger/Authentication",slug:"/PortSwigger/Authentication/Lab 07",permalink:"/Writeups/docs/PortSwigger/Authentication/Lab 07",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/Authentication/Lab 07.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: Broken brute-force protection, multiple credentials per request",permalink:"/Writeups/docs/PortSwigger/Authentication/Lab 06"},next:{title:"Lab: 2FA broken logic",permalink:"/Writeups/docs/PortSwigger/Authentication/Lab 08"}},u=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-2fa-simple-bypass"},"Lab: 2FA simple bypass"),(0,a.kt)("h2",{id:"task"},"Task"),(0,a.kt)("p",null,"This lab's two-factor authentication can be bypassed. You have already obtained a valid username and password, but do not have access to the user's 2FA verification code. To solve the lab, access Carlos's account page."),(0,a.kt)("p",null,"Your credentials: ",(0,a.kt)("inlineCode",{parentName:"p"},"wiener"),":",(0,a.kt)("inlineCode",{parentName:"p"},"peter"),(0,a.kt)("br",{parentName:"p"}),"\n","Victim's credentials ",(0,a.kt)("inlineCode",{parentName:"p"},"carlos"),":",(0,a.kt)("inlineCode",{parentName:"p"},"montoya")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"The vulnerability in this lab is that the application implements 2FA; however, after the first stage (where users provide their username and password), they are redicted to the second stage to enter their verification code and in this stage, they are already ",(0,a.kt)("strong",{parentName:"p"},"logged in"),".  "),(0,a.kt)("p",null,"To solve this lab, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"carlos"),"'s credential to log in. As I mentioned, in the second stage, instead of visiting ",(0,a.kt)("inlineCode",{parentName:"p"},"/login2"),", we send a request directly to ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," and then visit ",(0,a.kt)("inlineCode",{parentName:"p"},"My account"),".  "),(0,a.kt)("p",null,"Boom! We're already logged in as ",(0,a.kt)("inlineCode",{parentName:"p"},"carlos")," without his verification code.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130578027-4964043a-0153-4ed8-8f52-cee4d45c511b.png",alt:"image"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Solved!")))}d.isMDXComponent=!0}}]);