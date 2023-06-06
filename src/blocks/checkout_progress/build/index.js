!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=41)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.blockEditor},15:function(e){e.exports=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"genero/checkout-progress","title":"WooCommerce Checkout Progress","description":"Display the checkout progress","icon":"controls-forward","category":"woocommerce-genero","supports":{"reusable":false,"html":false,"align":true},"editorScript":"file:./index.js"}')},2:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=window.wp.primitives},4:function(e,t){e.exports=window.wp.blocks},41:function(e,t,r){e.exports=r(64)},5:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(2),o=r.n(n),c=r(0),i=r(3);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={position:"absolute",top:0,left:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center"};function a(e){var t=e.height,r=void 0===t?1:t,n=e.isOverlay,o=void 0!==n&&n;return Object(c.createElement)("div",{style:l({border:"dashed 1px currentColor",opacity:.4},o?u:{})},Object(c.createElement)(i.SVG,{className:"components-placeholder__illustration",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 ".concat(60*r),preserveAspectRatio:"none",style:o?{height:"100%",width:"100%"}:{}},Object(c.createElement)(i.Path,{vectorEffect:"non-scaling-stroke",d:"M60 ".concat(60*r," 0 0"),style:{stroke:"currentColor",strokeDasharray:3}})))}function p(e){var t=e.height,r=e.children,n=!t&&r||t&&!r;return Object(c.createElement)("div",{style:{position:"relative",width:"100%"}},Object(c.createElement)(a,{height:t,isOverlay:n}),Object(c.createElement)("div",{style:n?{}:u},r))}},6:function(e,t){e.exports=window.wp.i18n},64:function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),c=r(0),i=(r(6),r(4)),s=r(1),l=r(5);var u=function(){var e=Object(s.useBlockProps)();return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",e,Object(c.createElement)(l.a,null,"Checkout Progress")))},a=r(15);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(i.registerBlockType)(a.name,f(f({},a),{},{edit:u,save:function(){return Object(c.createElement)(s.InnerBlocks.Content,null)}}))}});