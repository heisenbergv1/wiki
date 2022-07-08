"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8459],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=o,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3872:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={},a="Powershell",l={unversionedId:"programming/powershell",id:"programming/powershell",title:"Powershell",description:"- Tailing file contents (tail -f equivalent):",source:"@site/docs/programming/powershell.md",sourceDirName:"programming",slug:"/programming/powershell",permalink:"/programming/powershell",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/programming/powershell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memoization",permalink:"/programming/memoization"},next:{title:"Ruby",permalink:"/programming/ruby"}},p={},c=[],u={toc:c};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"Powershell"},"Powershell"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tailing file contents (",(0,o.kt)("inlineCode",{parentName:"li"},"tail -f")," equivalent):\n",(0,o.kt)("inlineCode",{parentName:"li"},"Get-Content <file> -Wait -Tail <n>"))))}m.isMDXComponent=!0}}]);