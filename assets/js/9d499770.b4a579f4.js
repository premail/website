"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[5362],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3165:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Explore the structure of a design",sidebar_label:"Design structure",slug:"explore-design-structure"},l=void 0,u={unversionedId:"overview/usage/design-structure",id:"overview/usage/design-structure",title:"Explore the structure of a design",description:"Look in the designs subdirectory. This will hold each of the designs",source:"@site/docs/01-overview/03-usage/04-design-structure.md",sourceDirName:"01-overview/03-usage",slug:"/overview/usage/explore-design-structure",permalink:"/docs/overview/usage/explore-design-structure",editUrl:"https://github.com/premail/website/tree/main/docs/01-overview/03-usage/04-design-structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Explore the structure of a design",sidebar_label:"Design structure",slug:"explore-design-structure"},sidebar:"tutorialSidebar",previous:{title:"Project settings",permalink:"/docs/overview/usage/project-settings"},next:{title:"Create a new design",permalink:"/docs/overview/usage/create-a-new-design"}},c=[{value:"Markup",id:"markup",children:[],level:3},{value:"Theme",id:"theme",children:[],level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Look in the ",(0,a.kt)("inlineCode",{parentName:"p"},"designs")," subdirectory. This will hold each of the designs\n(structure and styling) for your emails. For instance, you might have a\nnewsletter design, a welcome message design, and a holiday design."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"_default")," directory holds an example design. You can choose to use this\ndesign and modify it, or write your own."),(0,a.kt)("p",null,"Within each design directory, you'll find that an individual design is made up\nof both markup and theme settings."),(0,a.kt)("h3",{id:"markup"},"Markup"),(0,a.kt)("p",null,"Markup files are primarily\n",(0,a.kt)("a",{parentName:"p",href:"https://documentation.mjml.io/#components"},"MJML code"),", with Handlebars used for\ntemplating. When your project is compiled, the Handlebars processing comes\nfirst, and so these files have the ",(0,a.kt)("inlineCode",{parentName:"p"},".hbs")," Handlebars extension. In most cases,\nthough, all you'll need to know is MJML."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index.hbs"),": This is the primary file that loads each of the components\n(",(0,a.kt)("inlineCode",{parentName:"li"},"content")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"structure"),") for your email. Usually, you won't need to edit\nthis file unless you want to re-order the components themselves."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content/"),": This directory holds files that will ",(0,a.kt)("em",{parentName:"li"},"always")," change in each email\n-- the title, preview text, header/hero area and main body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"structure/"),": This directory holds files that may ",(0,a.kt)("em",{parentName:"li"},"sometimes")," change in each\nemail -- top and bottom navigation menus, social media links, and the footer\narea. Depending on how you prefer to create your designs, you might opt to\nnever change these components in a given design."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"designConfig.yaml")," controls settings for your design. In order to render\nbulletproof email code, MJML sets some styles directly on elements, and uses\ninlined CSS on others. To make it easier to quickly create a new design, or\nslightly alter an existing one, this file lists the most common styles for a\ndesign, which are then mapped automatically to the appropriate locations in\nMJML and CSS. If there are styles you want to add or change that aren't listed\nhere, your next step should be the Sass files inside ",(0,a.kt)("inlineCode",{parentName:"li"},"theme"),".")),(0,a.kt)("h3",{id:"theme"},"Theme"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," subdirectory contains two sets of files: styles and configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"theme/*.scss")," files are ",(0,a.kt)("a",{parentName:"li",href:"https://sass-lang.com/guide"},"Sass files")," that make\nindividual changes to CSS. If you're not familiar with Sass, the ",(0,a.kt)("inlineCode",{parentName:"li"},"scss")," syntax\nused here is\n",(0,a.kt)("a",{parentName:"li",href:"https://sass-lang.com/documentation/syntax#scss"},"a superset of CSS")," -- so any\nvalid CSS can be placed in these files. If you read through them, you'll see\nthat they use Sass to import variables from your theme configuration, but you\ncan ignore or overwrite these styles if you wish. The Sass files are heavily\ncommented to make it clear which styles they control. Most styles you'll want\nto control are in the ",(0,a.kt)("inlineCode",{parentName:"li"},"inline.scss")," file, because these are the styles MJML\nwill inline to maximize email client compatibility."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"theme/*.hbs")," files are Handlebars files with MJML markup that load settings\nfrom ",(0,a.kt)("inlineCode",{parentName:"li"},"designConfig.yaml")," into MJML itself. If you have a style that you can't\nseem to change, check these files. They are included in the ",(0,a.kt)("inlineCode",{parentName:"li"},"index.hbs")," file\nautomatically.")),(0,a.kt)("p",null,"Finally, note that some attributes must be set on ",(0,a.kt)("inlineCode",{parentName:"p"},"<mj-wrapper>")," elements for\neach component directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.hbs")," file. In every case, these are\nloading settings from ",(0,a.kt)("inlineCode",{parentName:"p"},"designConfig.yaml"),", so it should be easiest to change\nstyles there -- but if you need to alter or add something like a CSS class, take\na look at what's being defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.hbs"),"."))}m.isMDXComponent=!0}}]);