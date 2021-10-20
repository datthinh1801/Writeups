"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1195],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(b,l(l({ref:e},u),{},{components:r})):a.createElement(b,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6175:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={},p="Directory Traversal",s={unversionedId:"PortSwigger/Directory Traversal/README",id:"PortSwigger/Directory Traversal/README",isDocsHomePage:!1,title:"Directory Traversal",description:"Labs",source:"@site/docs/PortSwigger/Directory Traversal/README.md",sourceDirName:"PortSwigger/Directory Traversal",slug:"/PortSwigger/Directory Traversal/README",permalink:"/Writeups/docs/PortSwigger/Directory Traversal/README",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/Directory Traversal/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: File path traversal, validation of file extension with null byte bypass",permalink:"/Writeups/docs/PortSwigger/Directory Traversal/Lab 06"},next:{title:"Cheatsheet",permalink:"/Writeups/docs/PortSwigger/Information Disclosure/Cheatsheet"}},u=[{value:"Labs",id:"labs",children:[]}],c={toc:u};function d(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"directory-traversal"},"Directory Traversal"),(0,i.kt)("h2",{id:"labs"},"Labs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"No."),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2001.md"},"File path traversal, simple case")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2002.md"},"File path traversal, traversal sequences blocked with absolute path bypass")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2003.md"},"File path traversal, traversal sequences stripped non-recursively")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2004.md"},"File path traversal, traversal sequences stripped with superfluous URL-decode")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2005.md"},"File path traversal, validation of start of path")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/Directory%20Traversal/Lab%2006.md"},"File path traversal, validation of file extension with null byte bypass")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")))))}d.isMDXComponent=!0}}]);