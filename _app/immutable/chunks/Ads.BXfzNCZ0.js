import{z as U,e as D,a as w,f as I,t as z,b as x,c as y,g as q}from"./disclose-version.DiguZelP.js";import{_ as A,ah as G,ai as K,aj as Q,X,l as Y,Q as $,i as H,B as J,ak as V,t as W,p as Z,a as k,s as t1,m as e1,g as r1}from"./runtime.B5zUXEGK.js";import{i as g}from"./86.7fhp0r9P.js";import{i as a1}from"./store.b1FiAXNF.js";import{p as T}from"./props.DgeiCSfc.js";import{o as j}from"./index-client.DVGP5u5d.js";import{s as R}from"./class.B80sFWI5.js";const L=typeof window<"u",s1=L?requestAnimationFrame:A,i1=L?()=>performance.now():()=>Date.now(),_={tick:r=>s1(r),now:()=>i1(),tasks:new Set};function O(r){_.tasks.forEach(t=>{t.c(r)||(_.tasks.delete(t),t.f())}),_.tasks.size!==0&&_.tick(O)}function o1(r){let t;return _.tasks.size===0&&_.tick(O),{promise:new Promise(s=>{_.tasks.add(t={c:r,f:s})}),abort(){_.tasks.delete(t)}}}function M(r,t){r.dispatchEvent(new CustomEvent(t))}function n1(r){const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(s=>s[0].toUpperCase()+s.slice(1)).join("")}function c1(r){const t={},s=r.split(";");for(const i of s){const[a,n]=i.split(":");if(!a||n===void 0)break;const f=n1(a.trim());t[f]=n.trim()}return t}const d1=r=>r;function v1(r,t,s,i){var a=(r&V)!==0,n="both",f,c=t.inert,o,e;function v(){return f??(f=s()(t,i==null?void 0:i(),{direction:n}))}var l={is_global:a,in(){t.inert=c,M(t,"introstart"),o=F(t,v(),e,1,()=>{M(t,"introend"),o=f=void 0})},out(u){t.inert=!0,M(t,"outrostart"),e=F(t,v(),o,0,()=>{M(t,"outroend"),e=f=void 0,u==null||u()}),e.reset},stop:()=>{o==null||o.abort(),e==null||e.abort()}},p=$;if((p.transitions??(p.transitions=[])).push(l),U){let u=a;if(!u){for(var d=p.parent;d&&d.f&G;)for(;(d=d.parent)&&!(d.f&K););u=!d||(d.f&Q)!==0}u&&X(()=>{Y(()=>l.in())})}}function F(r,t,s,i,a){if(H(t)){var n;return J(()=>{var h=t({direction:i===1?"in":"out"});n=F(r,h,s,i,a)}),{abort:()=>n.abort(),deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:h=>n.t(h)}}if(s==null||s.deactivate(),!(t!=null&&t.duration))return a==null||a(),{abort:A,deactivate:A,reset:A,t:()=>i};var{delay:f=0,duration:c,css:o,tick:e,easing:v=d1}=t,l=_.now()+f,p=(s==null?void 0:s.t(l))??1-i,d=i-p;c*=Math.abs(d);var u=l+c,m,b;if(o){for(var S=[],B=Math.ceil(c/16.666666666666668),E=0;E<=B;E+=1){var N=p+d*v(E/B),P=o(N,1-N);S.push(c1(P))}m=r.animate(S,{delay:f,duration:c,easing:"linear",fill:"forwards"}),m.finished.then(()=>{a==null||a(),i===1&&m.cancel()}).catch(h=>{if(m.startTime!==null&&m.currentTime!==null)throw h})}else p===0&&(e==null||e(0,1)),b=o1(h=>{if(h>=u)return e==null||e(i,1-i),a==null||a(),!1;if(h>=l){var C=p+d*v((h-l)/c);e==null||e(C,1-C)}return!0});return{abort:()=>{m==null||m.cancel(),b==null||b.abort()},deactivate:()=>{a=void 0},reset:()=>{i===0&&(e==null||e(1,0))},t:h=>{var C=p+d*v((h-l)/c);return Math.min(1,Math.max(0,C))}}}var f1=z(`<div class="flex-col gap-2"><div class="text-base-content/50 text-xs font-bold">Sponsors</div> <div><a href="https://github.com/jycouet" target="_blank" rel="nofollow, noreferrer"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 372.000000 372.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,372.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path fill="#254CA0" d="M1732 3695 c-7 -15 -20 -25 -32 -25 -20 0 -150 -123 -150 -141 0 -5
       -6 -9 -13 -9 -13 0 -136 -122 -204 -202 -18 -21 -36 -38 -40 -38 -10 0 -393
       -391 -393 -401 0 -4 -7 -9 -15 -13 -22 -8 -22 -289 0 -284 8 2 223 211 478
       466 319 318 470 462 484 462 13 0 54 -30 101 -75 l80 -76 147 3 147 3 -137
       138 c-75 75 -141 137 -146 137 -4 0 -12 6 -16 14 -4 8 -19 16 -33 18 -17 2
       -26 10 -28 26 -3 21 -7 22 -111 22 -105 0 -108 -1 -119 -25z"></path><path d="M1597 3162 c-80 -80 -96 -101 -84 -110 10 -8 212 -12 741 -14 l728
       -3 24 -28 c22 -25 24 -37 24 -120 0 -104 3 -109 105 -210 102 -100 104 -102
       116 -90 17 17 8 435 -9 456 -8 9 -11 25 -7 36 9 31 -73 113 -149 151 l-63 30
       -664 0 -664 0 -98 -98z"></path><path fill="#254CA0" d="M621 3228 c-57 -26 -124 -94 -150 -153 -21 -47 -21 -58 -21 -702 l0
       -654 26 -35 c15 -19 33 -34 40 -34 8 0 19 -11 24 -24 8 -21 88 -96 104 -96 3
       0 6 318 6 707 0 633 2 710 16 743 24 53 65 70 171 70 l86 0 101 100 101 100
       -230 -1 c-208 -1 -234 -3 -274 -21z"></path><path d="M1572 2938 c-9 -9 -12 -88 -12 -294 0 -155 -3 -289 -6 -298 -5 -14
       -37 -16 -255 -16 -263 0 -308 -7 -352 -52 -10 -10 -22 -18 -28 -18 -5 0 -20
       -24 -34 -54 -25 -54 -25 -57 -25 -350 l0 -294 26 -52 c15 -30 42 -63 66 -81
       l41 -29 327 0 327 0 50 36 c37 28 55 50 71 91 22 53 22 57 22 722 0 368 -3
       676 -6 685 -5 13 -24 16 -103 16 -62 0 -101 -4 -109 -12z m-18 -864 c10 -26 7
       -418 -4 -434 -14 -23 -401 -28 -436 -5 l-24 15 0 198 c0 108 3 207 6 220 6 22
       7 22 229 22 194 0 224 -2 229 -16z"></path><path d="M2454 2935 c-4 -10 159 -180 510 -531 565 -564 543 -537 494 -607
       -13 -18 -27 -34 -33 -36 -5 -2 -25 -19 -42 -37 l-33 -32 0 -150 c0 -83 4 -153
       8 -156 15 -9 310 296 318 328 4 16 15 31 25 33 17 5 19 16 19 109 0 82 -3 104
       -14 104 -7 0 -26 25 -42 56 -15 30 -36 60 -45 65 -10 5 -90 82 -178 172 -88
       89 -167 169 -175 177 -8 8 -20 20 -26 27 -15 16 -98 99 -151 151 -24 23 -52
       51 -62 61 -11 11 -23 24 -29 29 -5 5 -19 19 -30 30 -11 11 -24 25 -30 30 -12
       14 -80 82 -91 92 -5 4 -17 16 -27 27 -69 72 -73 73 -222 73 -114 0 -140 -3
       -144 -15z"></path><path fill="#254CA0" d="M278 2262 c-31 -34 -61 -62 -65 -62 -12 0 -149 -142 -156 -162 -3
       -10 -11 -18 -17 -18 -5 0 -10 -8 -10 -19 0 -10 -7 -24 -15 -31 -12 -10 -15
       -36 -15 -116 0 -56 4 -105 9 -108 5 -4 19 -25 30 -49 14 -28 162 -183 464
       -485 l443 -442 147 0 c81 0 147 3 147 8 0 4 -230 237 -510 517 -326 325 -515
       521 -522 541 -13 38 1 63 81 137 l52 48 -3 151 -3 151 -57 -61z"></path><path fill="#254CA0" d="M2077 2303 c-16 -7 -37 -13 -45 -13 -9 0 -38 -23 -64 -51 l-48 -52 0
       -709 0 -709 98 3 97 3 2 295 c3 287 4 295 24 313 19 15 47 17 248 17 295 0
       321 4 365 46 20 19 44 55 56 80 19 43 20 66 20 333 0 237 -3 291 -15 307 -8
       10 -15 26 -15 35 0 27 -66 84 -113 97 -62 19 -568 22 -610 5z m519 -224 c17
       -19 19 -39 19 -224 0 -202 0 -202 -25 -228 l-25 -27 -212 0 c-200 0 -213 1
       -223 19 -15 29 -14 453 2 469 9 9 73 12 228 12 208 0 218 -1 236 -21z"></path><path d="M3035 2178 c-3 -7 -6 -338 -7 -735 l-3 -722 -23 -23 c-20 -20 -35
       -24 -127 -28 l-105 -5 -90 -90 c-50 -49 -89 -96 -88 -105 3 -13 35 -15 217
       -18 117 -1 219 2 225 6 6 5 22 12 36 15 14 4 41 20 60 37 18 16 36 30 40 30
       10 0 60 80 60 95 0 7 7 26 15 41 13 25 15 122 15 675 l0 647 -97 96 c-94 93
       -119 109 -128 84z"></path><path d="M2350 695 l-465 -465 -43 0 c-37 0 -47 5 -80 41 -20 23 -50 54 -66
       70 l-28 29 -133 0 c-191 0 -191 1 -29 -162 150 -151 196 -188 236 -188 15 0
       28 -4 28 -10 0 -6 31 -10 74 -10 41 0 78 5 81 10 3 6 16 10 29 10 13 0 33 9
       46 20 13 11 26 20 31 20 9 0 789 782 801 804 12 21 6 289 -7 293 -6 2 -220
       -206 -475 -462z"></path><path fill="#254CA0" d="M450 900 c0 -206 2 -227 21 -267 11 -24 25 -43 30 -43 5 0 9 -5 9
       -12 0 -17 51 -68 67 -68 8 0 16 -7 19 -15 4 -8 16 -15 28 -15 11 -1 32 -7 46
       -15 21 -12 130 -14 670 -15 l645 0 50 49 c27 26 69 67 93 89 82 77 126 72
       -689 75 -610 2 -729 4 -743 16 -30 25 -46 80 -46 162 0 76 -1 79 -37 121 -42
       48 -106 113 -141 142 l-22 19 0 -223z"></path></g></svg> <p class="text-base-content/50 w-full px-2.5 py-2 text-xs tracking-tighter">Dynamic Process</p></a></div> <a href="https://opencollective.com/daisyui" target="_blank" rel="nofollow, noreferrer" class="text-base-content/50 hover:text-base-content/100 text-xs">Become a sponsor</a></div>`);function l1(r,t){let s=T(t,"wrapperClasses",0,"flex-col"),i=T(t,"classes",0,"bg-base-100 border-base-100 border-base-content/10 hover:border-base-content/20 border");var a=D(),n=I(a);g(n,()=>!1,f=>{var c=f1(),o=y(c),e=x(x(o,!0)),v=y(e);W(()=>{R(e,`flex gap-2 ${s()}`),R(v,`flex w-[130px] flex-col items-center rounded pt-2 ${i()}`)}),w(f,c)}),w(r,a)}const p1=r=>r;function u1(r,{delay:t=0,duration:s=400,easing:i=p1}={}){const a=+getComputedStyle(r).opacity;return{delay:t,duration:s,easing:i,css:n=>`opacity: ${n*a}`}}var h1=q('<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&amp;placement=daisyuicom" id="_carbonads_js"><\/script>'),m1=z('<div class="pointer-events-auto h-[100px] w-full min-w-[330px] max-w-[350px]"><!></div>'),_1=q('<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&amp;placement=daisyuicom" id="_carbonads_js"><\/script>'),x1=z('<div><div class="sticky top-20 my-6 xl:mx-2 xl:my-0 xl:mt-32 xl:w-[130px]"><div class="hidden xl:block"><!></div> <div class="h-6"></div> <div class="carbonads-responsive mx-auto flex min-h-[100px] items-center justify-center"><!></div></div></div>'),w1=z("<!> <!>",1);function E1(r,t){Z(t,!1);let s=T(t,"adslot"),i=e1(!1);j(async()=>{setTimeout(()=>{t1(i,!0)},1e3)}),a1();var a=w1(),n=I(a);g(n,()=>s()==="carbon1"&&r1(i),c=>{var o=m1();v1(3,o,()=>u1,()=>({delay:300}));var e=y(o);g(e,()=>j,v=>{var l=h1();w(v,l)}),w(c,o)});var f=x(x(n,!0));g(f,()=>s()==="carbon2",c=>{var o=x1(),e=y(o),v=y(e),l=y(v);l1(l,{});var p=x(x(v,!0)),d=x(x(p,!0)),u=y(d);g(u,()=>j,m=>{var b=_1();w(m,b)}),w(c,o)}),w(r,a),k()}export{E1 as A,l1 as S};
