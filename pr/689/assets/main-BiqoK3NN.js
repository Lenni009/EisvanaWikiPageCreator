const __vite__mapDeps=(e,t=__vite__mapDeps,s=t.f||(t.f=["assets/Flora-34ffCI0j.js","assets/runtime-dom.esm-bundler-cfL8Q2jk.js","assets/links-BAvP7Vld.js","assets/links-BM0M_LVP.css","assets/index-xdX-HEQ8.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/Explanation.vue_vue_type_script_setup_true_lang-DBcEfpiq.js","assets/index-CpU3uxSW.css","assets/floraDatalists-Bz-O6jQ9.js","assets/Home-D34Not5M.js","assets/Home-Bc3KYJzz.css","assets/Mineral-BwNnWwJ_.js","assets/mineralDatalists-CKshA0d-.js"]))=>e.map((e=>s[e]));import{I as x,J as h,K as T,L as w,M as d,N as _,O as k,P,Q as S,R as D,S as R,T as b,U as C,V,W as L,X as A,Y as B}from"./links-BAvP7Vld.js";import{c as M}from"./runtime-dom.esm-bundler-cfL8Q2jk.js";const N="modulepreload",I=function(e){return"/pr/689/"+e},y={},g=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),r=(null==n?void 0:n.nonce)||(null==n?void 0:n.getAttribute("nonce"));a=Promise.all(t.map((t=>{if((t=I(t))in y)return;y[t]=!0;const a=t.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(s)for(let s=e.length-1;s>=0;s--){const n=e[s];if(n.href===t&&(!a||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${n}`))return;const o=document.createElement("link");return o.rel=a?"stylesheet":N,a||(o.as="script",o.crossOrigin=""),o.href=t,r&&o.setAttribute("nonce",r),document.head.appendChild(o),a?new Promise(((e,s)=>{o.addEventListener("load",e),o.addEventListener("error",(()=>s(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}return a.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},O=(e,t,s)=>{const a=e[t];return a?"function"==typeof a?a():Promise.resolve(a):new Promise(((e,a)=>{("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==s?". Note that variables only represent file names one level deep.":""))))}))},H=x("dataValidation",{state:()=>({text:"",copy:!1}),actions:{getSelectedText(e){var t;const s=null==(t=document.getElementById("switchTheme"))?void 0:t.innerText,a=e.target;if(!(a instanceof HTMLElement&&s))return;const n=a.closest(".wikiText");if(!(n instanceof HTMLDivElement))return;const r=h(n.innerText).trim(),o=window.getSelection()??"",i=(()=>{const e=h(o.toString()).trim();return e.endsWith(s)?e.replace(s,"").trim():e})();this.text=T(),this.copy=r===i}}});function q(e=!1,t=!1){const s=w(),{name:a,glyphs:n,regionNumber:r}=d(s),o=H(),{text:i,copy:l}=d(o),u=_(!1),c=_(""),m=T(),p=!!(a.value&&n.value&&r.value&&(m===i.value&&l.value||e)),v="",f="Missing Name!",g="Wrong Glyphs!",h="Copy Code First!";return u.value=p,l.value=!1,p?c.value=v:a.value?n.value&&r.value?c.value=h:c.value=g:c.value=f,{isValidData:u,message:c}}function U(){const{isValidData:e,message:t}=q(!0);return document.body.dataset.mark=e.value.toString(),{isValidData:e,message:t}}const W=k({__name:"App",setup(e){const t=P(),{route:s}=d(t),a=w(),{pageName:n,glyphs:r,release:o}=d(a);S((async()=>{const e=await D();o.value=e})),R([n,r],(()=>L((()=>U()))),{immediate:!0});const i={flora:"Flora",mineral:"Mineral",home:"Home"};const l=A({loader:()=>O(Object.assign({"./pages/Flora.vue":()=>g((()=>import("./Flora-34ffCI0j.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8])),"./pages/Home.vue":()=>g((()=>import("./Home-D34Not5M.js")),__vite__mapDeps([9,2,3,5,10])),"./pages/Mineral.vue":()=>g((()=>import("./Mineral-BwNnWwJ_.js")),__vite__mapDeps([11,1,2,3,4,5,6,7,12]))}),`./pages/${function(){const e=s.value;return e&&i[e]?i[e]:i.home}()}.vue`,3)});return(e,t)=>(V(),b(C(l)))}}),E=M(W),$=B();E.use($),E.mount("#app");export{g as _,U as a,q as b,H as u};