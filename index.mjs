// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";function l(s){for(var t,e="";s>0;)e=(t=s/2)===(s=m(t))?"0"+e:"1"+e;return e}function f(f){var j,p,h,b,g,c,u;if(p=f<0||i(f)?"1":"0",f===s||f===t)return p+(b=a("1",11))+(h=a("0",52));if(n(f))return p+(b=a("1",11))+(h="1"+a("0",51));if(0===f)return p+(b=a("0",11))+(h=a("0",52));if(c=(f=r(f))-(g=m(f)),g=l(g),c=function(s){var t,e,n,i;if(t="",0===s)return t;for(i=1075,n=0;n<1075&&((e=2*s)>=1?(s=e-1,t+="1",1075===i&&(i=n)):(s=e,t+="0"),!(1===e||n-i>54));n++);return t}(c),g)b=g.length-1;else{for(u=0;u<c.length;u++)if("1"===c[u]){j=u+1;break}b=-j}return h=g+c,b<0?(b<=-e&&(j=e-1),h=h.substring(j)):h=h.substring(1),b=l(b+e),p+(b=o(b,11,"0"))+(h=d(h,52,"0").substring(0,52))}export{f as default};
//# sourceMappingURL=index.mjs.map
