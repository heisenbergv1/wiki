"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9565],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return n?i.createElement(h,r(r({ref:t},s),{},{components:n})):i.createElement(h,r({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var m=2;m<o;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],p={},l="Steam API",m={unversionedId:"programming/apis/steam",id:"programming/apis/steam",title:"Steam API",description:"Helpful links:",source:"@site/docs/programming/apis/steam.md",sourceDirName:"programming/apis",slug:"/programming/apis/steam",permalink:"/programming/apis/steam",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/apis/steam.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Angular Routing",permalink:"/programming/angular-routing"},next:{title:"CSS",permalink:"/programming/css"}},s={},d=[{value:"Libraries",id:"libraries",level:2},{value:"OpenID Authentication with Steam",id:"openid-authentication-with-steam",level:2},{value:"Requesting OpenID Information",id:"requesting-openid-information",level:3},{value:"Verifying The OpenID Information",id:"verifying-the-openid-information",level:3}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Steam%20API"},"Steam API"),(0,o.kt)("p",null,"Helpful links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.valvesoftware.com/wiki/Steam_Web_API"},"Steam Web API"),".\nDocumentation for accessing user information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev/apikey"},"Steam Web API Key"),", required for\naccessing the Steam Web API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev"},"Steam Web API Documentation"),". This contains\nreferences to the OpenID Provider logic, allowing you to have someone log in\nunder their Steam credentials to your website. This also contains the \u201cSign in\nthrough Steam\u201d icons they request that you use when using OpenID.")),(0,o.kt)("h2",{id:"Libraries"},"Libraries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bhaberer/steam-api"},"bhaberer/steam-api")," (Ruby)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.valvesoftware.com/wiki/Steam_Condenser"},"Steam Condenser"),", a\nset of libraries for accessing the Steam Community API and game servers\nwritten in Source or GoldSrc. Available in Java, PHP, Ruby, and C#.")),(0,o.kt)("h2",{id:"OpenID%20Authentication%20with%20Steam"},"OpenID Authentication with Steam"),(0,o.kt)("p",null,"Steam uses OpenID 2.0."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Information here is heavily sourced from ",(0,o.kt)("a",{parentName:"em",href:"https://stackoverflow.com/a/63652502"},"Matthew Steven Monkan\u2019s answer on\nStack Overflow"))),(0,o.kt)("h3",{id:"Requesting%20OpenID%20Information"},"Requesting OpenID Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a URL with the following parameters:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://steamcommunity.com/openid/login")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.ns"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://specs.openid.net/auth/2.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.claimed_id"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://specs.openid.net/auth/2.0/identifier_select")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.identity"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://specs.openid.net/auth/2.0/identifier_select")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.return_to"),": The URL on your website that you want to receive a GET\nrequest to"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.realm"),": The domain part of the ",(0,o.kt)("inlineCode",{parentName:"li"},"openid.return_to")," URL. This is what\nis displayed to the user when logging in on Steam"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.mode"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"checkid_setup"))),(0,o.kt)("p",{parentName:"li"},"Example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select&openid.identity=http://specs.openid.net/auth/2.0/identifier_select&openid.return_to=https://example.com&openid.realm=https://example.com&openid.mode=checkid_setup"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After a user successfully logs in, Steam will issue a GET request to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"openid.return_to")," URL you specified with several query parameters added:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.ns"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"http://specs.openid.net/auth/2.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.mode"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"id_res")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.op_endpoint"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"https://steamcommunity.com/openid/login")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.claimed_id"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"https://steamcommunity.com/openid/id/76561198002516729")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.identity"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"https://steamcommunity.com/openid/id/76561198002516729")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.return_to"),": The value of ",(0,o.kt)("inlineCode",{parentName:"li"},"openid.return_to")," used in the original\nrequest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.response_nonce"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"2020-08-27T04:44:16Zs4DPZce8qc+iPCe8JgQKB0BiIDI=")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.assoc_handle"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"1234567890")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.signed"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"signed,op_endpoint,claimed_id,identity,return_to,response_nonce,assoc_handle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openid.sig"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"W0u5DRbtHE1GG0ZKXjerUZDUGmc="))),(0,o.kt)("p",{parentName:"li"},"Example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=id_res&openid.op_endpoint=https://steamcommunity.com/openid/login&openid.claimed_id=https://steamcommunity.com/openid/id/76561198002516729&openid.identity=https://steamcommunity.com/openid/id/76561198002516729&openid.return_to=https:/%example.com&openid.response_nonce=2020-08-27T04:44:16Zs4DPZce8qc+iPCe8JgQKB0BiIDI=&openid.assoc_handle=1234567890&openid.signed=signed,op_endpoint,claimed_id,identity,return_to,response_nonce,assoc_handle&openid.sig=W0u5DRbtHE1GG0ZKXjerUZDUGmc=")))),(0,o.kt)("h3",{id:"Verifying%20The%20OpenID%20Information"},"Verifying The OpenID Information"),(0,o.kt)("p",null,"To verify the provided information, issue an API call to Steam via a backend\nserver as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Take the URL that Steam redirected to"),(0,o.kt)("li",{parentName:"ul"},"Swap out the initial host and path with\n",(0,o.kt)("inlineCode",{parentName:"li"},"https://steamcommunity.com/openid/login")),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"openid.mode"),"\u2019s value of ",(0,o.kt)("inlineCode",{parentName:"li"},"id_res")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"check_authentication"))),(0,o.kt)("p",null,"Example:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&openid.mode=check_authentication&openid.op_endpoint=https://steamcommunity.com/openid/login&openid.claimed_id=https://steamcommunity.com/openid/id/76561198002516729&openid.identity=https://steamcommunity.com/openid/id/76561198002516729&openid.return_to=https:/%example.com&openid.response_nonce=2020-08-27T04:44:16Zs4DPZce8qc+iPCe8JgQKB0BiIDI=&openid.assoc_handle=1234567890&openid.signed=signed,op_endpoint,claimed_id,identity,return_to,response_nonce,assoc_handle&openid.sig=W0u5DRbtHE1GG0ZKXjerUZDUGmc=")),(0,o.kt)("p",null,"A valid response will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ns:http://specs.openid.net/auth/2.0\nis_valid:true\n")),(0,o.kt)("p",null,"Because there is a nonce provided in the URL, this API call can only be made\nonce; all subsequent other requests will always return ",(0,o.kt)("inlineCode",{parentName:"p"},"is_valid:false"),", even if\nit was previously valid."))}c.isMDXComponent=!0}}]);