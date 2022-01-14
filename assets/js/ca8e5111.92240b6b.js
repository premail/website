"use strict";(self.webpackChunkPremailDocs=self.webpackChunkPremailDocs||[]).push([[415],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7007:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={title:"Render the email for production",sidebar_label:"Render the email",slug:"render-production-email"},s="Docusaurus settings",u={unversionedId:"overview/usage/render-email",id:"overview/usage/render-email",title:"Render the email for production",description:'In your console, append --prod, e.g. with a design named "postmodern," you\'d',source:"@site/docs/01-overview/03-usage/07-render-email.md",sourceDirName:"01-overview/03-usage",slug:"/overview/usage/render-production-email",permalink:"/docs/overview/usage/render-production-email",editUrl:"https://github.com/premail/website/tree/main/docs/01-overview/03-usage/07-render-email.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Render the email for production",sidebar_label:"Render the email",slug:"render-production-email"},sidebar:"tutorialSidebar",previous:{title:"Create a new email",permalink:"/docs/overview/usage/create-a-new-email"},next:{title:"Code formatting and linting",permalink:"/docs/overview/usage/code-formatting-linting"}},d=[],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docusaurus-settings"},"Docusaurus settings"),(0,i.kt)("p",null,"In your console, append ",(0,i.kt)("inlineCode",{parentName:"p"},"--prod"),', e.g. with a design named "postmodern," you\'d\nuse:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"premail build -d postmodern --prod\n")),(0,i.kt)("p",null,"This will render ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mjmlio/mjml/blob/master/packages/mjml-cli/README.md#minify-and-beautify-the-output-html"},"in minified form"),"\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," subdirectory, and (if you've chosen to have one created),\n",(0,i.kt)("inlineCode",{parentName:"p"},"index.txt"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Email images")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Images can be included locally while you're drafting the email, but MJML doesn't\ndo anything magical in terms of hosting these images -- you'll still have to\nupload them somewhere and use the full URLs as references to the hosted images."))),(0,i.kt)("p",null,"Once the production email is rendered, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the code from ",(0,i.kt)("inlineCode",{parentName:"li"},"index.html")," into your emailer of choice; all the code and\nstyles are included!"),(0,i.kt)("li",{parentName:"ul"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"index.txt")," plain-text version, if you've chosen to have one created,\ninto the appropriate place provided by your emailer."),(0,i.kt)("li",{parentName:"ul"},"Share these files with colleagues."),(0,i.kt)("li",{parentName:"ul"},"Upload the files as part of a repo and use something like\n",(0,i.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages")," to view/share it in a browser -- for\ninstance\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/premail/premail/blob/main/designs/_templates/dist/index.html"},"here's the rendered file"),"\nfrom the sample templates.")))}c.isMDXComponent=!0}}]);