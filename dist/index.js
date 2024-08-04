"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var g=q(function(C,N){
var B=require('@stdlib/math-base-special-floor/dist');function T(r){for(var e="",t;r>0;)t=r/2,r=B(t),t===r?e="0"+e:e="1"+e;return e}N.exports=T
});var b=q(function(D,p){
var l=1075,d=54;function A(r){var e,t,i,a;if(e="",r===0)return e;for(a=l,i=0;i<l&&(t=r*2,t>=1?(r=t-1,e+="1",a===l&&(a=i)):(r=t,e+="0"),!(t===1||i-a>d));i++);return e}p.exports=A
});var _=q(function(G,S){
var M=require('@stdlib/constants-float64-pinf/dist'),h=require('@stdlib/constants-float64-ninf/dist'),I=require('@stdlib/constants-float64-exponent-bias/dist'),m=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-assert-is-negative-zero/dist'),E=require('@stdlib/math-base-special-abs/dist'),F=require('@stdlib/math-base-special-floor/dist'),X=require('@stdlib/string-right-pad/dist'),k=require('@stdlib/string-left-pad/dist'),s=require('@stdlib/string-repeat/dist'),c=g(),P=b(),o=11,f=52;function U(r){var e,t,i,a,v,u,n;if(r<0||y(r)?t="1":t="0",r===M||r===h)return a=s("1",o),i=s("0",f),t+a+i;if(m(r))return a=s("1",o),i="1"+s("0",f-1),t+a+i;if(r===0)return a=s("0",o),i=s("0",f),t+a+i;if(r=E(r),v=F(r),u=r-v,v=c(v),u=P(u),v)a=v.length-1;else{for(n=0;n<u.length;n++)if(u[n]==="1"){e=n+1;break}a=-e}return i=v+u,a<0?(a<=-I&&(e=I-1),i=i.substring(e)):i=i.substring(1),a=c(a+I),a=k(a,o,"0"),i=X(i,f,"0").substring(0,f),t+a+i}S.exports=U
});var j=_();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
