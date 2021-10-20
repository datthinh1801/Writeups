"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9668],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2020:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c=void 0,s={unversionedId:"OverTheWire/Bandit/Level20-Level21",id:"OverTheWire/Bandit/Level20-Level21",isDocsHomePage:!1,title:"Level20-Level21",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level20-Level21.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level20-Level21",permalink:"/Writeups/docs/OverTheWire/Bandit/Level20-Level21",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level20-Level21.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level2-Level3",permalink:"/Writeups/docs/OverTheWire/Bandit/Level2-Level3"},next:{title:"Level21-Level22",permalink:"/Writeups/docs/OverTheWire/Bandit/Level21-Level22"}},p=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). If the password is correct, it will transmit the password for the next level (bandit21)."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Login into the server, we see a file name ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/136639399-6e4e0a42-7e0c-42a5-a11e-11ff6a70ad35.png",alt:"image"}),"  "),(0,i.kt)("p",null,"As the goal tells us how the ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect")," works. So we need to run ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect")," with a specify port number that will respond the password of the bandit20.",(0,i.kt)("br",{parentName:"p"}),"\n","But because ",(0,i.kt)("inlineCode",{parentName:"p"},"nc")," is allowed in the chall, so we just need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," netcat listening in a random port and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect")," connect to it, and then we enter the bandit20 password on the netcat listening, so it will send to the ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"suconnect")," receives the correct password, so it sends the password for the next level to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nc"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/136639440-de69dad4-5a1b-470b-bd05-3c7724f3a310.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"gE269g2h3mw3pwgrj0Ha9Uoqen1c9DGr"))))}d.isMDXComponent=!0}}]);