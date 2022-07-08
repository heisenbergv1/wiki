"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={aliases:["AMQ","Artemis"]},a="ActiveMQ",s={unversionedId:"devops/activemq",id:"devops/activemq",title:"ActiveMQ",description:"ActiveMQ is a message broker owned by the Apache Foundation, written in Java.",source:"@site/docs/devops/activemq.md",sourceDirName:"devops",slug:"/devops/activemq",permalink:"/devops/activemq",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/devops/activemq.md",tags:[],version:"current",frontMatter:{aliases:["AMQ","Artemis"]},sidebar:"tutorialSidebar",previous:{title:"The Fold",permalink:"/design/the-fold"},next:{title:"Active Directory Federation Service",permalink:"/devops/adfs"}},c={},l=[{value:"Useful Information",id:"useful-information",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ActiveMQ"},"ActiveMQ"),(0,i.kt)("p",null,"ActiveMQ is a message broker owned by the Apache Foundation, written in Java."),(0,i.kt)("p",null,"ActiveMQ has two variants: ActiveMQ Classic and ActiveMQ Artemis (AMQ). Red Hat\nalso has a proprietary, supported version of AMQ Artemis."),(0,i.kt)("h2",{id:"Useful%20Information"},"Useful Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AMQ periodically monitors the disk utilization of the system (based on the\n",(0,i.kt)("inlineCode",{parentName:"li"},"disk-scan-period")," configuration option). If the threshold defined in\n",(0,i.kt)("a",{parentName:"li",href:"https://activemq.apache.org/components/artemis/documentation/1.4.0/paging.html#max-disk-usage"},(0,i.kt)("inlineCode",{parentName:"a"},"max-disk-usage")),"\nis exceeded, AMQ blocks all incoming messages until the disk utilization falls\nbelow ",(0,i.kt)("inlineCode",{parentName:"li"},"max-disk-usage"),". For this reason, it\u2019s a good idea to not keep your\ndata on the same partition as other dynamic data, such as log files.")))}u.isMDXComponent=!0}}]);