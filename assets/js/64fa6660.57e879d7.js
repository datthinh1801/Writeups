"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4983],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(n),h=i,m=f["".concat(c,".").concat(h)]||f[h]||s[h]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2704:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),p=["components"],o={},c="phpfuck",u={unversionedId:"UIUCTF 2021/Jail/phpfuck",id:"UIUCTF 2021/Jail/phpfuck",isDocsHomePage:!1,title:"phpfuck",description:"Task",source:"@site/docs/UIUCTF 2021/Jail/phpfuck.md",sourceDirName:"UIUCTF 2021/Jail",slug:"/UIUCTF 2021/Jail/phpfuck",permalink:"/Writeups/docs/UIUCTF 2021/Jail/phpfuck",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/UIUCTF 2021/Jail/phpfuck.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL Injection",permalink:"/Writeups/docs/PortSwigger/SQL Injection/README"},next:{title:"CEO",permalink:"/Writeups/docs/UIUCTF 2021/Misc/CEO"}},l=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"phpfuck"},"phpfuck"),(0,a.kt)("h2",{id:"task"},"Task"),(0,a.kt)("p",null,"i hate php",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"http://phpfuck.chal.uiuc.tf"},"http://phpfuck.chal.uiuc.tf")),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Visit the web page, we got this code snippet:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n// Flag is inside ./flag.php :)\n($x=str_replace("`","",strval($_REQUEST["x"])))&&strlen(count_chars($x,3))<=5?print(eval("return $x;")):show_source(__FILE__)&&phpinfo();\n')),(0,a.kt)("p",null,"Needless to evaluate the code, we see the flag file there, ",(0,a.kt)("inlineCode",{parentName:"p"},"./flag.php"),". So let visit that file.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/127736762-514c4a99-b0a5-4292-8004-ef52abe5a890.png",alt:"image"}),"  "),(0,a.kt)("p",null,"No flag for me? You're kidding!!  "),(0,a.kt)("p",null,"Let view the source of the page.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/127736774-d95598e0-14f1-4368-b342-27a74e092a0f.png",alt:"image"}),"  "),(0,a.kt)("p",null,"Flag: ",(0,a.kt)("inlineCode",{parentName:"p"},"uiuctf{pl3as3_n0_m0rE_pHpee}")))}f.isMDXComponent=!0}}]);