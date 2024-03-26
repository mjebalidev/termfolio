(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();function B(){}function be(e){return e()}function ue(){return Object.create(null)}function O(e){e.forEach(be)}function ye(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function P(e,t,o){e.insertBefore(t,o||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function k(e){return document.createElement(e)}function xe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function N(e){return document.createTextNode(e)}function I(){return N(" ")}function Le(){return N("")}function V(e,t,o,l){return e.addEventListener(t,o,l),()=>e.removeEventListener(t,o,l)}function S(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Ae(e){return Array.from(e.childNodes)}function _e(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function W(e,t,o,l){o===null?e.style.removeProperty(t):e.style.setProperty(t,o,l?"important":"")}function H(e,t,o){e.classList[o?"add":"remove"](t)}function ze(e,t,{bubbles:o=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,o,l,t),r}class ke{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,o,l=null){this.e||(this.is_svg?this.e=xe(o.nodeName):this.e=k(o.nodeType===11?"TEMPLATE":o.nodeName),this.t=o.tagName!=="TEMPLATE"?o:o.content,this.c(t)),this.i(l)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let o=0;o<this.n.length;o+=1)P(this.t,this.n[o],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(j)}}let U;function G(e){U=e}function Ee(){if(!U)throw new Error("Function called outside component initialization");return U}function Me(e){Ee().$$.on_mount.push(e)}function Ne(){const e=Ee();return(t,o,{cancelable:l=!1}={})=>{const r=e.$$.callbacks[t];if(r){const a=ze(t,o,{cancelable:l});return r.slice().forEach(n=>{n.call(e,a)}),!a.defaultPrevented}return!0}}const K=[],se=[];let F=[];const ie=[],Be=Promise.resolve();let ee=!1;function Oe(){ee||(ee=!0,Be.then(Se))}function te(e){F.push(e)}const $=new Set;let q=0;function Se(){if(q!==0)return;const e=U;do{try{for(;q<K.length;){const t=K[q];q++,G(t),qe(t.$$)}}catch(t){throw K.length=0,q=0,t}for(G(null),K.length=0,q=0;se.length;)se.pop()();for(let t=0;t<F.length;t+=1){const o=F[t];$.has(o)||($.add(o),o())}F.length=0}while(K.length);for(;ie.length;)ie.pop()();ee=!1,$.clear(),G(e)}function qe(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ie(e){const t=[],o=[];F.forEach(l=>e.indexOf(l)===-1?t.push(l):o.push(l)),o.forEach(l=>l()),F=t}const Y=new Set;let M;function Ke(){M={r:0,c:[],p:M}}function Ve(){M.r||O(M.c),M=M.p}function J(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function Q(e,t,o,l){if(e&&e.o){if(Y.has(e))return;Y.add(e),M.c.push(()=>{Y.delete(e),l&&(o&&e.d(1),l())}),e.o(t)}else l&&l()}function Ce(e){e&&e.c()}function le(e,t,o,l){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,o),l||te(()=>{const n=e.$$.on_mount.map(be).filter(ye);e.$$.on_destroy?e.$$.on_destroy.push(...n):O(n),e.$$.on_mount=[]}),a.forEach(te)}function re(e,t){const o=e.$$;o.fragment!==null&&(Ie(o.after_update),O(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function He(e,t){e.$$.dirty[0]===-1&&(K.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,o,l,r,a,n,u=[-1]){const w=U;G(e);const v=e.$$={fragment:null,ctx:[],props:a,update:B,not_equal:r,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(w?w.$$.context:[])),callbacks:ue(),dirty:u,skip_bound:!1,root:t.target||w.$$.root};n&&n(v.root);let C=!1;if(v.ctx=o?o(e,t.props||{},(m,y,...p)=>{const d=p.length?p[0]:y;return v.ctx&&r(v.ctx[m],v.ctx[m]=d)&&(!v.skip_bound&&v.bound[m]&&v.bound[m](d),C&&He(e,m)),y}):[],v.update(),C=!0,O(v.before_update),v.fragment=l?l(v.ctx):!1,t.target){if(t.hydrate){const m=Ae(t.target);v.fragment&&v.fragment.l(m),m.forEach(j)}else v.fragment&&v.fragment.c();t.intro&&J(e.$$.fragment),le(e,t.target,t.anchor,t.customElement),Se()}G(w)}class ne{$destroy(){re(this,1),this.$destroy=B}$on(t,o){if(!ye(o))return B;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(o),()=>{const r=l.indexOf(o);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe=[{row:0,value:"q"},{row:0,value:"w"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"a"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:2,value:"Shift"},{row:2,value:"z"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"m"},{row:2,value:"Backspace"},{row:3,value:"Page1"},{row:3,value:","},{row:3,value:"Space"},{row:3,value:"."},{row:3,value:"Enter"},{row:0,value:"1",page:1},{row:0,value:"2",page:1},{row:0,value:"3",page:1},{row:0,value:"4",page:1},{row:0,value:"5",page:1},{row:0,value:"6",page:1},{row:0,value:"7",page:1},{row:0,value:"8",page:1},{row:0,value:"9",page:1},{row:0,value:"0",page:1},{row:1,value:"!",page:1},{row:1,value:"@",page:1},{row:1,value:"#",page:1},{row:1,value:"$",page:1},{row:1,value:"%",page:1},{row:1,value:"^",page:1},{row:1,value:"&",page:1},{row:1,value:"*",page:1},{row:1,value:"(",page:1},{row:1,value:")",page:1},{row:2,value:"-",page:1},{row:2,value:"_",page:1},{row:2,value:"=",page:1},{row:2,value:"+",page:1},{row:2,value:";",page:1},{row:2,value:":",page:1},{row:2,value:"'",page:1},{row:2,value:'"',page:1},{row:2,value:"<",page:1},{row:2,value:">",page:1},{row:3,value:"Page0",page:1},{row:3,value:"/",page:1},{row:3,value:"?",page:1},{row:3,value:"[",page:1},{row:3,value:"]",page:1},{row:3,value:"{",page:1},{row:3,value:"}",page:1},{row:3,value:"|",page:1},{row:3,value:"\\",page:1},{row:3,value:"~",page:1}],Je=[{row:0,value:"q"},{row:0,value:"w"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"a"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:2,value:"z"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"m"},{row:2,value:"Backspace"}],We=[{row:0,value:"q"},{row:0,value:"w"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"a"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:2,value:"Enter"},{row:2,value:"z"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"m"},{row:2,value:"Backspace"}],Ge=[{row:0,value:"a"},{row:0,value:"z"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"q"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:1,value:"m"},{row:2,value:"Shift"},{row:2,value:"w"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"Backspace"},{row:3,value:"Page1"},{row:3,value:","},{row:3,value:"Space"},{row:3,value:"."},{row:3,value:"Enter"},{row:0,value:"1",page:1},{row:0,value:"2",page:1},{row:0,value:"3",page:1},{row:0,value:"4",page:1},{row:0,value:"5",page:1},{row:0,value:"6",page:1},{row:0,value:"7",page:1},{row:0,value:"8",page:1},{row:0,value:"9",page:1},{row:0,value:"0",page:1},{row:1,value:"!",page:1},{row:1,value:"@",page:1},{row:1,value:"#",page:1},{row:1,value:"$",page:1},{row:1,value:"%",page:1},{row:1,value:"^",page:1},{row:1,value:"&",page:1},{row:1,value:"*",page:1},{row:1,value:"(",page:1},{row:1,value:")",page:1},{row:2,value:"-",page:1},{row:2,value:"_",page:1},{row:2,value:"=",page:1},{row:2,value:"+",page:1},{row:2,value:";",page:1},{row:2,value:":",page:1},{row:2,value:"'",page:1},{row:2,value:'"',page:1},{row:2,value:"<",page:1},{row:2,value:">",page:1},{row:3,value:"Page0",page:1},{row:3,value:"/",page:1},{row:3,value:"?",page:1},{row:3,value:"[",page:1},{row:3,value:"]",page:1},{row:3,value:"{",page:1},{row:3,value:"}",page:1},{row:3,value:"|",page:1},{row:3,value:"\\",page:1},{row:3,value:"~",page:1}],Ue=[{row:0,value:"a"},{row:0,value:"z"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"q"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:1,value:"m"},{row:2,value:"w"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"Backspace"}],Re=[{row:0,value:"a"},{row:0,value:"z"},{row:0,value:"e"},{row:0,value:"r"},{row:0,value:"t"},{row:0,value:"y"},{row:0,value:"u"},{row:0,value:"i"},{row:0,value:"o"},{row:0,value:"p"},{row:1,value:"q"},{row:1,value:"s"},{row:1,value:"d"},{row:1,value:"f"},{row:1,value:"g"},{row:1,value:"h"},{row:1,value:"j"},{row:1,value:"k"},{row:1,value:"l"},{row:1,value:"m"},{row:2,value:"Enter"},{row:2,value:"w"},{row:2,value:"x"},{row:2,value:"c"},{row:2,value:"v"},{row:2,value:"b"},{row:2,value:"n"},{row:2,value:"Backspace"}],Xe='<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>',Ye='<svg width="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>';function ce(e,t,o){const l=e.slice();return l[27]=t[o],l[29]=o,l}function fe(e,t,o){const l=e.slice();return l[30]=t[o],l}function we(e,t,o){const l=e.slice();return l[33]=t[o].value,l[34]=t[o].display,l}function Qe(e){let t=e[34]+"",o;return{c(){o=N(t)},m(l,r){P(l,o,r)},p(l,r){r[0]&8&&t!==(t=l[34]+"")&&_e(o,t)},d(l){l&&j(o)}}}function Ze(e){let t,o=e[34]+"",l;return{c(){t=new ke(!1),l=Le(),t.a=l},m(r,a){t.m(o,r,a),P(r,l,a)},p(r,a){a[0]&8&&o!==(o=r[34]+"")&&t.p(o)},d(r){r&&j(l),r&&t.d()}}}function ve(e){let t,o,l,r,a;function n(p,d){return d[0]&8&&(o=null),o==null&&(o=!!p[34].includes("<svg")),o?Ze:Qe}let u=n(e,[-1,-1]),w=u(e);function v(...p){return e[19](e[33],...p)}function C(...p){return e[20](e[33],...p)}function m(){return e[21](e[33])}function y(){return e[22](e[33])}return{c(){t=k("button"),w.c(),S(t,"type","button"),S(t,"class",l="key key--"+e[33]+" "+(e[0][e[33]]||"")+" svelte-1a6luum"),H(t,"single",e[33].length===1),H(t,"active",e[33]===e[2])},m(p,d){P(p,t,d),w.m(t,null),r||(a=[V(t,"touchstart",v),V(t,"mousedown",C),V(t,"touchend",m,{passive:!0}),V(t,"mouseup",y)],r=!0)},p(p,d){e=p,u===(u=n(e,d))&&w?w.p(e,d):(w.d(1),w=u(e),w&&(w.c(),w.m(t,null))),d[0]&9&&l!==(l="key key--"+e[33]+" "+(e[0][e[33]]||"")+" svelte-1a6luum")&&S(t,"class",l),d[0]&9&&H(t,"single",e[33].length===1),d[0]&13&&H(t,"active",e[33]===e[2])},d(p){p&&j(t),w.d(),r=!1,O(a)}}}function pe(e){let t,o=e[30],l=[];for(let r=0;r<o.length;r+=1)l[r]=ve(we(e,o,r));return{c(){t=k("div");for(let r=0;r<l.length;r+=1)l[r].c();S(t,"class","row row--"+e[29]+" svelte-1a6luum")},m(r,a){P(r,t,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,null)},p(r,a){if(a[0]&61){o=r[30];let n;for(n=0;n<o.length;n+=1){const u=we(r,o,n);l[n]?l[n].p(u,a):(l[n]=ve(u),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=o.length}},d(r){r&&j(t),Z(l,r)}}}function de(e){let t,o,l=e[27],r=[];for(let a=0;a<l.length;a+=1)r[a]=pe(fe(e,l,a));return{c(){t=k("div");for(let a=0;a<r.length;a+=1)r[a].c();o=I(),S(t,"class","page svelte-1a6luum"),H(t,"visible",e[29]===e[1])},m(a,n){P(a,t,n);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);_(t,o)},p(a,n){if(n[0]&61){l=a[27];let u;for(u=0;u<l.length;u+=1){const w=fe(a,l,u);r[u]?r[u].p(w,n):(r[u]=pe(w),r[u].c(),r[u].m(t,o))}for(;u<r.length;u+=1)r[u].d(1);r.length=l.length}n[0]&2&&H(t,"visible",a[29]===a[1])},d(a){a&&j(t),Z(r,a)}}}function $e(e){let t,o=e[3],l=[];for(let r=0;r<o.length;r+=1)l[r]=de(ce(e,o,r));return{c(){t=k("div");for(let r=0;r<l.length;r+=1)l[r].c();S(t,"class","svelte-keyboard")},m(r,a){P(r,t,a);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,null)},p(r,a){if(a[0]&63){o=r[3];let n;for(n=0;n<o.length;n+=1){const u=ce(r,o,n);l[n]?l[n].p(u,a):(l[n]=de(u),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=o.length}},i:B,o:B,d(r){r&&j(t),Z(l,r)}}}const et="abcdefghijklmnopqrstuvwxyz";function tt(e,t,o){let l,r,a,n,u,w,v,C,m,{custom:y}=t,{localizationLayout:p="qwerty"}=t,{layout:d="standard"}=t,{noSwap:A=[]}=t,{keyClass:x={}}=t,D=0,T=!1,b;const L={qwerty:{standard:Fe,crossword:Je,wordle:We},azerty:{standard:Ge,crossword:Ue,wordle:Re}},f=Ne(),i={Page0:"abc",Page1:"?123",Space:" ",Shift:"abc",Enter:Ye,Backspace:Xe},c=s=>[...new Set(s)],E=(s,g)=>{if(s.preventDefault(),o(2,b=g),g.includes("Page"))o(1,D=+g.substr(-1));else if(g==="Shift")o(10,T=!T);else{let z=g;T&&et.includes(g)&&(z=g.toUpperCase()),f("keydown",z)}return s.stopPropagation(),!1},h=s=>{setTimeout(()=>{s===b&&o(2,b=void 0)},50)},R=(s,g)=>E(g,s),Te=(s,g)=>E(g,s),je=s=>h(s),De=s=>h(s);return e.$$set=s=>{"custom"in s&&o(6,y=s.custom),"localizationLayout"in s&&o(7,p=s.localizationLayout),"layout"in s&&o(8,d=s.layout),"noSwap"in s&&o(9,A=s.noSwap),"keyClass"in s&&o(0,x=s.keyClass)},e.$$.update=()=>{e.$$.dirty[0]&448&&o(18,l=y||L[p][d]||standard),e.$$.dirty[0]&263680&&o(17,r=l.map(s=>{let g=s.display;const z=i[s.value];return z&&!A.includes(s.value)&&!s.noSwap&&(g=z),g||(g=T?s.value.toUpperCase():s.value),s.value==="Shift"&&(g=T?z:z.toUpperCase()),{...s,display:g}})),e.$$.dirty[0]&131072&&o(15,a=r.filter(s=>!s.page)),e.$$.dirty[0]&131072&&o(13,n=r.filter(s=>s.page)),e.$$.dirty[0]&32768&&o(14,u=c(a.map(s=>s.row))),e.$$.dirty[0]&16384&&u.sort((s,g)=>s-g),e.$$.dirty[0]&8192&&o(16,w=c(n.map(s=>s.row))),e.$$.dirty[0]&65536&&w.sort((s,g)=>s-g),e.$$.dirty[0]&49152&&o(12,v=u.map(s=>a.filter(g=>g.row===s))),e.$$.dirty[0]&24576&&o(11,C=u.map(s=>n.filter(g=>g.row===s))),e.$$.dirty[0]&6144&&o(3,m=[v,C])},[x,D,b,m,E,h,y,p,d,A,T,C,v,n,u,a,w,r,l,R,Te,je,De]}class ot extends ne{constructor(t){super(),ae(this,t,tt,$e,oe,{custom:6,localizationLayout:7,layout:8,noSwap:9,keyClass:0},null,[-1,-1])}}function he(e,t,o){const l=e.slice();return l[20]=t[o],l}function ge(e){let t,o,l,r=e[20].content+"";return{c(){t=k("p"),o=N("guest@portfolio ~ "),l=new ke(!1),l.a=null,S(t,"class","text-terminal text-entry svelte-1ehansb")},m(a,n){P(a,t,n),_(t,o),l.m(r,t)},p(a,n){n&4&&r!==(r=a[20].content+"")&&l.p(r)},d(a){a&&j(t)}}}function me(e){let t,o,l,r;return o=new ot({}),o.$on("keydown",e[5]),{c(){t=k("div"),l=k("div"),Ce(o.$$.fragment),W(l,"display","contents"),W(l,"--height","3rem"),S(t,"class","virtual-keyboard-wrapper svelte-1ehansb")},m(a,n){P(a,t,n),_(t,l),le(o,l,null),r=!0},p:B,i(a){r||(J(o.$$.fragment,a),r=!0)},o(a){Q(o.$$.fragment,a),r=!1},d(a){a&&j(t),re(o)}}}function lt(e){let t,o,l,r,a,n,u,w,v,C,m,y,p,d,A,x,D,T,b,L=e[2],f=[];for(let c=0;c<L.length;c+=1)f[c]=ge(he(e,L,c));let i=e[0]&&me(e);return{c(){t=k("main"),o=k("div"),l=k("div");for(let c=0;c<f.length;c+=1)f[c].c();r=I(),a=k("div"),n=N("guest@portfolio ~ "),u=N(e[1]),w=I(),v=k("span"),C=N("█"),m=I(),y=k("div"),y.textContent="Work in progress ...",p=I(),d=k("div"),i&&i.c(),A=I(),x=k("button"),x.textContent="Display Virtual Keyboard",S(v,"class","cursor svelte-1ehansb"),W(v,"visibility",e[3]?"visible":"hidden"),S(a,"class","text-terminal text-entry svelte-1ehansb"),W(a,"position","relative"),S(l,"class","terminal-box svelte-1ehansb"),S(y,"class","work-in-progress svelte-1ehansb"),S(d,"class","virtual-keyboard-container svelte-1ehansb"),S(x,"class","virtual-keyboard-button svelte-1ehansb"),S(o,"class","renderer svelte-1ehansb")},m(c,E){P(c,t,E),_(t,o),_(o,l);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(l,null);_(l,r),_(l,a),_(a,n),_(a,u),_(a,w),_(a,v),_(v,C),_(o,m),_(o,y),_(o,p),_(o,d),i&&i.m(d,null),_(o,A),_(o,x),D=!0,T||(b=[V(window,"keydown",e[6]),V(x,"click",e[4])],T=!0)},p(c,[E]){if(E&4){L=c[2];let h;for(h=0;h<L.length;h+=1){const R=he(c,L,h);f[h]?f[h].p(R,E):(f[h]=ge(R),f[h].c(),f[h].m(l,r))}for(;h<f.length;h+=1)f[h].d(1);f.length=L.length}(!D||E&2)&&_e(u,c[1]),(!D||E&8)&&W(v,"visibility",c[3]?"visible":"hidden"),c[0]?i?(i.p(c,E),E&1&&J(i,1)):(i=me(c),i.c(),J(i,1),i.m(d,null)):i&&(Ke(),Q(i,1,1,()=>{i=null}),Ve())},i(c){D||(J(i),D=!0)},o(c){Q(i),D=!1},d(c){c&&j(t),Z(f,c),i&&i.d(),T=!1,O(b)}}}function X(e){const t=document.createElement("a");t.href="/public/"+e,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function rt(e,t,o){let l=!1;function r(){o(0,l=!l)}const a=f=>{console.log(f.detail);const i=f.detail;A({key:i,code:i})};let n="",u=[],w=[],v=[],C=["CapsLock","Backspace","Shift","ArrowUp","ArrowDown","Control","Alt","AltGraph","Enter","ArrowRight","ArrowLeft"],m={ls:"<b>projects.txt</b> &nbsp;&nbsp;&nbsp; <b>about.me</b> &nbsp;&nbsp;&nbsp; <b>social.txt</b> &nbsp;&nbsp;&nbsp <b>cv.pdf</b>",cat:{"projects.txt":`

DEVOTEAM
- Job Title: Full Stack Developer
- Employment Type: Work Study
- Duration: May 2023 - Present (11 months)
- Location: Frankfurt, Hesse, Germany (Remote)
- Tools: Bash, Java, JavaScript, Docker etc

MEETYOO
- Job Title: Technical Operations Manager
- Employment Type: Work Study
- Duration: Jan 2022 - Apr 2023 (1 year 4 months)
- Location: Berlin, Germany
- Tools: Python (programming language), XML

- Job Title: IT Support & Configuration
- Employment Type: Work Study
- Duration: Sept 2020 - Jan 2022 (1 year 5 months)
- Tools: Python (programming language), XML

`.replace(/\n/g,"<br>"),"about.me":`

<b>Name:</b> Mehdi
<b>Occupation:</b> IT Enthusiast
<b>Current Position:</b> Fullstack Developer

<b>Summary:</b>
I am an IT enthusiast with a background in information technology. 
Currently, I work as a Fullstack Developer with professional experience in creating tools to automate working processes. 

If you need further information, feel free to <a href="mailto:mjebali.dev@gmail.com">contact me</a>.

`.replace(/\n/g,"<br>"),"social.txt":`
            
<b>GitHub</b>: <a href="https://github.com/mjebalidev" target="_blank">Click me</a>

<b>LinkedIn</b>: <a href="https://www.linkedin.com/in/mjebali/" target="_blank">Click me</a>

`.replace(/\n/g,"<br>")},man:`

        <b>Manual:</b>

        <b>man</b>: Displays the manual.
        <b>ls</b>: Lists the current files.
        <b>clear</b>: Clears the terminal.
        <b>download</b> &lt;file&gt;: Downloads a file.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: download cv.pdf
        <b>cat</b> &lt;file&gt;: Displays the current file text.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: cat myprojects.txt
        
        `.replace(/\n/g,"<br>")},y=-1,p="",d=!0;function A(f){let i=f.key,c=f.code,E=f.ctrlKey;console.log("key: "+i+" code: "+c),E&&i==="c"?b("^C"):i==="Backspace"?u.length>0&&(u.pop(),o(1,n=u.join(""))):i==="Tab"?f.preventDefault():C.includes(i)||(u.push(i),o(1,n=u.join(""))),i==="Enter"?x(n):i==="ArrowUp"?T(1):i==="ArrowDown"&&T(-1)}function x(f){if(w.push(f),o(2,v=w.map((i,c)=>({key:c+1,content:i}))),f==="clear")D();else if(f==="download cv.pdf")X("cv.pdf"),b("Downloading cv.pdf ...");else if(f==="download projects.txt")X("projects.txt"),b("Downloading projects.txt ...");else if(f==="download about.me")X("about.me"),b("Downloading about.me ...");else if(f==="download social.txt")X("social.txt"),b("Downloading social.txt ...");else if(f!==""){let i=f.split(" "),c=i[0],E=i.slice(1);if(m[c]){if(typeof m[c]=="string")b(m[c]);else if(typeof m[c]=="object"){let h=E[0];m[c][h]?b(m[c][h]):b(`cat: ${h}: No such file or directory`)}}else b(`${c}: command not found`)}o(1,n=""),u=[],y=-1,p=""}function D(){o(1,n=""),u=[],w=[],o(2,v=[])}function T(f){let i=y+f;i>=0&&i<w.length?(y=i,p=w[y],o(1,n=p),u=p.split("")):i===-1&&(y=-1,p="",o(1,n=""),u=[])}function b(f){w.push(f),o(2,v=w.map((i,c)=>({key:c+1,content:i})))}function L(){o(3,d=!d)}return Me(()=>{b("Starting the server..."),b("Hi 👋 Welcome to my Portfolio!"),b("Enter the command <b>man</b> to see all the commands"),setInterval(L,1e3),w=[]}),[l,n,v,d,r,a,A]}class at extends ne{constructor(t){super(),ae(this,t,rt,lt,oe,{})}}function nt(e){let t,o,l;return o=new at({}),{c(){t=k("main"),Ce(o.$$.fragment)},m(r,a){P(r,t,a),le(o,t,null),l=!0},p:B,i(r){l||(J(o.$$.fragment,r),l=!0)},o(r){Q(o.$$.fragment,r),l=!1},d(r){r&&j(t),re(o)}}}class ut extends ne{constructor(t){super(),ae(this,t,null,nt,oe,{})}}new ut({target:document.getElementById("app")});