"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2613],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=o,f=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8316:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c=void 0,p={unversionedId:"OverTheWire/Bandit/Level14-Leve15",id:"OverTheWire/Bandit/Level14-Leve15",isDocsHomePage:!1,title:"Level14-Leve15",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level14-Leve15.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level14-Leve15",permalink:"/Writeups/docs/OverTheWire/Bandit/Level14-Leve15",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level14-Leve15.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level13-Level14",permalink:"/Writeups/docs/OverTheWire/Bandit/Level13-Level14"},next:{title:"Level15-Level16",permalink:"/Writeups/docs/OverTheWire/Bandit/Level15-Level16"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"The password for the next level can be retrieved by submitting the password of the current level to ",(0,i.kt)("inlineCode",{parentName:"p"},"port 30000")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"In this level, I tried ",(0,i.kt)("inlineCode",{parentName:"p"},"nc")," but nothing happens."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bandit14@bandit:~$ nc localhost -p 30000\nno port[s] to connect to\n")),(0,i.kt)("p",null,"So I tried ",(0,i.kt)("inlineCode",{parentName:"p"},"telnet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"bandit14@bandit:~$ telnet localhost 30000\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n")),(0,i.kt)("p",null,"Got a connection. So let's enter the current password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e\nCorrect!\nBfMYroe26WYalil77FoDi9qh59eK5xNr\n\nConnection closed by foreign host.\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"BfMYroe26WYalil77FoDi9qh59eK5xNr"))))}d.isMDXComponent=!0}}]);