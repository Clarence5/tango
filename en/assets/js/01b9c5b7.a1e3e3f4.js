"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4065],{9562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7896),o=(n(2784),n(876));n(2896);const r={},l="Quick Start",i={unversionedId:"designer/quick-start",id:"designer/quick-start",title:"Quick Start",description:"Tango is a front-end framework for quickly building low-code tools. With Tango, you can quickly build a basic low-code designer with just a small amount of code. This article will help you use Tango to implement a basic low-code visual designer.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/designer/quick-start.mdx",sourceDirName:"designer",slug:"/designer/quick-start",permalink:"/tango/en/docs/designer/quick-start",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/quick-start.mdx",tags:[],version:"current",frontMatter:{},sidebar:"designer",previous:{title:"Introduction",permalink:"/tango/en/docs/intro"}},s={},c=[{value:"Environment",id:"environment",level:2},{value:"Start Tango Playground",id:"start-tango-playground",level:2},{value:"Run the local sandbox",id:"run-the-local-sandbox",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Tango is a front-end framework for quickly building low-code tools. With Tango, you can quickly build a basic low-code designer with just a small amount of code. This article will help you use Tango to implement a basic low-code visual designer."),(0,o.kt)("admonition",{title:"Disclaimer",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The low-code platform based on the Tango low-code engine has already served many internal business development scenarios within NetEase Cloud Music. Due to the large amount of code separation work involved in open source work, the current open source version is an alpha demo version of the low-code engine, and the API may be unstable. It is not recommended to use it in a production environment. We expect to release a production-ready version in Q4 2023.")),(0,o.kt)("h2",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install node >= 16.0.0 : ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,o.kt)("li",{parentName:"ul"},"Install npm 8.x or yarn 1.x: ",(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/getting-started"},"https://classic.yarnpkg.com/en/docs/getting-started"))),(0,o.kt)("h2",{id:"start-tango-playground"},"Start Tango Playground"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"clone the repository",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/NetEase/tango.git\n"))),(0,o.kt)("li",{parentName:"ol"},"add the local development domain to the hosts file.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-hosts"},"127.0.0.1 local.netease.com\n"))),(0,o.kt)("li",{parentName:"ol"},"install dependencies and run the Tango Playground",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn install\nyarn start\n"))),(0,o.kt)("li",{parentName:"ol"},"open your browser to run ",(0,o.kt)("a",{parentName:"li",href:"https://local.netease.com:6006"},"https://local.netease.com:6006")," , should allow insecure certificates.")),(0,o.kt)("h2",{id:"run-the-local-sandbox"},"Run the local sandbox"),(0,o.kt)("p",null,"In addition to starting the playground of Tango, local development also requires a usable sandbox environment to host the designer."),(0,o.kt)("p",null,"If there is no available online sandbox, you can complete the development by starting a sandbox locally; if there is already an online sandbox and the sandbox shares the top-level domain name with the local playground, please directly jump to step 7 and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"bundlerURL")," to the address of the online sandbox."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"clone the repository",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/NetEase/codesandbox-client.git\n"))),(0,o.kt)("li",{parentName:"ol"},"update ",(0,o.kt)("inlineCode",{parentName:"li"},"Caddyfile"),"\uff0cchange ",(0,o.kt)("inlineCode",{parentName:"li"},":8080")," to the domain name of playground app\uff0ce.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"local.netease.com")),(0,o.kt)("li",{parentName:"ol"},"add the domain names to the ",(0,o.kt)("inlineCode",{parentName:"li"},"hosts")," file",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-hosts"},"127.0.0.1 local.netease.com\n"))),(0,o.kt)("li",{parentName:"ol"},"install dependencies and build the sandbox",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn install\nyarn build:deps\nyarn build:sandpack\n"))),(0,o.kt)("li",{parentName:"ol"},"If you do not have Caddy locally, you can go to ",(0,o.kt)("a",{parentName:"li",href:"https://caddyserver.com/download"},"https://caddyserver.com/download")," to download it.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"caddy run\n"))),(0,o.kt)("li",{parentName:"ol"},"Open your browser to visit ",(0,o.kt)("a",{parentName:"li",href:"https://local.netease.com:8443"},"https://local.netease.com:8443")," , also allow insecure certificates"),(0,o.kt)("li",{parentName:"ol"},"update ",(0,o.kt)("inlineCode",{parentName:"li"},"apps/playground/src/pages/index.tsx"),", find ",(0,o.kt)("inlineCode",{parentName:"li"},"<Sandbox />")," component, change ",(0,o.kt)("inlineCode",{parentName:"li"},"bundlerURL")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://local.netease.com:8443"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Sandbox bundlerURL="https://local.netease.com:8443" />\n'))),(0,o.kt)("li",{parentName:"ol"},"Go back to the playground page and refresh. Now, the playground will use the sandbox you specified to run the designer.")),(0,o.kt)("p",null,"If you have Docker locally, you can modify steps 4-5 above to use Docker to build and launch the image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t tango-codesandbox .\ndocker run -p 8443:8443 tango-codesandbox\n")))}u.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);