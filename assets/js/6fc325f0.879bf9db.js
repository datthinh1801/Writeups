"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1242],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2287:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],a={},u=void 0,c={unversionedId:"OverTheWire/Bandit/Level5-Level6",id:"OverTheWire/Bandit/Level5-Level6",isDocsHomePage:!1,title:"Level5-Level6",description:"Goal",source:"@site/docs/OverTheWire/Bandit/Level5-Level6.md",sourceDirName:"OverTheWire/Bandit",slug:"/OverTheWire/Bandit/Level5-Level6",permalink:"/Writeups/docs/OverTheWire/Bandit/Level5-Level6",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/OverTheWire/Bandit/Level5-Level6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level4-Level5",permalink:"/Writeups/docs/OverTheWire/Bandit/Level4-Level5"},next:{title:"Level6-Level7",permalink:"/Writeups/docs/OverTheWire/Bandit/Level6-Level7"}},p=[{value:"Goal",id:"goal",children:[]},{value:"Solution",id:"solution",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"The password for the next level is stored in a file somewhere under the ",(0,o.kt)("strong",{parentName:"p"},"inhere")," directory and has all of the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"human-readable"),(0,o.kt)("li",{parentName:"ul"},"1033 bytes in size"),(0,o.kt)("li",{parentName:"ul"},"not executable")),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"This level is pretty the same as the last one, but there are some more things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1033 bytes in size: We use ",(0,o.kt)("inlineCode",{parentName:"li"},"-size 1033c")," option. Here ",(0,o.kt)("inlineCode",{parentName:"li"},"c")," specifies bytes."),(0,o.kt)("li",{parentName:"ul"},"not executable: We can use ",(0,o.kt)("inlineCode",{parentName:"li"},"! -executable"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bandit5@bandit:~$ find . -type f -size 1033c ! -executable -exec file {} +| grep ASCII\n./inhere/maybehere07/.file2: ASCII text, with very long lines\nbandit5@bandit:~$ cat ./inhere/maybehere07/.file2\nDXjZPULLxYr17uwoI01bNLQbtFemEgo7\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"DXjZPULLxYr17uwoI01bNLQbtFemEgo7"))))}d.isMDXComponent=!0}}]);