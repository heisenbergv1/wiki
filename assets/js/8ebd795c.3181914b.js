"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[511],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Chess Diagrams",u={unversionedId:"games/chess/diagrams",id:"games/chess/diagrams",title:"Chess Diagrams",description:"FEN Notation",source:"@site/docs/games/chess/diagrams.md",sourceDirName:"games/chess",slug:"/games/chess/diagrams",permalink:"/wiki/games/chess/diagrams",editUrl:"https://github.com/b-turchyn/knowledge/tree/main/docs/docs/games/chess/diagrams.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Oh My Zsh!",permalink:"/wiki/devops/oh-my-zsh"},next:{title:"Italian Game",permalink:"/wiki/games/chess/italian-game"}},l={},m=[{value:"FEN Notation",id:"fen-notation",level:2},{value:"PGN Notation",id:"pgn-notation",level:2},{value:"Image Generation",id:"image-generation",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chess-diagrams"},"Chess Diagrams"),(0,o.kt)("h2",{id:"fen-notation"},"FEN Notation"),(0,o.kt)("h2",{id:"pgn-notation"},"PGN Notation"),(0,o.kt)("p",null,"PGN stands for ",(0,o.kt)("strong",{parentName:"p"},"P"),"ortable ",(0,o.kt)("strong",{parentName:"p"},"G"),"ame ",(0,o.kt)("strong",{parentName:"p"},"N"),"otation and is a standard recording\nformat for chess games. PGN tracks individual moves, not just the current state\nunlike ",(0,o.kt)("a",{parentName:"p",href:"#fen-notation"},"FEN Notation"),"."),(0,o.kt)("h2",{id:"image-generation"},"Image Generation"),(0,o.kt)("p",null,"Chess.com can generate static images of gameplay as well as GIFs of movesets.\nStatic images use ",(0,o.kt)("a",{parentName:"p",href:"#fen-notation"},"FEN Notation")," and the GIFs accept either ",(0,o.kt)("a",{parentName:"p",href:"#pgn-notation"},"PGN\nFormat")," or a Chess.com link."))}f.isMDXComponent=!0}}]);