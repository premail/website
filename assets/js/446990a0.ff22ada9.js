"use strict";(self.webpackChunkPremail_dev=self.webpackChunkPremail_dev||[]).push([[3709],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=l,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},6396:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(7462),l=n(7294),r=n(2389),i=n(9443);var o=function(){var t=(0,l.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},p=n(3616),d=n(6010),s="tabItem_vU9c";function m(t){var e,n,r,i=t.lazy,m=t.block,u=t.defaultValue,c=t.values,g=t.groupId,f=t.className,h=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:h.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,p.lx)(k,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(e=null!=u?u:null==(n=h.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(r=h[0])?void 0:r.props.value;if(null!==N&&!k.some((function(t){return t.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),v=y.tabGroupChoices,x=y.setTabGroupChoices,w=(0,l.useState)(N),C=w[0],j=w[1],E=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=v[g];null!=T&&T!==C&&k.some((function(t){return t.value===T}))&&j(T)}var M=function(t){var e=t.currentTarget,n=E.indexOf(e),a=k[n].value;a!==C&&(O(e),j(a),null!=g&&x(g,a))},_=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=E.indexOf(t.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var l=E.indexOf(t.currentTarget)-1;n=E[l]||E[E.length-1]}null==(e=n)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},f)},k.map((function(t){var e=t.value,n=t.label,r=t.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return E.push(t)},onKeyDown:_,onFocus:M,onClick:M},r,{className:(0,d.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===e})}),null!=n?n:e)}))),i?(0,l.cloneElement)(h.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function u(t){var e=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(e)},t))}},7770:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return g}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=n(6396),o=n(8215),p=["components"],d={title:"MJML Signoff",slug:"mjml-signoff"},s=void 0,m={unversionedId:"components/signoff",id:"components/signoff",title:"MJML Signoff",description:"\x3c!-- This component's documentation and README need to stay in sync. Make sure",source:"@site/docs/02-components/03-signoff.mdx",sourceDirName:"02-components",slug:"/components/mjml-signoff",permalink:"/docs/components/mjml-signoff",editUrl:"https://github.com/premail/website/tree/main/docs/02-components/03-signoff.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MJML Signoff",slug:"mjml-signoff"},sidebar:"tutorialSidebar",previous:{title:"MJML Bullet List",permalink:"/docs/components/mjml-bullet-list"},next:{title:"Support",permalink:"/docs/support-project-help"}},u=[{value:"Why a custom component?",id:"why-a-custom-component",children:[{value:"Example use",id:"example-use",children:[],level:3}],level:2},{value:"&lt;mj-signoff&gt; options",id:"mj-signoff-options",children:[],level:2},{value:"Alternatives",id:"alternatives",children:[],level:2}],c={toc:u};function g(t){var e=t.components,d=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,d,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Included in Premail")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"MJML Signoff is included automatically in Premail. It is also available\nseparately via ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/premail/mjml-signoff"},"GitHub")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mjml-signoff"},"npm")," for use in any MJML project."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"why-a-custom-component"},"Why a custom component?"),(0,r.kt)("p",null,'A common best practice in emails is to include a photo along side your "signoff"\n(such as "Best, Tamara").'),(0,r.kt)("p",null,'Getting images to "float" alongside text, including in mobile contexts, can be\ntricky. ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<mj-signoff>"))," simplifies this."),(0,r.kt)("h3",{id:"example-use"},"Example use"),(0,r.kt)("p",null,"An example of this can be found in the default design's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/premail/premail/tree/main/src/example/designs/_default/content/signoff.hbs"},(0,r.kt)("inlineCode",{parentName:"a"},"content/signoff.hbs")),"\ntemplate:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"mjml",label:"MJML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<mj-signoff\n  closing="Thank you,"\n  name="John Q. Public"\n  title="Wild and Crazy Guy"\n  image-src="https://picsum.photos/75/100"\n  image-width="75px"\n  image-height="100px"\n  image-alt=""\n>\n  <p><a href="https://example.com">Example, Inc.</a></p>\n</mj-signoff>\n'))),(0,r.kt)(o.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("p",null,"Unminified HTML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="component-signoff" style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">\n  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">\n    <tbody>\n      <tr>\n        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:18px;padding-left:18px;padding-right:18px;padding-top:0px;text-align:center;">\n          \x3c!--[if mso | IE]>\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n          <tr>\n          <td class="" width="600px">\n          <table align="center" border="0" cellpadding="0" cellspacing="0" class="signoff-outlook" role="presentation" style="width:564px;" width="564">\n          <tr>\n          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">\n          <![endif]--\x3e\n            <div class="signoff" style="margin:0px auto;max-width:564px;">\n              <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">\n                <tbody>\n                  <tr>\n                    <td style="direction:ltr;font-size:0px;padding:10px 0;text-align:left;">\n                      \x3c!--[if mso | IE]>\n                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                      <tr>\n                      <td class="column-outlook signoff__image-wrapper-outlook" style="vertical-align:top;width:75px;">\n                      <![endif]--\x3e\n                        <div class="mj-column-px-75 mj-outlook-group-fix column signoff__image-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">\n                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">\n                            <tbody>\n                              <tr>\n                                <td align="center" class="signoff__image" style="font-size:0px;padding:0;word-break:break-word;">\n                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">\n                                    <tbody>\n                                      <tr>\n                                        <td style="width:75px;"> <img alt=""height="100" src="https://picsum.photos/75/100" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;font-size:13px;" width="75">\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      \x3c!--[if mso | IE]>\n                      </td>\n                      <td class="column-outlook signoff__text-wrapper-outlook" style="vertical-align:top;width:282px;">\n                      <![endif]--\x3e\n                        <div class="mj-column-per-50 mj-outlook-group-fix column signoff__text-wrapper" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">\n                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">\n                            <tbody>\n                              <tr>\n                                <td align="left" class="signoff__text" style="font-size:0px;padding:0 10px;word-break:break-word;">\n                                  <div style="font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">\n                                    <p class="signoff__closing" style="margin-top:0;margin-left:0;margin-right:0;margin-bottom:18px;font-size:18px;mso-line-height-rule:exactly;line-height:1;">Thank you,</p>\n                                    <p class="signoff__name" style="margin-top:0;margin-left:0;margin-right:0;font-size:18px;margin-bottom:0;mso-line-height-rule:exactly;line-height:1;">John Q. Public</p>\n                                    <p class="signoff__title" style="margin-top:0;margin-left:0;margin-right:0;font-size:18px;margin-bottom:0;mso-line-height-rule:exactly;line-height:1;">Wild and Crazy Guy</p>\n                                    <div class="signoff__custom">\n                                      <p style="margin-top:0;margin-left:0;margin-right:0;margin-bottom:18px;font-size:18px;mso-line-height-rule:exactly;line-height:1;">\n                                        <a href="https://example.com" style="font-weight:bold;text-decoration:underline;color:purple;">Example, Inc.</a>\n                                      </p>\n                                    </div>\n                                  </div>\n                                </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      \x3c!--[if mso | IE]>\n                      </td>\n                      </tr>\n                      </table>\n                      <![endif]--\x3e\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          \x3c!--[if mso | IE]>\n          </td>\n          </tr>\n          </table>\n          </td>\n          </tr>\n          </table>\n          <![endif]--\x3e\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'))),(0,r.kt)(o.Z,{value:"rendered",label:"Rendered component",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of generated markup from the MJML Signoff component",src:n(4077).Z})))),(0,r.kt)("p",null,"Strings cannot contain HTML elements, however any content within the element\nitself is placed in the text column below the optional strings, as demonstrated\nabove. Styling options are also provided in Premail's\n",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/usage/explore-design-structure/#theme"},"theme settings"),"."),(0,r.kt)("h2",{id:"mj-signoff-options"},"<mj-signoff",">"," options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"option"),(0,r.kt)("th",{parentName:"tr",align:null},"unit"),(0,r.kt)("th",{parentName:"tr",align:null},"details"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"closing")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional closing, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Thank you,")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional name, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"John Q. Public")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional title, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Wild and Crazy Guy")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title2")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional title line two, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"ACME Corp.")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title3")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional title line three, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"(202) 555-1212")),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"section-padding")),(0,r.kt)("td",{parentName:"tr",align:null},"pixels"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to entire element"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10px 0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"section-align")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:null},"Alignment of element as a whole"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background-color")),(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to entire element"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-position")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:null},"Where the image should appear relative to the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-padding")),(0,r.kt)("td",{parentName:"tr",align:null},"pixels"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies only to the image column"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-src")),(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Location of image"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-width")),(0,r.kt)("td",{parentName:"tr",align:null},"pixels"),(0,r.kt)("td",{parentName:"tr",align:null},"Width of image"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-height")),(0,r.kt)("td",{parentName:"tr",align:null},"pixels"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of image"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image-alt")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative text for image (you may legitimately wish to leave this blank; see ",(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/images.html#a-graphical-representation-of-some-of-the-surrounding-text"},"the spec for graphical representation"),", ",(0,r.kt)("a",{parentName:"td",href:"https://html.spec.whatwg.org/multipage/images.html#a-purely-decorative-image-that-doesn't-add-any-information"},"decorative images")," and ",(0,r.kt)("a",{parentName:"td",href:"https://webaim.org/techniques/alttext/#context"},"example 2 here"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"text-column-padding")),(0,r.kt)("td",{parentName:"tr",align:null},"pixels"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies only to the text column"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0 10px"))))),(0,r.kt)("h2",{id:"alternatives"},"Alternatives"),(0,r.kt)("p",null,"Instead of using this component, you can use the\n",(0,r.kt)("a",{parentName:"p",href:"https://documentation.mjml.io/#mj-group"},(0,r.kt)("inlineCode",{parentName:"a"},"<mj-group>"))," element, but note its\nwarning for iOS 9."),(0,r.kt)("p",null,"If you are not using an image in your sign-off, or intend for the image to be on\na line without text wrapping around it (such as an image of a signature), you\ncan simply use MJML's ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.mjml.io/#mj-text"},(0,r.kt)("inlineCode",{parentName:"a"},"<mj-text>")),"\nelement."))}g.isMDXComponent=!0},4077:function(t,e,n){e.Z=n.p+"assets/images/mjml-signoff-screenshot-cacecff6ba748fe0e3097de33a92cd28.png"}}]);