import { numberStats, researchTeamDropdown } from "../../common";
import { ElementFunctions } from "../../types/elements";
import { enemyCheckboxes, setGalaxy, updateGalaxyTableEntry } from "./derelict";

const derelictElementFunctions: ElementFunctions = [
	{
		element: ['nameInput', 'portalglyphsInput'],
		func: () => updateGalaxyTableEntry()
	},
	{
		element: 'galaxyInput',
		func: function () { setGalaxy((this as unknown as HTMLSelectElement).value); researchTeamDropdown(); updateGalaxyTableEntry() }
	},
	{
		element: ['roomInput', 'hyperdriveInput', 'fuelInput'],
		func: function () { numberStats(this as unknown as HTMLInputElement); updateGalaxyTableEntry() }
	},
	{
		element: 'enemies',
		func: () => { enemyCheckboxes(); updateGalaxyTableEntry() }
	},
]

export default derelictElementFunctions;