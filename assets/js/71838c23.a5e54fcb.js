"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[416],{3905:function(M,L,I){I.d(L,{Zo:function(){return u},kt:function(){return D}});var g=I(7294);function t(M,L,I){return L in M?Object.defineProperty(M,L,{value:I,enumerable:!0,configurable:!0,writable:!0}):M[L]=I,M}function i(M,L){var I=Object.keys(M);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);L&&(g=g.filter((function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable}))),I.push.apply(I,g)}return I}function C(M){for(var L=1;L<arguments.length;L++){var I=null!=arguments[L]?arguments[L]:{};L%2?i(Object(I),!0).forEach((function(L){t(M,L,I[L])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(I)):i(Object(I)).forEach((function(L){Object.defineProperty(M,L,Object.getOwnPropertyDescriptor(I,L))}))}return M}function j(M,L){if(null==M)return{};var I,g,t=function(M,L){if(null==M)return{};var I,g,t={},i=Object.keys(M);for(g=0;g<i.length;g++)I=i[g],L.indexOf(I)>=0||(t[I]=M[I]);return t}(M,L);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);for(g=0;g<i.length;g++)I=i[g],L.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(M,I)&&(t[I]=M[I])}return t}var e=g.createContext({}),N=function(M){var L=g.useContext(e),I=L;return M&&(I="function"==typeof M?M(L):C(C({},L),M)),I},u=function(M){var L=N(M.components);return g.createElement(e.Provider,{value:L},M.children)},A={inlineCode:"code",wrapper:function(M){var L=M.children;return g.createElement(g.Fragment,{},L)}},w=g.forwardRef((function(M,L){var I=M.components,t=M.mdxType,i=M.originalType,e=M.parentName,u=j(M,["components","mdxType","originalType","parentName"]),w=N(I),D=t,n=w["".concat(e,".").concat(D)]||w[D]||A[D]||i;return I?g.createElement(n,C(C({ref:L},u),{},{components:I})):g.createElement(n,C({ref:L},u))}));function D(M,L){var I=arguments,t=L&&L.mdxType;if("string"==typeof M||t){var i=I.length,C=new Array(i);C[0]=w;var j={};for(var e in L)hasOwnProperty.call(L,e)&&(j[e]=L[e]);j.originalType=M,j.mdxType="string"==typeof M?M:t,C[1]=j;for(var N=2;N<i;N++)C[N]=I[N];return g.createElement.apply(null,C)}return g.createElement.apply(null,I)}w.displayName="MDXCreateElement"},6009:function(M,L,I){I.r(L),I.d(L,{frontMatter:function(){return j},contentTitle:function(){return e},metadata:function(){return N},toc:function(){return u},default:function(){return w}});var g=I(7462),t=I(3366),i=(I(7294),I(3905)),C=["components"],j={sidebar_label:"An introduction to Premail",slug:"introduction-to-premail",title:""},e=void 0,N={unversionedId:"introduction",id:"introduction",title:"",description:"Premail",source:"@site/docs/00-introduction.md",sourceDirName:".",slug:"/introduction-to-premail",permalink:"/docs/introduction-to-premail",editUrl:"https://github.com/premail/website/tree/main/docs/00-introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"An introduction to Premail",slug:"introduction-to-premail",title:""},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/docs/overview/premail-features"}},u=[],A={toc:u};function w(M){var L=M.components,j=(0,t.Z)(M,C);return(0,i.kt)("wrapper",(0,g.Z)({},A,j,{components:L,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Premail",src:I(5116).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Premail is an easy-to-use component-based build system for MJML, the email\ntemplating language, with Handlebars templating, Sass styles, and extra\noptions.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mjml.io/"},"MJML")," is a markup language for writing bulletproof HTML\nemails. It consciously does not incorporate a build process. This is that build\nprocess."),(0,i.kt)("p",null,"Premail is component-based, and uses Handlebars for templating. Settings are\ndefined in YAML configuration files, and theming happens in a theme\nconfiguration file as well as (optionally) Sass files."),(0,i.kt)("p",null,"Email templates are all ",(0,i.kt)("a",{parentName:"p",href:"https://mjml.io/documentation/#validating-mjml"},"valid"),"\nunder ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mjmlio/mjml/releases"},"MJML version 4"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Results")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"One ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file will be rendered, as well as (optionally) a plain-text\nversion, ready to import into your emailer of choice.\n",(0,i.kt)("a",{parentName:"p",href:"https://refined-github-html-preview.kidonng.workers.dev/premail/premail/raw/main/src/example/designs/_default/dist/index.html"},"See an example of the default layout.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Not the right tool for you?")," We want you to be successful even if you don't\nchoose Premail, so we've compiled\n",(0,i.kt)("a",{parentName:"p",href:"/docs/resources/#projects"},"a list of similar projects"),". And if you're\ndeveloping a tool like Premail, let us know and we'll add it to the list!"))}w.isMDXComponent=!0},5116:function(M,L){L.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjY0MCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9InByZW1haWxfdGl0bGUgcHJlbWFpbF9kZXNjIj4KIDx0aXRsZSBpZD0icHJlbWFpbF90aXRsZSI+UHJlbWFpbDwvdGl0bGU+CiA8ZGVzYyBpZD0icHJlbWFpbF9kZXNjIj5Mb2dvIGZvciBQcmVtYWlsLmRldjwvZGVzYz4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyIgPgogICA8IVtDREFUQVsKICAgLmRpc2MgewogICBmaWxsOiAjY2RlNGQ5OwogICB9CiAgIC5jcmFuZSB7CiAgIGZpbGw6ICMwMDA7CiAgIH0KICAgLmhvaXN0IHsKICAgZmlsbDogIzAwMDsKICAgfQogICAudGV4dCB7CiAgIGZpbGw6ICMwMGI4NmY7CiAgIH0KICAgXV0+CiA8L3N0eWxlPgogPGEgaHJlZj0iaHR0cHM6Ly9wcmVtYWlsLmRldiIgaHJlZmxhbmc9ImVuIiB0cmFuc2Zvcm09Im1hdHJpeCg1Ljc4NzM1NDYsMCwwLDUuNzg3MzU0NiwtMzAuMjcwNCwyNC4wNzM0OCkiPgogIDxnIGNsYXNzPSJ0ZXh0IiByb2xlPSJwcmVzZW50YXRpb24iPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Ik0gNzQuMzEzLDkwLjcgViA1Ny43MiBoIDQuMzk0IGwgMC44OTYsMi4yNjEgcSAwLjgxMSwtMC42NCAxLjg3OCwtMS4yMzcgMS4wNjYsLTAuNTk3IDIuMzA0LC0wLjkzOSAxLjIzNywtMC4zODQgMi41NiwtMC4zODQgMi4xNzYsMCAzLjcxMiwwLjg1NCAxLjU3OCwwLjg1MyAyLjU2LDIuNDMyIDAuOTgxLDEuNTM2IDEuNDA4LDMuNzEyIDAuNDcsMi4xMzMgMC40Nyw0LjczNiAwLDMuNzU0IC0wLjgxMiw2LjQgLTAuNzY4LDIuNjAyIC0yLjU2LDMuOTY4IC0xLjc0OSwxLjM2NSAtNC43NzgsMS4zNjUgLTEuNzA3LDAgLTMuNDk5LC0wLjQ3IC0xLjc1LC0wLjQ2OSAtMy4yNDMsLTEuMjM3IFYgOTAuNyBaIE0gODQuNjgsNzYuNTM1IHEgMS4yMzcsMCAyLjI2MSwtMC42NCAxLjAyNCwtMC42ODMgMS42MjEsLTIuMjYxIDAuNjQsLTEuNTc5IDAuNjQsLTQuNDggMCwtMi43NzQgLTAuNTk3LC00LjQzOCAtMC41OTcsLTEuNjY0IC0xLjYyMSwtMi4zNDYgLTAuOTgyLC0wLjY4MyAtMi4yNjIsLTAuNjgzIC0xLjU3OCwwIC0yLjg1OCwwLjUxMiAtMS4yOCwwLjQ3IC0yLjI2MiwwLjk4MSB2IDExLjk0NyBxIDEuMTEsMC42NCAyLjQzMiwxLjAyNCAxLjMyMywwLjM4NCAyLjY0NiwwLjM4NCB6IiBhcmlhLWxhYmVsPSJwIiAvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Im0gOTkuNTYyLDg2Ljc3OCB2IC0yMi44NyBoIDQuMDk2IGwgMS4xOTUsMy42NyBxIDEuMzY1LC0xLjY2NCAzLjAyOSwtMi44MTYgMS42NjQsLTEuMTUyIDMuOTY4LC0xLjE1MiAwLjQ3LDAgMC45ODEsMC4wODUgMC41MTIsMC4wNDMgMC45MzksMC4xNzEgdiA1LjM3NiBxIC0wLjU5NywtMC4wODUgLTEuMjgsLTAuMTI4IC0wLjY4MywtMC4wNDMgLTEuMzIzLC0wLjA0MyAtMS4zMjIsMCAtMi40MzIsMC4yOTkgLTEuMDY2LDAuMjk5IC0yLjAwNSwwLjkzOSAtMC45MzksMC41OTcgLTEuODc3LDEuNTM2IHYgMTQuOTMzIHoiIGFyaWEtbGFiZWw9InIiIC8+CiAgICA8L2c+CiAgICA8Zz4KICAgICAgPHBhdGggZD0ibSAxMjcuNTU4LDg2Ljc3OCBxIC0zLjcxMiwwIC01LjkzLC0xLjAyNCAtMi4xNzYsLTEuMDI0IC0zLjE1OCwtMy41NDEgLTAuOTgsLTIuNTYgLTAuOTgsLTcuMDgzIDAsLTQuNjA4IDAuOTM4LC03LjEyNSAwLjkzOCwtMi41NiAzLjExNCwtMy41ODQgMi4xNzYsLTEuMDI0IDUuODg4LC0xLjAyNCAzLjI4NiwwIDUuMjQ4LDAuNjgyIDIuMDA2LDAuNjQgMi45MDIsMi4zNDcgMC45MzgsMS42NjQgMC45MzgsNC43MzYgMCwyLjE3NiAtMC44NTMsMy40OTkgLTAuODUzLDEuMjggLTIuNDc1LDEuODM0IC0xLjU3OCwwLjU1NSAtMy43NTQsMC41NTUgaCAtNi42OTkgcSAwLjA4NSwyLjEzMyAwLjU1NSwzLjQxMyAwLjUxMiwxLjIzOCAxLjc5MiwxLjc5MiAxLjMyMiwwLjU1NSAzLjg0LDAuNTU1IGggNi45MTIgdiAzLjExNSBxIC0xLjc1LDAuMzQxIC0zLjcxMiwwLjU5NyAtMS45MiwwLjI1NiAtNC41NjYsMC4yNTYgeiBNIDEyMi42OTQsNzMuODUgaCA2LjIzIHEgMS40OTMsMCAyLjE3NiwtMC41NTUgMC43MjUsLTAuNTk3IDAuNzI1LC0yLjEzMyAwLC0xLjQ5MyAtMC40MjcsLTIuMzQ3IC0wLjQyNiwtMC44NTMgLTEuNDA4LC0xLjE5NCAtMC45OCwtMC4zODQgLTIuNTYsLTAuMzg0IC0xLjc5MiwwIC0yLjgxNiwwLjU1NCAtMS4wMjQsMC41NTUgLTEuNDkzLDIuMDA2IC0wLjQyNywxLjQwOCAtMC40MjcsNC4wNTMgeiIgYXJpYS1sYWJlbD0iZSIgLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJtIDE0MS4zMTcsODYuNzc4IHYgLTIyLjg3IGggNC4zMDkgbCAwLjk4MSwyLjM5IHEgMS41NzksLTEuMTEgMy40NTYsLTEuOTIgMS45MiwtMC44NTMgNC41MjMsLTAuODUzIDIuMTMzLDAgMy41ODQsMC45MzggMS40OTMsMC44OTYgMi4yMTksMi4zNDcgMC45ODEsLTAuNzY4IDIuMzQ2LC0xLjQ5MyAxLjQwOCwtMC43NjggMi45ODcsLTEuMjggMS41NzksLTAuNTEyIDMuMTE1LC0wLjUxMiAyLjY0NSwwIDQuMjI0LDEuMDY2IDEuNjIxLDEuMDI0IDIuMzA0LDIuOTAyIDAuNjgyLDEuODM0IDAuNjgyLDQuMjY2IHYgMTUuMDE5IGggLTUuMjkgViA3Mi4xODYgcSAwLC0xLjIzNyAtMC40NywtMi4wOSAtMC40NjksLTAuODU0IC0xLjMyMiwtMS4zMjMgLTAuODExLC0wLjQ3IC0yLjAwNiwtMC40NyAtMS41MzYsMCAtMy4xMTQsMC41OTggLTEuNTM2LDAuNTk3IC0yLjgxNiwxLjQ1IDAuMTcsMC40MjcgMC4yMTMsMC45MzkgMC4wODUsMC41MTIgMC4wODUsMS4wMjQgdiAxNC40NjQgaCAtNS4yOSBWIDcyLjE4NiBxIDAsLTEuMjM3IC0wLjQ3LC0yLjA5IC0wLjQ2OSwtMC44NTQgLTEuMzIyLC0xLjMyMyAtMC44MTEsLTAuNDcgLTIuMDA2LC0wLjQ3IC0xLjEwOSwwIC0yLjA5LDAuMjE0IC0wLjkzOSwwLjIxMyAtMS43OTIsMC42NCAtMC44NTQsMC40MjYgLTEuNzUsMS4wMjQgdiAxNi41OTcgeiIgYXJpYS1sYWJlbD0ibSIgLz4KICAgIDwvZz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJtIDE4Ni40OCw4Ni43NzggcSAtMi41NiwwIC00LjE4MiwtMS41MzYgLTEuNjIyLC0xLjUzNiAtMS42MjIsLTQuMjI0IHYgLTEuOTIgcSAwLC0yLjY0NSAxLjc5MiwtNC4zMSAxLjgzNSwtMS42NjMgNS41OSwtMS42NjMgaCA2LjUyOCB2IC0yLjAwNiBxIDAsLTEuMTk0IC0wLjQyNywtMi4wMDUgLTAuNDI3LC0wLjgxIC0xLjUzNiwtMS4xOTUgLTEuMTEsLTAuNDI2IC0zLjM3LC0wLjQyNiBIIDE4Mi4zNCBWIDY0LjQyIHEgMS41OCwtMC40MjcgMy43MTIsLTAuNzI2IDIuMTM0LC0wLjM0MSA1LjA3OCwtMC4zNDEgMi44MTYsLTAuMDQzIDQuNzc4LDAuNjgzIDEuOTYzLDAuNjgyIDIuOTQ0LDIuMzA0IDEuMDI0LDEuNjIxIDEuMDI0LDQuNDM3IHYgMTUuNzQ0IGggLTQuMTM4IGwgLTAuODk2LC0yLjQ3NSBxIC0wLjI5OSwwLjI1NiAtMS4wNjcsMC42ODMgLTAuNzY4LDAuNDI3IC0xLjkyLDAuOTM5IC0xLjE1MiwwLjQ2OSAtMi41NiwwLjgxIC0xLjM2NSwwLjI5OSAtMi44MTYsMC4yOTkgeiBtIDIuNTYsLTMuNzEyIHEgMC41NTQsMCAxLjIzNiwtMC4xMjggbCAxLjQ1MSwtMC4zNDEgcSAwLjcyNSwtMC4yMTQgMS4zMjMsLTAuMzg0IDAuNjQsLTAuMjE0IDEuMDI0LC0wLjM4NCAwLjQyNiwtMC4xNzEgMC41MTIsLTAuMjE0IHYgLTUuOTczIGwgLTQuOTUsMC4yNTYgcSAtMS45NjIsMC4xNyAtMi44NTgsMS4wMjQgLTAuODU0LDAuODUzIC0wLjg1NCwyLjI2MSB2IDAuOTM5IHEgMCwxLjA2NyAwLjQyNywxLjc1IDAuNDcsMC42NCAxLjE1MiwwLjg5NSAwLjcyNSwwLjI1NiAxLjUzNiwwLjI5OSB6IiBhcmlhLWxhYmVsPSJhIiAvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Im0gMjA1LjkyNCw2MC4xNTcgcSAtMC44MSwwIC0wLjgxLC0wLjc2OCB2IC0zLjg4MyBxIDAsLTAuODUzIDAuODEsLTAuODUzIGggNC4wMTEgcSAwLjM4NCwwIDAuNTU1LDAuMjU2IDAuMjEzLDAuMjU2IDAuMjEzLDAuNTk3IHYgMy44ODMgcSAwLDAuNzY4IC0wLjc2OCwwLjc2OCB6IG0gLTAuNjgyLDI2LjQ5NiB2IC0yMi44NyBoIDUuMjkgdiAyMi44NyB6IiBhcmlhLWxhYmVsPSJpIiAvPgogICAgPC9nPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Im0gMjIyLjk1Nyw4Ni43NzggcSAtMi4yNjEsMCAtMy43OTcsLTAuNzY4IC0xLjQ5MywtMC43NjggLTIuMjYxLC0yLjM5IC0wLjcyNiwtMS42MiAtMC43MjYsLTQuMzA5IFYgNTQuMTM4IGggNS4yOSB2IDI0LjQ0OCBxIDAsMS41MzYgMC4zLDIuMzkgMC4zNCwwLjg1MyAwLjkzOCwxLjIzNyAwLjU5OCwwLjM0MSAxLjQ1LDAuNDY5IGwgMS45MiwwLjI1NiB2IDMuODQgeiIgYXJpYS1sYWJlbD0ibCIgLz4KICAgIDwvZz4KICA8L2c+CiAgPHBhdGggY2xhc3M9InVuZGVybGluZSIgcm9sZT0icHJlc2VudGF0aW9uIiBkPSJNIDk4LjQ5Niw5MS4yMjIgSCAyMjYuODM0IFYgOTIuOTMgSCA5OC40OTYgWiIgLz4KICA8cGF0aCBjbGFzcz0iY3JhbmUiIHJvbGU9InByZXNlbnRhdGlvbiIgZD0ibSA0NS41NTUsNy4xOTUgYyAtMC41MSwwIC0wLjk1NywwLjM0MiAtMS4wOTIsMC44MzQgbCAtMi45NjUsMTAuODU2IC0yMS45MjQsNS4zMzQgMC4wMTIsMC4wMzkgLTEzLjkyNCw0LjAyMiB2IDEuOTYgSCAxNi4wNiB2IC0xLjc0NyBoIDEuMTUgdiAxLjc0NiBoIDEwLjM5OCB2IC0xLjc0NiBoIDExLjYyIHYgNTkuMjY1IGggLTIuMzQ0IHYgMy40NjcgSCAyNi44OCB2IDEuNzA5IGggMzcuMzkgdiAtMS43MSBIIDU0LjA2NCB2IC0zLjQ2NiBoIC0yLjE4MyB2IC02Ljk1NSBoIDAuMDAyIFYgMjguNDk0IGggMjcuMzA2IHYgMS44MDkgaCAwLjk5NyB2IDEyLjY1NiBjIDAsMC4yMTUgMC4wNjUsMC40MjQgMC4xOTEsMC41OTggbCAyLjA0MSwyLjg1MSB2IDEuODM2IGEgMy40NDYsMy40NDYgMCAwIDAgLTIuMzA3LDMuMjQ2IDMuNDQsMy40NCAwIDAgMCAzLjQzOCwzLjQzNiBjIDEuMDkzLDAgMi4xMywtMC41MjggMi43NzUsLTEuNDEyIGEgMS4xMywxLjEzIDAgMCAwIC0wLjI0NiwtMS41OCAxLjEzLDEuMTMgMCAwIDAgLTEuNTgsMC4yNDYgMS4xNzUsMS4xNzUgMCAwIDEgLTIuMTIzLC0wLjY5IGMgMCwtMC42NDggMC41MjcsLTEuMTc0IDEuMTc0LC0xLjE3NCAwLjYyNSwwIDEuMTMsLTAuNTA2IDEuMTMsLTEuMTMyIHYgLTIuNzc2IGwgMi4wNDIsLTIuODUzIGMgMC4xMjUsLTAuMTc0IDAuMTkxLC0wLjM4MyAwLjE5MSwtMC41OTggViAzMC4zMDMgaCAxLjQ4NSB2IC0xLjgwOSBoIDUuMjM2IGEgMS4xMywxLjEzIDAgMCAwIDEuMDY0LC0wLjc1IGMgMC4xNjMsLTAuNDUgMC4wMjYsLTAuOTUgLTAuMzQzLC0xLjI1NCBMIDg1LjA0MSwxOC44MjIgQSAxLjEyNywxLjEyNyAwIDAgMCA4NC4zMjIsMTguNTY0IEggNjIuNDA2IEwgNDYuMTk3LDcuMzk2IDQ2LjE5NSw3LjM5OCBhIDEuMTI2LDEuMTI2IDAgMCAwIC0wLjY0LC0wLjIwMyB6IG0gMS45MDYsMy44MTkgMTAuOTU3LDcuNTUgaCAtOC44OTcgeiBtIC0xLjkwNiwxLjYwNSAxLjYyMyw1Ljk0NSBIIDQzLjkzIFogbSAtMi4yNDIsOC4yMDcgaCA0LjQ4MiBsIDEuNDc2LDUuNDA0IGggLTcuNDMzIHogbSA2LjgyOCwwIGggOC4yMyBsIC02Ljk0Myw0LjcxMSB6IG0gMTUuNDQ1LDAgaCAxNC45OTIgbCAtNy43NjIsNS4xNjIgeiBtIC0zLjU0OSwwLjI0NiA3LjIyNSw1LjE1OCBIIDU0LjQzNiBaIG0gMjIuMjEzLDAuMDMgNy4yMyw1LjE2MiBIIDc2LjQ4OCBsIDAuMDUxLC0wLjAzNCAwLjY2NiwtMC40NDMgMS45ODIsLTEuMzIgdiAwLjAwMiBsIDAuNDA5LC0wLjI3MiB6IE0gNDAuODE2LDIxLjM3OSAzOS40OTIsMjYuMjMgSCAyMC44NzUgWiBtIDAuNjcyLDcuMTEzIGggNi41MzMgbCAtNi41MzMsNi41MzUgeiBtIDguMTMzLDEuNjAyIHYgNi41MzMgaCAtNi41MzUgeiBtIDMyLjYyMSwwLjIwOSBoIDIuNjEzIHYgMTIuMzI0IGwgLTEuMzA2LDEuODI4IC0xLjMwNywtMS44MjggeiBNIDQzLjA4NiwzOC44OSBoIDYuNTM1IHYgNi41MzUgeiBtIC0xLjU5OCwxLjYgNi41MzMsNi41MzQgaCAtNi41MzMgeiBtIDAsOC43OTYgaCA2LjUzMyBsIC02LjUzMyw2LjUzNSB6IG0gOC4xMzMsMS42MDIgdiA2LjUzMyBoIC02LjUzNSB6IG0gLTYuNTM1LDguNzk3IGggNi41MzUgdiA2LjUzMyB6IG0gLTEuNTk4LDEuNiA2LjUzMyw2LjUzMiBoIC02LjUzMyB6IG0gMCw4Ljc5NiBoIDYuNTMzIGwgLTYuNTMzLDYuNTM1IHogbSA4LjEzMywxLjYgdiA2LjUzNSBoIC02LjUzNSB6IiAvPgogIDxwYXRoIGNsYXNzPSJob2lzdCIgcm9sZT0icHJlc2VudGF0aW9uIiBkPSJtIDgyLjc3LDUxLjc5IGggMS43ODUgViA2My4wMTQgSCA4Mi43NyBaIiAvPgo8L2E+Cjwvc3ZnPgo="}}]);