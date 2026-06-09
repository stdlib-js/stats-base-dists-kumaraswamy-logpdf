"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=f(function(h,s){
var n=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-pow/dist'),a=require('@stdlib/math-base-special-ln/dist'),y=require('@stdlib/constants-float64-ninf/dist');function d(e,r,u){var t;return n(e)||n(r)||n(u)||r<=0||u<=0?NaN:e<=0||e>=1?y:(t=a(r*u),t+=(r-1)*a(e),t+=(u-1)*a(1-l(e,r)),t)}s.exports=d
});var N=f(function(j,c){
var F=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-pow/dist'),v=require('@stdlib/math-base-special-ln/dist'),w=require('@stdlib/constants-float64-ninf/dist');function I(e,r){if(o(e)||o(r)||e<=0||r<=0)return F(NaN);return u;function u(t){var i;return o(t)?NaN:t<=0||t>=1?w:(i=v(e*r),i+=(e-1)*v(t),i+=(r-1)*v(1-g(t,e)),i)}}c.exports=I
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),O=N();m(p,"factory",O);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
