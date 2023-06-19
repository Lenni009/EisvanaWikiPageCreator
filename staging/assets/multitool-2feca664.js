import{g as i,r as V,p as n,d as z,f as J,h as u,w as b,i as K,j as E,k as Q,m as W,s as X,n as Y,v as Z,e as A,l as w,o as ee,t as te,b as ne,a as D,c as f}from"./about-1759bb8f.js";import{e as G,a as oe,f as k,b as T,c as ae,d as se}from"./startup-a66d0297.js";function L(){i.output.HubNr.innerText=V(n.region)}function g(){const n=z("GHSH"),e=i.output.addInfo,t="[["+j()+"]]"+n;e.innerText=t}function S(){const e=n.mainColour,t=n.secColour,a=n.name,l=n.subtype.toLowerCase(),o=n.type.toLowerCase(),s=i.input.appearanceInput;if(!e.trim()&&!t.trim())return;const u=e.trim()?`${A(e)} ${e.trim()}`:A(o),c=t.trim()?` with ${t} accents`:"",r=`${a} is ${u} ${"starter pistol"==l?l:o} multi-tool${c}.`;s.value=r,b(s)}function R(){le(),n.albumInitialised?G():document.addEventListener("albumLoaded",(()=>G()))}function v(){R(),x()}function le(){const{srLocName:e,planet:t,moon:a,axes:l}=n,i=n.location.toLowerCase(),o=Y(t,a);let s,u;const c=(()=>{const t=n.srLoc;return t.includes("Space")||e?t:i.includes("Space")?i:o})();i.includes("space")?(s=`fly to the ${i}`,u=`the ${c}`,i!=c&&e?c.includes("space")||(u=`${c} [[${e}]]`):s="take from cabinet"):(u=`${c} [[${e}]]`,s=`fly to ${o} (${l})`,c.includes("space")?u=`the ${c}`:a&&"moon"==c&&e==a||!a&&"planet"==c&&e==t?s=`fly to ${l}`:e||(u=`${o}`,s=`fly to ${l}`));b(`Save and reload on ${u}, then ${s}.`,"acquirement"),n.actualSrLoc=c}function x(){const e=n.srLocName,t=n.location,a=n.srPlanetImg||"nmsMisc_notAvailable.png",l=n.sysImg||"nmsMisc_notAvailable.png",o=n.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=n.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],r=[{},{},{},{}],p=J(),m=(()=>{const a=n.srLoc;return a.includes("Space")||e?a:t.includes("Space")?t:p})(),f="Sentinel Pillar"==t?"Pillar":"Cabinet",d=t.includes("Space")?"":`(${f} ${p} highlighted)`;function S(n,e,t){n.picName=e,n.desc=t}S(r[0],a,`Save/Reload ${m}`),S(r[1],l,`System ${d}`),!t.includes("Space")&&(S(r[2],o,`${f} ${p}`),S(r[3],s,"Coordinates"));const I=[];for(let n=0;n<r.length;n++){const e=r[n],t=e.picName,a=e.desc,l=c[n];if(!t||!a){u(i.input[l],"none");continue}u(i.input[l],"");const o=document.createElement("span");o.style.display="block",o.innerText=`${t}|${a}`,I.push(o.outerHTML),i.output[l+"Label"].innerText=a}i.output.acquirementGallery.innerHTML=I.join("")}function q(){const e=n.type,t=i.input.locInput,a={Royal:"Sentinel Pillar",Sentinel:"Harmonic Camp"};e in a?(u(t,"none"),t.value=a[e],b(t)):u(t,""),H(),ce(),x()}function O(){const e=n.location,t=["planetInput","moonInput","axesInput"];for(const n of t){const t=i.input[n],a=e.includes("Space");u(t,a?"none":""),a&&(t.value="",b(t),K(t))}}function B(){const e=n.srLoc,t=i.input.srInput;e.includes("Space")?(u(t,"none"),t.value="",b(t)):u(t,"")}function H(){const e=n.location,t=i.input.costInput,a="Sentinel Pillar"==e||"Harmonic Camp"==e;u(t,a?"none":""),a&&(t.value="",E(t,"input"))}function ce(){const e=n.type,t=i.input.crystalsInput;if("Royal"==e||"Sentinel"==e){const n=t.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');u(t,"none"),n.forEach((n=>{n.checked=!1,E(n,"change")}))}else u(t,"")}function ie(n){if("Harmonic Camp"!=n.value)return;const e=i.input.typeInput;e.value="Sentinel",E(e,"change"),u(e,"none"),u(n,"")}function F(){const e=n.type,t=i.input.subtypeInput,a={Pistol:[["Pistol","Starter Pistol"],["Standard","Starter Pistol"]],Rifle:[["Rifle","SMG"],["Standard (Large)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Large)","Pistol (Small)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Large)","SMG (Medium)","Pistol (Small)"]]},l=Object.keys(a).includes(e);u(t,l?"":"none"),l?Q(t,a[e][0],a[e][1]):t.value="",W(t)}function re(){return"Catalog"}function ue(){return"CalHub"==n.civShort?"Multi-Tool":n.isStarter?n.subtype:n.isStandard?"Standard Multi-Tool":n.type+" Multi-Tool"}function pe(){return`<br>{{Class|${n.class}}} - ${function(){const e=n.subtype;return!e||n.isStarter?"":e+" -"}()} ${n.slots} Slots`}function me(){return(()=>{const e=n.axes,t=n.acquirement.replace("Save and reload","S/r");return e&&!Z(!1)?t.replace(/[()]/g,"").replace(e,`(${e})`):t})()}function j(){const e=X(n.civShort),{type:t,subtype:a}=n;return(()=>{if("CalHub"==e)return e+" Multi-Tool Catalog";const l="Rifle"==t||"Pistol"==t&&"Starter Pistol"!=a,i="Pistol"==t&&!l;n.isStandard=l,n.isStarter=i;return e+" Multi-Tool Catalog - "+(l?"Standard Multi-Tool":i?a:t)})()}function fe(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Tool in hand","First Person View"],t=n.location,a=["Minor Settlement","Sentinel Pillar","Harmonic Camp"];if(a.includes(t))a.filter((n=>n!=t)).forEach((n=>{const t=e.indexOf(n);e.splice(t,1)}));else for(let n=e.length-1;n>=0;n--)a.includes(e[n])&&e.splice(n,1);n.galleryArray=e}const de=[{element:"nameInput",func:()=>{oe(),S()}},{element:"civ",func:()=>{w(),g(),S(),L()}},{element:"typeInput",func:()=>{g(),q(),F(),k(),T(),S()}},{element:"subtypeInput",func:()=>{T(),g(),S(),k()}},{element:"researchTeam",func:()=>g()},{element:"locInput",func:function(){v(),O(),H(),ie(this)}},{element:"srlocInput",func:()=>{v(),B()}},{element:["srInput","planetInput","moonInput"],func:()=>v()},{element:"axesInput",func:()=>R()},{element:["slotsInput","classInput"],func:()=>T()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>x()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){ee(this),x()}},{element:"portalglyphsInput",func:()=>L()},{element:["discoveredInput","discoveredlinkInput"],func:()=>ae()},{element:["mainColourInput","secColourInput"],func:()=>S()},{element:"hideAppearanceButton",handler:"click",func:function(){te("appearance",this)}}];D("huburbs",!0),f.albumDescExternal=()=>me(),f.albumOtherExternal=()=>pe(),f.albumItemTypeExternal=()=>ue(),f.albumTypeExternal=()=>re(),f.generateGalleryArray=()=>fe(),f.albumLinkGen=()=>j(),D("galleryExplanationExternal","\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>"),ne(de),w(),v(),g(),q(),F(),O(),B(),L(),H(),se();
