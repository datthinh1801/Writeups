"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5940],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=i,f=d["".concat(c,".").concat(v)]||d[v]||s[v]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},199:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},c=void 0,u={unversionedId:"OverTheWire/Bandit/Level26-Level27",id:"OverTheWire/Bandit/Level26-Level27",isDocsHomePage:!1,title:"Level26-Level27",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level26-Level27.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level26-Level27",permalink:"/Writeups/docs/OverTheWire/Bandit/Level26-Level27",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level26-Level27.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level25-Level26",permalink:"/Writeups/docs/OverTheWire/Bandit/Level25-Level26"},next:{title:"Level27-Level28",permalink:"/Writeups/docs/OverTheWire/Bandit/Level27-Level28"}},p=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"Good job getting a shell! Now hurry and grab the password for bandit27!"),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"We already have a shell of bandit26 in previous level, so check it.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/136642944-6a7bd510-4ba6-457d-9ca3-611276bf58c7.png",alt:"image"}),"  "),(0,o.kt)("p",null,"We see the file ",(0,o.kt)("inlineCode",{parentName:"p"},"bandit27-do"),", with is the same with ",(0,o.kt)("inlineCode",{parentName:"p"},"bandit20-do"),", so just give the cat ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/bandit_pass/bandit27")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"bandit27-do")," to excute it with bandit27 permission to cat the flag.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/136642957-cedd0ce1-479e-4ff9-8885-3dc50a46746a.png",alt:"image"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"3ba3118a22e93127a4ed485be72ef5ea"))))}d.isMDXComponent=!0}}]);