// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).toBinaryString=t()}(this,(function(){"use strict";var r=Number.POSITIVE_INFINITY,t=Number,e=t.NEGATIVE_INFINITY;var n=function(r){return r!=r},i=e;var a=function(r){return 0===r&&1/r===i};var o=function(r){return Math.abs(r)},u=Math.floor,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=function(){try{return l({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,g=Object.prototype,v=g.toString,s=g.__defineGetter__,m=g.__defineSetter__,b=g.__lookupGetter__,p=g.__lookupSetter__;var y=c,d=function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(b.call(r,t)||p.call(r,t)?(n=r.__proto__,r.__proto__=g,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&s&&s.call(r,t,e.get),o&&m&&m.call(r,t,e.set),r},h=f()?y:d;var w=function(r,t,e){h(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var _=function(r){return"number"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var T=function(){return j&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},P=Object.prototype.hasOwnProperty;var V=function(r,t){return null!=r&&P.call(r,t)},x="function"==typeof Symbol?Symbol.toStringTag:"",I=V,N=x,F=O;var R=E,k=function(r){var t,e,n;if(null==r)return F.call(r);e=r[N],t=I(r,N);try{r[N]=void 0}catch(t){return F.call(r)}return n=F.call(r),t?r[N]=e:delete r[N],n},A=T()?k:R,G=t.prototype.toString;var M=A,Y=t,B=function(r){try{return G.call(r),!0}catch(r){return!1}},C=T();var q=function(r){return"object"==typeof r&&(r instanceof Y||(C?B(r):"[object Number]"===M(r)))},z=_,D=q;var H=w,J=function(r){return z(r)||D(r)},K=q;H(J,"isPrimitive",_),H(J,"isObject",K);var L=u;var Q=r,U=e,W=function(r){return L(r)===r};var X=function(r){return r<Q&&r>U&&W(r)},Z=J.isPrimitive,$=X;var rr=function(r){return Z(r)&&$(r)},tr=J.isObject,er=X;var nr=function(r){return tr(r)&&er(r.valueOf())},ir=rr,ar=nr;var or=w,ur=function(r){return ir(r)||ar(r)},lr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",lr);var fr=ur.isPrimitive;var cr=function(r){return fr(r)&&r>=0},gr=ur.isObject;var vr=function(r){return gr(r)&&r.valueOf()>=0},sr=cr,mr=vr;var br=w,pr=function(r){return sr(r)||mr(r)},yr=vr;br(pr,"isPrimitive",cr),br(pr,"isObject",yr);var dr=pr;var hr=function(r){return"string"==typeof r},wr=String.prototype.valueOf;var _r=A,jr=function(r){try{return wr.call(r),!0}catch(r){return!1}},Tr=T();var Or=function(r){return"object"==typeof r&&(r instanceof String||(Tr?jr(r):"[object String]"===_r(r)))},Sr=hr,Er=Or;var Pr=w,Vr=function(r){return Sr(r)||Er(r)},xr=Or;Pr(Vr,"isPrimitive",hr),Pr(Vr,"isObject",xr);var Ir=Vr,Nr=9007199254740991,Fr=dr.isPrimitive,Rr=Ir.isPrimitive;var kr=function(r,t){var e,n;if(!Rr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Fr(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e},Ar=Math.ceil,Gr=dr.isPrimitive,Mr=Ir.isPrimitive,Yr=kr,Br=Ar,Cr=Nr;var qr=function(r,t,e){var n,i;if(!Mr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Gr(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!Mr(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(t>Cr)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=Br(n),r+Yr(i,n))},zr=dr.isPrimitive,Dr=Ir.isPrimitive,Hr=kr,Jr=Ar,Kr=Nr;var Lr=function(r,t,e){var n,i;if(!Dr(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!zr(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!Dr(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>Kr)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=Jr(n),Hr(i,n)+r)},Qr=u;var Ur=1075;var Wr=r,Xr=e,Zr=1023,$r=n,rt=a,tt=o,et=u,nt=qr,it=Lr,at=kr,ot=function(r){for(var t,e="";r>0;)e=(t=r/2)===(r=Qr(t))?"0"+e:"1"+e;return e},ut=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=Ur,n=0;n<Ur&&((e=2*r)>=1?(r=e-1,t+="1",i===Ur&&(i=n)):(r=e,t+="0"),!(1===e||n-i>54));n++);return t};return function(r){var t,e,n,i,a,o,u;if(e=r<0||rt(r)?"1":"0",r===Wr||r===Xr)return e+(i=at("1",11))+(n=at("0",52));if($r(r))return e+(i=at("1",11))+(n="1"+at("0",51));if(0===r)return e+(i=at("0",11))+(n=at("0",52));if(o=(r=tt(r))-(a=et(r)),a=ot(a),o=ut(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-1023&&(t=1022),n=n.substring(t)):n=n.substring(1),i=ot(i+Zr),e+(i=it(i,11,"0"))+(n=nt(n,52,"0").substring(0,52))}}));
//# sourceMappingURL=bundle.js.map
