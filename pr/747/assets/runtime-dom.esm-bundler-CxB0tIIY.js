import{aD as U,aE as g,aF as j,aG as M,aH as A,aI as T,aJ as G,aK as m,aL as X,W as J,aM as Q,aN as Z,aO as Y,aP as W,aQ as k,aR as tt,aS as $,aT as et,aU as nt,aV as it}from"./links-D3QXPqgW.js";
/**
* @vue/runtime-dom v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let w;const _=typeof window<"u"&&window.trustedTypes;if(_)try{w=_.createPolicy("vue",{createHTML:t=>t})}catch{}const q=w?t=>w.createHTML(t):t=>t,st="http://www.w3.org/2000/svg",ot="http://www.w3.org/1998/Math/MathML",a=typeof document<"u"?document:null,N=a&&a.createElement("template"),rt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,o)=>{const s="svg"===e?a.createElementNS(st,t):"mathml"===e?a.createElementNS(ot,t):n?a.createElement(t,{is:n}):a.createElement(t);return"select"===t&&o&&null!=o.multiple&&s.setAttribute("multiple",o.multiple),s},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,o,s,l){const a=n?n.previousSibling:e.lastChild;if(s&&(s===l||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),s!==l&&(s=s.nextSibling););else{N.innerHTML=q("svg"===o?`<svg>${t}</svg>`:"mathml"===o?`<math>${t}</math>`:t);const s=N.content;if("svg"===o||"mathml"===o){const t=s.firstChild;for(;t.firstChild;)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ct=Symbol("_vtc");function ft(t,e,n){const o=t[ct];o&&(e=(e?[e,...o]:[...o]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const C=Symbol("_vod"),B=Symbol("_vsh"),Pt={beforeMount(t,{value:e},{transition:n}){t[C]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):h(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:o}){!e!=!n&&(o?e?(o.beforeEnter(t),h(t,!0),o.enter(t)):o.leave(t,(()=>{h(t,!1)})):h(t,e))},beforeUnmount(t,{value:e}){h(t,e)}};function h(t,e){t.style.display=e?t[C]:"none",t[B]=!e}const at=Symbol(""),lt=/(^|;)\s*display\s*:/;function ut(t,e,n){const o=t.style,s=g(n);let l=!1;if(n&&!s){if(e)if(g(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&S(o,e,"")}else for(const t in e)null==n[t]&&S(o,t,"");for(const t in n)"display"===t&&(l=!0),S(o,t,n[t])}else if(s){if(e!==n){const t=o[at];t&&(n+=";"+t),o.cssText=n,l=lt.test(n)}}else e&&t.removeAttribute("style");C in t&&(t[C]=l?o.display:"",t[B]&&(o.display="none"))}const x=/\s*!important$/;function S(t,e,n){if(m(n))n.forEach((n=>S(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=dt(t,e);x.test(n)?t.setProperty(W(o),n.replace(x,""),"important"):t[o]=n}}const L=["Webkit","Moz","ms"],E={};function dt(t,e){const n=E[e];if(n)return n;let o=k(e);if("filter"!==o&&o in t)return E[e]=o;o=tt(o);for(let n=0;n<L.length;n++){const s=L[n]+o;if(s in t)return E[e]=s}return e}const V="http://www.w3.org/1999/xlink";function P(t,e,n,o,s,l=nt(e)){o&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(V,e.slice(6,e.length)):t.setAttributeNS(V,e,n):null==n||l&&!$(n)?t.removeAttribute(e):t.setAttribute(e,l?"":et(n)?String(n):n)}function pt(t,e,n,o){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?q(n):n));const s=t.tagName;if("value"===e&&"PROGRESS"!==s&&!s.includes("-")){const o="OPTION"===s?t.getAttribute("value")||"":t.value,l=null==n?"checkbox"===t.type?"on":"":String(n);return(o!==l||!("_value"in t))&&(t.value=l),null==n&&t.removeAttribute(e),void(t._value=n)}let l=!1;if(""===n||null==n){const o=typeof t[e];"boolean"===o?n=$(n):null==n&&"string"===o?(n="",l=!0):"number"===o&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function u(t,e,n,o){t.addEventListener(e,n,o)}function mt(t,e,n,o){t.removeEventListener(e,n,o)}const y=Symbol("_vei");function ht(t,e,n,o,s=null){const l=t[y]||(t[y]={}),a=l[e];if(o&&a)a.value=o;else{const[n,i]=gt(e);if(o){u(t,n,l[e]=Ct(o,s),i)}else a&&(mt(t,n,a,i),l[e]=void 0)}}const I=/(?:Once|Passive|Capture)$/;function gt(t){let e;if(I.test(t)){let n;for(e={};n=t.match(I);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[":"===t[2]?t.slice(3):W(t.slice(2)),e]}let v=0;const bt=Promise.resolve(),St=()=>v||(bt.then((()=>v=0)),v=Date.now());function Ct(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();it(At(t,n.value),e,5,[t])};return n.value=t,n.attached=St(),n}function At(t,e){if(m(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const O=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Et=(t,e,n,o,s,l)=>{const a="svg"===s;"class"===e?ft(t,o,a):"style"===e?ut(t,n,o):Z(e)?Y(e)||ht(t,e,n,o,l):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):vt(t,e,o,a))?(pt(t,e,o),!t.tagName.includes("-")&&("value"===e||"checked"===e||"selected"===e)&&P(t,e,o,a,l,"value"!==e)):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),P(t,e,o,a))};function vt(t,e,n,o){if(o)return!!("innerHTML"===e||"textContent"===e||e in t&&O(e)&&U(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"form"===e||"list"===e&&"INPUT"===t.tagName||"type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!O(e)||!g(n))&&!(!(e in t)&&(!t._isVueCE||!/[A-Z]/.test(e)&&g(n)))}const p=t=>{const e=t.props["onUpdate:modelValue"]||!1;return m(e)?t=>X(e,t):e};function Mt(t){t.target.composing=!0}function R(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const l=Symbol("_assign"),yt={created(t,{modifiers:{lazy:e,trim:n,number:o}},s){t[l]=p(s);const a=o||s.props&&"number"===s.props.type;u(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n&&(o=o.trim()),a&&(o=M(o)),t[l](o)})),n&&u(t,"change",(()=>{t.value=t.value.trim()})),e||(u(t,"compositionstart",Mt),u(t,"compositionend",R),u(t,"change",R))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:o,trim:s,number:a}},i){if(t[l]=p(i),t.composing)return;const r=e??"";(!a&&"number"!==t.type||/^0\d/.test(t.value)?t.value:M(t.value))!==r&&(document.activeElement===t&&"range"!==t.type&&(o&&e===n||s&&t.value.trim()===r)||(t.value=r))}},It={deep:!0,created(t,e,n){t[l]=p(n),u(t,"change",(()=>{const e=t._modelValue,n=b(t),o=t.checked,s=t[l];if(m(e)){const t=T(e,n),l=-1!==t;if(o&&!l)s(e.concat(n));else if(!o&&l){const n=[...e];n.splice(t,1),s(n)}}else if(A(e)){const t=new Set(e);o?t.add(n):t.delete(n),s(t)}else s(z(t,o))}))},mounted:H,beforeUpdate(t,e,n){t[l]=p(n),H(t,e,n)}};function H(t,{value:e,oldValue:n},o){let s;t._modelValue=e,s=m(e)?T(e,o.props.value)>-1:A(e)?e.has(o.props.value):G(e,z(t,!0)),t.checked!==s&&(t.checked=s)}const Ot={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const s=A(e);u(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?M(b(t)):b(t)));t[l](t.multiple?s?new Set(e):e:e[0]),t._assigning=!0,J((()=>{t._assigning=!1}))})),t[l]=p(o)},mounted(t,{value:e,modifiers:{number:n}}){K(t,e)},beforeUpdate(t,e,n){t[l]=p(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||K(t,e)}};function K(t,e,n){const o=t.multiple,s=m(e);if(!o||s||A(e)){for(let n=0,l=t.options.length;n<l;n++){const l=t.options[n],a=b(l);if(o)if(s){const t=typeof a;l.selected="string"===t||"number"===t?e.some((t=>String(t)===String(a))):T(e,a)>-1}else l.selected=e.has(a);else if(G(b(l),e))return void(t.selectedIndex!==n&&(t.selectedIndex=n))}!o&&-1!==t.selectedIndex&&(t.selectedIndex=-1)}}function b(t){return"_value"in t?t._value:t.value}function z(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wt=["ctrl","shift","alt","meta"],Tt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>wt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Rt=(t,e)=>{const n=t._withMods||(t._withMods={}),o=e.join(".");return n[o]||(n[o]=(n,...o)=>{for(let t=0;t<e.length;t++){const o=Tt[e[t]];if(o&&o(n,e))return}return t(n,...o)})},_t=Q({patchProp:Et},rt);let D;function Nt(){return D||(D=j(_t))}const Ht=(...t)=>{const e=Nt().createApp(...t),{mount:n}=e;return e.mount=t=>{const o=Lt(t);if(!o)return;const s=e._component;!U(s)&&!s.render&&!s.template&&(s.template=o.innerHTML),1===o.nodeType&&(o.textContent="");const l=n(o,!1,xt(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},e};function xt(t){return t instanceof SVGElement?"svg":"function"==typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function Lt(t){return g(t)?document.querySelector(t):t}export{yt as a,It as b,Ht as c,Pt as d,Ot as v,Rt as w};
