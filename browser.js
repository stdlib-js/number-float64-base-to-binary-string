// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Number.POSITIVE_INFINITY,r=Number,t=r.NEGATIVE_INFINITY,n=1023,i=Math.floor,a="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function u(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function s(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!u(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=s(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=s(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function g(e){return"string"==typeof e}var d=Math.abs,h=String.prototype.toLowerCase,m=String.prototype.toUpperCase,v=String.prototype.replace,b=/e\+(\d)$/,w=/e-(\d)$/,y=/^(\d+)$/,E=/^(\d+)e/,S=/\.0$/,_=/\.0*e/,T=/(\..*[^0])0*e/;function O(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!u(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":d(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=v.call(t,T,"$1e"),t=v.call(t,_,"e"),t=v.call(t,S,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,b,"e+0$1"),t=v.call(t,w,"e-0$1"),e.alternate&&(t=v.call(t,y,"$1."),t=v.call(t,E,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):h.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var V=String.fromCharCode,k=isNaN,I=Array.isArray;function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,i,a,o,u,c,l;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,c=0;c<e.length;c++)if(g(n=e[c]))o+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=s(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,n,i;for(t=[],i=0,n=N.exec(e);n;)(r=e.slice(i,N.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=N.lastIndex,n=N.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function C(e){var r,t,n;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var G=Object.prototype,M=G.toString,Z=G.__defineGetter__,W=G.__defineSetter__,L=G.__lookupGetter__,U=G.__lookupSetter__,X=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,t.get),o&&W&&W.call(e,r,t.set),e};function Y(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"number"==typeof e}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return B&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,H=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=q()?function(e){var r,t,n,i,a;if(null==e)return D.call(e);t=e[K],a=K,r=null!=(i=e)&&H.call(i,a);try{e[K]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[K]=t:delete e[K],n}:function(e){return D.call(e)},ee=r.prototype.toString,re=q();function te(e){return"object"==typeof e&&(e instanceof r||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function ne(e){return z(e)||te(e)}function ie(r){return r<e&&r>t&&i(n=r)===n;var n}function ae(e){return z(e)&&ie(e)}function oe(e){return te(e)&&ie(e.valueOf())}function ue(e){return ae(e)||oe(e)}function ce(e){return ae(e)&&e>=0}function se(e){return oe(e)&&e.valueOf()>=0}function le(e){return ce(e)||se(e)}function fe(e){return"string"==typeof e}Y(ne,"isPrimitive",z),Y(ne,"isObject",te),Y(ue,"isPrimitive",ae),Y(ue,"isObject",oe),Y(le,"isPrimitive",ce),Y(le,"isObject",se);var pe=String.prototype.valueOf,ge=q();function de(e){return"object"==typeof e&&(e instanceof String||(ge?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object String]"===Q(e)))}function he(e){return fe(e)||de(e)}Y(he,"isPrimitive",fe),Y(he,"isObject",de);var me=9007199254740991,ve=void 0!==String.prototype.repeat,be=String.prototype.repeat,we=ve?function(e,r){return be.call(e,r)}:function(e,r){var t,n;if(0===e.length||0===r)return"";for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t},ye=Math.ceil;function Ee(e,r,t){var n=(r-e.length)/t.length;return n<=0?e:(n=ye(n),e+we(t,n))}function Se(r){return r<e&&r>t&&i(n=r)===n;var n}function _e(e){return z(e)&&Se(e)}function Te(e){return te(e)&&Se(e.valueOf())}function Oe(e){return _e(e)||Te(e)}function je(e){return _e(e)&&e>=0}function xe(e){return Te(e)&&e.valueOf()>=0}function Ve(e){return je(e)||xe(e)}Y(Oe,"isPrimitive",_e),Y(Oe,"isObject",Te),Y(Ve,"isPrimitive",je),Y(Ve,"isObject",xe);var ke=9007199254740991,Ie=Math.ceil;function Pe(e,r,t){var n=(r-e.length)/t.length;return n<=0?e:(n=Ie(n),we(t,n)+e)}function Fe(r){return r<e&&r>t&&i(n=r)===n;var n}function Ne(e){return z(e)&&Fe(e)}function Re(e){return te(e)&&Fe(e.valueOf())}function $e(e){return Ne(e)||Re(e)}function Ae(e){return Ne(e)&&e>=0}function Ce(e){return Re(e)&&e.valueOf()>=0}function Ge(e){return Ae(e)||Ce(e)}function Me(e,r){if(!fe(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));if(!Ae(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));return we(e,r)}function Ze(e){for(var r,t="";e>0;)t=(r=e/2)===(e=i(r))?"0"+t:"1"+t;return t}Y($e,"isPrimitive",Ne),Y($e,"isObject",Re),Y(Ge,"isPrimitive",Ae),Y(Ge,"isObject",Ce);var We=1075;return function(r){var a,o,u,c,s,l,f;if(o=r<0||function(e){return 0===e&&1/e===t}(r)?"1":"0",r===e||r===t)return o+(c=Me("1",11))+(u=Me("0",52));if(function(e){return e!=e}(r))return o+(c=Me("1",11))+(u="1"+Me("0",51));if(0===r)return o+(c=Me("0",11))+(u=Me("0",52));if(l=(r=function(e){return Math.abs(e)}(r))-(s=i(r)),s=Ze(s),l=function(e){var r,t,n,i;if(r="",0===e)return r;for(i=We,n=0;n<We&&((t=2*e)>=1?(e=t-1,r+="1",i===We&&(i=n)):(e=t,r+="0"),!(1===t||n-i>54));n++);return r}(l),s)c=s.length-1;else{for(f=0;f<l.length;f++)if("1"===l[f]){a=f+1;break}c=-a}return u=s+l,c<0?(c<=-1023&&(a=1022),u=u.substring(a)):u=u.substring(1),c=function(e,r,t){var n;if(!fe(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));if(!je(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!fe(n=t))throw new TypeError(C("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(r>ke)throw new RangeError(C("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return Pe(e,r,n)}(c=Ze(c+n),11,"0"),u=function(e,r,t){var n;if(!fe(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));if(!ce(r))throw new TypeError(C("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!fe(n=t))throw new TypeError(C("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(r>me)throw new RangeError(C("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return Ee(e,r,n)}(u,52,"0").substring(0,52),o+c+u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).toBinaryString=r();
//# sourceMappingURL=browser.js.map
