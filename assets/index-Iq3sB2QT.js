(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Rt=(e,t)=>e===t,ce=Symbol("solid-proxy"),ot=typeof Proxy=="function",Nt=Symbol("solid-track"),ue={equals:Rt};let st=dt;const D=1,fe=2,it={owned:null,cleanups:null,context:null,owner:null},ve={};var v=null;let Se=null,It=null,S=null,T=null,W=null,pe=0;function J(e,t){const n=S,r=v,o=e.length===0,s=t===void 0?r:t,i=o?it:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=o?e:()=>e(()=>$(()=>te(i)));v=i,S=null;try{return I(a,!0)}finally{S=n,v=r}}function O(e,t){t=t?Object.assign({},ue,t):ue;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),ft(n,o));return[ut.bind(n),r]}function Mt(e,t,n){const r=we(e,t,!0,D);H(r)}function B(e,t,n){const r=we(e,t,!1,D);H(r)}function Wt(e,t,n){st=Ht;const r=we(e,t,!1,D);r.user=!0,W?W.push(r):H(r)}function q(e,t,n){n=n?Object.assign({},ue,n):ue;const r=we(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,H(r),ut.bind(r)}function Dt(e){return e&&typeof e=="object"&&"then"in e}function Ft(e,t,n){let r,o,s;typeof t=="function"?(r=e,o=t,s=n||{}):(r=!0,o=e,s=t||{});let i=null,a=ve,l=!1,c="initialValue"in s,f=typeof r=="function"&&q(r);const u=new Set,[d,h]=(s.storage||O)(s.initialValue),[b,p]=O(void 0),[m,x]=O(void 0,{equals:!1}),[w,C]=O(c?"ready":"unresolved");function A(j,E,z,F){return i===j&&(i=null,F!==void 0&&(c=!0),(j===a||E===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(F,{value:E})),a=ve,_(E,z)),E}function _(j,E){I(()=>{E===void 0&&h(()=>j),C(E!==void 0?"errored":c?"ready":"unresolved"),p(E);for(const z of u.keys())z.decrement();u.clear()},!1)}function N(){const j=Gt,E=d(),z=b();if(z!==void 0&&!i)throw z;return S&&S.user,E}function V(j=!0){if(j!==!1&&l)return;l=!1;const E=f?f():r;if(E==null||E===!1){A(i,$(d));return}const z=a!==ve?a:$(()=>o(E,{value:d(),refetching:j}));return Dt(z)?(i=z,"value"in z?(z.status==="success"?A(i,z.value,void 0,E):A(i,void 0,Oe(z.value),E),z):(l=!0,queueMicrotask(()=>l=!1),I(()=>{C(c?"refreshing":"pending"),x()},!1),z.then(F=>A(z,F,void 0,E),F=>A(z,void 0,Oe(F),E)))):(A(i,z,void 0,E),z)}return Object.defineProperties(N,{state:{get:()=>w()},error:{get:()=>b()},loading:{get(){const j=w();return j==="pending"||j==="refreshing"}},latest:{get(){if(!c)return N();const j=b();if(j&&!i)throw j;return d()}}}),f?Mt(()=>V(!1)):V(!1),[N,{refetch:V,mutate:h}]}function Bt(e){return I(e,!1)}function $(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function Me(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let a;if(r){a=Array(e.length);for(let c=0;c<e.length;c++)a[c]=e[c]()}else a=e();if(s)return s=!1,i;const l=$(()=>t(a,o,i));return o=a,l}}function Ut(e){Wt(()=>$(e))}function ge(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function at(){return v}function lt(e,t){const n=v,r=S;v=e,S=null;try{return I(t,!0)}catch(o){Fe(o)}finally{v=n,S=r}}function ct(e){const t=S,n=v;return Promise.resolve().then(()=>{S=t,v=n;let r;return I(e,!1),S=v=null,r?r.done:void 0})}const[Yt,Fr]=O(!1);function Vt(){return[Yt,ct]}function me(e,t){const n=Symbol("context");return{id:n,Provider:Xt(n),defaultValue:e}}function We(e){let t;return v&&v.context&&(t=v.context[e.id])!==void 0?t:e.defaultValue}function De(e){const t=q(e),n=q(()=>_e(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Gt;function ut(){if(this.sources&&this.state)if(this.state===D)H(this);else{const e=T;T=null,I(()=>he(this),!1),T=e}if(S){const e=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(e)):(S.sources=[this],S.sourceSlots=[e]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function ft(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=Se&&Se.running;i&&Se.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?T.push(s):W.push(s),s.observers&&ht(s)),i||(s.state=D)}if(T.length>1e6)throw T=[],new Error},!1)),t}function H(e){if(!e.fn)return;te(e);const t=pe;Kt(e,e.value,t)}function Kt(e,t,n){let r;const o=v,s=S;S=v=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(te),e.owned=null),e.updatedAt=n+1,Fe(i)}finally{S=s,v=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ft(e,r):e.value=r,e.updatedAt=n)}function we(e,t,n,r=D,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==it&&(v.owned?v.owned.push(s):v.owned=[s]),s}function de(e){if(e.state===0)return;if(e.state===fe)return he(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)H(e);else if(e.state===fe){const r=T;T=null,I(()=>he(e,t[0]),!1),T=r}}function I(e,t){if(T)return e();let n=!1;t||(T=[]),W?n=!0:W=[],pe++;try{const r=e();return Qt(n),r}catch(r){n||(W=null),T=null,Fe(r)}}function Qt(e){if(T&&(dt(T),T=null),e)return;const t=W;W=null,t.length&&I(()=>st(t),!1)}function dt(e){for(let t=0;t<e.length;t++)de(e[t])}function Ht(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:de(r)}for(t=0;t<n;t++)de(e[t])}function he(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===D?r!==t&&(!r.updatedAt||r.updatedAt<pe)&&de(r):o===fe&&he(r,t)}}}function ht(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=fe,n.pure?T.push(n):W.push(n),n.observers&&ht(n))}}function te(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)te(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)te(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Oe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Fe(e,t=v){throw Oe(e)}function _e(e){if(typeof e=="function"&&!e.length)return _e(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=_e(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Xt(e,t){return function(r){let o;return B(()=>o=$(()=>(v.context={...v.context,[e]:r.value},De(()=>r.children))),void 0),o}}const Jt=Symbol("fallback");function Ke(e){for(let t=0;t<e.length;t++)e[t]()}function Zt(e,t,n={}){let r=[],o=[],s=[],i=0,a=t.length>1?[]:null;return ge(()=>Ke(s)),()=>{let l=e()||[],c=l.length,f,u;return l[Nt],$(()=>{let h,b,p,m,x,w,C,A,_;if(c===0)i!==0&&(Ke(s),s=[],r=[],o=[],i=0,a&&(a=[])),n.fallback&&(r=[Jt],o[0]=J(N=>(s[0]=N,n.fallback())),i=1);else if(i===0){for(o=new Array(c),u=0;u<c;u++)r[u]=l[u],o[u]=J(d);i=c}else{for(p=new Array(c),m=new Array(c),a&&(x=new Array(c)),w=0,C=Math.min(i,c);w<C&&r[w]===l[w];w++);for(C=i-1,A=c-1;C>=w&&A>=w&&r[C]===l[A];C--,A--)p[A]=o[C],m[A]=s[C],a&&(x[A]=a[C]);for(h=new Map,b=new Array(A+1),u=A;u>=w;u--)_=l[u],f=h.get(_),b[u]=f===void 0?-1:f,h.set(_,u);for(f=w;f<=C;f++)_=r[f],u=h.get(_),u!==void 0&&u!==-1?(p[u]=o[f],m[u]=s[f],a&&(x[u]=a[f]),u=b[u],h.set(_,u)):s[f]();for(u=w;u<c;u++)u in p?(o[u]=p[u],s[u]=m[u],a&&(a[u]=x[u],a[u](u))):o[u]=J(d);o=o.slice(0,i=c),r=l.slice(0)}return o});function d(h){if(s[u]=h,a){const[b,p]=O(u);return a[u]=p,t(l[u],b)}return t(l[u])}}}function g(e,t){return $(()=>e(t||{}))}function se(){return!0}const Te={get(e,t,n){return t===ce?n:e.get(t)},has(e,t){return t===ce?!0:e.has(t)},set:se,deleteProperty:se,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:se,deleteProperty:se}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function en(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ie(...e){let t=!1;for(let i=0;i<e.length;i++){const a=e[i];t=t||!!a&&ce in a,e[i]=typeof a=="function"?(t=!0,q(a)):a}if(ot&&t)return new Proxy({get(i){for(let a=e.length-1;a>=0;a--){const l=Ae(e[a])[i];if(l!==void 0)return l}},has(i){for(let a=e.length-1;a>=0;a--)if(i in Ae(e[a]))return!0;return!1},keys(){const i=[];for(let a=0;a<e.length;a++)i.push(...Object.keys(Ae(e[a])));return[...new Set(i)]}},Te);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const a=e[i];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let c=l.length-1;c>=0;c--){const f=l[c];if(f==="__proto__"||f==="constructor")continue;const u=Object.getOwnPropertyDescriptor(a,f);if(!r[f])r[f]=u.get?{enumerable:!0,configurable:!0,get:en.bind(n[f]=[u.get.bind(a)])}:u.value!==void 0?u:void 0;else{const d=n[f];d&&(u.get?d.push(u.get.bind(a)):u.value!==void 0&&d.push(()=>u.value))}}}const o={},s=Object.keys(r);for(let i=s.length-1;i>=0;i--){const a=s[i],l=r[a];l&&l.get?Object.defineProperty(o,a,l):o[a]=l?l.value:void 0}return o}function pt(e,...t){if(ot&&ce in e){const o=new Set(t.length>1?t.flat():t[0]),s=t.map(i=>new Proxy({get(a){return i.includes(a)?e[a]:void 0},has(a){return i.includes(a)&&a in e},keys(){return i.filter(a=>a in e)}},Te));return s.push(new Proxy({get(i){return o.has(i)?void 0:e[i]},has(i){return o.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!o.has(i))}},Te)),s}const n={},r=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,o),i=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let a=!1,l=0;for(const c of t)c.includes(o)&&(a=!0,i?r[l][o]=s.value:Object.defineProperty(r[l],o,s)),++l;a||(i?n[o]=s.value:Object.defineProperty(n,o,s))}return[...r,n]}const tn=e=>`Stale read from <${e}>.`;function $e(e){const t="fallback"in e&&{fallback:()=>e.fallback};return q(Zt(()=>e.each,e.children,t||void 0))}function Z(e){const t=e.keyed,n=q(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return q(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?$(()=>o(t?r:()=>{if(!$(n))throw tn("Show");return e.when})):o}return e.fallback},void 0,void 0)}const nn=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],rn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...nn]),on=new Set(["innerHTML","textContent","innerText","children"]),sn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),an=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ln(e,t){const n=an[e];return typeof n=="object"?n[t]?n.$:void 0:n}const cn=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),un=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),fn={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function dn(e,t,n){let r=n.length,o=t.length,s=r,i=0,a=0,l=t[o-1].nextSibling,c=null;for(;i<o||a<s;){if(t[i]===n[a]){i++,a++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const f=s<r?a?n[a-1].nextSibling:n[s-a]:l;for(;a<s;)e.insertBefore(n[a++],f)}else if(s===a)for(;i<o;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[a]===t[o-1]){const f=t[--o].nextSibling;e.insertBefore(n[a++],t[i++].nextSibling),e.insertBefore(n[--s],f),t[o]=n[s]}else{if(!c){c=new Map;let u=a;for(;u<s;)c.set(n[u],u++)}const f=c.get(t[i]);if(f!=null)if(a<f&&f<s){let u=i,d=1,h;for(;++u<o&&u<s&&!((h=c.get(t[u]))==null||h!==f+d);)d++;if(d>f-a){const b=t[i];for(;a<f;)e.insertBefore(n[a++],b)}else e.replaceChild(n[a++],t[i++])}else i++;else t[i++].remove()}}}const Qe="_$DX_DELEGATE";function hn(e,t,n,r={}){let o;return J(s=>{o=s,t===document?e():ae(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function ye(e,t,n){let r;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},s=()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function gt(e,t=window.document){const n=t[Qe]||(t[Qe]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,An))}}function Re(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function pn(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function gn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function mn(e,t){t==null?e.removeAttribute("class"):e.className=t}function wn(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=s=>o.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function yn(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let s,i;for(s=0,i=o.length;s<i;s++){const a=o[s];!a||a==="undefined"||t[a]||(He(e,a,!1),delete n[a])}for(s=0,i=r.length;s<i;s++){const a=r[s],l=!!t[a];!a||a==="undefined"||n[a]===l||!l||(He(e,a,!0),n[a]=l)}return n}function bn(e,t,n){if(!t)return n?Re(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function mt(e,t={},n,r){const o={};return B(()=>o.children=ne(e,t.children,o.children)),B(()=>typeof t.ref=="function"&&xn(t.ref,e)),B(()=>vn(e,t,n,!0,o,!0)),o}function xn(e,t,n){return $(()=>e(t,n))}function ae(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ne(e,t,r,n);B(o=>ne(e,t(),o,n),r)}function vn(e,t,n,r,o={},s=!1){t||(t={});for(const i in o)if(!(i in t)){if(i==="children")continue;o[i]=Xe(e,i,null,o[i],n,s,t)}for(const i in t){if(i==="children")continue;const a=t[i];o[i]=Xe(e,i,a,o[i],n,s,t)}}function Sn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function He(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function Xe(e,t,n,r,o,s,i){let a,l,c,f,u;if(t==="style")return bn(e,n,r);if(t==="classList")return yn(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r,typeof r!="function"&&r),n&&e.addEventListener(d,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),h=cn.has(d);if(!h&&r){const b=Array.isArray(r)?r[0]:r;e.removeEventListener(d,b)}(h||n)&&(wn(e,d,n,h),h&&gt([d]))}else if(t.slice(0,5)==="attr:")Re(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")gn(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(c=on.has(t))||!o&&((f=ln(t,e.tagName))||(l=rn.has(t)))||(a=e.nodeName.includes("-")||"is"in i))u&&(t=t.slice(5),l=!0),t==="class"||t==="className"?mn(e,n):a&&!l&&!c?e[Sn(t)]=n:e[f||t]=n;else{const d=o&&t.indexOf(":")>-1&&fn[t.split(":")[0]];d?pn(e,d,t,n):Re(e,sn[t]||t,n)}return n}function An(e){let t=e.target;const n=`$$${e.type}`,r=e.target,o=e.currentTarget,s=l=>Object.defineProperty(e,"target",{configurable:!0,value:l}),i=()=>{const l=t[n];if(l&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?l.call(t,c,e):l.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},a=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const l=e.composedPath();s(l[0]);for(let c=0;c<l.length-2&&(t=l[c],!!i());c++){if(t._$host){t=t._$host,a();break}if(t.parentNode===o)break}}else a();s(r)}function ne(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===n))return n;if(i){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=Q(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean")n=Q(e,n,r);else{if(s==="function")return B(()=>{let a=t();for(;typeof a=="function";)a=a();n=ne(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],l=n&&Array.isArray(n);if(Ne(a,t,n,o))return B(()=>n=ne(e,a,n,r,!0)),()=>n;if(a.length===0){if(n=Q(e,n,r),i)return n}else l?n.length===0?Je(e,a,r):dn(e,n,a):(n&&Q(e),Je(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(i)return n=Q(e,n,r,t);Q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ne(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let a=t[s],l=n&&n[e.length],c;if(!(a==null||a===!0||a===!1))if((c=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Ne(e,a,l)||o;else if(c==="function")if(r){for(;typeof a=="function";)a=a();o=Ne(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else e.push(a),o=!0;else{const f=String(a);l&&l.nodeType===3&&l.data===f?e.push(l):e.push(document.createTextNode(f))}}return o}function Je(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function Q(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const a=t[i];if(o!==a){const l=a.parentNode===e;!s&&!i?l?e.replaceChild(o,a):e.insertBefore(o,n):l&&a.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const kn=!1,Pn="http://www.w3.org/2000/svg";function qn(e,t=!1){return t?document.createElementNS(Pn,e):document.createElement(e)}function En(e){const[t,n]=pt(e,["component"]),r=q(()=>t.component);return q(()=>{const o=r();switch(typeof o){case"function":return $(()=>o(n));case"string":const s=un.has(o),i=qn(o,s);return mt(i,n,s),i}})}function wt(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:l=>{l&&(n=!0),a.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Ie;function Be(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Ie=window.history.state._depth}Be();function Cn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function zn(e,t){let n=!1;return()=>{const r=Ie;Be();const o=r==null?null:Ie-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const Ln=/^(?:[a-z0-9]+:)?\/\//i,jn=/^\/+|(\/)\/+$/g,yt="http://sr";function ee(e,t=!1){const n=e.replace(jn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function le(e,t,n){if(Ln.test(t))return;const r=ee(e),o=n&&ee(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+ee(t,!s)}function On(e,t){return ee(e).replace(/\/*(\*.*)?$/g,"")+ee(t)}function bt(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function _n(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return a=>{const l=a.split("/").filter(Boolean),c=l.length-i;if(c<0||c>0&&o===void 0&&!t)return null;const f={path:i?"":"/",params:{}},u=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const h=s[d],b=h[0]===":",p=b?l[d]:l[d].toLowerCase(),m=b?h.slice(1):h.toLowerCase();if(b&&ke(p,u(m)))f.params[m]=p;else if(b||!ke(p,m))return null;f.path+=`/${p}`}if(o){const d=c?l.slice(-c).join("/"):"";if(ke(d,u(o)))f.params[o]=d;else return null}return f}}function ke(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Tn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function xt(e){const t=new Map,n=at();return new Proxy({},{get(r,o){return t.has(o)||lt(n,()=>t.set(o,q(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function vt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return vt(r).reduce((s,i)=>[...s,...o.map(a=>a+i)],[])}const $n=100,Rn=me(),St=me();function Nn(e,t=""){const{component:n,preload:r,load:o,children:s,info:i}=e,a=!s||Array.isArray(s)&&!s.length,l={key:e,component:n,preload:r||o,info:i};return At(e.path).reduce((c,f)=>{for(const u of vt(f)){const d=On(t,u);let h=a?d:d.split("/*",1)[0];h=h.split("/").map(b=>b.startsWith(":")||b.startsWith("*")?b:encodeURIComponent(b)).join("/"),c.push({...l,originalPath:f,pattern:h,matcher:_n(h,!a,e.matchFilters)})}return c},[])}function In(e,t=0){return{routes:e,score:Tn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function At(e){return Array.isArray(e)?e:[e]}function kt(e,t="",n=[],r=[]){const o=At(e);for(let s=0,i=o.length;s<i;s++){const a=o[s];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const l=Nn(a,t);for(const c of l){n.push(c);const f=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!f)kt(a.children,c.pattern,n,r);else{const u=In([...n],r.length);r.push(u)}n.pop()}}}return n.length?r:r.sort((s,i)=>i.score-s.score)}function Pe(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Mn(e,t,n){const r=new URL(yt),o=q(f=>{const u=e();try{return new URL(u,r)}catch{return console.error(`Invalid path ${u}`),f}},r,{equals:(f,u)=>f.href===u.href}),s=q(()=>o().pathname),i=q(()=>o().search,!0),a=q(()=>o().hash),l=()=>"",c=Me(i,()=>bt(o()));return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return l()},query:n?n(c):xt(c)}}let U;function Wn(){return U}function Dn(e,t,n,r={}){const{signal:[o,s],utils:i={}}=e,a=i.parsePath||(k=>k),l=i.renderPath||(k=>k),c=i.beforeLeave||wt(),f=le("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!o().value&&s({value:f,replace:!0,scroll:!1});const[u,d]=O(!1);let h;const b=(k,P)=>{P.value===p()&&P.state===x()||(h===void 0&&d(!0),U=k,h=P,ct(()=>{h===P&&(m(h.value),w(h.state),_[1](R=>R.filter(G=>G.pending)))}).finally(()=>{h===P&&Bt(()=>{U=void 0,k==="navigate"&&Tt(h),d(!1),h=void 0})}))},[p,m]=O(o().value),[x,w]=O(o().state),C=Mn(p,x,i.queryWrapper),A=[],_=O([]),N=q(()=>typeof r.transformUrl=="function"?Pe(t(),r.transformUrl(C.pathname)):Pe(t(),C.pathname)),V=()=>{const k=N(),P={};for(let R=0;R<k.length;R++)Object.assign(P,k[R].params);return P},j=i.paramsWrapper?i.paramsWrapper(V,t):xt(V),E={pattern:f,path:()=>f,outlet:()=>null,resolvePath(k){return le(f,k)}};return B(Me(o,k=>b("native",k),{defer:!0})),{base:E,location:C,params:j,isRouting:u,renderPath:l,parsePath:a,navigatorFactory:F,matches:N,beforeLeave:c,preloadRoute:$t,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:_};function z(k,P,R){$(()=>{if(typeof P=="number"){P&&(i.go?i.go(P):console.warn("Router integration does not support relative routing"));return}const G=!P||P[0]==="?",{replace:be,resolve:K,scroll:xe,state:X}={replace:!1,resolve:!G,scroll:!0,...R},oe=K?k.resolvePath(P):le(G&&C.pathname||"",P);if(oe===void 0)throw new Error(`Path '${P}' is not a routable path`);if(A.length>=$n)throw new Error("Too many redirects");const Ge=p();(oe!==Ge||X!==x())&&(kn||c.confirm(oe,R)&&(A.push({value:Ge,replace:be,scroll:xe,state:x()}),b("navigate",{value:oe,state:X})))})}function F(k){return k=k||We(St)||E,(P,R)=>z(k,P,R)}function Tt(k){const P=A[0];P&&(s({...k,replace:P.replace,scroll:P.scroll}),A.length=0)}function $t(k,P){const R=Pe(t(),k.pathname),G=U;U="preload";for(let be in R){const{route:K,params:xe}=R[be];K.component&&K.component.preload&&K.component.preload();const{preload:X}=K;P&&X&&lt(n(),()=>X({params:xe,location:{pathname:k.pathname,search:k.search,hash:k.hash,query:bt(k),state:null,key:""},intent:"preload"}))}U=G}}function Fn(e,t,n,r){const{base:o,location:s,params:i}=e,{pattern:a,component:l,preload:c}=r().route,f=q(()=>r().path);l&&l.preload&&l.preload();const u=c?c({params:i,location:s,intent:U||"initial"}):void 0;return{parent:t,pattern:a,path:f,outlet:()=>l?g(l,{params:i,location:s,data:u,get children(){return n()}}):n(),resolvePath(h){return le(o.path(),h,f())}}}const Bn=e=>t=>{const{base:n}=t,r=De(()=>t.children),o=q(()=>kt(r(),t.base||""));let s;const i=Dn(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),g(Rn.Provider,{value:i,get children(){return g(Un,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[q(()=>(s=at())&&null),g(Yn,{routerState:i,get branches(){return o()}})]}})}})};function Un(e){const t=e.routerState.location,n=e.routerState.params,r=q(()=>e.preload&&$(()=>{e.preload({params:n,location:t,intent:Wn()||"initial"})}));return g(Z,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>g(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Yn(e){const t=[];let n;const r=q(Me(e.routerState.matches,(o,s,i)=>{let a=s&&o.length===s.length;const l=[];for(let c=0,f=o.length;c<f;c++){const u=s&&s[c],d=o[c];i&&u&&d.route.key===u.route.key?l[c]=i[c]:(a=!1,t[c]&&t[c](),J(h=>{t[c]=h,l[c]=Fn(e.routerState,l[c-1]||e.routerState.base,Ze(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(o.length).forEach(c=>c()),i&&a?i:(n=l[0],l)}));return Ze(()=>r()&&n)()}const Ze=e=>()=>g(Z,{get when(){return e()},keyed:!0,children:t=>g(St.Provider,{value:t,get children(){return t.outlet()}})}),et=e=>{const t=De(()=>e.children);return ie(e,{get children(){return t()}})};function Vn([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Gn(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Vn(O(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&ge(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Bn({signal:r,create:e.create,utils:e.utils})}function Kn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Qn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Hn=new Map;function Xn(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),i=o.navigatorFactory(o.base);let a,l;function c(p){return p.namespaceURI==="http://www.w3.org/2000/svg"}function f(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const m=p.composedPath().find(N=>N instanceof Node&&N.nodeName.toUpperCase()==="A");if(!m||t&&!m.hasAttribute("link"))return;const x=c(m),w=x?m.href.baseVal:m.href;if((x?m.target.baseVal:m.target)||!w&&!m.hasAttribute("state"))return;const A=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||A&&A.includes("external"))return;const _=x?new URL(w,document.baseURI):new URL(w);if(!(_.origin!==window.location.origin||s&&_.pathname&&!_.pathname.toLowerCase().startsWith(s.toLowerCase())))return[m,_]}function u(p){const m=f(p);if(!m)return;const[x,w]=m,C=o.parsePath(w.pathname+w.search+w.hash),A=x.getAttribute("state");p.preventDefault(),i(C,{resolve:!1,replace:x.hasAttribute("replace"),scroll:!x.hasAttribute("noscroll"),state:A?JSON.parse(A):void 0})}function d(p){const m=f(p);if(!m)return;const[x,w]=m;r&&(w.pathname=r(w.pathname)),o.preloadRoute(w,x.getAttribute("preload")!=="false")}function h(p){clearTimeout(a);const m=f(p);if(!m)return l=null;const[x,w]=m;l!==x&&(r&&(w.pathname=r(w.pathname)),a=setTimeout(()=>{o.preloadRoute(w,x.getAttribute("preload")!=="false"),l=x},20))}function b(p){if(p.defaultPrevented)return;let m=p.submitter&&p.submitter.hasAttribute("formaction")?p.submitter.getAttribute("formaction"):p.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const w=new URL(m,yt);if(m=o.parsePath(w.pathname+w.search),!m.startsWith(n))return}if(p.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const x=Hn.get(m);if(x){p.preventDefault();const w=new FormData(p.target,p.submitter);x.call({r:o,f:p.target},p.target.enctype==="multipart/form-data"?w:new URLSearchParams(w))}}gt(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mousemove",h,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",b),ge(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mousemove",h),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",b)})}}function Jn(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=wt();return Gn({get:t,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(Cn(i),"",r):window.history.pushState(i,"",r),Qn(decodeURIComponent(window.location.hash.slice(1)),s),Be()},init:r=>Kn(window,"popstate",zn(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Xn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}let Zn={data:""},er=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Zn,tr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,nr=/\/\*[^]*?\*\/|  +/g,tt=/\n+/g,Y=(e,t)=>{let n="",r="",o="";for(let s in e){let i=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+i+";":r+=s[1]=="f"?Y(i,s):s+"{"+Y(i,s[1]=="k"?"":t)+"}":typeof i=="object"?r+=Y(i,t?t.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):i!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Y.p?Y.p(s,i):s+":"+i+";")}return n+(t&&o?t+"{"+o+"}":o)+r},M={},Pt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Pt(e[n]);return t}return e},rr=(e,t,n,r,o)=>{let s=Pt(e),i=M[s]||(M[s]=(l=>{let c=0,f=11;for(;c<l.length;)f=101*f+l.charCodeAt(c++)>>>0;return"go"+f})(s));if(!M[i]){let l=s!==e?e:(c=>{let f,u,d=[{}];for(;f=tr.exec(c.replace(nr,""));)f[4]?d.shift():f[3]?(u=f[3].replace(tt," ").trim(),d.unshift(d[0][u]=d[0][u]||{})):d[0][f[1]]=f[2].replace(tt," ").trim();return d[0]})(e);M[i]=Y(o?{["@keyframes "+i]:l}:l,n?"":"."+i)}let a=n&&M.g?M.g:null;return n&&(M.g=M[i]),((l,c,f,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=f?l+c.data:c.data+l)})(M[i],t,r,a),i},or=(e,t,n)=>e.reduce((r,o,s)=>{let i=t[s];if(i&&i.call){let a=i(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=l?"."+l:a&&typeof a=="object"?a.props?"":Y(a,""):a===!1?"":a}return r+o+(i??"")},"");function re(e){let t=this||{},n=e.call?e(t.p):e;return rr(n.unshift?n.raw?or(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,er(t.target),t.g,t.o,t.k)}re.bind({g:1});let Ue=re.bind({k:1});const sr=me();function ir(e){let t=this||{};return(...n)=>{const r=o=>{const s=We(sr),i=ie(o,{theme:s}),a=ie(i,{get class(){const h=i.class,b="class"in i&&/^go[0-9]+/.test(h);let p=re.apply({target:t.target,o:b,p:i,g:t.g},n);return[h,p].filter(Boolean).join(" ")}}),[l,c]=pt(a,["as","theme"]),f=c,u=l.as||e;let d;return typeof u=="function"?d=u(f):t.g==1?(d=document.createElement(u),mt(d,f)):d=En(ie({component:u},f)),d};return r.class=o=>$(()=>re.apply({target:t.target,p:o,g:t.g},n)),r}}const L=new Proxy(ir,{get(e,t){return e(t)}}),qe=L("button")`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: "SillyFont-2", sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  padding: 1.25em 2em;
  border-radius: 0.75em;
  background: var(--light-waffle);
  color: var(--text-1);
  border: 2px solid var(--waffle-border);

  touch-action: manipulation;

  transform-style: preserve-3d;
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--dark-waffle);
    border-radius: inherit;
    box-shadow:
      0 0 0 2px var(--waffle-border),
      0 0.625em 0 0 #dea737;
    transform: translate3d(0, 0.75em, -1em);
    transition:
      transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  @media (pointer: coarse) {
    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    background: var(--waffle);
    transform: translateY(0.25em);

    &::before {
      box-shadow:
        0 0 0 2px var(--waffle-border),
        0 0.5em 0 0 #dba129;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    background: var(--waffle);
    transform: translateY(0.75em);

    &::before {
      box-shadow:
        0 0 0 2px var(--waffle-border),
        0 0 var(--waffle-shadow);
      transform: translate3d(0, 0, -1em);
    }
  }

  ${e=>e.disable?re`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.5;
          filter: grayscale(50%);
          transform: none;

          &::before {
            box-shadow: none;
            transform: none;
          }
        `:""};
`,ar="modulepreload",lr=function(e){return"/silly_quizzes/"+e},nt={},Ee=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=i?.nonce||i?.getAttribute("nonce");o=Promise.allSettled(n.map(l=>{if(l=lr(l),l in nt)return;nt[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":ar,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},cr=(e,t,n)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((o,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})},qt=e=>e!=null&&(e=Object.getPrototypeOf(e),e===Array.prototype||e===Object.prototype);function Et(e,t,n){for(const[r,o]of Object.entries(t)){const s=`${n}.${r}`;e[s]=o,qt(o)&&Et(e,o,s)}}function Ye(e){const t={...e};for(const[n,r]of Object.entries(e))qt(r)&&Et(t,r,n);return t}const Ct=(e,t)=>{if(t)for(const[n,r]of Object.entries(t))e=e.replace(new RegExp(`{{\\s*${n}\\s*}}`,"g"),r);return e},ur=e=>e;function zt(e,t=ur){return(n,...r)=>{n[0]==="."&&(n=n.slice(1));const o=e()?.[n];switch(typeof o){case"function":return o(...r);case"string":return t(o,r[0]);default:return o}}}const Lt={quizes:{waffle:{welcome:{title:"Are you sure you want to take this quiz?",description:"Some people may go cook waffles after this quiz"},questions:{first:{text:"You wake up at 6:00 AM. What is the first thing you will do?",buttons:{first:"Cook some waffles!",second:"Go brush your teeth",third:"Check your phone"}},second:{text:"With that in mind, you decided to close your eyes for:",buttons:{first:"1 minute!",second:"10 minutes!",third:"3 hours!"}},third:{text:"Suddenly, you hear a sound from your kitchen and open your eyes. What will you take with you?",buttons:{first:"a pink pencil case",second:"A long cat-shaped pillow",third:"An old green pencil"}},fourth:{text:"You open a door and see a waffle with a spoon. What do you do?",buttons:{first:"Stay calm and ask him if he wants to be eaten",second:"Point your weapon at him and start screaming",third:"Am I dreaming? This can't be possible"}},fifth:{text:"A waffle asks you politely to help him. Shall we?",buttons:{first:"Yes! We can even become friends later!!",second:"Yes, in the end I will eat him!",third:"I'm curious to see what will happen next..."}},sixth:{text:"A waffle shows you the ingredients for cooking, but you don't know how to cook. What do you do?",buttons:{first:"Sounds funny! Let's try!!",second:"I think I can figure it out, and if not, I will eat him",third:"Uhhm... not sure, but I will try my best!"}},seventh:{text:"Almost done! All you need to do is add one of the ingredients. Which one should it be?",buttons:{first:"Powdered sugar",second:"Nut butter",third:"Maple syrup",fourth:"Salt"}},eight:{text:"Done! You show him your perfect homemade waffle, and he seems happy!",buttons:{first:"Ask him if he wants to be your friend?",second:"Leave him and move on with your life",third:"Eat him and your homemade waffle!"}},ninth:{text:"Suddenly, your vision goes dark and you fall to the floor. You open your eyes and see the old, familiar ceiling.",buttons:{first:"Ohh... I'm late!",second:"Was it a dream? Now I want to go cook some waffles!",third:"Finally, this scary dream is over"}}},result:{heart:{name:"You are Heart-Shaped Waffle!!",description:"You have a wholesome soul, and you always care about those around you!",link:"https://skandibaking.com/hjertevafler-norwegian-heart-shaped-waffles/",emoji:"🧇"},pandan:{name:"You are a Pandan Waffle!!",description:"Sometimes things can go wrong, but you stay calm and keep a cool head while trying to resolve them! Good luck!",emoji:"🧇"},ube:{name:"You are an Ube Waffle!!",description:"You like to fantasize a lot; no one can predict your next move!",emoji:"🧇"},liege:{name:"You are a Liège Waffle!!",description:"Sometimes things can go wrong, but you stay calm and keep a cool head while trying to resolve them! Good luck!",emoji:"🧇"}}}}},jt={app:Lt},fr=Object.freeze(Object.defineProperty({__proto__:null,app:Lt,default:jt},Symbol.toStringTag,{value:"Module"})),Ot={en:jt},[Ve,dr]=O("en"),_t=me(zt(()=>Ye(Ot.en),Ct)),hr=()=>We(_t),[Br,pr]=Vt();function gr(e){pr(()=>{dr(e),console.log("Language set to:",e,"Current signal:",Ve())})}async function mr(e){const t=await cr(Object.assign({"./locales/en.json":()=>Ee(()=>Promise.resolve().then(()=>fr),void 0),"./locales/fi.json":()=>Ee(()=>import("./fi-C308K0iH.js"),[]),"./locales/ru.json":()=>Ee(()=>import("./ru-cP27N4xu.js"),[])}),`./locales/${e}.json`,3);return Ye(t)}var wr=ye("<span class=waffle-icon>🧇");const yr=Ue`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`,br=L("div")`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  cursor: pointer;
  font-family: "Comic Sans MS", cursive;

  @media (max-width: 767px) {
    position: absolute;
  }

  &:hover {
    .language-picker {
      transform: rotate(10deg) scale(1.1);
      background: #ffecb3;
    }

    .language-menu {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }
  }
`,xr=L("button")`
  background: #ffd700;
  border: 3px solid #ffb300;
  border-radius: 50px 10px 10px 50px;
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #8d6e63;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }

  .waffle-icon {
    animation: ${yr} 2s infinite linear;
    font-size: 1.5em;
  }
`,vr=L("div")`
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff3e0;
  border: 2px solid #ffb300;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  min-width: 150px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`,Sr=L("button")`
  width: 100%;
  padding: 12px;
  background: ${e=>e.selected?"var(--dark-waffle)":"none"};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  color: #6d4c41;
  cursor: pointer;
  transition: all 0.2s ease;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    background: var(--light-waffle-2);
    transform: translateX(10px);
  }

  &::before {
    content: "🥞";
    margin-right: 8px;
  }
`,Ar=()=>g(br,{get children(){return[g(xr,{class:"language-picker",get children(){return[wr(),"WaffleLang"]}}),g(vr,{class:"language-menu",get children(){return[["English","🥞","en"],["Suomi","🍯","fi"],["Русский","🥐","ru"]].map(e=>g(Sr,{get selected(){return e[2]===Ve()},onClick:()=>gr(e[2]),get children(){return`${e[0]} ${e[1]}`}}))}})]}});L("div")`
  padding: 0.5rem;
  border-radius: 13px;

  background: #e6bc68;
  font-size: 1.5em;
  color: white;
`;var kr=ye("<a href=https://github.com/Azumi4han target=_blank>© 2025 AzumiChan // All artwork is copyrighted. Please do not use, copy, or distribute without permission");const Pr=L("div")`
  display: flex;
  height: 100%;
  padding: 15px;
  justify-content: center;
`,qr=L("main")`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  border-start-start-radius: 8px;
  padding-bottom: 5.5rem;
`,Er=L("footer")`
  text-align: center;
  a {
    font-size: 10px;
  }
`;function Cr(e){return[g(Pr,{get children(){return[g(Ar,{}),g(qr,{get children(){return e.children}})]}}),g(Er,{get children(){return kr()}})]}var zr=ye("<h3>Question <!> of "),Lr=ye("<div>");const Ce=L("div")`
  text-align: center;
  width: 100%;
  padding: 2rem;
  background: #fff;
  border-radius: 10px 10px 0px 0px;
  box-shadow:
    0 0 0 2px var(--waffle-border),
    0.625em 0 0 0 var(--waffle-shadow);
`,jr=L("div")`
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin: 1rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${e=>e.progress}%;
    background: #ffd700;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`,Or=L("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${Ue`from { opacity: 0; transform: translateY(20px); }`}
    0.3s ease;
`,ze=L("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--dark-waffle-2);
  padding: 2rem 4rem 3rem 4rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid var(--waffle-border);
  box-shadow:
    0 0 0 2px var(--waffle-border),
    0.625em 0 0 0 var(--waffle-shadow);
`,rt=L("img")`
  height: 200px;
  object-fit: cover;
  box-shadow:
    0 0 0 2.5px var(--waffle-border),
    0.5em 0 0 #dba129;
  border-radius: 20px;
`,Le=L("div")`
  text-align: center;
  font-size: 1.678rem;
  font-weight: 600;
  overflow: hidden;
  font-family: "SillyFont";
  margin-bottom: 2.5rem;
  margin-top: 1.2rem;
`,je=L("div")`
  font-family: "SillyFont";
  font-size: 1.0875rem;
  font-weight: 500;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`,_r=L("div")`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  background: #fff0f5;
  border-radius: 1rem;
  font-size: 0.9rem;
`;function Tr(e){const[t,n]=O(!1),[r,o]=O(0),[s,i]=O(new Set),[a,l]=O(null),c=d=>{if(i(h=>new Set([...h,...d])),r()<e.questions.length-1)o(h=>h+1);else{const h=Array.from(s()),b=e.results.reduce((p,m)=>{const x=m.combination.filter(w=>h.includes(w)).length;return x>p.match?{result:m,match:x}:p},{result:e.results[0],match:0});l(b.result)}},f=()=>{n(!1),o(0),i(new Set),l(null)},u=()=>(r()+1)/e.questions.length*100;return[g(Z,{get when(){return!t()},get children(){return[g(Ce,{get children(){return[g(Le,{get children(){return e.title}}),g(rt,{get src(){return e.preview}}),g(je,{get children(){return e.description}})]}}),g(ze,{get children(){return g(qe,{onClick:()=>n(!0),children:"Start Quiz 🧇"})}})]}}),g(Z,{get when(){return q(()=>!!t())()&&!a()},get children(){return[g(Ce,{get children(){return[g(jr,{get progress(){return u()}}),g(Or,{get children(){return[(()=>{var d=zr(),h=d.firstChild,b=h.nextSibling;return b.nextSibling,ae(d,()=>r()+1,b),ae(d,()=>e.questions.length,null),d})(),g(Le,{get children(){return e.questions[r()].text}}),g(rt,{get src(){return e.questions[r()].image}})]}})]}}),g(ze,{get children(){return g($e,{get each(){return e.questions[r()].answers},children:d=>g(qe,{onClick:()=>c(d.traits),get children(){return d.text}})})}})]}}),g(Z,{get when(){return a()},get children(){return[g(Ce,{get children(){return[g(Le,{get children(){return a().name}}),g(je,{get children(){return a().description}}),g(je,{children:"Your Waffle Combination:"}),(()=>{var d=Lr();return d.style.setProperty("margin","1rem 0"),ae(d,g($e,{get each(){return a().combination},children:h=>g(_r,{children:h})})),d})()]}}),q(()=>q(()=>!!e.renderResult)()?e.renderResult(a(),f):g(ze,{get children(){return g(qe,{onClick:f,children:"Bake Another Waffle! 🧇"})}}))]}})]}const y=hr(),$r={title:y("app.quizes.waffle.welcome.title"),description:y("app.quizes.waffle.welcome.description"),preview:"/images/waffle/waffle.png",possibleTraits:["positive","lazy","soft","fluffy","crunchy","pink","green","brown","golden","purple","white","round","square","rectangular","sweet","chocolate","vanilla","spiced","hot","cold","stuffed","layered","glazed","decorated"],questions:[{id:1,text:y("app.quizes.waffle.questions.first.text"),image:"/images/waffle/woke_up.gif",answers:[{text:y("app.quizes.waffle.questions.first.buttons.first"),traits:["positive","golden","soft"]},{text:y("app.quizes.waffle.questions.first.buttons.second"),traits:["positive","lazy","cold"]},{text:y("app.quizes.waffle.questions.first.buttons.third"),traits:["lazy","cold","vanilla"]}]},{id:2,text:y("app.quizes.waffle.questions.second.text"),image:"/images/waffle/close_eyes.gif",answers:[{text:y("app.quizes.waffle.questions.second.buttons.first"),traits:["sweet","spiced","lazy"]},{text:y("app.quizes.waffle.questions.second.buttons.second"),traits:["sweet","spiced","hot"]},{text:y("app.quizes.waffle.questions.second.buttons.third"),traits:["cold","glazed","decorated"]}]},{id:3,text:y("app.quizes.waffle.questions.third.text"),image:"/images/waffle/sounds_from_kitchen.gif",answers:[{text:y("app.quizes.waffle.questions.third.buttons.first"),traits:["pink","sweet","vanilla","positive"]},{text:y("app.quizes.waffle.questions.third.buttons.second"),traits:["brown","round","sweet","chocolate"]},{text:y("app.quizes.waffle.questions.third.buttons.third"),traits:["green","rectangular","vanilla","decorated"]}]},{id:4,text:y("app.quizes.waffle.questions.fourth.text"),image:"/images/waffle/waffle_standing.gif",answers:[{text:y("app.quizes.waffle.questions.fourth.buttons.first"),traits:["spiced","cold","crunchy","green","stuffed"]},{text:y("app.quizes.waffle.questions.fourth.buttons.second"),traits:["hot","glazed","purple","crunchy","layered"]},{text:y("app.quizes.waffle.questions.fourth.buttons.third"),traits:["decorated","vanilla","white","soft","lazy"]}]},{id:5,text:y("app.quizes.waffle.questions.fifth.text"),image:"/images/waffle/waffle_ask_for_help.gif",answers:[{text:y("app.quizes.waffle.questions.fifth.buttons.first"),traits:["purple","soft","fluffy","positive","glazed"]},{text:y("app.quizes.waffle.questions.fifth.buttons.second"),traits:["green","spiced","crunchy","positive","stuffed"]},{text:y("app.quizes.waffle.questions.fifth.buttons.third"),traits:["cold","stuffed","layered","glazed","decorated"]}]},{id:6,text:y("app.quizes.waffle.questions.sixth.text"),image:"/images/waffle/waffle_shows_products.gif",answers:[{text:y("app.quizes.waffle.questions.sixth.buttons.first"),traits:["positive","sweet","chocolate","hot","decorated"]},{text:y("app.quizes.waffle.questions.sixth.buttons.second"),traits:["positive","sweet","vanilla","brown","decorated"]},{text:y("app.quizes.waffle.questions.sixth.buttons.third"),traits:["lazy","spiced","cold","decorated","golden"]}]},{id:7,text:y("app.quizes.waffle.questions.seventh.text"),image:"/images/waffle/select_one.gif",answers:[{text:y("app.quizes.waffle.questions.seventh.buttons.first"),traits:["white","round","decorated","soft"]},{text:y("app.quizes.waffle.questions.seventh.buttons.second"),traits:["brown","square","hot","stuffed"]},{text:y("app.quizes.waffle.questions.seventh.buttons.third"),traits:["decorated","sweet","fluffy","round"]},{text:y("app.quizes.waffle.questions.seventh.buttons.fourth"),traits:["spiced","stuffed","glazed","crunchy"]}]},{id:8,text:y("app.quizes.waffle.questions.eight.text"),image:"/images/waffle/perfect_waffle.gif",answers:[{text:y("app.quizes.waffle.questions.eight.buttons.first"),traits:["positive","pink","golden","purple","rectangular","stuffed"]},{text:y("app.quizes.waffle.questions.eight.buttons.second"),traits:["positive","brown","golden","white","square","decorated"]},{text:y("app.quizes.waffle.questions.eight.buttons.third"),traits:["decorated","positive","white","square","round","rectangular"]}]},{id:9,text:y("app.quizes.waffle.questions.ninth.text"),image:"/images/waffle/fades_out.gif",answers:[{text:y("app.quizes.waffle.questions.ninth.buttons.first"),traits:["chocolate","hot","glazed","decorated","crunchy","green"]},{text:y("app.quizes.waffle.questions.ninth.buttons.second"),traits:["positive","pink","golden","sweet","layered","decorated"]},{text:y("app.quizes.waffle.questions.ninth.buttons.third"),traits:["cold","white","brown","golden","sweet","decorated"]}]}],results:[{combination:["pink","positive","layered","sweet","hot","decorated","golden"],name:"Ube Purple Waffle",description:"Vibrant Filipino-inspired yam delight with layered sweetness.",image:"",emoji:"🍠"},{combination:["positive","crunchy","golden","rectangular","sweet","hot","glazed"],name:"Liège Waffle",description:"Caramelized Belgian delight with a crispy crust.",image:"",emoji:"🇧🇪"},{combination:["positive","fluffy","golden","rectangular","sweet","cold","decorated"],name:"Brussels Waffle",description:"Light and airy, perfect for toppings!",emoji:"🍓"},{combination:["positive","fluffy","brown","round","sweet","hot","decorated"],name:"American Classic",description:"Fluffy circles of breakfast joy.",emoji:"🇺🇸"},{combination:["positive","crunchy","golden","round","sweet","hot","decorated"],name:"Hong Kong Egg Waffle",description:"Crispy honeycombed bubbles of happiness.",emoji:"🐣"},{combination:["positive","crunchy","brown","round","sweet","cold","layered"],name:"Stroopwafel",description:"Dutch syrup-filled layers of crunch.",emoji:"🍯"},{combination:["positive","soft","golden","round","vanilla","hot","decorated"],name:"Scandinavian Heart Waffle",description:"Soft, vanilla-scented love on a plate.",emoji:"❤️"},{combination:["positive","crunchy","green","square","sweet","hot","glazed"],name:"Pandan Waffle",description:"Tropical green crispness with coconut glaze.",emoji:"🌴"},{combination:["lazy","crunchy","brown","square","spiced","hot","stuffed"],name:"Savory Galette",description:"Buckwheat waffle stuffed with herbs and cheese.",emoji:"🧀"},{combination:["positive","crunchy","golden","round","sweet","hot","glazed"],name:"Churro Waffle",description:"Cinnamon-sugar coated crunch.",emoji:"🎪"},{combination:["positive","soft","pink","round","chocolate","hot","decorated"],name:"Red Velvet Waffle",description:"Decadent cocoa with a cream cheese crown.",emoji:"🎀"},{combination:["positive","crunchy","brown","rectangular","chocolate","hot","stuffed"],name:"Chocolate-Stuffed Belgian",description:"Melted chocolate core in every bite.",emoji:"🍫"},{combination:["positive","fluffy","brown","round","spiced","hot","layered"],name:"Winter Spiced Waffle",description:"Cinnamon-apple layers for cozy mornings.",emoji:"❄️"},{combination:["lazy","soft","white","square","vanilla","cold","glazed"],name:"Lazy Day Waffle",description:"Microwaved leftovers with syrup drizzle.",emoji:"🛋️"},{combination:["positive","fluffy","purple","round","sweet","hot","decorated"],name:"Ube Purple Waffle",description:"Vibrant Filipino-inspired yam delight.",emoji:"🍠"},{combination:["positive","crunchy","white","square","vanilla","hot","decorated"],name:"Gluten-Free Almond",description:"Nutty crunch with fresh berries.",emoji:"🌾"}]};function Rr(){return g(Tr,$r)}const Nr=Ue`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(var(--rotation));
    opacity: 0;
  }
`,Ir=L("div")`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;

  @media (max-width: 767px) {
    position: absolute !important;
  }
`,Mr=L("div")`
  position: absolute;
  font-size: 24px;
  animation: ${Nr} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  user-select: none;
  will-change: transform, opacity;
`;function Wr(){const[e,t]=O([]);let n=0,r=0;const o=()=>{const i=Math.random()*Math.PI,a=50+Math.random()*100;return{tx:`${Math.cos(i)*a}px`,ty:`${Math.sin(i)*a}px`,rotation:`${Math.random()*720-360}deg`}},s=i=>{const a=Date.now();if(a-r<50)return;r=a;const l=++n,c=o();t(f=>[...f,{id:l,x:i.clientX,y:i.clientY,...c}]),setTimeout(()=>{t(f=>f.filter(u=>u.id!==l))},1200)};return Ut(()=>{window.addEventListener("mousemove",s),ge(()=>window.removeEventListener("mousemove",s))}),g(Ir,{get children(){return g($e,{get each(){return e()},children:i=>g(Mr,{get style(){return{"--tx":i.tx,"--ty":i.ty,"--rotation":i.rotation,left:`${i.x}px`,top:`${i.y}px`}},children:"🧇"})})}})}function Dr(e){const[t]=Ft(Ve,mr,{initialValue:Ye(Ot.en)}),n=q(()=>zt(t,Ct));return g(_t.Provider,{get value(){return n()},get children(){return[q(()=>e.children),g(Wr,{})]}})}hn(()=>g(Jn,{root:Dr,get children(){return g(et,{path:"/",component:Cr,get children(){return g(et,{path:"/waffle",component:Rr})}})}}),document.getElementById("root"));
