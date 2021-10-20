"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7351],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=o,f=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9760:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c=void 0,u={unversionedId:"OverTheWire/Bandit/Level8-Level9",id:"OverTheWire/Bandit/Level8-Level9",isDocsHomePage:!1,title:"Level8-Level9",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level8-Level9.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level8-Level9",permalink:"/Writeups/docs/OverTheWire/Bandit/Level8-Level9",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level8-Level9.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level7-Level8",permalink:"/Writeups/docs/OverTheWire/Bandit/Level7-Level8"},next:{title:"Level9-Level10",permalink:"/Writeups/docs/OverTheWire/Bandit/Level9-Level10"}},p=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"The password for the next level is stored in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"data.txt")," and is the only line of text that occurs only once."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"As the password is the text that occurs only once, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," command. This command groups ",(0,i.kt)("strong",{parentName:"p"},"adjacent")," matching lines into a single group, in other words, it removes ",(0,i.kt)("strong",{parentName:"p"},"adjacent duplicate")," lines.  "),(0,i.kt)("p",null,"To get the password, we first need to sort the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"data.txt")," to make matching lines ",(0,i.kt)("strong",{parentName:"p"},"adjacent"),", then we issue ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq -u")," to print the unique line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bandit8@bandit:~$ cat ./data.txt | sort | uniq -u\nUsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"UsvVyFSfZZWbi6wgC7dAFyFuR6jQQUhR"))))}d.isMDXComponent=!0}}]);