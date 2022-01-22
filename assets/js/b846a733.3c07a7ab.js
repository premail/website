"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[232],{3905:function(e,n,r){r.d(n,{Zo:function(){return m},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return r?t.createElement(f,a(a({ref:n},m),{},{components:r})):t.createElement(f,a({ref:n},m))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5260:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"The premail command",slug:"premail-command"},c=void 0,p={unversionedId:"overview/usage/premail-command",id:"overview/usage/premail-command",title:"The premail command",description:"Run premail -h to see this full list of options:",source:"@site/docs/01-overview/03-usage/01-premail-command.md",sourceDirName:"01-overview/03-usage",slug:"/overview/usage/premail-command",permalink:"/docs/overview/usage/premail-command",editUrl:"https://github.com/premail/website/tree/main/docs/01-overview/03-usage/01-premail-command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"The premail command",slug:"premail-command"},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/overview/setting-up-premail"},next:{title:"Create a new project",permalink:"/docs/overview/usage/create-new-premail-project"}},m=[],u={toc:m};function s(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"premail -h")," to see this full list of options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Usage: premail <command> [options]\n\nCommands:\n  premail build    Build your email\n  premail watch    Watch design and configuration files and rebuild as\n                    necessary\n  premail format   Format templates with Prettier\n  premail clean    Remove generated files from the current design or email\n  premail init     Initialize an email project\n  premail destroy  Destroy an email project\n\nEmail project build and watch:\n  -d, --design  Specify design directory to use   [string] [default: "_default"]\n  -e, --email   Specify email directory to render                       [string]\n  -p, --prod    Render production files (minified, no comments)        [boolean]\n      --debug   Append to any command to see verbose details           [boolean]\n\nDesign development:\n      --temp  Include intermediate rendered template (post-Handlebars, pre-MJML)\n              in output                                                [boolean]\n\nMore information:\n  -h, --help     Show help                                             [boolean]\n  -v, --version  Show version number                                   [boolean]\n\nAdditional documentation: https://premail.dev\n')))}s.isMDXComponent=!0}}]);