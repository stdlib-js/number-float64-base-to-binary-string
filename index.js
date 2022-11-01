// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Number.POSITIVE_INFINITY,r=Number,t=r.NEGATIVE_INFINITY,n=1023,i=Math.floor,a="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,u=Object.prototype,s=u.toString,c=u.__defineGetter__,l=u.__defineSetter__,f=u.__lookupGetter__,g=u.__lookupSetter__,p=function(){try{return a({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===s.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(e,r)||g.call(e,r)?(n=e.__proto__,e.__proto__=u,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&c&&c.call(e,r,t.get),o&&l&&l.call(e,r,t.set),e};function d(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function h(e){return"number"==typeof e}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return m&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString,v=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"",E=b()?function(e){var r,t,n,i,a;if(null==e)return w.call(e);t=e[y],a=y,r=null!=(i=e)&&v.call(i,a);try{e[y]=void 0}catch(r){return w.call(e)}return n=w.call(e),r?e[y]=t:delete e[y],n}:function(e){return w.call(e)},_=r.prototype.toString,S=b();function T(e){return"object"==typeof e&&(e instanceof r||(S?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Number]"===E(e)))}function x(e){return h(e)||T(e)}function V(r){return r<e&&r>t&&i(n=r)===n;var n}function j(e){return h(e)&&V(e)}function k(e){return T(e)&&V(e.valueOf())}function O(e){return j(e)||k(e)}function I(e){return j(e)&&e>=0}function F(e){return k(e)&&e.valueOf()>=0}function P(e){return I(e)||F(e)}function R(e){return"string"==typeof e}d(x,"isPrimitive",h),d(x,"isObject",T),d(O,"isPrimitive",j),d(O,"isObject",k),d(P,"isPrimitive",I),d(P,"isObject",F);var N=String.prototype.valueOf,$=b();function A(e){return"object"==typeof e&&(e instanceof String||($?function(e){try{return N.call(e),!0}catch(e){return!1}}(e):"[object String]"===E(e)))}function C(e){return R(e)||A(e)}d(C,"isPrimitive",R),d(C,"isObject",A);var G=9007199254740991;function Z(e){return"number"==typeof e}function M(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function W(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+M(i):M(i)+e,n&&(e="-"+e)),e}var L=String.prototype.toLowerCase,U=String.prototype.toUpperCase;function X(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Z(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=W(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=W(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===U.call(e.specifier)?U.call(t):L.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Y(e){return"string"==typeof e}var z=Math.abs,B=String.prototype.toLowerCase,q=String.prototype.toUpperCase,D=String.prototype.replace,H=/e\+(\d)$/,J=/e-(\d)$/,K=/^(\d+)$/,Q=/^(\d+)e/,ee=/\.0$/,re=/\.0*e/,te=/(\..*[^0])0*e/;function ne(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Z(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":z(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=D.call(t,te,"$1e"),t=D.call(t,re,"e"),t=D.call(t,ee,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=D.call(t,H,"e+0$1"),t=D.call(t,J,"e-0$1"),e.alternate&&(t=D.call(t,K,"$1."),t=D.call(t,Q,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===q.call(e.specifier)?q.call(t):B.call(t)}function ie(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ae(e,r,t){var n=r-e.length;return n<0?e:e=t?e+ie(n):ie(n)+e}var oe=String.fromCharCode,ue=isNaN,se=Array.isArray;function ce(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function le(e){var r,t,n,i,a,o,u,s,c;if(!se(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",u=1,s=0;s<e.length;s++)if(Y(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=ce(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ue(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ue(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=X(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!ue(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ue(a)?String(n.arg):oe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ne(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=W(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ae(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var fe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ge(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function pe(e){var r,t,n,i;for(t=[],i=0,n=fe.exec(e);n;)(r=e.slice(i,fe.lastIndex-n[0].length)).length&&t.push(r),t.push(ge(n)),i=fe.lastIndex,n=fe.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function de(e){return"string"==typeof e}function he(e){var r,t,n;if(!de(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=pe(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return le.apply(null,t)}function me(e,r){var t,n;if(!R(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));if(!I(r))throw new TypeError(he("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(0===e.length||0===r)return"";if(e.length*r>G)throw new RangeError(he("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e.length*r));for(t="",n=r;1==(1&n)&&(t+=e),0!=(n>>>=1);)e+=e;return t}var be=Math.ceil;function we(e){for(var r,t="";e>0;)t=(r=e/2)===(e=i(r))?"0"+t:"1"+t;return t}var ve=1075;return function(r){var a,o,u,s,c,l,f;if(o=r<0||function(e){return 0===e&&1/e===t}(r)?"1":"0",r===e||r===t)return o+(s=me("1",11))+(u=me("0",52));if(function(e){return e!=e}(r))return o+(s=me("1",11))+(u="1"+me("0",51));if(0===r)return o+(s=me("0",11))+(u=me("0",52));if(l=(r=function(e){return Math.abs(e)}(r))-(c=i(r)),c=we(c),l=function(e){var r,t,n,i;if(r="",0===e)return r;for(i=ve,n=0;n<ve&&((t=2*e)>=1?(e=t-1,r+="1",i===ve&&(i=n)):(e=t,r+="0"),!(1===t||n-i>54));n++);return r}(l),c)s=c.length-1;else{for(f=0;f<l.length;f++)if("1"===l[f]){a=f+1;break}s=-a}return u=c+l,s<0?(s<=-1023&&(a=1022),u=u.substring(a)):u=u.substring(1),s=function(e,r,t){var n,i;if(!R(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));if(!I(r))throw new TypeError(he("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!R(i=t))throw new TypeError(he("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(r>G)throw new RangeError(he("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return(n=(r-e.length)/i.length)<=0?e:me(i,n=be(n))+e}(s=we(s+n),11,"0"),u=function(e,r,t){var n,i;if(!R(e))throw new TypeError(he("invalid argument. First argument must be a string. Value: `%s`.",e));if(!I(r))throw new TypeError(he("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(arguments.length>2){if(!R(i=t))throw new TypeError(he("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(r>G)throw new RangeError(he("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",r));return(n=(r-e.length)/i.length)<=0?e:e+me(i,n=be(n))}(u,52,"0").substring(0,52),o+s+u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).toBinaryString=r();
//# sourceMappingURL=index.js.map
