"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[175],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9096:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={slug:"contributing"},l="Contributing to Premail",p={type:"mdx",permalink:"/CONTRIBUTING",source:"@site/src/pages/CONTRIBUTING.md"},s=[{value:"Issues and feature requests",id:"issues-and-feature-requests",children:[],level:2},{value:"How to submit a Pull Request",id:"how-to-submit-a-pull-request",children:[],level:2},{value:"\ud83c\udf89 <strong>Thank you for your contribution!</strong>",id:"-thank-you-for-your-contribution",children:[],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing-to-premail"},"Contributing to Premail"),(0,o.kt)("p",null,"Thank you for taking the time to contribute!"),(0,o.kt)("p",null,"Premail is open-source, and contributions are what make the open-source\ncommunity such an amazing place to learn, inspire, and create. Any contributions\nyou make will benefit everybody else and are ",(0,o.kt)("strong",{parentName:"p"},"greatly appreciated"),"!"),(0,o.kt)("p",null,"When contributing, especially for the first time, consider starting by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/issues/new"},"creating an issue")," so you can\nget feedback from the maintainers and avoid unncessary work."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Premail has a ",(0,o.kt)("a",{parentName:"p",href:"https://premail.dev/code_of_conduct/"},"code of conduct"),".\nPlease follow it in all your interactions with the project."),(0,o.kt)("h2",{id:"issues-and-feature-requests"},"Issues and feature requests"),(0,o.kt)("p",null,"You've found a bug in the source code, a mistake in the documentation or maybe\nyou'd like a new feature? You can help us by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/issues"},"submitting an issue on GitHub"),".\nBefore you create an issue, make sure to search the issue archive -- your issue\nmay have already been addressed!"),(0,o.kt)("p",null,"Please try to create bug reports that are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Reproducible.")," Include steps to reproduce the problem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Specific.")," Include as much detail as possible: which version, what\nenvironment, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Unique.")," Do not duplicate existing opened issues."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Scoped to a single bug.")," One bug per report.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Even better: Submit a pull request with a fix or new feature!")),(0,o.kt)("h2",{id:"how-to-submit-a-pull-request"},"How to submit a Pull Request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search our repository for open or closed\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/pulls"},"Pull Requests")," that relate to your\nsubmission. You don't want to duplicate effort.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/premail/premail"},"Fork the project on GitHub."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create your feature branch:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b feat/amazing_feature\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Do your work.\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://premail.dev/docs/development/setup/"},"Read the Premail development guide.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit your changes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git commit -m 'feat: add amazing_feature'\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push to the branch:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin feat/amazing_feature\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/compare?expand=1"},"Open a Pull Request"),"\nand wait for feedback."))),(0,o.kt)("h2",{id:"-thank-you-for-your-contribution"},"\ud83c\udf89 ",(0,o.kt)("strong",{parentName:"h2"},"Thank you for your contribution!")))}m.isMDXComponent=!0}}]);