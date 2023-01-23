const planetMoonElements = {
	input: {
		resourceInputs: 'resourceInputs',
	},
	output: {
		resourceBullets: 'resourceBullets',
		creatures: 'creatures',
		plants: 'plants',
		minerals: 'minerals',
	}
}
updateGlobalElements(planetMoonElements);


const planetMoonElementFunctions = {
	systemInput: ['locationSentence()'],
	faunaNumberInput: ['numberStats(this); plural(pageData[this.dataset.destNoauto], "faunaSentencePlural")'],
	sentinelInput: ['sentinelSentence()'],
}
assignElementFunctions(planetMoonElementFunctions);

function plural(number, dest = null) {
	const word = (() => {
		if (number == 1) return 'is';
		return 'are';
	})();
	if (!dest) return word;
	wikiCode(word, dest);
}

function addResource(element = globalElements.input.resourceInputs.querySelector('button')) {
	const inputSection = element.parentElement;
	const elementList = document.querySelectorAll('[data-resource]');
	const childIndex = getChildIndex(elementList, 'dataset.resource');
	const resource_input = 'resource_input' + childIndex;

	const inputHTML = `<div class="tableCell text" data-resource="section${childIndex}">
		<label for="${resource_input}">Resource name:</label>
		<button class="button is-danger is-outlined" type="button" disabled onclick="removeSpecificSection('section${childIndex}', 'resource'); enableResourceAdd()">Remove</button>
	</div>
	<div class="tableCell data" data-resource="section${childIndex}">
		<input type="text" list="resources" id="${resource_input}" oninput="resourceList()">
	</div>`;

	inputSection.insertAdjacentHTML('beforebegin', inputHTML);

	const resourceRemoveButtons = document.querySelectorAll('[data-resource] button');
	const resourceInputSectionCount = resourceRemoveButtons.length;

	while (document.querySelectorAll('[data-resource] button').length < 3) {
		addResource(element);
	}

	// enter the number of sections you want to allow behind the ">" operator.
	if (resourceInputSectionCount + 1 > 6) {
		element.disabled = true;
	}

	// default state is disabled because that's easier to handle. Enable if more than 3 sections are present (every planet has at least 3 resources)
	if (resourceInputSectionCount > 3) {
		for (const button of resourceRemoveButtons) {
			button.disabled = false;
		}
	}
}

function enableResourceAdd() {
	const addButton = globalElements.input.resourceInputs.querySelector('button');
	addButton.disabled = false;

	const resourceRemoveButtons = document.querySelectorAll('[data-resource] button');
	const resourceInputSectionCount = resourceRemoveButtons.length;

	if (resourceInputSectionCount < 4) {
		for (const button of resourceRemoveButtons) {
			button.disabled = true;
		}
	}
	resourceList();
}

function resourceList() {
	const resourceShorts = getResourceData();
	const resourceInputs = document.querySelectorAll('[data-resource] input');
	const resources = new Set();
	for (const input of resourceInputs) {
		if (input.value) resources.add(input.value);
	}
	const resourceData = new Object;
	for (const resource of Array.from(resources)) {
		resourceData[resource] = resourceShorts[resource];
	}

	const usedResources = Object.keys(resourceData);
	const usedResourceShorts = Object.values(resourceData);

	for (let i = 0; i < usedResources.length; i++) {
		const resource = usedResources[i];
		usedResources[i] = `* {{ilink|${resource}}}`;

		const resourceShort = usedResourceShorts[i];
		usedResourceShorts[i] = `[[${resourceShort}]]`;
	}
	globalElements.output.resourceList.innerText = usedResourceShorts.join(', ');
	globalElements.output.resourceBullets.innerText = usedResources.join('\n');
}

function sentinelSentence() {
	const sentDescriptor = pageData.sentinel;
	const sentLevel = (() => {
		for (const level in sentinels) {
			if (sentinels[level].includes(sentDescriptor)) return level;
		}
	})();

	const output = `[[Sentinel]] activity on this ${pageData.pageType} is classified as: ''${sentDescriptor}''. The sentinels ${(sentLevel == 'aggressive') ? 'do' : "don't"} present an immediate threat.`;
	globalElements.output.sentinelSentence.innerText = output;
}

function addFauna(element) {
	const inputSection = element.parentElement;
	const outputSection = globalElements.output.creatures;
	const sectionType = 'fauna';
	const elementList = document.querySelectorAll(`[data-${sectionType}]`);
	const i = getChildIndex(elementList, `dataset.${sectionType}`);

	const inputHTML = `<div class="tableHeader text sectionToggle" data-fauna="section${i}" data-section="fauna">
		<p style="margin-right:auto">Creature: <output class="has-text-weight-bold" name="faunaName${i}"></output></p>
		<button class="button is-danger is-outlined" type="button" onclick="removeSpecificSection('section${i}', 'fauna'); deleteTableEntry(this)">Remove</button>
		<button class="button" onclick="toggleSection('fauna${i}', this)">Hide</button>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label for="faunaNameInput${i}">Creature name:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<input type="text" data-dest="faunaName${i}" id="faunaNameInput${i}">
	</div>
		<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label for="faunaFile_input${i}">Creature file name</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<input type="text" id="faunaFile_input${i}" data-dest="faunaFile${i}">
		<input type="file" id="faunaFileUpl${i}" accept="image/*" oninput="image(this)">
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label>Hemisphere:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<select data-dest="faunaHemisphere${i}" id="faunaHemisphereInput${i}">
			<option value=""></option>
			<option value="/ Found in the North">North</option>
			<option value="/ Found in the South">South</option>
		</select>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label>Rarity:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<select data-dest="faunaRarity${i}" id="faunaRarityInput${i}">
			<option value="Common">Common</option>
			<option value="Uncommon">Uncommon</option>
			<option value="Rare">Rare</option>
		</select>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label>Ecosystem:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<select data-dest="faunaEcosystem${i}" id="faunaEcosystemInput${i}" onchange="genusDropdown(this)">
			<option value="Ground">Ground</option>
			<option value="Flying">Flying</option>
			<option value="Underwater">Underwater</option>
			<option value="Underground">Underground</option>
		</select>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label>Activity:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<select data-dest="faunaActivity${i}" id="faunaActivityInput${i}">
			<option value="Always Active">Always Active</option>
			<option value="Diurnal">Diurnal</option>
			<option value="Nocturnal">Nocturnal</option>
			<option value="Mostly Diurnal">Mostly Diurnal</option>
			<option value="Mostly Nocturnal">Mostly Nocturnal</option>
		</select>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label>Genus:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<select data-dest-noauto="faunaGenus${i}" id="faunaGenusInput${i}"></select>
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label for="faunaWeightInput${i}">Weight in kg:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<input data-dest-noauto="faunaWeight${i}" type="text" id="faunaWeightInput${i}" maxlength="5" placeholder="0.0" oninput="numberStats(this)">
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label for="faunaHeightInput${i}">Height in m:</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<input data-dest-noauto="faunaHeight${i}" type="text" id="faunaHeightInput${i}" maxlength="3" placeholder="0.0" oninput="numberStats(this)">
	</div>
	<div class="tableCell text" data-fauna="section${i}" data-section="fauna fauna${i}">
		<label for="faunaDiscovererInput${i}">Discoverer</label>
	</div>
	<div class="tableCell data" data-fauna="section${i}" data-section="fauna fauna${i}">
		<input data-dest="faunaDiscoverer${i}" type="text" id="faunaDiscovererInput${i}">
	</div>`;

	const outputHTML = `<div data-fauna="section${i}">|-</div>
	<div data-fauna="section${i}">|[[File:<output id="faunaFile${i}"></output>|150px]] || <output id="faunaName${i}" name="faunaName${i}"></output> || <output id="faunaRarity${i}"></output> / <output id="faunaEcosystem${i}"></output> / <output id="faunaActivity${i}"> </output><output id="faunaHemisphere${i}"></output> || <output id="faunaGenus${i}"></output> || <output id="faunaHeight${i}"></output>m || <output id="faunaWeight${i}"></output>kg || <output id="faunaDiscoverer${i}"></output></div>`;

	inputSection.insertAdjacentHTML('beforebegin', inputHTML);
	outputSection.insertAdjacentHTML('beforeend', outputHTML);
	postProcessSection(element, sectionType, i);
	genusDropdown(globalElements.input[`faunaEcosystemInput${i}`]);
}

function addFlora(element) {
	const inputSection = element.parentElement;
	const outputSection = globalElements.output.creatures;
	const sectionType = 'flora';
	const elementList = document.querySelectorAll(`[data-${sectionType}]`);
	const i = getChildIndex(elementList, `dataset.${sectionType}`);

	const inputHTML = `<div class="tableHeader text sectionToggle" data-flora="section${i}" data-section="flora">
		<p style="margin-right:auto">Creature: <output class="has-text-weight-bold" name="floraName${i}"></output></p>
		<button class="button is-danger is-outlined" type="button" onclick="removeSpecificSection('section${i}', 'flora'); deleteTableEntry(this)">Remove</button>
		<button class="button" onclick="toggleSection('flora${i}', this)">Hide</button>
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraNameInput${i}">Creature name:</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" data-dest="floraName${i}" id="floraNameInput${i}">
	</div>
		<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraFile_input${i}">Creature file name</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" id="floraFile_input${i}" data-dest="floraFile${i}">
		<input type="file" id="floraFileUpl${i}" accept="image/*" oninput="image(this)">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraAgeInput${i}">Age</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" data-dest="floraAge${i}" id="floraAgeInput${i}">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraRootInput${i}">Root structure:</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" data-dest="floraRoot${i}" id="floraRootInput${i}">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraNutInput${i}">Nutrient source:</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" data-dest="floraNut${i}" id="floraNutInput${i}">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraNoteInput${i}">Notes:</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input type="text" data-dest="floraNote${i}" id="floraNoteInput${i}">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraResourcePrimInput${i}">Primary resource</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
	<input data-dest-noauto="floraElements${i}" type="text" id="floraResourcePrimInput${i}" oninput="floraMineralResourceLinks(this)">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraResourceSecInput${i}">Secondary resource:</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input data-dest-noauto="floraElements${i}" type="text" id="floraResourceSecInput${i}" oninput="floraMineralResourceLinks(this)">
	</div>
	<div class="tableCell text" data-flora="section${i}" data-section="flora flora${i}">
		<label for="floraDiscovererInput${i}">Discoverer</label>
	</div>
	<div class="tableCell data" data-flora="section${i}" data-section="flora flora${i}">
		<input data-dest="floraDiscoverer${i}" type="text" id="floraDiscovererInput${i}">
	</div>`;

	const outputHTML = `<div data-flora="section${i}">|-</div>
	<div data-flora="section${i}">|[[File:<output id="floraFile${i}"></output>|150px]] || <output id="floraName${i}" name="floraName${i}"></output> || <output id="floraAge${i}"></output> || <output id="floraRoot${i}"></output> || <output id="floraNut${i}"></output> || <output id="floraNote${i}"></output> || <output id="floraElements${i}"></output> || <output id="floraDiscoverer${i}"></output></div>`;

	inputSection.insertAdjacentHTML('beforebegin', inputHTML);
	outputSection.insertAdjacentHTML('beforeend', outputHTML);

	postProcessSection(element, sectionType, i);
}
// TODO: flora datalists, mineral datalists, mineral inputs, creature genus links
function addMineral(element) {
	const inputSection = element.parentElement;
	const outputSection = globalElements.output.minerals;
	const sectionType = 'mineral';
	const elementList = document.querySelectorAll(`[data-${sectionType}]`);
	const i = getChildIndex(elementList, `dataset.${sectionType}`);

	const inputHTML = ``;

	const outputHTML = `<div data-mineral="section${i}">|-</div>
	<div data-mineral="section${i}">|[[File:<output id="mineralFile${i}"></output>|150px]] || <output id="mineralName${i}" name="mineralName${i}"></output> || || <output id="mineralDiscoverer${i}"></output></div>`;

	inputSection.insertAdjacentHTML('beforebegin', inputHTML);
	outputSection.insertAdjacentHTML('beforeend', outputHTML);

	postProcessSection(element, sectionType, i);
}

function postProcessSection(element, sectionType, i) {
	deleteTableEntry(element);

	const sectionElements = { input: {}, output: {} };

	const inputs = document.querySelectorAll(`[data-${sectionType}="section${i}"] :is(input, select)`);
	for (const input of inputs) {
		sectionElements.input[input.id] = input.id;
		if (input.dataset.dest) {
			assignFunction(input, 'wikiCode(this)');
			wikiCode(input);
		}
		if (input.dataset.destNoauto) {
			assignFunction(input, 'storeData(this)');
			storeData(input);
		}
	}
	const outputs = document.querySelectorAll(`[data-${sectionType}="section${i}"] output`);
	for (const output of outputs) {
		if (output.id) sectionElements.output[output.id] = output.id;
	}
	updateGlobalElements(sectionElements);
}

function deleteTableEntry(element) {
	const parent = element.parentElement;
	const section = parent.dataset.section;
	const elements = document.querySelectorAll(`.tableHeader[data-${section}]`);
	for (let i = 0; i < elements.length; i++) {
		const className = 'is-' + oddEven(i + 1);
		const subsection = elements[i].dataset[section];
		const cells = document.querySelectorAll(`[data-${section}="${subsection}"]`)
		for (const cell of cells) {
			cell.classList.remove('is-odd', 'is-even');
			cell.classList.add(className);
		}
	}
	if (section == 'fauna' || !parent.dataset[section]) return;

	try {
		const subsection = parent.dataset[section];
		const sectionNumber = extractNumber(subsection);
		const planetItems = Object.keys(links.resources);
		const itemName = planetItems.find(element => extractNumber(element) == sectionNumber);
		delete links.resources[itemName];
	} catch (error) {
		console.warn(error)
	}
	floraMineralResourceLinks();
}

function floraMineralResourceLinks(element = null) {
	if (!links.resources) links.resources = new Object;
	const resources = links.resources;
	if (element) {
		const value = element.value;
		const object = element.dataset.destNoauto;
		const id = element.id;

		if (!resources[object]) resources[object] = new Object;
		resources[object][id] = sanitiseString(value);
	}

	const usedResources = new Set();
	const linkedResources = sortObj(structuredClone(resources));
	for (const objectName in linkedResources) {
		const object = linkedResources[objectName];
		for (const key in object) {
			const resource = object[key];
			if (resource && !usedResources.has(resource)) {
				linkedResources[objectName][key] = `[[${resource}]]`;
				usedResources.add(resource);
			}
		}
	}

	for (const key in linkedResources) {
		const output = Object.values(linkedResources[key]).filter(resource => resource).join(', ');		// filters for truthy values
		globalElements.output[key].innerText = output;
	}
}



// sets genus dropdown
function genusDropdown(element) {
	const creatureData = getCreatureData();
	const ecosystem = element.value;
	const genera = Object.keys(creatureData.ecosystems[ecosystem])
	const sectionNumber = extractNumber(element.id);
	const genusInputID = 'faunaGenusInput' + sectionNumber;

	const commonNames = new Array;
	for (const genus of genera) {
		commonNames.push(`${genus} (${creatureData.ecosystems[ecosystem][genus].commonName})`);
	}

	setDropdownOptions(globalElements.input[genusInputID], genera, commonNames);
	wikiCode(globalElements.input[genusInputID]);
}