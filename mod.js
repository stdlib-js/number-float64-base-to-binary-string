// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Number.POSITIVE_INFINITY,r=Number,e=r.NEGATIVE_INFINITY;var n=Math.floor,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=Object.defineProperty,u=Object.prototype,a=u.toString,l=u.__defineGetter__,c=u.__defineSetter__,f=u.__lookupGetter__,g=u.__lookupSetter__;var m=function(){try{return i({},"x",{}),!0}catch(t){return!1}}()?o:function(t,r,e){var n,i,o,m;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(f.call(t,r)||g.call(t,r)?(n=t.__proto__,t.__proto__=u,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,m="set"in e,i&&(o||m))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&l&&l.call(t,r,e.get),m&&c&&c.call(t,r,e.set),t};function s(t,r,e){m(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function v(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return b&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var w=p()?function(t){var r,e,n,i,o;if(null==t)return y.call(t);e=t[d],o=d,r=null!=(i=t)&&h.call(i,o);try{t[d]=void 0}catch(r){return y.call(t)}return n=y.call(t),r?t[d]=e:delete t[d],n}:function(t){return y.call(t)},_=r.prototype.toString;var j=p();function E(t){return"object"==typeof t&&(t instanceof r||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function S(t){return v(t)||E(t)}function T(r){return r<t&&r>e&&n(i=r)===i;var i}function O(t){return v(t)&&T(t)}function V(t){return E(t)&&T(t.valueOf())}function P(t){return O(t)||V(t)}function I(t){return O(t)&&t>=0}function x(t){return V(t)&&t.valueOf()>=0}function N(t){return I(t)||x(t)}function F(t){return"string"==typeof t}s(S,"isPrimitive",v),s(S,"isObject",E),s(P,"isPrimitive",O),s(P,"isObject",V),s(N,"isPrimitive",I),s(N,"isObject",x);var R=String.prototype.valueOf;var k=p();function A(t){return"object"==typeof t&&(t instanceof String||(k?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function G(t){return F(t)||A(t)}s(G,"isPrimitive",F),s(G,"isObject",A);function M(t,r){var e,n;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!I(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(0===t.length||0===r)return"";if(t.length*r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=r;1==(1&n)&&(e+=t),0!==(n>>>=1);)t+=t;return e}var Y=Math.ceil;function C(t){for(var r,e="";t>0;)e=(r=t/2)===(t=n(r))?"0"+e:"1"+e;return e}function q(r){var i,o,u,a,l,c,f;if(o=r<0||function(t){return 0===t&&1/t===e}(r)?"1":"0",r===t||r===e)return o+(a=M("1",11))+(u=M("0",52));if(function(t){return t!=t}(r))return o+(a=M("1",11))+(u="1"+M("0",51));if(0===r)return o+(a=M("0",11))+(u=M("0",52));if(c=(r=function(t){return Math.abs(t)}(r))-(l=n(r)),l=C(l),c=function(t){var r,e,n,i;if(r="",0===t)return r;for(i=1075,n=0;n<1075&&((e=2*t)>=1?(t=e-1,r+="1",1075===i&&(i=n)):(t=e,r+="0"),!(1===e||n-i>54));n++);return r}(c),l)a=l.length-1;else{for(f=0;f<c.length;f++)if("1"===c[f]){i=f+1;break}a=-i}return u=l+c,a<0?(a<=-1023&&(i=1022),u=u.substring(i)):u=u.substring(1),a=function(t,r,e){var n,i;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!I(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(arguments.length>2){if(!F(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(r-t.length)/i.length)<=0?t:M(i,n=Y(n))+t}(a=C(a+1023),11,"0"),u=function(t,r,e){var n,i;if(!F(t))throw new TypeError("invalid argument. First argument must be a string. Value: `"+t+"`.");if(!I(r))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+r+"`.");if(arguments.length>2){if(!F(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(r>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(r-t.length)/i.length)<=0?t:t+M(i,n=Y(n))}(u,52,"0").substring(0,52),o+a+u}export{q as default};
//# sourceMappingURL=mod.js.map