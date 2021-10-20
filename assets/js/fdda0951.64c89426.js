"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7977],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),v=o,f=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4719:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={},c=void 0,p={unversionedId:"OverTheWire/Bandit/Level7-Level8",id:"OverTheWire/Bandit/Level7-Level8",isDocsHomePage:!1,title:"Level7-Level8",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level7-Level8.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level7-Level8",permalink:"/Writeups/docs/OverTheWire/Bandit/Level7-Level8",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level7-Level8.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level6-Level7",permalink:"/Writeups/docs/OverTheWire/Bandit/Level6-Level7"},next:{title:"Level8-Level9",permalink:"/Writeups/docs/OverTheWire/Bandit/Level8-Level9"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"The password for the next level is stored in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"data.txt")," next to the word ",(0,i.kt)("strong",{parentName:"p"},"millionth"),"."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"The password is next to the word ",(0,i.kt)("strong",{parentName:"p"},"millionth"),", which means they are of the same line. Therefore, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"grep")," command to find the word ",(0,i.kt)("strong",{parentName:"p"},"millionth"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bandit7@bandit:~$ grep millionth ./data.txt \nmillionth       cvX2JJa4CFALtqS87jk27qwqGhBM9plV\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"cvX2JJa4CFALtqS87jk27qwqGhBM9plV"))))}d.isMDXComponent=!0}}]);