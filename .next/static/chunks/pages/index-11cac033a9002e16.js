(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},5510:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(5893),i=n(9008),a=n(1664),o=n(1163);function c(){var e=(0,o.useRouter)();return(0,r.jsx)("div",{className:"bg-white shadow-md shadow-slate-300 py-4",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"text-2xl uppercase font-semibold tracking-normal",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"block bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600",children:"Couplean"})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"/"==e.pathname?"text-red-500 font-semibold border-b-2 border-dashed border-red-600":"text-slate-700",children:"Home"})}),(0,r.jsx)(a.default,{href:"/about",children:(0,r.jsx)("a",{className:"/about"==e.pathname?"text-red-500 font-semibold border-b-2 border-dashed border-red-500 ml-5":"text-slate-700 ml-5",children:"About"})})]})]})})})}function l(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("link",{rel:"icon",href:"favicon.ico"})]}),(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:"container mt-8",children:e.children})]})}},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,s=void 0!==a&&a,d=e.priority,f=void 0!==d&&d,g=e.loading,y=e.lazyBoundary,w=void 0===y?"200px":y,x=e.className,j=e.quality,k=e.width,A=e.height,_=e.objectFit,O=e.objectPosition,z=e.onLoadingComplete,I=e.loader,L=void 0===I?N:I,R=e.placeholder,C=void 0===R?"empty":R,P=e.blurDataURL,M=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in M&&(M.layout&&(D=M.layout),delete M.layout);var q="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var T=v(t)?t.default:t;if(!T.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(T)));if(P=P||T.blurDataURL,q=T.src,(!D||"fill"!==D)&&(A=A||T.height,k=k||T.width,!T.height||!T.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(T)))}t="string"===typeof t?t:q;var U=S(k),B=S(A),H=S(j),W=!f&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,W=!1);h.has(t)&&(W=!1);0;var K,F=i(u.useIntersection({rootMargin:w,disabled:!W}),2),G=F[0],V=F[1],J=!W||V,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:O},$="blur"===C?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(P,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===D)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof U&&"undefined"!==typeof B){var ee=B/U,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===D?(X.display="block",X.position="relative",Q=!0,Z.paddingTop=te):"intrinsic"===D?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Q=!0,Z.maxWidth="100%",K='<svg width="'.concat(U,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(X.display="inline-block",X.position="relative",X.width=U,X.height=B)}else 0;var ne={src:m,srcSet:void 0,sizes:void 0};J&&(ne=E({src:t,unoptimized:s,layout:D,width:U,quality:H,sizes:n,loader:L}));var re=t;0;0;var ie=(r(b={},"imagesrcset",ne.srcSet),r(b,"imagesizes",ne.sizes),b);return o.default.createElement("span",{style:X},Q?o.default.createElement("span",{style:Z},K?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(l.toBase64(K))}):null):null,o.default.createElement("img",Object.assign({},M,ne,{decoding:"async","data-nimg":D,className:x,ref:function(e){G(e),function(e,t,n,r,i){if(!e)return;var a=function(){e.src!==m&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),i){var n=e.naturalWidth,a=e.naturalHeight;i({naturalWidth:n,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,re,0,C,z)},style:p({},Y,$)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},M,E({src:t,unoptimized:s,layout:D,width:U,quality:H,sizes:n,loader:L}),{decoding:"async","data-nimg":D,style:Y,className:x,loading:g||"lazy"}))),f?o.default.createElement(c.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ie))):null)};var o=f(n(7294)),c=f(n(5443)),l=n(6978),s=n(5809),u=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t).concat(_(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(_(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(_(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var b,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,w=y.deviceSizes,x=y.imageSizes,j=y.loader,k=y.path,A=(y.domains,a(w).concat(a(x)));function E(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,a(o));return{widths:A.filter((function(e){return e>=w[0]*l})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(i,r,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:u[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var t=g.get(j);if(t)return t(p({root:k},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(j))}function _(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),c=n(387),l=n(7190);var s={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,i=c.useRouter(),d=a.default.useMemo((function(){var t=r(o.resolveHref(i,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?o.resolveHref(i,e.as):a||n}}),[i,e.href,e.as]),f=d.href,p=d.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,w=r(l.useIntersection({rootMargin:"200px"}),2),x=w[0],j=w[1],k=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);a.default.useEffect((function(){var e=j&&n&&o.isLocalURL(f),t="undefined"!==typeof b?b:i&&i.locale,r=s[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(i,f,p,{locale:t})}),[p,f,j,b,n,i]);var A={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}))}(e,i,f,p,m,g,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(f)&&u(i,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:i&&i.locale,S=i&&i.isLocaleDomain&&o.getDomainLocale(p,E,i&&i.locales,i&&i.domainLocales);A.href=S||o.addBasePath(o.addLocale(p,E,i&&i.defaultLocale))}return a.default.cloneElement(t,A)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),s=r(i.useState(!1),2),u=s[0],d=s[1],f=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return i.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=n(7294),a=n(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return l}});var r=n(5893),i=n(5510),a=n(5675),o=n(1664),c=!0;function l(e){var t=e.ppcp,n=t.result.ppcwe,c=t.result.ppcwo;return(0,r.jsxs)(i.Z,{title:"Couplean \u2764",children:[(0,r.jsxs)("div",{className:"text-center font-semibold text-3xl mb-6",children:["Get any"," ",(0,r.jsx)("span",{className:"bg-gradient-to-br text-transparent bg-clip-text from-red-600 via-pink-600 to-purple-600",children:"Random Couple."}),(0,r.jsx)("p",{className:"text-lg font-normal text-slate-600",children:"Random Couple adalah sebuah website untuk mendapatkan foto Couple secara Random."})]}),(0,r.jsx)("div",{className:"flex justify-center pb-8",children:(0,r.jsxs)("div",{className:"md:w-8/12 container bg-white rounded-2xl drop-shadow-md p-5",children:[(0,r.jsxs)("div",{className:"md:grid grid-cols-2 gap-5",children:[(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(a.default,{className:"rounded-lg ring-2 ring-pink-500",src:c,width:1e3,height:1e3,alt:"left"})}),(0,r.jsx)("div",{className:"col-span-1",children:(0,r.jsx)(a.default,{className:"rounded-lg ring-2 ring-pink-500",src:n,width:1e3,height:1e3,alt:"left"})})]}),(0,r.jsx)("div",{className:"flex justify-center mt-3",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"bg-pink-500 w-fit font-semibold text-lg py-2 px-5 rounded-full text-white cursor-pointer",children:"Refresh"})})})]})}),(0,r.jsxs)("div",{className:"text-center",children:["Developed with \u2764 by ",(0,r.jsx)("strong",{children:"Rizki Maulana"})]})]})}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);