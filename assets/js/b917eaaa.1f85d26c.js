"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5407],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,u={unversionedId:"OverTheWire/Bandit/Level13-Level14",id:"OverTheWire/Bandit/Level13-Level14",isDocsHomePage:!1,title:"Level13-Level14",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level13-Level14.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level13-Level14",permalink:"/Writeups/docs/OverTheWire/Bandit/Level13-Level14",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level13-Level14.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level12-Level13",permalink:"/Writeups/docs/OverTheWire/Bandit/Level12-Level13"},next:{title:"Level14-Leve15",permalink:"/Writeups/docs/OverTheWire/Bandit/Level14-Leve15"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The password for the next level is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/bandit_pass/bandit14")," and can only be read by user ",(0,o.kt)("inlineCode",{parentName:"p"},"bandit14"),". For this level, you don\u2019t get the next password, but you get a private SSH key that can be used to log into the next level.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," localhost is a hostname that refers to the machine you are working on.")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"From the ","[given documentation about SSH]",", we know that SSH can be used to login to a computer without a password. Furthermore, suppose that we are at ",(0,o.kt)("strong",{parentName:"p"},"computer A")," and we want to login to ",(0,o.kt)("strong",{parentName:"p"},"computer B"),", the ",(0,o.kt)("strong",{parentName:"p"},"computer B")," must have our public key and the ",(0,o.kt)("strong",{parentName:"p"},"computer A")," must have both public and private key."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"With public key authentication, the authenticating entity has a public key and a private key. Each key is a large number with special mathematical properties. The private key is kept on the computer you log in from, while the public key is stored on the .ssh/authorized_keys file on all the computers you want to log in to."')),(0,o.kt)("p",null,"In this level, we are given a private key ",(0,o.kt)("inlineCode",{parentName:"p"},"sshkey.private"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bandit13@bandit:~$ ls\nsshkey.private\n")),(0,o.kt)("p",null,"So we can use this to login to the ",(0,o.kt)("em",{parentName:"p"},"localhost")," machine as user ",(0,o.kt)("inlineCode",{parentName:"p"},"bandit14"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bandit13@bandit:~$ ssh -i sshkey.private bandit14@localhost\n")),(0,o.kt)("p",null,"And we're in!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shc"},"bandit14@bandit:~$ \n")),(0,o.kt)("p",null,"Let's get our password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"bandit14@bandit:~$ cat /etc/bandit_pass/bandit14\n4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e"))))}d.isMDXComponent=!0}}]);