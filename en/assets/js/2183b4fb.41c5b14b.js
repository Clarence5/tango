"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9779],{6643:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2784);const a={},l={};a&&a.children&&a.children.forEach((e=>{e.children.forEach((e=>{e.name&&(l[e.name]=e)}))}));const o=function(e){let t;switch(void 0===e&&(e={}),e.type){case"union":t="union";break;case"array":t=`${o(e.elementType)}[]`;break;default:t=e.name}return t};function i(e){let{html:t}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}const c=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,t)=>"Method"===t.kindString?"function":o(t.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,t)=>t.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(i,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function u(e){const{name:t}=e,n=l[t];if(!n)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",t);let a=[];return a="reflection"===n.type?.type?n.type.declaration.children:n.children,r.createElement(d,{title:t,dataSource:a,columns:c,rowKey:"id"})}function d(e){let{title:t,dataSource:n,columns:a,rowKey:l}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},t&&r.createElement("caption",null,t),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(a),function(e,t,n){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[n]},t.map(((t,n)=>r.createElement("td",{key:t.dataIndex},function(e,t,n){let{dataIndex:r,render:a}=e;const l=function(e,t){if(!t)return;return t.split(".").reduce(((e,t)=>e[t]),e)}(t,r);if("function"==typeof a)return a(l,t,n);return l}(t,e,n))))):null)))}(n,a,l))}},2404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7896),a=(n(2784),n(876)),l=n(6643);const o={},i="DesignerPanel \u8bbe\u8ba1\u5668\u5e03\u5c40\u5bb9\u5668",c={unversionedId:"designer/modules/designer-panel",id:"designer/modules/designer-panel",title:"DesignerPanel \u8bbe\u8ba1\u5668\u5e03\u5c40\u5bb9\u5668",description:"\u8bbe\u8ba1\u5668\u7684\u4e3b\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7684\u4f4e\u4ee3\u7801\u8bbe\u8ba1\u5668\u7684\u5e03\u5c40\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u901a\u8fc7\u6b64\u5e03\u5c40\u5bb9\u5668\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u8bbe\u8ba1\u5668\u5e03\u5c40\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/designer/modules/designer-panel.mdx",sourceDirName:"designer/modules",slug:"/designer/modules/designer-panel",permalink:"/tango/en/docs/designer/modules/designer-panel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/modules/designer-panel.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"designerpanel-\u8bbe\u8ba1\u5668\u5e03\u5c40\u5bb9\u5668"},"DesignerPanel \u8bbe\u8ba1\u5668\u5e03\u5c40\u5bb9\u5668"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u7684\u4e3b\u6846\u67b6\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u672c\u7684\u4f4e\u4ee3\u7801\u8bbe\u8ba1\u5668\u7684\u5e03\u5c40\u5bb9\u5668\uff0c\u4f60\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u901a\u8fc7\u6b64\u5e03\u5c40\u5bb9\u5668\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u8bbe\u8ba1\u5668\u5e03\u5c40\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,a.kt)(l.Z,{name:"DesignerPanelProps",mdxType:"TypesTable"}))}m.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);