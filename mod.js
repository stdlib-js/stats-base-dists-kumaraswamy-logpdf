// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function b(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":c(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=s.call(e,A,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var N=String.fromCharCode,I=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,n,e,i,o,c,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,I(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!I(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,a;for(n=[],a=0,e=U.exec(r);e;)(t=r.slice(a,U.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),a=U.lastIndex,e=U.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function O(r){return"string"==typeof r}function k(r){var t,n;if(!O(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return S.apply(null,t)}var T=Object.prototype,H=T.toString,V=T.__defineGetter__,G=T.__defineSetter__,W=T.__lookupGetter__,L=T.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=T,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,n.get),o&&G&&G.call(r,t,n.set),r};function P(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}var R=Math.floor;function M(r){return R(r)===r}function Z(r){return M(r/2)}function Y(r){return Z(r>0?r-1:r+1)}var X=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===X||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof rr?rr.toStringTag:"";var nr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return K.call(r);n=r[tr],i=tr,t=null!=(a=r)&&Q.call(a,i);try{r[tr]=void 0}catch(t){return K.call(r)}return e=K.call(r),t?r[tr]=n:delete r[tr],e}:function(r){return K.call(r)},er="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var ir,or="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ir,fr="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),n=t,r=(fr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=lr,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var gr,dr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr=gr,hr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var br,mr="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,t,n;if("function"!=typeof Ar)return!1;try{t=new Ar(t=[1,3.14,-3.14,65536,65537]),n=t,r=(hr&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Fr,Nr={uint16:br,uint8:wr};(Fr=new Nr.uint16(1))[0]=4660;var Ir,Er,_r=52===new Nr.uint8(Fr.buffer)[0];!0===_r?(Ir=1,Er=0):(Ir=0,Er=1);var Sr={HIGH:Ir,LOW:Er},Ur=new sr(1),jr=new ur(Ur.buffer),xr=Sr.HIGH,Or=Sr.LOW;function kr(r,t,n,e){return Ur[0]=r,t[e]=jr[xr],t[e+n]=jr[Or],t}function Tr(r){return kr(r,[0,0],1,0)}P(Tr,"assign",kr);var Hr="function"==typeof Float64Array;var Vr="function"==typeof Float64Array?Float64Array:null;var Gr,Wr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,t,n;if("function"!=typeof Vr)return!1;try{t=new Vr([1,3.14,-3.14,NaN]),n=t,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Lr=!0===_r?0:1,$r=new Gr(1),Pr=new ur($r.buffer);function Cr(r,t){return $r[0]=r,Pr[Lr]=t>>>0,$r[0]}function Rr(r){return 0|r}var Mr=Number.POSITIVE_INFINITY,Zr="function"==typeof Float64Array;var Yr="function"==typeof Float64Array?Float64Array:null;var Xr,qr,zr,Br="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Yr)return!1;try{t=new Yr([1,3.14,-3.14,NaN]),n=t,r=(Zr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===_r?(qr=1,zr=0):(qr=0,zr=1);var Dr={HIGH:qr,LOW:zr},Jr=new Xr(1),Kr=new ur(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t,n,e){return Jr[0]=r,t[e]=Kr[Qr],t[e+n]=Kr[rt],t}function nt(r){return tt(r,[0,0],1,0)}P(nt,"assign",tt);var et="function"==typeof Float64Array;var at="function"==typeof Float64Array?Float64Array:null;var it,ot="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,t,n;if("function"!=typeof at)return!1;try{t=new at([1,3.14,-3.14,NaN]),n=t,r=(et&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var ut=!0===_r?1:0,ft=new it(1),ct=new ur(ft.buffer);function lt(r){return ft[0]=r,ct[ut]}var pt="function"==typeof Float64Array;var st="function"==typeof Float64Array?Float64Array:null;var yt,vt,gt,dt="function"==typeof Float64Array?Float64Array:void 0;yt=function(){var r,t,n;if("function"!=typeof st)return!1;try{t=new st([1,3.14,-3.14,NaN]),n=t,r=(pt&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?dt:function(){throw new Error("not implemented")},!0===_r?(vt=1,gt=0):(vt=0,gt=1);var wt={HIGH:vt,LOW:gt},ht=new yt(1),At=new ur(ht.buffer),bt=wt.HIGH,mt=wt.LOW;function Ft(r,t){return At[bt]=r,At[mt]=t,ht[0]}var Nt=[0,0];function It(r,t){var n,e;return nt.assign(r,Nt,1,0),n=Nt[0],n&=2147483647,e=lt(t),Ft(n|=e&=2147483648,Nt[1])}var Et="function"==typeof Float64Array;var _t="function"==typeof Float64Array?Float64Array:null;var St,Ut="function"==typeof Float64Array?Float64Array:void 0;St=function(){var r,t,n;if("function"!=typeof _t)return!1;try{t=new _t([1,3.14,-3.14,NaN]),n=t,r=(Et&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ut:function(){throw new Error("not implemented")};var jt=!0===_r?1:0,xt=new St(1),Ot=new ur(xt.buffer);function kt(r,t){return xt[0]=r,Ot[jt]=t>>>0,xt[0]}var Tt=[1,1.5],Ht=[0,.5849624872207642],Vt=[0,1.350039202129749e-8];var Gt=Number.POSITIVE_INFINITY;function Wt(r,t,n,e){return C(r)||z(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}P((function(r){return Wt(r,[0,0],1,0)}),"assign",Wt);var Lt="function"==typeof Float64Array;var $t="function"==typeof Float64Array?Float64Array:null;var Pt,Ct,Rt,Mt="function"==typeof Float64Array?Float64Array:void 0;Pt=function(){var r,t,n;if("function"!=typeof $t)return!1;try{t=new $t([1,3.14,-3.14,NaN]),n=t,r=(Lt&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Mt:function(){throw new Error("not implemented")},!0===_r?(Ct=1,Rt=0):(Ct=0,Rt=1);var Zt={HIGH:Ct,LOW:Rt},Yt=new Pt(1),Xt=new ur(Yt.buffer),qt=Zt.HIGH,zt=Zt.LOW;function Bt(r,t,n,e){return Yt[0]=r,t[e]=Xt[qt],t[e+n]=Xt[zt],t}function Dt(r){return Bt(r,[0,0],1,0)}P(Dt,"assign",Bt);var Jt=[0,0],Kt=[0,0];function Qt(r,t){var n,e;return 0===t||0===r||C(r)||z(r)?r:(Wt(r,Jt,1,0),t+=Jt[1],t+=function(r){var t=lt(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Jt[0]),t<-1074?It(0,r):t>1023?r<0?q:Gt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Dt.assign(r,Kt,1,0),n=Kt[0],n&=2148532223,e*Ft(n|=t+1023<<20,Kt[1])))}var rn=1e300,tn=1e-300,nn=[0,0],en=[0,0];function an(r,t){var n,e,a,i,o,u,f,c,l,p,s,y,v,g;if(C(r)||C(t))return NaN;if(Tr.assign(t,nn,1,0),o=nn[0],0===nn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return B(r);if(-.5===t)return 1/B(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(z(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(t===Mr)?0:Mr}(r,t)}if(Tr.assign(r,nn,1,0),i=nn[0],0===nn[1]){if(0===i)return function(r,t){return t===q?Mr:t===Mr?0:t>0?Y(t)?r:0:Y(t)?It(Mr,r):Mr}(r,t);if(1===r)return 1;if(-1===r&&Y(t))return-1;if(z(r))return r===q?an(-0,-t):t<0?0:Mr}if(r<0&&!1===M(t))return(r-r)/(r-r);if(a=D(r),n=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,u=(u=i>>>31|0)&&Y(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&lt(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*rn*rn:u*tn*tn;if(n>1072693248)return 0===f?u*rn*rn:u*tn*tn;s=function(r,t){var n,e,a,i,o,u;return n=(o=1.9259629911266175e-8*(a=t-1)-a*a*(0===(u=a)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(i=1.4426950216293335*a)+o,0))-i),r[0]=e,r[1]=n,r}(en,a)}else s=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y,v,g,d,w,h,A,b,m,F,N;return b=0,n<1048576&&(b-=53,n=lt(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,b+=1,n-=1048576),o=Cr(a=(h=(t=kt(t,n))-(c=Tt[F]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),f=kt(0,e+=F<<18),w=(i=a*a)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Cr(f=3+(i=o*o)+(w+=(u=A*(h-o*f-o*(t-(f-c))))*(o+a)),0),g=(y=-7.028461650952758e-9*(p=Cr(p=(h=o*f)+(A=u*f+(w-(f-3-i))*a),0))+.9617966939259756*(A-(p-h))+Vt[F])-((v=Cr(v=(s=.9617967009544373*p)+y+(l=Ht[F])+(d=b),0))-d-l-s),r[0]=v,r[1]=g,r}(en,a,n);if(y=(p=(t-(c=Cr(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Tr.assign(y,nn,1,0),v=Rr(nn[0]),g=Rr(nn[1]),v>=1083179008){if(0!=(v-1083179008|g))return u*rn*rn;if(p+8008566259537294e-32>y-l)return u*rn*rn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|g))return u*tn*tn;if(p<=y-l)return u*tn*tn}return y=function(r,t,n){var e,a,i,o,u,f,c,l,p,s,y;return s=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),t-=i=kt(0,e)),r=Rr(r=lt(c=1-((c=(o=.6931471824645996*(i=Cr(i=n+t,0)))+(u=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(a=c-(i=c*c)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Qt(c,l):kt(c,r)}(v,l,p),u*y}var on=.6931471803691238,un=1.9082149292705877e-10;function fn(r){var t,n,e,a,i,o,u,f,c,l,p,s;return 0===r?q:C(r)||r<0?NaN:(i=0,(n=lt(r))<1048576&&(i-=54,n=lt(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=kt(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===i?0:i*on+i*un:(o=u*u*(.5-.3333333333333333*u),0===i?u-o:i*on-(o-i*un-u)):(f=n-398458|0,c=440401-n|0,a=(p=(s=(l=u/(2+u))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+a,(f|=c)>0?(t=.5*u*u,0===i?u-(t-l*(t+o)):i*on-(t-(l*(t+o)+i*un)-u)):0===i?u-l*(u-o):i*on-(l*(u-o)-i*un-u))))}function cn(r,t,n){var e;return C(r)||C(t)||C(n)||t<=0||n<=0?NaN:r<=0||r>=1?q:(e=fn(t*n),e+=(t-1)*fn(r),e+=(n-1)*fn(1-an(r,t)))}function ln(r,t){return C(r)||C(t)||r<=0||t<=0?(n=NaN,function(){return n}):function(n){var e;if(C(n))return NaN;if(n<=0||n>=1)return q;return e=fn(r*t),e+=(r-1)*fn(n),e+=(t-1)*fn(1-an(n,r))};var n}P(cn,"factory",ln);export{cn as default,ln as factory};
//# sourceMappingURL=mod.js.map