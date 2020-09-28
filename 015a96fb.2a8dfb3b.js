(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(254)),i=r(261),l={id:"dev-tools-explorer",title:"Explorer",keywords:["explorer","viewblock","api","zilliqa"],description:"Zilliqa Explorer ViewBlock"},c={id:"dev/dev-tools-explorer",isDocsHomePage:!1,title:"Explorer",description:"Zilliqa Explorer ViewBlock",source:"@site/docs/dev/dev-tools-explorer.mdx",permalink:"/docs/dev/dev-tools-explorer",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-explorer.mdx",sidebar:"DevelopersSidebar",previous:{title:"Scilla IDEs",permalink:"/docs/dev/dev-tools-ide"},next:{title:"Faucet",permalink:"/docs/dev/dev-tools-faucet"}},s=[{value:"ViewBlock",id:"viewblock",children:[]}],b={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"viewblock"},"ViewBlock"),Object(o.b)("img",{alt:"Viewblock",src:Object(i.a)("img/dev/tools/viewblock.png")}),Object(o.b)("p",null,"ViewBlock explorer allows you to look at the status of your transaction, current status of the Zilliqa network, contract source code etc. "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Network"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Link"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mainnet"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://viewblock.io/zilliqa"}),"https://viewblock.io/zilliqa"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Testnet"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"https://viewblock.io/zilliqa?network=testnet"}),"https://viewblock.io/zilliqa?network=testnet"))))),Object(o.b)("p",null,"For example, this is the ViewBlock ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa/tx/c4030c73d6dae558ff0c9d98237101e342888115f13219a00bb14a8ee46fa3be?network=testnet"}),"transaction link")," for a getHello() transition transaction.\nViewBlock supports both Zilliqa testnet and mainnet."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://viewblock.io/api"}),"ViewBlock API")," - ViewBlock's API is a valuable resource for some additional methods that a developer might require for his application, for example : retrieving all transactions sent by an address."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa/stats"}),"ViewBlock Zilliqa Stats")," - ViewBlock's statistics provide statistical information about Zilliqa network such as difficulty over time, number of blocks over time and address growth over time."))}p.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},260:function(e,t,r){"use strict";var n=r(0),a=r(35);t.a=function(){return Object(n.useContext)(a.a)}},261:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(260),a=r(262);function o(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return o+e;if(!Object(a.a)(e))return e;const l=o+e.replace(/^\//,"");return r?i+l:l}},262:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))}}]);