function startupFunctions(){celestialStartupFunctions(),combineEconConf(),merchantUpgrades(),regionLong(),spaceStationSection(),planetInputs(),expectedHubTagSentence(),civCatalog(),addTemplate(),wikiCodePercentage(),autoPirate(globalElements.input.wealthInput)}const systemElements={input:{planetInput:"planetNumInput",moonInput:"moonNumInput",terminalInputs:"terminalInputs",systemExtras:"systemExtras"},output:{tradeTerminal:"tradeTerminal",planets:"planets",Freighters:"Freighters",Derelict:"Derelict",Organic:"Organic",Starships:"Starships",MTs:"MTs"}};updateGlobalElements(systemElements);const systemElementFunctions={civ:["regionLong(); expectedHubTagSentence(); civCatalog()",null,!0],portalglyphsInput:["regionLong(); expectedHubTagSentence(); autoBH()",null,!0],planetInput:["numberStats(this); planetInputs()"],moonInput:["numberStats(this); planetInputs()"],nameInput:["expectedHubTagSentence()"],factionInput:["spaceStationSection(); combineEconConf()"],economybuyInput:["wikiCodePercentage(this)"],economysellInput:["wikiCodePercentage(this)"],wealthInput:["autoPirate(this)"],conflictInput:["autoPirate(this)"],platformInput:["docByExternal()"],distanceInput:["numberStats(this)"],systemExtras:["addTemplate(this)"]};function locationSentence(){const t=pageData.region,e=pageData.civShort,a=regNr(t),n=HubGal(e);wikiCode(`Located in the [[${t}]] [[region]]${a} of the ${n}.`,"loc")}function planetInputs(){const t=globalElements.input.waterInput.parentElement.previousElementSibling,e=globalElements.output.planets,a=pageData.planet,n=pageData.moon,o=(l=parseInt(a)+parseInt(n),i=2,s=6,Math.max(i,Math.min(s,l)));var l,i,s;if(isNaN(o))return;function d(){const t=new Set,e=(()=>{const e=document.querySelectorAll("[data-planet]");for(const a of e)t.add(a.dataset.planet);return t.size})();return o-e}const u=document.querySelectorAll("[data-planet]");let c=getChildIndex(u,"dataset.planet");for(;0!=d();)d()>0?(p(c),c++):r();function r(){const t=document.querySelectorAll("[data-planet]"),e=new Set;for(const a of t)e.add(a.dataset.planet);const a=Array.from(e).pop(),n=document.querySelectorAll(`[data-planet="${a}"]`);removeSection(n)}function p(a){const n="is-"+oddEven(a),o=`<div class="tableHeader text ${n} sectionToggle" data-planet="planet${a}">\n\t\t\t<p><output id=planetClass${a}>Planet</output> ${a}: <output class="has-text-weight-bold" name="planetName${a}"></output></p>\n\t\t\t<button class="button" onclick="toggleSection('planet${a}', this)">Hide</button>\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="planetName_input${a}">Planet name</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Name</data>\n\t\t\t\t<data>Can be found in the planet discovery menu.<br>Enter exactly as seen in game. Watch out for 0 (zero) and O (o).</data>\n\t\t\t\t<data>./assets/bitmap/planet/planetName.jpg</data>\n\t\t\t</span>\t\t\t\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="planetName_input${a}" data-dest="planetName${a}">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="planetFile_input${a}">Planet file name</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Should show the entire planet from space. Click for an example picture.</data>\n\t\t\t\t<data>Planet Name</data>\n\t\t\t\t<data>\n\t\t\t\t\tShould show the entire planet from space.<br>\n\t\t\t\t\tMake sure no asteroids/pulse lines/freighters are obstructing the picture.\n\t\t\t\t\t<br>Point the sun directly at the planet, no weird angles.\n\t\t\t\t\t<br>Also try to only get the planet into the shot, no other planets.\n\t\t\t\t\tOnly exception to this are moons or rings, which should be included if they exist.\n\t\t\t\t\t<br>Disable the vignette.\n\t\t\t\t</data>\n\t\t\t\t<data>./assets/bitmap/planet/planetPic.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t\t<input type="text" id="planetFile_input${a}" data-dest="planetFile${a}" data-default="NmsMisc_NotAvailable.png">\n\t\t\t\t<input type="file" id="mainFileUpl${a}" accept="image/*" oninput="image(this)">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="landscapeFile_input${a}">Landscape file name</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Showcase the planet's landscape.</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t\t<input type="text" id="landscapeFile_input${a}" data-dest="landscapeFile${a}" data-default="NmsMisc_NotAvailable.png">\n\t\t\t\t<input type="file" id="secFileUpl${a}" accept="image/*" onchange="image(this)">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label>Biome</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be determined from the planetary features.</data>\n\t\t\t\t<data>Planet Biome</data>\n\t\t\t\t<data>\n\t\t\t\t\tCan be determined from the planetary features such as the weather, harvestable plants or available resources.<br>\n\t\t\t\t\tSee the <a href=https://nomanssky.fandom.com/wiki/Biome rel=noreferrer target=_blank>Biome wiki page</a> for more information.\n\t\t\t\t</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t\t<select id="biome_input${a}" data-dest-noauto="biome${a}" onchange="biomeLinks(this)">\n\t\t\t\t\t<option value="Lush">Lush</option>\n\t\t\t\t\t<option value="Barren">Barren</option>\n\t\t\t\t\t<option value="Dead">Dead</option>\n\t\t\t\t\t<option value="Exotic">Exotic</option>\n\t\t\t\t\t<option value="Mega Exotic">Mega Exotic</option>\n\t\t\t\t\t<option value="Scorched">Scorched</option>\n\t\t\t\t\t<option value="Frozen">Frozen</option>\n\t\t\t\t\t<option value="Toxic">Toxic</option>\n\t\t\t\t\t<option value="Irradiated">Irradiated</option>\n\t\t\t\t\t<option value="Marsh">Marsh</option>\n\t\t\t\t\t<option value="Volcanic">Volcanic</option>\n\t\t\t\t</select>\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="descriptor_input${a}">Planet description</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the exploration guide.</data>\n\t\t\t\t<data>Planet Description</data>\n\t\t\t\t<data>Can be found in the exploration guide.</data>\n\t\t\t\t<data>./assets/bitmap/planet/planetDesc.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="descriptor_input${a}" list="planetDescriptors" data-dest-noauto="descriptor${a}" oninput="expandDescriptor(this)">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="moon_input${a}">Is moon</label>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="checkbox" id="moon_input${a}" data-dest-noauto="descriptor_input${a}" oninput="moonSwitch(this)">\n\t\t</div>\n\t\t<div class="tableHeader text ${n} sectionToggle" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<div style="display:flex">\n\t\t\t\t<p style="margin-right:1.5rem">Resources</p>\n\t\t\t\t<span class="tooltip">\n\t\t\t\t\t<data>Found in the Discovery Menu or on the analysis visor.</data>\n\t\t\t\t\t<data>Planet Resources</data>\n\t\t\t\t\t<data>Found in the Discovery Menu or on the analysis visor.</data>\n\t\t\t\t\t<data>./assets/bitmap/planet/resources.jpg</data>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<button class="button" onclick="toggleSection('resource${a}', this)">Hide</button>\n\t\t</div>\n\t\t<div class="tableHeader text ${n}" data-section="resource${a} planet${a}" data-planet="planet${a}">\n\t\t\t<button class="button is-primary" id="addResourceButton${a}" type="button" onclick="addResourceInput(this, ${a})">+ Add Resource</button>\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="weather_input${a}">Weather</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Weather</data>\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>./assets/bitmap/planet/weather.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="weather_input${a}" list="weatherData" data-dest-simple="weather${a}" oninput="wikiCodeSimple(this)">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="sentinel_input${a}">Sentinels</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Sentinel Level</data>\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>./assets/bitmap/planet/sentinels.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="sentinel_input${a}" list="sentinels" data-dest="sentinel${a}">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="flora_input${a}">Flora</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Flora Level</data>\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>./assets/bitmap/planet/flora.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="flora_input${a}" list="rarity" data-dest="flora${a}">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="fauna_input${a}">Fauna</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Fauna Level</data>\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>./assets/bitmap/planet/fauna.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="fauna_input${a}" list="rarity" data-dest="fauna${a}">\n\t\t</div>\n\t\t<div class="tableCell text ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<label for="faunatotal_input${a}">Number of Fauna</label>\n\t\t\t<span class="tooltip">\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>Planet Fauna Number</data>\n\t\t\t\t<data>Can be found in the discovery menu.</data>\n\t\t\t\t<data>./assets/bitmap/planet/faunaNum.jpg</data>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class="tableCell data ${n}" data-planet="planet${a}" data-section="planet${a}">\n\t\t\t<input type="text" id="faunatotal_input${a}" maxlength="2" data-dest-noauto="FaunaTotal${a}" oninput="numberStats(this)">\n\t\t</div>`,l=`<div class="${n}" data-planet="planet${a}" id="body${a}"><div>|-</div>\n        <div>|[[File:<output id="planetFile${a}"></output>|150px]]</div>\n        <div>|[[File:<output id="landscapeFile${a}"></output>|150px]]</div>\n        <div>|[[<output id="planetName${a}" name="planetName${a}"></output>]]</div>\n        <div>|<output id="biome${a}"></output><output id="infested${a}"></output>&lt;hr&gt;<output id="descriptor${a}"></output></div>\n        <div>|<output id="resource${a}"></output></div>\n        <div>|<output id="weather${a}"></output></div>\n        <div>|<output id="sentinel${a}"></output></div>\n        <div>|<output id="flora${a}"></output></div>\n        <div>|<output id="fauna${a}"></output> (<output id="faunaTotal${a}" name="FaunaTotal${a}"></output>)</div>\n        <div>|-</div>\n        <div>!style="background-color:#2f4f4f"|Notes:</div>\n        <div>|colspan=8 style="text-align:left"|'''100% Zoology Bonus''': {{FaunaTotal|<output id="faunaTotalNotes${a}" name="FaunaTotal${a}"></output>}} {{nanites}}</div></div>`;t.insertAdjacentHTML("beforebegin",o),e.insertAdjacentHTML("beforeend",l),addAllTooltips();const i=document.querySelectorAll(`[data-planet="planet${a}"] [data-default]`);for(const t of i)assignFunction(t,"assignDefaultValue(this)"),assignDefaultValue(t);const s=document.querySelectorAll(`[data-planet="planet${a}"] [data-dest]`);for(const t of s)assignFunction(t,"wikiCode(this)");const d=document.querySelectorAll(`[data-planet="planet${a}"] [data-dest-noauto]`);for(const t of d)assignFunction(t,"storeData(this)");const u=document.querySelectorAll(`[data-planet="planet${a}"] [list]`);for(const t of u)assignFunction(t,"forceDatalist(this)","onchange");const c=document.getElementById(`addResourceButton${a}`);for(let t=0;t<3;t++)addResourceInput(c,a);const r={output:{}},p=document.querySelectorAll(`#body${a} output`);for(const t of p){const e=t.id;r.output[e]=e}updateGlobalElements(r),biomeLinks(document.getElementById(`biome_input${a}`))}}function addResourceInput(t,e){const a=t.parentElement,n=document.querySelectorAll("[data-resource]"),o=getChildIndex(n,"dataset.resource"),l="resource"+e,i="resource_input"+o,s="is-"+oddEven(e),d=`<div class="tableCell text removable ${s}" data-section="resource${e} planet${e}" data-resource="section${o}" data-planet="planet${e}">\n\t\t<button class="button is-danger is-outlined icon is-small" title="Remove resource" type="button" disabled onclick="removeSpecificSection('section${o}', 'resource'); removeResource('${i}')">&#10006</button>\n\t\t<label for="${i}">Resource name:</label>\n\t</div>\n\t<div class="tableCell data ${s}" data-section="resource${e} planet${e}" data-resource="section${o}" data-planet="planet${e}">\n\t\t<input type="text" list="resources" id="${i}" data-dest-noauto="${l}" oninput="addResource(this)">\n\t</div>`;a.insertAdjacentHTML("beforebegin",d);const u={input:{}};u.input[i]=i,updateGlobalElements(u);const c=getResourceInputSections(e),r=getResourceInputSectionCount(c);if(r+1>6&&(t.disabled=!0),r>3)for(const t of c){const e=t.querySelector("button");e&&(e.disabled=!1)}}function getResourceInputSections(t){return document.querySelectorAll(`[data-resource][data-planet="planet${t}"]`)}function getResourceInputSectionCount(t){const e=new Set;for(const a of t)e.add(a.dataset.resource);return e.size}function removeResource(t){const e=globalElements.input[t],a=e.dataset.destNoauto,n=e.id,o=extractNumber(a);e.value&&(delete links.resources[a][n],addResource()),document.getElementById(`addResourceButton${o}`).disabled=!1;const l=getResourceInputSections(o);if(getResourceInputSectionCount(l)<4)for(const t of l){const e=t.querySelector("button");e&&(e.disabled=!0)}}function moonSwitch(t){const e=document.getElementById(t.dataset.destNoauto),a=extractNumber(t.id),n=t.checked?"Moon":"Planet";document.getElementById("planetClass"+a).innerText=n,expandDescriptor(e,n)}function expandDescriptor(t,e=null){const a=extractNumber(t.id);e||(e=document.getElementById("moon_input"+a).checked?"Moon":"Planet");const n=t.value,o=t.dataset.destNoauto,l=buildDescriptor(n,e,"<br>");globalElements.output[o].innerText=l;infestedBiomeLinks("infested"+a,autoInfested(t))}function merchantUpgrades(t=null){const e=document.querySelectorAll("[data-dest-checkbox-group]");if(t)return void n(t);const a=new Set;for(const t of e)t.onchange||assignFunction(t,"merchantUpgrades(this.dataset.destCheckboxGroup)"),a.add(t.dataset.destCheckboxGroup);for(const t of a)n(t);return;function n(t){const e=document.querySelectorAll(`[data-dest-checkbox-group="${t}"]`),a=t.startsWith("SD")?"":t.substring(0,2),n=new Array;for(const t of e)t.checked&&n.push(t.value);const o=new Array;for(let t=1;t<=n.length;t++){const e=`| ${a}${t}=${n[t-1]}`;o.push(e)}wikiCode(o.join("\n"),t);const l=globalElements.output[t].closest("#scrapDealer");l&&(0==o.length?l.style.display="none":l.style.display="")}}function tradeables(){const t=globalElements.input.terminalInputs,e=globalElements.output.tradeTerminal,a=document.querySelectorAll("[data-tradeable]"),n=getChildIndex(a,"dataset.tradeable"),o="price"+n,l="text"+n,i="text_input"+n,s="price_input"+n,d=`<div class="tableHeader text sectionToggle" data-tradeable="section${n}" data-station="terminal">\n\t\t<span class="has-text-weight-bold">Tradeable</span>\n\t\t<button class="button is-danger is-outlined" type="button" onclick="removeSpecificSection('section${n}', 'tradeable'); enableTradeableAdd()">Remove</button>\n\t</div>\n\t<div class="tableCell text" data-tradeable="section${n}" data-station="terminal">\n\t\t<label for="${i}">Tradeable name:</label>\n\t</div>\n\t<div class="tableCell data" data-tradeable="section${n}" data-station="terminal">\n\t\t<input type="text" list="terminal" id="${i}" data-dest="${l}">\n\t</div>\n\t<div class="tableCell text" data-tradeable="section${n}" data-station="terminal">\n\t\t<label for="${s}">Tradeable price:</label>\n\t</div>\n\t<div class="tableCell data" data-tradeable="section${n}" data-station="terminal">\n\t\t<input type="text" id="${s}" data-dest-noauto="${o}">\n\t</div>`,u=`<div data-tradeable="section${n}">|-</div>\n\t<div data-tradeable="section${n}">| {{ilink|<output id="${l}"></output>}} || {{Units}} <output id="${o}"></output></div>`;t.insertAdjacentHTML("beforebegin",d),e.insertAdjacentHTML("beforeend",u);const c=document.querySelectorAll(`[data-tradeable="section${n}"] input[data-dest]`);for(const t of c)assignFunction(t,"wikiCode(this)");const r=document.querySelectorAll(`[data-tradeable="section${n}"] input[data-dest-noauto]`);for(const t of r)assignFunction(t,"storeData(this); numberStats(this)");const p=document.querySelectorAll("[data-tradeable]"),b=(()=>{const t=new Set;for(const e of p){const a=e.dataset.tradeable;t.add(a)}return t.size})(),m=t.querySelector("button");b+1>5&&(m.disabled=!0)}function enableTradeableAdd(){globalElements.input.terminalInputs.querySelector("button").disabled=!1}function resetExternal(){const t=document.querySelectorAll("[data-tradeable], [data-planet]");removeSection(t)}function regionLong(){const t=pageData.region,e=1==t.split(" ").length?t+" region":t;globalElements.output.regionLong.innerText=e}function addResource(t=null){const e=links.resources??=new Object;if(t){const a=t.value,n=t.dataset.destNoauto,o=t.id;e[n]??=new Object,e[n][o]=sanitiseString(a)}const a=new Set,n=sortObj(structuredClone(e),!0);for(const t in n){const e=n[t];for(const o in e){const l=e[o];l&&!a.has(l)&&(n[t][o]=`[[${l}]]`,a.add(l))}}for(const t in n){const e=Object.values(n[t]).filter((t=>t)).join("<br>");globalElements.output[t].innerText=e}}function biomeLinks(t){const e=t.value,a=t.dataset.destNoauto,n=links.biomes??=new Object;n[a]=sanitiseString(e);const o=new Set,l=sortObj(structuredClone(n),!0);for(const t in l){const e=l[t];e&&!o.has(e)&&(l[t]=`{{Biome|${e}}}`,o.add(e))}setBiomeText(l)}function infestedBiomeLinks(t,e){const a=links.infestedBiomes??=new Object;a[t]=e;let n=!1;const o=sortObj(structuredClone(a),!0);for(const t in o){const e=o[t];e&&!n?(o[t]="<br>([[Biome Subtype - Infested|Infested]])",n=!0):e?o[t]=" (Infested) ":(o[t]="",delete a[t])}setBiomeText(o)}function setBiomeText(t){for(const e in t){const a=t[e];globalElements.output[e].innerText=a}}function expectedHubTagSentence(){const t=globalElements.output.expectedHubTag,e=pageData.name;if(!e)return void(t.innerHTML="");const a=pageData.region,n=pageData.portalglyphs,o=`HUB${getHubNumber(a)}-${(()=>{let t=n.substring(1,4);for(;t.startsWith("0")&&t.length>1;)t=t.substring(1);return t})()}`;t.innerHTML="",e.includes(o)||(t.innerText=`The expected HUB Tag for this system is ${o}.\n\n`)}function spaceStationSection(){const t={uncharted:"This system is uncharted and has no [[Space Station]].",abandoned:"This space station is abandoned.\n\n"},e={normal:["img","terminal","merchant","scrapDealer"],pirate:["img","scrapDealer"],abandoned:["img","note","terminal"],uncharted:["note"]},a=(()=>{const t=pageData.faction;return"Uncharted"==t?"uncharted":t.includes("Abandoned")?"abandoned":pageData.wealth.includes("Black Market")?"pirate":"normal"})(),n=document.querySelectorAll("[data-station]");for(let t=0;t<n.length;t++){const l=n[t],i=l.dataset.station;e[a].includes(i)?("merchant"!=i&&"scrapDealer"!=i||!o(l)||t++,"scrapDealer"!=l.id||pageData.SDMerchant?l.style.display="":l.style.display="none"):l.style.display="none"}function o(t){const e=t.querySelector("button");if(!e)return;const a=e.dataset.buttonId;if(!a)return;const n="display"+a;return e.dataset[n]}t[a]&&(document.querySelector('[data-station="note"]').innerText=t[a])}function autoBH(){const t=pageData.portalglyphs,e=globalElements.input.colorInput;"79"==t.substring(2,4)?(hideInput(e,"none"),e.value="Black Hole"):hideInput(e,""),wikiCode(e)}function autoPirate(t){const e=t.value;if(!e.includes("Black Market")&&!e.includes("Pirate Controlled"))return;const a=globalElements.input.conflictInput,n=[globalElements.input.wealthInput,a];for(const t of n){const e=t.querySelector('optgroup[label="Pirate"] option').value;t.value=e,wikiCode(t)}spaceStationSection()}function combineEconConf(){const t=pageData.faction,e=[globalElements.input.wealthInput,globalElements.input.economyInput,globalElements.input.conflictInput];if(t.includes("Abandoned")||"Uncharted"==t)for(const t of e){const e=t.querySelector('optgroup[label="Abandoned/Uncharted"] option').value;t.value=e,wikiCode(t),hideInput(t,"none")}else for(const t of e)hideInput(t,"")}function addTemplate(t=null){if(!t){const t=document.getElementsByName("systemExtras");for(const e of t)addTemplate(e);return}const e=globalElements.output[t.value];t.checked?e.style.display="":e.style.display="none"}function civCatalog(){const t=shortenGHub(pageData.civShort);wikiCode(t,"civShorter")}function generateGalleryArray(){const t=["","System Exploration Guide","System Page","Default SS Multi-Tool"];("Uncharted"==pageData.faction||pageData.faction.includes("Abandoned"))&&t.pop(),pageData.galleryArray=t}function galleryExplanationExternal(){return"There is a preferred order of pictures:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>System Exploration Guide</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Default SS Multi-Tool</li>\n\t\t</ol>\n\t</div>"}assignElementFunctions(systemElementFunctions);
