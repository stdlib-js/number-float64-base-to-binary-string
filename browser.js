// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Number.POSITIVE_INFINITY,r=Number,t=r.NEGATIVE_INFINITY,n=1023,i=Math.floor,a="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function u(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,m=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,E=/\.0$/,S=/\.0*e/,_=/(\..*[^0])0*e/;function T(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,_,"$1e"),t=m.call(t,S,"e"),t=m.call(t,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,b,"e+0$1"),t=m.call(t,v,"e-0$1"),e.alternate&&(t=m.call(t,w,"$1."),t=m.call(t,y,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function x(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,j=isNaN,k=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,o,u,s,l,f,g,d,h;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,j(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=T(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+x(h):x(h)+f)),o+=n.arg||"",u+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){var r,t;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[N(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var $=Object.prototype,A=$.toString,C=$.__defineGetter__,G=$.__defineSetter__,Z=$.__lookupGetter__,M=$.__lookupSetter__,W=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(e,r)||M.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&G&&G.call(e,r,t.set),e};function L(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,B=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=Y()?function(e){var r,t,n,i,a;if(null==e)return z.call(e);t=e[D],a=D,r=null!=(i=e)&&B.call(i,a);try{e[D]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[D]=t:delete e[D],n}:function(e){return z.call(e)},J=r.prototype.toString,K=Y();function Q(e){return"object"==typeof e&&(e instanceof r||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function ee(e){return U(e)||Q(e)}function re(r){return r<e&&r>t&&i(n=r)===n;var n}function te(e){return U(e)&&re(e)}function ne(e){return Q(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return te(e)&&e>=0}function oe(e){return ne(e)&&e.valueOf()>=0}function ue(e){return ae(e)||oe(e)}function se(e){return"string"==typeof e}L(ee,"isPrimitive",U),L(ee,"isObject",Q),L(ie,"isPrimitive",te),L(ie,"isObject",ne),L(ue,"isPrimitive",ae),L(ue,"isObject",oe);var ce=String.prototype.valueOf,le=Y();function fe(e){return"object"==typeof e&&(e instanceof String||(le?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function pe(e){return se(e)||fe(e)}L(pe,"isPrimitive",se),L(pe,"isObject",fe);var ge=9007199254740991,de=void 0!==String.prototype.repeat,he=String.prototype.repeat,me=de?function(e,r){return he.call(e,r)}:function(e,r){var t,n;if(0===e.length||0===r)return"";for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t},be=Math.ceil;function ve(e,r,t){var n;if(!se(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ae(r))throw new TypeError(R("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!se(n=t))throw new TypeError(R("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(r>ge)throw new RangeError(R("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return function(e,r,t){var n=(r-e.length)/t.length;return n<=0?e:(n=be(n),e+me(t,n))}(e,r,n)}function we(e,r,t){var n;if(!se(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ae(r))throw new TypeError(R("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!se(n=t))throw new TypeError(R("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(r>ge)throw new RangeError(R("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return function(e,r,t){var n=(r-e.length)/t.length;return n<=0?e:(n=be(n),me(t,n)+e)}(e,r,n)}function ye(e,r){if(!se(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ae(r))throw new TypeError(R("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return me(e,r)}function Ee(e){for(var r,t="";e>0;)t=(r=e/2)===(e=i(r))?"0"+t:"1"+t;return t}var Se=1075,_e=54;return function(r){var a,o,u,s,c,l,f;if(o=r<0||function(e){return 0===e&&1/e===t}(r)?"1":"0",r===e||r===t)return o+(s=ye("1",11))+(u=ye("0",52));if(function(e){return e!=e}(r))return o+(s=ye("1",11))+(u="1"+ye("0",51));if(0===r)return o+(s=ye("0",11))+(u=ye("0",52));if(l=(r=function(e){return Math.abs(e)}(r))-(c=i(r)),c=Ee(c),l=function(e){var r,t,n,i;if(r="",0===e)return r;for(i=Se,n=0;n<Se&&((t=2*e)>=1?(e=t-1,r+="1",i===Se&&(i=n)):(e=t,r+="0"),!(1===t||n-i>_e));n++);return r}(l),c)s=c.length-1;else{for(f=0;f<l.length;f++)if("1"===l[f]){a=f+1;break}s=-a}return u=c+l,s<0?(s<=-1023&&(a=1022),u=u.substring(a)):u=u.substring(1),o+(s=we(s=Ee(s+n),11,"0"))+(u=ve(u,52,"0").substring(0,52))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).toBinaryString=r();
//# sourceMappingURL=browser.js.map