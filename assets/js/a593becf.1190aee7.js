"use strict";(self.webpackChunkPremailDocs=self.webpackChunkPremailDocs||[]).push([[560],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"Premail internal structure",sidebar_label:"Internal structure",slug:"internal-structure"},p=void 0,s={unversionedId:"development/internal-structure",id:"development/internal-structure",isDocsHomePage:!1,title:"Premail internal structure",description:"- index.js uses",source:"@site/docs/04-development/02-internal-structure.md",sourceDirName:"04-development",slug:"/development/internal-structure",permalink:"/docs/development/internal-structure",editUrl:"https://github.com/premail/premail/tree/docs/docs/04-development/02-internal-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Premail internal structure",sidebar_label:"Internal structure",slug:"internal-structure"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/development/setup"},next:{title:"Code style and syntax",permalink:"/docs/development/code-style-syntax"}},m=[],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/tree/v2.0.0"},"https://github.com/premail/premail/tree/v2.0.0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/index.js"},(0,i.kt)("inlineCode",{parentName:"a"},"index.js"))," uses\n",(0,i.kt)("a",{parentName:"li",href:"https://yargs.js.org"},"yargs")," to pass tasks and other functions to the\n",(0,i.kt)("inlineCode",{parentName:"li"},"premail")," command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/gulpfile.js"},(0,i.kt)("inlineCode",{parentName:"a"},"gulpfile.js")),"\ndefines tasks for ",(0,i.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"gulp"),". Some functions run outside of\ngulp."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/.mjmlconfig"},(0,i.kt)("inlineCode",{parentName:"a"},".mjmlconfig")),"\ndefines the ",(0,i.kt)("a",{parentName:"li",href:"/docs/components/summary/"},"custom MJML components")," we use."),(0,i.kt)("li",{parentName:"ul"},"Other root-level dot-files should be self-explanatory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src"},(0,i.kt)("inlineCode",{parentName:"a"},"src"))," contains the\nprogram itself.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/config"},(0,i.kt)("inlineCode",{parentName:"a"},"config")),"\nfunctions load and process configuration from command-line, internal, and\nuser-facing file sources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/example"},(0,i.kt)("inlineCode",{parentName:"a"},"example")),"\ncontains the scaffolding of a Premail project that is created with\n",(0,i.kt)("inlineCode",{parentName:"li"},"premail init"),". For more information about how this structure operates, see\nPremail's end-user\n",(0,i.kt)("a",{parentName:"li",href:"/docs/overview/usage/explore-design-structure/"},"design structure"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/helpers"},(0,i.kt)("inlineCode",{parentName:"a"},"helpers"))," are\nsmall utility functions, usually from other sources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/ops"},(0,i.kt)("inlineCode",{parentName:"a"},"ops"))," are a kind\nof catch-all internal function category: error handling, command-line flags,\nconsole notification and variable validation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/settings"},(0,i.kt)("inlineCode",{parentName:"a"},"settings")),"\nare internal default settings for Premail, stored in YAML format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/src/tasks"},(0,i.kt)("inlineCode",{parentName:"a"},"tasks")),"\ncorrespond to ",(0,i.kt)("inlineCode",{parentName:"li"},"premail")," commands. Some of these are gulp tasks, and some are\npure Node functions."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/v2.0.0/README.md"},(0,i.kt)("inlineCode",{parentName:"a"},"README.md")),"\ncontains basic project documentation. The repo for this site\n(",(0,i.kt)("a",{parentName:"li",href:"https://premail.dev"},"https://premail.dev"),"), which is built with\n",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),", is located on\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/tree/docs"},"the docs branch"),", and a GitHub\nAction automatically deploys it to\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/tree/gh-pages"},"the gh-pages branch")," on\nevery new commit.")))}c.isMDXComponent=!0}}]);