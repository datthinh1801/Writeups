"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5566],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1576:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},c="Lab: Information disclosure in error messages",u={unversionedId:"PortSwigger/Information Disclosure/Lab 01",id:"PortSwigger/Information Disclosure/Lab 01",isDocsHomePage:!1,title:"Lab: Information disclosure in error messages",description:"Task",source:"@site/docs/PortSwigger/Information Disclosure/Lab 01.md",sourceDirName:"PortSwigger/Information Disclosure",slug:"/PortSwigger/Information Disclosure/Lab 01",permalink:"/Writeups/docs/PortSwigger/Information Disclosure/Lab 01",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/Information Disclosure/Lab 01.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cheatsheet",permalink:"/Writeups/docs/PortSwigger/Information Disclosure/Cheatsheet"},next:{title:"README",permalink:"/Writeups/docs/PortSwigger/Information Disclosure/README"}},l=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-information-disclosure-in-error-messages"},"Lab: Information disclosure in error messages"),(0,i.kt)("h2",{id:"task"},"Task"),(0,i.kt)("p",null,"This lab's verbose error messages reveal that it is using a vulnerable version of a third-party framework. To solve the lab, obtain and submit the version number of this framework."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"When click ",(0,i.kt)("strong",{parentName:"p"},"View details")," of a product, there will be a GET request with a ",(0,i.kt)("inlineCode",{parentName:"p"},"productId")," parameter:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130926161-0dd55b71-ac4d-47ed-bb44-cee960409086.png",alt:"image"}),"  "),(0,i.kt)("p",null,"Here, we can guess that the application expect the ",(0,i.kt)("inlineCode",{parentName:"p"},"productId")," to be an integer, so what will happen if we provide a string here?  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130926287-ec0147f6-2605-42a1-a90e-69115a11890d.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Error messages are returned as well as the version of the web back-end technology.  ")),(0,i.kt)("p",null,"Submit the version:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130926388-16b3ccfa-e82e-44b5-a8bd-171008e6719e.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130926407-26d385fd-4e24-4ace-918b-04e2735810a2.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Solved!")))}m.isMDXComponent=!0}}]);