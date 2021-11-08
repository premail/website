"use strict";(self.webpackChunkPremailDocs=self.webpackChunkPremailDocs||[]).push([[184],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"Premail code style and syntax",sidebar_label:"Code style and syntax",slug:"code-style-syntax"},l=void 0,p={unversionedId:"development/code-style",id:"development/code-style",isDocsHomePage:!1,title:"Premail code style and syntax",description:"Premail includes sheerun/modern-node,",source:"@site/docs/04-development/03-code-style.md",sourceDirName:"04-development",slug:"/development/code-style-syntax",permalink:"/docs/development/code-style-syntax",editUrl:"https://github.com/premail/premail/tree/docs/docs/04-development/03-code-style.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Premail code style and syntax",sidebar_label:"Code style and syntax",slug:"code-style-syntax"},sidebar:"tutorialSidebar",previous:{title:"Internal structure",permalink:"/docs/development/internal-structure"},next:{title:"License",permalink:"/docs/license"}},c=[],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Premail includes ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sheerun/modern-node"},"sheerun/modern-node"),",\nwhich formats and lints code using ",(0,s.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),". This is\nused both in the user-facing project side and internally, so in general it\nshould clean up and format various language files appropriately:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"JavaScript uses ",(0,s.kt)("a",{parentName:"li",href:"https://standardjs.com/"},"Standard Style"),". Most files are\nwritten in ES6, but support exists to use Babel for newer syntaxes."),(0,s.kt)("li",{parentName:"ul"},"Gulp tasks are written in\n",(0,s.kt)("a",{parentName:"li",href:"https://gulpjs.com/docs/en/getting-started/creating-tasks"},"version 4")," syntax\nand\n",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/gulpjs/gulp/discussions/2586"},"use ",(0,s.kt)("inlineCode",{parentName:"a"},"pipeline()"),", not ",(0,s.kt)("inlineCode",{parentName:"a"},".pipe"))),"."),(0,s.kt)("li",{parentName:"ul"},"Handlebars processing happens ",(0,s.kt)("em",{parentName:"li"},"first")," in the build process, thus all templates\nare named as Handlebars files. Within these templates, you will also see MJML,\nwhich will be processed second."),(0,s.kt)("li",{parentName:"ul"},"MJML should be valid under\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/mjmlio/mjml/releases"},"version 4"),": Use the\n",(0,s.kt)("a",{parentName:"li",href:"https://mjml.io/try-it-live/"},"MJML Try It Live")," website to test if necessary."),(0,s.kt)("li",{parentName:"ul"},"Sass files use the SCSS syntax to make it easiest on end-users. It is compiled\nwith ",(0,s.kt)("a",{parentName:"li",href:"https://sass-lang.com/dart-sass"},"Dart Sass")," and uses\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/pmowrer/node-sass-json-importer"},"node-sass-json-importer"),"\n(which does, in fact, work with Dart Sass) to import variables from\nconfiguration files into the Sass files. See\n",(0,s.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/tree/v2.0.0/src/config/sassImport.js"},(0,s.kt)("inlineCode",{parentName:"a"},"src/config/sassImport.js"))," and the ",(0,s.kt)("inlineCode",{parentName:"li"},"sass()"),"\nfunction in ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/tree/v2.0.0/src/tasks/build.js"},(0,s.kt)("inlineCode",{parentName:"a"},"src/tasks/build.js"))," for the\nimplementation."),(0,s.kt)("li",{parentName:"ul"},"YAML and Markdown files are wrapped when possible at 80 characters. This is\nenforced with Prettier."),(0,s.kt)("li",{parentName:"ul"},"Indents are 2 spaces, enforced with ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/tree/v2.0.0/.editorconfig"},(0,s.kt)("inlineCode",{parentName:"a"},".editorconfig")),".")))}m.isMDXComponent=!0}}]);