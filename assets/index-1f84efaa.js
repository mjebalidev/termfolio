(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function A(){}function X(e){return e()}function G(){return Object.create(null)}function M(e){e.forEach(X)}function q(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function oe(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function re(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function ie(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function C(e){return document.createTextNode(e)}function F(){return C(" ")}function se(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function J(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}class ae{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,o=null){this.e||(this.is_svg?this.e=ie(n.nodeName):this.e=_(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(o)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)O(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(j)}}let D;function L(e){D=e}function fe(){if(!D)throw new Error("Function called outside component initialization");return D}function ue(e){fe().$$.on_mount.push(e)}const k=[],V=[];let $=[];const K=[],de=Promise.resolve();let H=!1;function pe(){H||(H=!0,de.then(Y))}function W(e){$.push(e)}const B=new Set;let E=0;function Y(){if(E!==0)return;const e=D;do{try{for(;E<k.length;){const t=k[E];E++,L(t),he(t.$$)}}catch(t){throw k.length=0,E=0,t}for(L(null),k.length=0,E=0;V.length;)V.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];B.has(n)||(B.add(n),n())}$.length=0}while(k.length);for(;K.length;)K.pop()();H=!1,B.clear(),L(e)}function he(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function me(e){const t=[],n=[];$.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),$=t}const P=new Set;let ge;function Q(e,t){e&&e.i&&(P.delete(e),e.i(t))}function be(e,t,n,o){if(e&&e.o){if(P.has(e))return;P.add(e),ge.c.push(()=>{P.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ye(e){e&&e.c()}function Z(e,t,n,o){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),o||W(()=>{const f=e.$$.on_mount.map(X).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...f):M(f),e.$$.on_mount=[]}),i.forEach(W)}function ee(e,t){const n=e.$$;n.fragment!==null&&(me(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(k.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,i,f,v=[-1]){const h=D;L(e);const l=e.$$={fragment:null,ctx:[],props:i,update:A,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:G(),dirty:v,skip_bound:!1,root:t.target||h.$$.root};f&&f(l.root);let g=!1;if(l.ctx=n?n(e,t.props||{},(p,b,...w)=>{const x=w.length?w[0]:b;return l.ctx&&r(l.ctx[p],l.ctx[p]=x)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](x),g&&_e(e,p)),b}):[],l.update(),g=!0,M(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const p=le(t.target);l.fragment&&l.fragment.l(p),p.forEach(j)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),Y()}L(h)}class ne{$destroy(){ee(this,1),this.$destroy=A}$on(t,n){if(!q(n))return A;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e,t,n){const o=e.slice();return o[17]=t[n],o}function U(e){let t,n,o,r=e[17].content+"";return{c(){t=_("p"),n=C("guest@portfolio ~ "),o=new ae(!1),o.a=null,T(t,"class","text-terminal text-entry svelte-1p1rvi6")},m(i,f){O(i,t,f),m(t,n),o.m(r,t)},p(i,f){f&2&&r!==(r=i[17].content+"")&&o.p(r)},d(i){i&&j(t)}}}function we(e){let t,n,o,r,i,f,v,h,l,g,p,b,w,x,y=e[1],c=[];for(let u=0;u<y.length;u+=1)c[u]=U(R(e,y,u));return{c(){t=_("main"),n=_("div"),o=_("div");for(let u=0;u<c.length;u+=1)c[u].c();r=F(),i=_("div"),f=C("guest@portfolio ~ "),v=C(e[0]),h=F(),l=_("span"),g=C("█"),p=F(),b=_("div"),b.textContent="Work in progress ...",T(l,"class","cursor svelte-1p1rvi6"),J(l,"visibility",e[2]?"visible":"hidden"),T(i,"class","text-terminal text-entry svelte-1p1rvi6"),J(i,"position","relative"),T(o,"class","terminal-box svelte-1p1rvi6"),T(b,"class","work-in-progress svelte-1p1rvi6"),T(n,"class","renderer svelte-1p1rvi6")},m(u,a){O(u,t,a),m(t,n),m(n,o);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(o,null);m(o,r),m(o,i),m(i,f),m(i,v),m(i,h),m(i,l),m(l,g),m(n,p),m(n,b),w||(x=se(window,"keydown",e[3]),w=!0)},p(u,[a]){if(a&2){y=u[1];let s;for(s=0;s<y.length;s+=1){const d=R(u,y,s);c[s]?c[s].p(d,a):(c[s]=U(d),c[s].c(),c[s].m(o,r))}for(;s<c.length;s+=1)c[s].d(1);c.length=y.length}a&1&&ce(v,u[0]),a&4&&J(l,"visibility",u[2]?"visible":"hidden")},i:A,o:A,d(u){u&&j(t),re(c,u),w=!1,x()}}}function N(e){const t=document.createElement("a");t.href="/src/assets/"+e,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function ve(e,t,n){let o="",r=[],i=[],f=[],v=["CapsLock","Backspace","Shift","ArrowUp","ArrowDown","Control","Alt","AltGraph","Enter","ArrowRight","ArrowLeft"],h={ls:"<b>projects.txt</b> &nbsp;&nbsp;&nbsp; <b>about.me</b> &nbsp;&nbsp;&nbsp; <b>social.txt</b> &nbsp;&nbsp;&nbsp <b>cv.pdf</b>",cat:{"projects.txt":`

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
        
        `.replace(/\n/g,"<br>")},l=-1,g="",p=!0;function b(a){let s=a.key,d=a.code,S=a.ctrlKey;console.log("key: "+s+" code: "+d),S&&s==="c"?c("^C"):s==="Backspace"?r.length>0&&(r.pop(),n(0,o=r.join(""))):s==="Tab"?a.preventDefault():v.includes(s)||(r.push(s),n(0,o=r.join(""))),s==="Enter"?w(o):s==="ArrowUp"?y(1):s==="ArrowDown"&&y(-1)}function w(a){if(i.push(a),n(1,f=i.map((s,d)=>({key:d+1,content:s}))),a==="clear")x();else if(a==="download cv.pdf")N("cv.pdf"),c("Downloading cv.pdf ...");else if(a==="download projects.txt")N("projects.txt"),c("Downloading projects.txt ...");else if(a==="download about.me")N("about.me"),c("Downloading about.me ...");else if(a==="download social.txt")N("social.txt"),c("Downloading social.txt ...");else if(a!==""){let s=a.split(" "),d=s[0],S=s.slice(1);if(h[d]){if(typeof h[d]=="string")c(h[d]);else if(typeof h[d]=="object"){let I=S[0];h[d][I]?c(h[d][I]):c(`cat: ${I}: No such file or directory`)}}else c(`${d}: command not found`)}n(0,o=""),r=[],l=-1,g=""}function x(){n(0,o=""),r=[],i=[],n(1,f=[])}function y(a){let s=l+a;s>=0&&s<i.length?(l=s,g=i[l],n(0,o=g),r=g.split("")):s===-1&&(l=-1,g="",n(0,o=""),r=[])}function c(a){i.push(a),n(1,f=i.map((s,d)=>({key:d+1,content:s})))}function u(){n(2,p=!p)}return ue(()=>{c("Starting the server..."),c("Hi 👋 Welcome to my Portfolio!"),c("Enter the command <b>man</b> to see all the commands"),setInterval(u,1e3)}),[o,f,p,b]}class xe extends ne{constructor(t){super(),te(this,t,ve,we,z,{})}}function Ee(e){let t,n,o;return n=new xe({}),{c(){t=_("main"),ye(n.$$.fragment)},m(r,i){O(r,t,i),Z(n,t,null),o=!0},p:A,i(r){o||(Q(n.$$.fragment,r),o=!0)},o(r){be(n.$$.fragment,r),o=!1},d(r){r&&j(t),ee(n)}}}class Te extends ne{constructor(t){super(),te(this,t,null,Ee,z,{})}}new Te({target:document.getElementById("app")});
