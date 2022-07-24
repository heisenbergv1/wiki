"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),k=l(t),N=r,u=k["".concat(p,".").concat(N)]||k[N]||c[N]||s;return t?n.createElement(u,o(o({ref:a},i),{},{components:t})):n.createElement(u,o({ref:a},i))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=k;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9060:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const s={tags:["Accessibility","UI/UX"]},o="Contrast Ratio",m={unversionedId:"design/contrast-ratio",id:"design/contrast-ratio",title:"Contrast Ratio",description:"WCAG guidelines specify minimum contrast ratios for content. This contrast ratio",source:"@site/docs/design/contrast-ratio.md",sourceDirName:"design",slug:"/design/contrast-ratio",permalink:"/design/contrast-ratio",draft:!1,editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/design/contrast-ratio.md",tags:[{label:"Accessibility",permalink:"/tags/accessibility"},{label:"UI/UX",permalink:"/tags/ui-ux"}],version:"current",frontMatter:{tags:["Accessibility","UI/UX"]},sidebar:"tutorialSidebar",previous:{title:"Colour",permalink:"/design/colour"},next:{title:"Landing Pages",permalink:"/design/landing-pages"}},p={},l=[{value:"Contrast Ratios",id:"contrast-ratios",level:2},{value:"Calculating Contrast Ratio",id:"calculating-contrast-ratio",level:2},{value:"Resources",id:"resources",level:2}],i={toc:l};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"Contrast%20Ratio"},"Contrast Ratio"),(0,r.kt)("p",null,"WCAG guidelines specify minimum contrast ratios for content. This contrast ratio\nis beneficial to everyone reading your content, but is also incredibly valuable\nfor those with colour blindness or other visual impairments."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is good to have a cool design on your website, but the design is worthless\nif your users can\u2019t read your content.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("h2",{id:"Contrast%20Ratios"},"Contrast Ratios"),(0,r.kt)("p",null,"Sourced from MDN, licened under ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/2.5/"},"CC-BY-SA\n2.5")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type of content"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum ratio for AA rating"),(0,r.kt)("th",{parentName:"tr",align:null},"Minimum ratio for AAA rating"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body text"),(0,r.kt)("td",{parentName:"tr",align:null},"4.5 : 1"),(0,r.kt)("td",{parentName:"tr",align:null},"7 : 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Large-scale text (120-150% larger than body text)"),(0,r.kt)("td",{parentName:"tr",align:null},"3 : 1"),(0,r.kt)("td",{parentName:"tr",align:null},"4.5 : 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Active user interface components and graphics"),(0,r.kt)("td",{parentName:"tr",align:null},"3 : 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Not defined")))),(0,r.kt)("h2",{id:"Calculating%20Contrast%20Ratio"},"Calculating Contrast Ratio"),(0,r.kt)("p",null,"Contrast is calculated by looking at the relative luminance values (",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"L1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," and\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mn",{parentName:"mrow"},"2")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"L2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"))))),") of the two colours. ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"0.05"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"0.05"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(L1 + 0.05) / (L2 + 0.05)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.05"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0.05"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," is the equation."),(0,r.kt)("p",null,"Because luminance is the sole factor looked at, the tone has no bearing on the\ncontrast ratio",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,r.kt)("p",null,"For example, take ",(0,r.kt)("inlineCode",{parentName:"p"},"#FFFFFF")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#323286"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"#FFFFFF")," has a luminance value of\n1.0, and ",(0,r.kt)("inlineCode",{parentName:"p"},"#323286")," has a luminance value of 0.046, which roughly works out to a\ncontrast ratio of 10.8, passing all WCAG contrast ratio checks."),(0,r.kt)("p",null,"Example code from the WebAIM contrast checker is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function getL(c) {\n  // I don't know where these magic numbers come from\n  return (\n    0.2126 * getsRGB(c.substr(1, 2)) +\n    0.7152 * getsRGB(c.substr(3, 2)) +\n    0.0722 * getsRGB(c.substr(-2))\n  );\n}\nvar L1 = getL(f),\n    L2 = getL(b),\n    ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);\n")),(0,r.kt)("h2",{id:"Resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webaim.org/resources/contrastchecker/"},"WebAIM: Contrast Checker"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast"),"\n",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":\n",(0,r.kt)("a",{parentName:"p",href:"https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/#tone-is-not-a-key-factor"},"https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/#tone-is-not-a-key-factor")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);