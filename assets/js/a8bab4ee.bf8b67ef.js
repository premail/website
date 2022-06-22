"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[2947],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7361:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"Create a new project",slug:"create-new-premail-project"},l=void 0,p={unversionedId:"overview/usage/new-project",id:"overview/usage/new-project",title:"Create a new project",description:"In your project folder, run the following:",source:"@site/docs/01-overview/03-usage/02-new-project.md",sourceDirName:"01-overview/03-usage",slug:"/overview/usage/create-new-premail-project",permalink:"/docs/overview/usage/create-new-premail-project",editUrl:"https://github.com/premail/website/tree/main/docs/01-overview/03-usage/02-new-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create a new project",slug:"create-new-premail-project"},sidebar:"tutorialSidebar",previous:{title:"The premail command",permalink:"/docs/overview/usage/premail-command"},next:{title:"Project settings",permalink:"/docs/overview/usage/project-settings"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In your project folder, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"premail init\n")),(0,i.kt)("p",null,"This will create the starting configuration for your project, an initial design\nto build from, and an example email. Specifically, it will create everything\nfrom Premail's\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/tree/main/src/scaffolding/project/"},"project scaffolding"),"."),(0,i.kt)("p",null,"If data already exists in the current directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"premail init")," will ask for\nconfirmation; any existing files with the same filenames will be overwritten. If\nyou want to skip this check, use ",(0,i.kt)("inlineCode",{parentName:"p"},"premail init --yes"),"."),(0,i.kt)("p",null,"We intentionally keep the project scaffolding small. If you want to add things\nlike ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},(0,i.kt)("inlineCode",{parentName:"a"},".gitignore")),",\n",(0,i.kt)("a",{parentName:"p",href:"https://editorconfig.org/"},(0,i.kt)("inlineCode",{parentName:"a"},".editorconfig")),", linting rules, documentation, or\nother files, that's up to you."),(0,i.kt)("p",null,"To reverse project initialization, you can\n",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/usage/destroy-project/"},"destroy the project"),"."))}f.isMDXComponent=!0}}]);