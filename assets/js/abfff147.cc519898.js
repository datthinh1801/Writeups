"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8715],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),g=r,b=c["".concat(d,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(b,l(l({ref:e},m),{},{components:n})):a.createElement(b,l({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6729:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d="SQL Injection",p={unversionedId:"PortSwigger/SQL Injection/README",id:"PortSwigger/SQL Injection/README",isDocsHomePage:!1,title:"SQL Injection",description:"Cheatsheet.",source:"@site/docs/PortSwigger/SQL Injection/README.md",sourceDirName:"PortSwigger/SQL Injection",slug:"/PortSwigger/SQL Injection/README",permalink:"/Writeups/docs/PortSwigger/SQL Injection/README",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/SQL Injection/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: Blind SQL injection with out-of-band data exfiltration",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 16"},next:{title:"phpfuck",permalink:"/Writeups/docs/UIUCTF 2021/Jail/phpfuck"}},m=[{value:"Labs",id:"labs",children:[]}],u={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sql-injection"},"SQL Injection"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://portswigger.net/web-security/sql-injection/cheat-sheet"},"Cheatsheet"),"."),(0,i.kt)("h2",{id:"labs"},"Labs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"No."),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2001.md"},"SQL injection vulnerability in WHERE clause allowing retrieval of hidden data")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2002.md"},"SQL injection vulnerability allowing login bypass")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2003.md"},"SQL injection UNION attack, determining the number of columns returned by the query")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2004.md"},"SQL injection UNION attack, finding a column containing text")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2005.md"},"SQL injection UNION attack, retrieving data from other tables")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2006.md"},"SQL injection UNION attack, retrieving multiple values in a single column")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2007.md"},"SQL injection attack, querying the database type and version on Oracle")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2008.md"},"SQL injection attack, querying the database type and version on MySQL and Microsoft")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2009.md"},"SQL injection attack, listing the database contents on non-Oracle databases")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2010.md"},"SQL injection attack, listing the database contents on Oracle")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"11"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2011.md"},"Blind SQL injection with conditional responses")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"12"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2012.md"},"Blind SQL injection with conditional errors")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"13"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2013.md"},"Blind SQL injection with time delays")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"14"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2014.md"},"Blind SQL injection with time delays and information retrieval")),(0,i.kt)("td",{parentName:"tr",align:null},"Solved")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"15"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2015.md"},"Blind SQL injection with out-of-band interaction")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/datthinh1801/Writeups/blob/main/PortSwigger/SQL%20Injection/Lab%2016.md"},"Blind SQL injection with out-of-band data exfiltration")),(0,i.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);