(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function A(){}function U(e){return e()}function H(){return Object.create(null)}function P(e){e.forEach(U)}function X(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ne(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function oe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function L(e){return document.createTextNode(e)}function D(){return L(" ")}function ie(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}class ce{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,r=null){this.e||(this.is_svg?this.e=oe(n.nodeName):this.e=_(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(r)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)S(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(M)}}let N;function C(e){N=e}function ae(){if(!N)throw new Error("Function called outside component initialization");return N}function ue(e){ae().$$.on_mount.push(e)}const k=[],W=[];let $=[];const G=[],fe=Promise.resolve();let B=!1;function he(){B||(B=!0,fe.then(z))}function F(e){$.push(e)}const J=new Set;let E=0;function z(){if(E!==0)return;const e=N;do{try{for(;E<k.length;){const t=k[E];E++,C(t),pe(t.$$)}}catch(t){throw k.length=0,E=0,t}for(C(null),k.length=0,E=0;W.length;)W.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];J.has(n)||(J.add(n),n())}$.length=0}while(k.length);for(;G.length;)G.pop()();B=!1,J.clear(),C(e)}function pe(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function de(e){const t=[],n=[];$.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),$=t}const O=new Set;let me;function K(e,t){e&&e.i&&(O.delete(e),e.i(t))}function ge(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),me.c.push(()=>{O.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function be(e){e&&e.c()}function Y(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||F(()=>{const a=e.$$.on_mount.map(U).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...a):P(a),e.$$.on_mount=[]}),i.forEach(F)}function Q(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(k.push(e),he(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,r,o,i,a,w=[-1]){const d=N;C(e);const l=e.$$={fragment:null,ctx:[],props:i,update:A,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:H(),dirty:w,skip_bound:!1,root:t.target||d.$$.root};a&&a(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(p,b,...v)=>{const x=v.length?v[0]:b;return l.ctx&&o(l.ctx[p],l.ctx[p]=x)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](x),g&&ye(e,p)),b}):[],l.update(),g=!0,P(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const p=se(t.target);l.fragment&&l.fragment.l(p),p.forEach(M)}else l.fragment&&l.fragment.c();t.intro&&K(e.$$.fragment),Y(e,t.target,t.anchor,t.customElement),z()}C(d)}class ee{$destroy(){Q(this,1),this.$destroy=A}$on(t,n){if(!X(n))return A;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e,t,n){const r=e.slice();return r[17]=t[n],r}function R(e){let t,n,r,o=e[17].content+"";return{c(){t=_("p"),n=L("guest@portfolio ~ "),r=new ce(!1),r.a=null,T(t,"class","text-terminal text-entry svelte-1p1rvi6")},m(i,a){S(i,t,a),m(t,n),r.m(o,t)},p(i,a){a&2&&o!==(o=i[17].content+"")&&r.p(o)},d(i){i&&M(t)}}}function _e(e){let t,n,r,o,i,a,w,d,l,g,p,b,v,x,y=e[1],c=[];for(let u=0;u<y.length;u+=1)c[u]=R(V(e,y,u));return{c(){t=_("main"),n=_("div"),r=_("div");for(let u=0;u<c.length;u+=1)c[u].c();o=D(),i=_("div"),a=L("guest@portfolio ~ "),w=L(e[0]),d=D(),l=_("span"),g=L("█"),p=D(),b=_("div"),b.textContent="Work in progress ...",T(l,"class","cursor svelte-1p1rvi6"),I(l,"visibility",e[2]?"visible":"hidden"),T(i,"class","text-terminal text-entry svelte-1p1rvi6"),I(i,"position","relative"),T(r,"class","terminal-box svelte-1p1rvi6"),T(b,"class","work-in-progress svelte-1p1rvi6"),T(n,"class","renderer svelte-1p1rvi6")},m(u,f){S(u,t,f),m(t,n),m(n,r);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(r,null);m(r,o),m(r,i),m(i,a),m(i,w),m(i,d),m(i,l),m(l,g),m(n,p),m(n,b),v||(x=ie(window,"keydown",e[3]),v=!0)},p(u,[f]){if(f&2){y=u[1];let s;for(s=0;s<y.length;s+=1){const h=V(u,y,s);c[s]?c[s].p(h,f):(c[s]=R(h),c[s].c(),c[s].m(r,o))}for(;s<c.length;s+=1)c[s].d(1);c.length=y.length}f&1&&le(w,u[0]),f&4&&I(l,"visibility",u[2]?"visible":"hidden")},i:A,o:A,d(u){u&&M(t),re(c,u),v=!1,x()}}}function ve(e,t,n){let r="",o=[],i=[],a=[],w=["CapsLock","Backspace","Shift","ArrowUp","ArrowDown","Control","Alt","AltGraph","Enter","ArrowRight","ArrowLeft"],d={ls:"<b>projects.txt</b> &nbsp;&nbsp;&nbsp; <b>about.me</b> &nbsp;&nbsp;&nbsp; <b>social.txt</b>",cat:{"projects.txt":`

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

<b>LinkedIn</b>: <a href="https://www.linkedin.com/in/mehdi-jebali-b03068210/" target="_blank">Click me</a>

`.replace(/\n/g,"<br>")},man:`

        <b>Manual:</b>

        <b>man</b>: Displays the manual.
        <b>ls</b>: Lists the current files.
        <b>clear</b>: Clears the terminal.
        <b>cat</b> &lt;file&gt;: Displays the current file text.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Example: cat myprojects.txt
        
        `.replace(/\n/g,"<br>")},l=-1,g="",p=!0;function b(f){let s=f.key,h=f.code;console.log("key: "+s+" code: "+h),s==="Backspace"?o.length>0&&(o.pop(),n(0,r=o.join(""))):s==="Tab"?f.preventDefault():w.includes(s)||(o.push(s),n(0,r=o.join(""))),s==="Enter"?v(r):s==="ArrowUp"?y(1):s==="ArrowDown"&&y(-1)}function v(f){if(i.push(f),n(1,a=i.map((s,h)=>({key:h+1,content:s}))),f==="clear")x();else{let s=f.split(" "),h=s[0],te=s.slice(1);if(d[h]){if(typeof d[h]=="string")c(d[h]);else if(typeof d[h]=="object"){let j=te[0];d[h][j]?c(d[h][j]):c(`cat: ${j}: No such file or directory`)}}else c(`${h}: command not found`)}n(0,r=""),o=[],l=-1,g=""}function x(){n(0,r=""),o=[],i=[],n(1,a=[])}function y(f){let s=l+f;s>=0&&s<i.length?(l=s,g=i[l],n(0,r=g),o=g.split("")):s===-1&&(l=-1,g="",n(0,r=""),o=[])}function c(f){i.push(f),n(1,a=i.map((s,h)=>({key:h+1,content:s})))}function u(){n(2,p=!p)}return ue(()=>{c("Starting the server..."),c("Hi 👋 Welcome to my Portfolio!"),c("Enter the command <b>man</b> to see all the commands"),setInterval(u,1e3)}),[r,a,p,b]}class we extends ee{constructor(t){super(),Z(this,t,ve,_e,q,{})}}function xe(e){let t,n,r;return n=new we({}),{c(){t=_("main"),be(n.$$.fragment)},m(o,i){S(o,t,i),Y(n,t,null),r=!0},p:A,i(o){r||(K(n.$$.fragment,o),r=!0)},o(o){ge(n.$$.fragment,o),r=!1},d(o){o&&M(t),Q(n)}}}class Ee extends ee{constructor(t){super(),Z(this,t,null,xe,q,{})}}new Ee({target:document.getElementById("app")});
