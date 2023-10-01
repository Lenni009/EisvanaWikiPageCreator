import{p as e,w as s,g as r,y as m,d as g,F as b,m as c,a as y,E as w,b as x,c as o}from"./main-bacfb198.js";import{a as u,b as E,c as h,d as I}from"./startup-6f84b872.js";function i(){const n=e.planet,a=e.moon;if(!n)return void(e.name="");const t=a||n;s(t,"bodyName"),e.name=`Immortal Worm ${t}`}function p(){const n=(()=>{const n=r.input.autoSpawn;for(const a of Array.from(n))if(a.checked)return a.value;return""})(),a=`This creature ${n} automatically spawn on game reload`,t=r.output.autoSpawn;t.style.display=n?"":"none",n&&(t.innerText=a),m()}function d(){const n=g(),a="Eisvana Rare Fauna Album";s(`[[${a}]]${n}`,"addInfo"),m(),e.catalogue=a}function S(){return e.catalogue.split("|").at(-1)}function v(){b();const{name:n,wormclass:a}=e;return`${n}|${a}`}function P(){return`(${e.wormmaxdepth}ku)<br>Stomach: ${e.wormstomach}`}function $(){return e.catalogue.split("|")[0]}function k(){const n=["","Worm scan","Moon Page","Planet Page","System Page","Galaxy Map"];if(!e.moon){const a=n.findIndex((n=>n.toLowerCase().includes("moon")));n.splice(a,1)}e.galleryArray=n}const G=[{element:["planetInput","moonInput"],func:()=>{i(),c(),u()}},{element:"autoSpawn",func:()=>p()},{element:"researchTeam",func:()=>d()},{element:"wormclassInput",func:()=>u()},{element:"wormmaxdepthInput",func:()=>E()},{element:["discoveredInput","discoveredlinkInput"],func:()=>h()}],T={input:{autoSpawn:"autoSpawnInput"}};o.generateGalleryArray=()=>k(),o.albumLinkGen=()=>$(),o.albumOtherExternal=()=>P(),o.albumNameExternal=()=>v(),o.albumItemTypeExternal=()=>S(),y("galleryExplanationExternal","\n\tThe preferred order of pictures is as follows:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Worm scan</li>\n\t\t\t<li>Moon Page</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),w(T),x(G),i(),c(void 0,void 0,!0),d(),p(),I();