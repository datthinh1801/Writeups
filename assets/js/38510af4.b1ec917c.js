"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[216],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9257:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},l="Lab: File path traversal, traversal sequences stripped non-recursively",p={unversionedId:"PortSwigger/Directory Traversal/Lab 03",id:"PortSwigger/Directory Traversal/Lab 03",isDocsHomePage:!1,title:"Lab: File path traversal, traversal sequences stripped non-recursively",description:"Task",source:"@site/docs/PortSwigger/Directory Traversal/Lab 03.md",sourceDirName:"PortSwigger/Directory Traversal",slug:"/PortSwigger/Directory Traversal/Lab 03",permalink:"/Writeups/docs/PortSwigger/Directory Traversal/Lab 03",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/Directory Traversal/Lab 03.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: File path traversal, traversal sequences blocked with absolute path bypass",permalink:"/Writeups/docs/PortSwigger/Directory Traversal/Lab 02"},next:{title:"Lab: File path traversal, traversal sequences stripped with superfluous URL-decode",permalink:"/Writeups/docs/PortSwigger/Directory Traversal/Lab 04"}},c=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-file-path-traversal-traversal-sequences-stripped-non-recursively"},"Lab: File path traversal, traversal sequences stripped non-recursively"),(0,i.kt)("h2",{id:"task"},"Task"),(0,i.kt)("p",null,"This lab contains a file path traversal vulnerability in the display of product images."),(0,i.kt)("p",null,"The application strips path traversal sequences from the user-supplied filename before using it."),(0,i.kt)("p",null,"To solve the lab, retrieve the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/passwd")," file."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"From the theory post:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You might be able to use nested traversal sequences, such as ....// or ....\\/, which will revert to simple traversal sequences when the inner sequence is stripped.  ")),(0,i.kt)("p",null,"I know that if I replace ",(0,i.kt)("inlineCode",{parentName:"p"},"../")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"....//"),", it will work (and indeed it does).  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130413782-211a7f5d-2d1f-49cc-9bfc-6871ddfd7240.png",alt:"image"})),(0,i.kt)("p",null,"However, what the heck the application is stripping ?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I guess it strips every ",(0,i.kt)("inlineCode",{parentName:"p"},"../")," it finds from left to right. This means, first it ignores the ",(0,i.kt)("inlineCode",{parentName:"p"},".."),", then it encounters ",(0,i.kt)("inlineCode",{parentName:"p"},"../")," which will be removed. At this time, the ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," becomes ",(0,i.kt)("inlineCode",{parentName:"p"},"../....//....//etc/passwd"),". That procedure repeats until all ",(0,i.kt)("inlineCode",{parentName:"p"},"../")," are stripped (in the perspective of the application itself), which finally results in ",(0,i.kt)("inlineCode",{parentName:"p"},"../../../etc/passwd"),".")))}d.isMDXComponent=!0}}]);