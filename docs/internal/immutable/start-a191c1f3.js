import{S as xe,i as et,s as tt,a as nt,e as B,c as rt,b as H,g as he,t as F,d as me,f as J,h as z,j as at,o as Se,k as ot,l as st,m as it,n as ke,p as q,q as lt,r as ct,u as ft,v as Z,w as Q,x as je,y as x,z as ee,A as ze}from"./chunks/index-1223da0b.js";import{g as Ge,f as Ke,s as M,a as Oe,i as ut}from"./chunks/singletons-4b472790.js";import{s as dt}from"./chunks/paths-846459bd.js";function pt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ht(r){return r.split("%25").map(decodeURI).join("%25")}function mt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const _t=["href","pathname","search","searchParams","toString","toJSON"];function gt(r,e){const n=new URL(r);for(const s of _t){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return wt(n),n}function wt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const yt="/__data.json";function bt(r){return r.replace(/\/$/,"")+yt}function vt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(s)}return _e(r,e)};const se=new Map;function Et(r,e){const n=Ze(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&se.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return _e(r,e)}function kt(r,e,n){if(se.size>0){const s=Ze(r,n),o=se.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);se.delete(s)}}return _e(e,n)}function Ze(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${vt(e.body)}"]`),s}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${$t(r).map((t,u,g)=>{const d=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(_)return e.push(_[1]),n.push(_[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(w)return e.push(w[1]),n.push(w[2]),s.push(!0),"(?:/([^/]+))?";const O=u===g.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((L,V)=>{if(V%2){const T=Rt.exec(L);if(!T)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,W,le,ne]=T;return e.push(le),n.push(ne),s.push(!!te),W?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return O&&L.includes(".")&&(o=!1),L.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function $t(r){return r.slice(1).split("/").filter(Ot)}function Lt(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],g=n[t];let d=r[t+1];if(d||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(d))return}m[u]=d!=null?d:""}}return m}function It(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([u,[g,d,_]])=>{const{pattern:w,names:O,types:G,optional:K}=St(u),L={id:u,exec:V=>{const T=w.exec(V);if(T)return Lt(T,{names:O,types:G,optional:K},s)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...d||[]].map(t),leaf:m(g)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function m(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function t(u){return u===void 0?u:[o.has(u),r[u]]}}function jt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function At(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Pt]},$$scope:{ctx:t}}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&523&&(g.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function Pt(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),H(t,n,u),s=!0},p(t,u){const g={};if(u&8&&(g.data=t[3]),u&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function Me(r){let e,n=r[5]&&He(r);return{c(){e=ot("div"),n&&n.c(),this.h()},l(s){e=st(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=it(e);n&&n.l(o),o.forEach(z),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){H(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=He(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function He(r){let e;return{c(){e=lt(r[6])},l(n){e=ct(n,r[6])},m(n,s){H(n,e,s)},p(n,s){s&64&&ft(e,n[6])},d(n){n&&z(e)}}}function Nt(r){let e,n,s,o,m;const t=[At,jt],u=[];function g(_,w){return _[0][1]?0:1}e=g(r),n=u[e]=t[e](r);let d=r[4]&&Me(r);return{c(){n.c(),s=nt(),d&&d.c(),o=B()},l(_){n.l(_),s=rt(_),d&&d.l(_),o=B()},m(_,w){u[e].m(_,w),H(_,s,w),d&&d.m(_,w),H(_,o,w),m=!0},p(_,[w]){let O=e;e=g(_),e===O?u[e].p(_,w):(he(),F(u[O],1,1,()=>{u[O]=null}),me(),n=u[e],n?n.p(_,w):(n=u[e]=t[e](_),n.c()),J(n,1),n.m(s.parentNode,s)),_[4]?d?d.p(_,w):(d=Me(_),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(_){m||(J(n),m=!0)},o(_){F(n),m=!1},d(_){u[e].d(_),_&&z(s),d&&d.d(_),_&&z(o)}}}function Ut(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:g=null}=e;at(s.page.notify);let d=!1,_=!1,w=null;return Se(()=>{const O=s.page.subscribe(()=>{d&&(n(5,_=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),O}),r.$$set=O=>{"stores"in O&&n(7,s=O.stores),"page"in O&&n(8,o=O.page),"components"in O&&n(0,m=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,u=O.data_0),"data_1"in O&&n(3,g=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,u,g,d,_,w,s,o]}class Tt extends xe{constructor(e){super(),et(this,e,Ut,Nt,tt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Dt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Vt=function(r,e){return new URL(r,e).href},We={},X=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(m=>{if(m=Vt(m,s),m in We)return;We[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Dt,t||(d.as="script",d.crossOrigin=""),d.href=m,document.head.appendChild(d),t)return new Promise((_,w)=>{d.addEventListener("load",_),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},qt={},ge=[()=>X(()=>import("./chunks/0-70ae98ae.js"),["./chunks/0-70ae98ae.js","./components/pages/_layout.svelte-0fe3149e.js","./chunks/index-1223da0b.js","./chunks/paths-846459bd.js","./assets/_layout-85a0114b.css"],import.meta.url),()=>X(()=>import("./chunks/1-41cb002a.js"),["./chunks/1-41cb002a.js","./components/error.svelte-025922e3.js","./chunks/index-1223da0b.js","./chunks/singletons-4b472790.js","./chunks/paths-846459bd.js"],import.meta.url),()=>X(()=>import("./chunks/2-af1a5ce7.js"),["./chunks/2-af1a5ce7.js","./chunks/_page-6ab928b4.js","./components/pages/_page.svelte-e6a84e09.js","./chunks/index-1223da0b.js","./chunks/paths-846459bd.js"],import.meta.url),()=>X(()=>import("./chunks/3-5fd9671d.js"),["./chunks/3-5fd9671d.js","./chunks/_page-b83a0680.js","./chunks/environment-2d36df95.js","./components/pages/about/_page.svelte-309e0396.js","./chunks/index-1223da0b.js","./assets/_page-47692af2.css"],import.meta.url),()=>X(()=>import("./chunks/4-97f2b9f1.js"),["./chunks/4-97f2b9f1.js","./chunks/_page-81147579.js","./chunks/environment-2d36df95.js","./components/pages/contact/_page.svelte-49f9c945.js","./chunks/index-1223da0b.js"],import.meta.url),()=>X(()=>import("./chunks/5-76dda06f.js"),["./chunks/5-76dda06f.js","./chunks/_page-7cf4687b.js","./chunks/environment-2d36df95.js","./components/pages/play/_page.svelte-9315f7fd.js","./chunks/index-1223da0b.js"],import.meta.url)],Ct=[],Bt={"/":[2],"/about":[3],"/contact":[4],"/play":[5]},Ft={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Jt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const zt=-1,Gt=-2,Kt=-3,Mt=-4,Ht=-5,Wt=-6;function Yt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===zt)return;if(o===Kt)return NaN;if(o===Mt)return 1/0;if(o===Ht)return-1/0;if(o===Wt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let w=1;w<t.length;w+=1)g.add(s(t[w]));break;case"Map":const d=new Map;n[o]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);n[o]=u;for(let g=0;g<t.length;g+=1){const d=t[g];d!==Gt&&(u[g]=s(d))}}else{const u={};n[o]=u;for(const g in t){const d=t[g];u[g]=s(d)}}return n[o]}return s(0)}const Qe="sveltekit:scroll",C="sveltekit:index",ue=It(ge,Ct,Bt,qt),Le=ge[0],Ie=ge[1];Le();Ie();let ie={};try{ie=JSON.parse(sessionStorage[Qe])}catch{}function Re(r){ie[r]=Oe()}function Xt({target:r,base:e,trailing_slash:n}){var Be;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,g=!1,d=!0,_=!1,w=!1,O=!1,G=!1,K,L=(Be=history.state)==null?void 0:Be[C];L||(L=Date.now(),history.replaceState({...history.state,[C]:L},"",location.href));const V=ie[L];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,te,W;async function le(){W=W||Promise.resolve(),await W,W=null;const a=new URL(location.href),l=be(a,!0);o=null,await Pe(l,a,[])}async function ne(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:i=!1,state:c={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ge(document))),ve({url:a,scroll:l?Oe():null,keepfocus:i,redirect_chain:h,details:{state:c,replaceState:f},nav_token:v,accepted:()=>{p&&(G=!0)},blocked:()=>{},type:"goto"})}async function Ae(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Te(l)},o.promise}async function Pe(a,l,f,i,c={},p){var v,E;te=c;let h=a&&await Te(a);if(h||(h=await Ce(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==c)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await ce({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ne(new URL(h.location,l).href,{},[...f,l.pathname],c),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await fe(l);if(s.length=0,G=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[C]=L+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,g){t=h.state,h.props.page&&(h.props.page.url=l);const y=pe();K.$set(h.props),y()}else Ne(h);if(i){const{scroll:y,keepfocus:b}=i;if(!b){const R=document.body,A=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),A!==null?R.setAttribute("tabindex",A):R.removeAttribute("tabindex")}if(await ze(),d){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await ze();d=!0,h.props.page&&(T=h.props.page),p&&p(),_=!1}function Ne(a){var c,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const f=pe();K=new Tt({target:r,props:{...a.props,stores:M},hydrate:!0}),f();const i={from:null,to:de("to",{params:t.params,route:{id:(p=(c=t.route)==null?void 0:c.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),g=!0}async function re({url:a,params:l,branch:f,status:i,error:c,route:p,form:h}){var A;const v=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:c,route:p},props:{components:v.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!T;for(let $=0;$<v.length;$+=1){const N=v[$];y={...y,...N.data},(b||!t.branch.some(U=>U===N))&&(E.props[`data_${$}`]=y,b=b||Object.keys((A=N.data)!=null?A:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||h!==void 0||b){E.props.page={error:c,params:l,route:p,status:i,url:a,form:h,data:b?y:T.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function we({loader:a,parent:l,url:f,params:i,route:c,server_data_node:p}){var y,b,R,A,$;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...S){for(const D of S){const{href:k}=new URL(D,f);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(i,{get:(S,D)=>(v.params.add(D),S[D])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:gt(f,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const I=new URL(k,f).href;return N(I),g?kt(k,I,D):Et(k,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(R=await E.shared.load.call(null,U))!=null?R:null,h=h?await Jt(h):null}return{node:E,loader:a,server:p,shared:(A=E.shared)!=null&&A.load?{type:"data",data:h,uses:v}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ue(a,l,f,i,c){if(G)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&f)return!0;for(const p of i.params)if(c[p]!==t.params[p])return!0;for(const p of i.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function ye(a,l){var f,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Te({id:a,invalidating:l,url:f,params:i,route:c}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:p,layouts:h,leaf:v}=c,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,A=E.reduce((k,I,P)=>{var ae;const j=t.branch[P],Y=!!(I!=null&&I[0])&&((j==null?void 0:j.loader)!==I[1]||Ue(k.some(Boolean),R,b,(ae=j.server)==null?void 0:ae.uses,i));return k.push(Y),k},[]);if(A.some(Boolean)){try{y=await Xe(f,A)}catch(k){return ce({status:500,error:oe(k,{url:f,params:i,route:{id:c.id}}),url:f,route:c})}if(y.type==="redirect")return y}const $=y==null?void 0:y.nodes;let N=!1;const U=E.map(async(k,I)=>{var ae;if(!k)return;const P=t.branch[I],j=$==null?void 0:$[I];if((!j||j.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ue(N,R,b,(ae=P.shared)==null?void 0:ae.uses,i))return P;if(N=!0,(j==null?void 0:j.type)==="error")throw j;return we({loader:k[1],url:f,params:i,route:c,parent:async()=>{var Je;const Fe={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(Fe,(Je=await U[Ee])==null?void 0:Je.data);return Fe},server_data_node:ye(j===void 0&&k[0]?{type:"skip"}:j!=null?j:null,P==null?void 0:P.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(I){if(I instanceof Ye)return{type:"redirect",location:I.location};let P=500,j;$!=null&&$.includes(I)?(P=(D=I.status)!=null?D:P,j=I.error):I instanceof $e?(P=I.status,j=I.body):j=oe(I,{params:i,url:f,route:{id:c.id}});const Y=await De(k,S,p);return Y?await re({url:f,params:i,branch:S.slice(0,Y.idx).concat(Y.node),status:P,error:j,route:c}):await Ce(f,{id:c.id},j,P)}else S.push(void 0);return await re({url:f,params:i,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,f){for(;a--;)if(f[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:l,url:f,route:i}){var y;const c={},p=await Le();let h=null;if(p.server)try{const b=await Xe(f,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await fe(f)}const v=await we({loader:Le,url:f,params:c,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await re({url:f,params:c,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const f=ht(a.pathname.slice(e.length)||"/");for(const i of ue){const c=i.exec(f);if(c){const p=new URL(a.origin+pt(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:i,params:mt(c),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function qe({url:a,type:l,intent:f,delta:i}){var v,E,y,b,R;let c=!1;const p={from:de("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:de("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:(R=(b=f==null?void 0:f.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!f,type:l};i!==void 0&&(p.delta=i);const h={...p,cancel:()=>{c=!0}};return m.before_navigate.forEach(A=>A(h)),c?null:p}async function ve({url:a,scroll:l,keepfocus:f,redirect_chain:i,details:c,type:p,delta:h,nav_token:v,accepted:E,blocked:y}){const b=be(a,!1),R=qe({url:a,type:p,delta:h,intent:b});if(!R){y();return}Re(L),E(),w=!0,g&&M.navigating.set(R),await Pe(b,a,i,{scroll:l,keepfocus:f,details:c},v,()=>{w=!1,m.after_navigate.forEach(A=>A(R)),M.navigating.set(null)})}async function Ce(a,l,f,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ce({status:i,error:f,url:a,route:l}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(f=>f.href===l)}return le()},invalidateAll:()=>(G=!0,le()),prefetch:async a=>{const l=new URL(a,Ge(document));await Ae(l)},prefetch_routes:async a=>{const f=(a?ue.filter(i=>a.some(c=>i.exec(c))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:i}=t;if(!i)return;const c=await De(t.branch.length,f,i.errors);if(c){const p=await re({url:l,params:t.params,branch:f.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});t=p.state;const h=pe();K.$set(p.props),h()}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},f=pe();K.$set(l),f()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var p,h;let c=!1;if(!w){const v={from:de("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(E=>E(v))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(L);try{sessionStorage[Qe]=JSON.stringify(ie)}catch{}}});const a=i=>{const{url:c,options:p,has:h}=Ke(i);if(c&&p.prefetch&&!Ve(c)){if(p.reload||h.rel_external||h.target||h.download)return;Ae(c)}};let l;const f=i=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:p,options:h,has:v}=Ke(i);if(!c||!p||!(c instanceof SVGAElement)&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){qe({url:p,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=p.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){O=!0,Re(L),t.url=p,M.page.set({...T,url:p}),M.page.notify();return}ve({url:p,scroll:h.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===L)return;const c=i.state[C]-L;ve({url:new URL(location.href),scroll:ie[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[C]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:i,route:c,data:p,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=f.map(async(R,A)=>{const $=p[A];return we({loader:ge[R],url:v,params:i,route:c,parent:async()=>{const N={};for(let U=0;U<A;U+=1)Object.assign(N,(await b[U]).data);return N},server_data_node:ye($)})});E=await re({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=ue.find(({id:R})=>R===c.id))!=null?y:null})}catch(b){if(b instanceof Ye){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof $e?b.status:500,error:oe(b,{url:v,params:i,route:c}),url:v,route:c})}Ne(E)}}}async function Xe(r,e){var m;const n=new URL(r);n.pathname=bt(r.pathname);const s=await _e(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,g;(t==null?void 0:t.type)==="data"&&(t.data=Yt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function oe(r,e){var n;return r instanceof $e?r.body:(n=Ft.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}async function tn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){dt(n);const m=Xt({target:s,base:n.base,trailing_slash:o});ut({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{tn as start};
