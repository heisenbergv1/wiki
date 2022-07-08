"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={tags:["SEO"]},a="A/B Testing",s={unversionedId:"design/ab-testing",id:"design/ab-testing",title:"A/B Testing",description:"A/B testing is when two different design options are tried for a website. Each",source:"@site/docs/design/ab-testing.md",sourceDirName:"design",slug:"/design/ab-testing",permalink:"/design/ab-testing",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/design/ab-testing.md",tags:[{label:"SEO",permalink:"/tags/seo"}],version:"current",frontMatter:{tags:["SEO"]},sidebar:"tutorialSidebar",previous:{title:"The Practice",permalink:"/creativity/the-practice"},next:{title:"Contrast Ratio",permalink:"/design/contrast-ratio"}},l={},c=[{value:"What To A/B Test",id:"what-to-ab-test",level:2},{value:"Prioritizing testing",id:"prioritizing-testing",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"A/B%20Testing"},"A/B Testing"),(0,i.kt)("p",null,"A/B testing is when two different design options are tried for a website. Each\noption is served to half of visitors. That visitor\u2019s engagement is then measured\nbased on the selected criteria (such as registrations, subscription purchases,\netc)."),(0,i.kt)("p",null,"An example is using two different labels for your Call To Action button on your\n",(0,i.kt)("a",{parentName:"p",href:"/design/landing-pages"},"landing page")," to see which label drives more\nregistrations."),(0,i.kt)("h2",{id:"What%20To%20A/B%20Test"},"What To A/B Test"),(0,i.kt)("p",null,"Ideas you have with a medium amount of confidence should be A/B tested. If your\nconfidence is low in an idea, gather more evidence and postpone testing it. If\nyour confidence is very high in an idea, then just implement the idea. "),(0,i.kt)("h2",{id:"Prioritizing%20testing"},"Prioritizing testing"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://goodui.org"},"GoodUI")," prioritizes based on three criteria:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Highest Expected Effect + Highest Confidence"),(0,i.kt)("li",{parentName:"ol"},"Lowest Effort"),(0,i.kt)("li",{parentName:"ol"},"Shortest Testing Duration")),(0,i.kt)("p",null,"In other words: aim for maximum\n",(0,i.kt)("a",{parentName:"p",href:"/writing/juice-to-squeeze"},"juice-to-squeeze"),"."),(0,i.kt)("h2",{id:"References"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goodui.org/blog/should-you-ab-test-your-idea-or-not/"},"Should You A/B Test Your Idea, Or\nNot?")," (GoodUI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://goodui.org/blog/what-to-test-next/"},"What To A/B Test Next")," (GoodUI)")))}p.isMDXComponent=!0}}]);