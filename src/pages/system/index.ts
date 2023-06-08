import { assignElementFunctions } from '../../commonElements/elementBackend/elementFunctions';
import { updateGlobalElements } from '../../commonElements/elementBackend/elementStore';
import { wikiCodePercentage } from '../../miscLogic/celestialobjectslogic';
import { globalElements, globalFunctions, pageData } from '../../variables/objects';
import systemElementFunctions from './elementFunctions';
import systemElements from './elementStore';
import { generateGalleryArray, addTemplate, autoPirate, civCatalog, combineEconConf, expectedHubTagSentence, merchantUpgrades, planetInputs, regionLong, resetExternal, searchUpgrades, spaceStationSection } from './system';
import '../../startup/celestialObjects/celestialObjects';

pageData.galleryExplanationExternal = `
There is a preferred order of pictures:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>System Exploration Guide</li>
			<li>System Page</li>
			<li>Default SS Multi-Tool</li>
		</ol>
	</div>`;

globalFunctions.resetExternal = () => resetExternal();
globalFunctions.generateGalleryArray = () => generateGalleryArray();

updateGlobalElements(systemElements);
assignElementFunctions(systemElementFunctions);

// startupFunctions
combineEconConf();
merchantUpgrades();
regionLong();
spaceStationSection();
planetInputs();
expectedHubTagSentence();
civCatalog();
addTemplate();
wikiCodePercentage();
autoPirate(globalElements.input.wealthInput as HTMLSelectElement);
(globalElements.input.merchantSearch as Array<HTMLInputElement>).forEach((element: HTMLInputElement) => searchUpgrades(element));