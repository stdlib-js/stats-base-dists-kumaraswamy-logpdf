// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(n){return n!=n},d=Math.floor,w=function(n){return d(n)===n},A=w,s=function(n){return A(n/2)},_=function(n){return s(n>0?n-1:n+1)},m=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,U=m,N=h,g=function(n){return n===U||n===N},j=Math.sqrt,I=function(n){return Math.abs(n)},O="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),S=Object.prototype.toString,E=S,F=function(n){return E.call(n)},T=Object.prototype.hasOwnProperty,H=function(n,r){return null!=n&&T.call(n,r)},G="function"==typeof Symbol?Symbol.toStringTag:"",P=H,x=G,L=S,V=F,W=function(n){var r,t,e;if(null==n)return L.call(n);t=n[x],r=P(n,x);try{n[x]=void 0}catch(r){return L.call(n)}return e=L.call(n),r?n[x]=t:delete n[x],e},M=O&&"symbol"==typeof Symbol.toStringTag?W:V,k=M,Y="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,C=function(n){return Y&&n instanceof Uint32Array||"[object Uint32Array]"===k(n)},z=q,B=function(){var n,r;if("function"!=typeof z)return!1;try{r=new z(r=[1,3.14,-3.14,4294967296,4294967297]),n=C(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},D="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=B()?D:J,Q=M,R="function"==typeof Float64Array,X="function"==typeof Float64Array?Float64Array:null,Z=function(n){return R&&n instanceof Float64Array||"[object Float64Array]"===Q(n)},$=X,nn=function(){var n,r;if("function"!=typeof $)return!1;try{r=new $([1,3.14,-3.14,NaN]),n=Z(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},rn="function"==typeof Float64Array?Float64Array:void 0,tn=function(){throw new Error("not implemented")},en=nn()?rn:tn,on=M,un="function"==typeof Uint8Array,fn="function"==typeof Uint8Array?Uint8Array:null,cn=function(n){return un&&n instanceof Uint8Array||"[object Uint8Array]"===on(n)},an=fn,ln=function(){var n,r;if("function"!=typeof an)return!1;try{r=new an(r=[1,3.14,-3.14,256,257]),n=cn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},yn="function"==typeof Uint8Array?Uint8Array:void 0,pn=function(){throw new Error("not implemented")},bn=ln()?yn:pn,vn=M,dn="function"==typeof Uint16Array,wn="function"==typeof Uint16Array?Uint16Array:null,An=function(n){return dn&&n instanceof Uint16Array||"[object Uint16Array]"===vn(n)},sn=wn,_n=function(){var n,r;if("function"!=typeof sn)return!1;try{r=new sn(r=[1,3.14,-3.14,65536,65537]),n=An(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},mn="function"==typeof Uint16Array?Uint16Array:void 0,hn=function(){throw new Error("not implemented")},Un={uint16:_n()?mn:hn,uint8:bn};(n=new Un.uint16(1))[0]=4660;var Nn,gn,jn=52===new Un.uint8(n.buffer)[0];!0===jn?(Nn=1,gn=0):(Nn=0,gn=1);var In,On,Sn=K,En={HIGH:Nn,LOW:gn},Fn=new en(1),Tn=new Sn(Fn.buffer),Hn=En.HIGH,Gn=En.LOW,Pn=function(n,r){return Fn[0]=r,n[0]=Tn[Hn],n[1]=Tn[Gn],n},xn=function(n,r){return 1===arguments.length?Pn([0,0],n):Pn(n,r)},Ln=xn,Vn=K,Wn=!0===jn?0:1,Mn=new en(1),kn=new Vn(Mn.buffer),Yn=function(n,r){return Mn[0]=n,kn[Wn]=r>>>0,Mn[0]},qn=Yn,Cn=function(n){return 0|n},zn=K,Bn=!0===jn?1:0,Dn=new en(1),Jn=new zn(Dn.buffer),Kn=function(n){return Dn[0]=n,Jn[Bn]};!0===jn?(In=1,On=0):(In=0,On=1);var Qn=K,Rn={HIGH:In,LOW:On},Xn=new en(1),Zn=new Qn(Xn.buffer),$n=Rn.HIGH,nr=Rn.LOW,rr=function(n,r){return Zn[$n]=n,Zn[nr]=r,Xn[0]},tr=rr,er=Ln,or=Kn,ur=tr,ir=[0,0],fr=function(n,r){var t,e;return er(ir,n),t=ir[0],t&=2147483647,e=or(r),ur(t|=e&=2147483648,ir[1])},cr=_,ar=fr,lr=h,yr=m,pr=function(n,r){return r===lr?yr:r===yr?0:r>0?cr(r)?n:0:cr(r)?ar(yr,n):yr},br=Kn,vr=function(n,r){return(2147483647&br(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},dr=I,wr=m,Ar=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:dr(n)<1==(r===wr)?0:wr},sr=K,_r=!0===jn?1:0,mr=new en(1),hr=new sr(mr.buffer),Ur=function(n,r){return mr[0]=n,hr[_r]=r>>>0,mr[0]},Nr=Kn,gr=qn,jr=Ur,Ir=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8],Tr=qn,Hr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},Gr=g,Pr=v,xr=I,Lr=function(n,r){return Pr(r)||Gr(r)?(n[0]=r,n[1]=0,n):0!==r&&xr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Vr=function(n,r){return 1===arguments.length?Lr([0,0],n):Lr(n,r)},Wr=Kn,Mr=function(n){var r=Wr(n);return(r=(2146435072&r)>>>20)-1023|0},kr=m,Yr=h,qr=v,Cr=g,zr=fr,Br=Vr,Dr=Mr,Jr=Ln,Kr=tr,Qr=[0,0],Rr=[0,0],Xr=function(n,r){var t,e;return 0===r||0===n||qr(n)||Cr(n)?n:(Br(Qr,n),r+=Qr[1],(r+=Dr(n=Qr[0]))<-1074?zr(0,n):r>1023?n<0?Yr:kr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Jr(Rr,n),t=Rr[0],t&=2148532223,e*Kr(t|=r+1023<<20,Rr[1])))},Zr=Kn,$r=Ur,nt=qn,rt=Cn,tt=Xr,et=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},ot=2147483647,ut=1048575,it=1048576,ft=v,ct=_,at=g,lt=w,yt=j,pt=I,bt=Ln,vt=qn,dt=Cn,wt=h,At=m,st=pr,_t=vr,mt=Ar,ht=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w,A,s,_,m,h,U;return m=0,t<Or&&(m-=53,t=Nr(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Or),e=524288+(t>>1|536870912),f=(_=1/((r=jr(r,t))+(a=Sr[U])))*((s=r-a)-(i=gr(o=s*_,0))*(c=jr(0,e+=U<<18))-i*(r-(c-a))),A=(u=o*o)*u*Ir(u),c=gr(c=3+(u=i*i)+(A+=f*(i+o)),0),d=(b=-7.028461650952758e-9*(y=gr(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+Fr[U])-((v=gr(v=(p=.9617967009544373*y)+b+(l=Er[U])+(w=m),0))-w-l-p),n[0]=v,n[1]=d,n},Ut=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*Hr(o)*1.4426950408889634)-((e=Tr(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},Nt=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&ot|0)>>20)-1023|0,a=0,l>1071644672&&(o=$r(0,((a=n+(it>>y+1)>>>0)&~(ut>>(y=((a&ot)>>20)-1023|0)))>>>0),a=(a&ut|it)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=nt(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*et(o),n=Zr(c=1-(c*e/(e-2)-(f+c*f)-c)),n=rt(n),c=(n+=a<<20>>>0)>>20<=0?tt(c,a):$r(c,n)},gt=2147483647,jt=1083179008,It=1e300,Ot=1e-300,St=[0,0],Et=[0,0],Ft=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w;if(ft(r)||ft(t))return NaN;if(bt(St,t),f=St[0],0===St[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return yt(r);if(-.5===t)return 1/yt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(at(t))return mt(r,t)}if(bt(St,r),i=St[0],0===St[1]){if(0===i)return st(r,t);if(1===r)return 1;if(-1===r&&ct(t))return-1;if(at(r))return r===wt?n(-0,-t):t<0?0:At}if(r<0&&!1===lt(t))return(r-r)/(r-r);if(u=pt(r),e=i&gt|0,o=f&gt|0,a=f>>>31|0,c=(c=i>>>31|0)&&ct(t)?-1:1,o>1105199104){if(o>1139802112)return _t(r,t);if(e<1072693247)return 1===a?c*It*It:c*Ot*Ot;if(e>1072693248)return 0===a?c*It*It:c*Ot*Ot;b=Ut(Et,u)}else b=ht(Et,u,e);if(p=(t-(l=vt(t,0)))*b[0]+t*b[1],y=l*b[0],bt(St,v=p+y),d=dt(St[0]),w=dt(St[1]),d>=jt){if(0!=(d-jt|w))return c*It*It;if(p+8008566259537294e-32>v-y)return c*It*It}else if((d&gt)>=1083231232){if(0!=(d-3230714880|w))return c*Ot*Ot;if(p<=v-y)return c*Ot*Ot}return c*(v=Nt(d,y,p))},Tt=Ft,Ht=Kn,Gt=Ur,Pt=v,xt=h,Lt=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Vt=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},Wt=.6931471803691238,Mt=1.9082149292705877e-10,kt=1048575,Yt=function(n){var r,t,e,o,u,i,f,c,a,l,y;return 0===n?xt:Pt(n)||n<0?NaN:(o=0,(t=Ht(n))<1048576&&(o-=54,t=Ht(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=kt)&1048576|0)>>20|0,i=(n=Gt(n,t|1072693248^f))-1,(kt&2+t)<3?0===i?0===o?0:o*Wt+o*Mt:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*Wt-(u-o*Mt-i)):(f=t-398458|0,c=440401-t|0,e=(l=(y=(a=i/(2+i))*a)*y)*Lt(l),u=y*Vt(l)+e,(f|=c)>0?(r=.5*i*i,0===o?i-(r-a*(r+u)):o*Wt-(r-(a*(r+u)+o*Mt)-i)):0===o?i-a*(i-u):o*Wt-(a*(i-u)-o*Mt-i))))};function qt(n,r,t){var e;return v(n)||v(r)||v(t)||r<=0||t<=0?NaN:n<=0||n>=1?h:(e=Yt(r*t),e+=(r-1)*Yt(n),e+=(t-1)*Yt(1-Tt(n,r)))}var Ct=function(n){return function(){return n}};return b(qt,"factory",(function(n,r){return v(n)||v(r)||n<=0||r<=0?Ct(NaN):function(t){var e;return v(t)?NaN:t<=0||t>=1?h:(e=Yt(n*r),e+=(n-1)*Yt(t),e+=(r-1)*Yt(1-Tt(t,n)))}})),qt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).logpdf=r();
//# sourceMappingURL=browser.js.map
