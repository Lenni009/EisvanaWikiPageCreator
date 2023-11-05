import { robotSentences } from "./creatureDiscoveryMenu/diet";

/**
 * @fileoverview Provides data for creature datalists
 */
const creatureDatalists = {
	notesData: [
		'Organic Interior',
		'Magnetic Shell',
		'Self-Greasing',
		'Searching for home',
		'Wonders why',
		'Waiting for infinity',
		'Transmitting to the Atlas',
		'Remembers the Before',
		'Non-simulated',
		'Solar Powered',
		'[ Internal battery leak detected ]',
		'Unscannable',
		'Recycled',
		'Self-constructed',
		'Assembled in the stars',
		'Superconducting wires',
		'Enlarged flux circuit',
		'Distributed cores',
		'Divergent',
		'Self-aware',
		'Chooses not to speak',
		'Underclocked',
		'Overclocked',
		'Air-cooled',
		'Graphene wiring',
		'Many hidden toes',
		'Builds metal nest',
		'Dislikes bright colours',
		'Moon Baby',
		'Lays beautiful eggs',
		'Waxy all-over',
		'Secretes venom',
		'Compound eyes',
		'Inverted organ sacs',
		'Good pollinator',
		'Ultrasonic roar',
		'Retractable appendages',
		'Has no bones',
		'Not carbon based',
		'Evil',
		'Nutritious faeces',
		'Asexual reproduction',
		'Changes gender when cold',
		'Can dislocate jawbones',
		'Powerful mandibles',
		'Autonomous regeneration',
		'Technically immortal',
		'Blue blood',
		'Green blood',
		'Yellow blood',
		'Excess of bile',
		'Creates beautiful webs',
		'Strong burrower',
		'Hibernates',
		'Mates for life',
		'Carries symbiotic fungus',
		'Stomach inside skull',
		'Nine additional senses',
		'Sense organs in feet',
		'Excellent sense of smell',
		'Poor hearing',
		'Ticklish',
		'Highly intelligent',
		'Cannot see colour',
		'Sprays ink when scared',
		'Produces vile stench',
		'Unpleasant to eat',
		'Gelatinous bones',
		'Can change colour',
		'Chromatophore',
		'Rapid self-healing',
		'Valuable blood',
		'Absorbs moisture from air',
		'Mildly radioactive',
		'Strongly radioactive',
		'Hybrid species',
		'Genetically unstable',
		'Partially domesticated',
		'Gentle soul',
		'Hidden extra skull',
		'Secondary skin',
		'Hidden extra tongue',
		'Redundant internal organs',
		'Rigid bones',
		'Hidden extra claws',
		'Six stomachs',
		'Powerful digestive enzymes',
		'Saliva pH 14',
		'Flexible joints',
		'Hidden stinger',
		'Covered in tiny hairs',
		'Untameable',
		'Fragile skull',
		'Fragile skin',
		'Detachable tongue',
		'Bruisable organs',
		'Brittle bones',
		'Calcified claws',
		'Translucent teeth',
		'Caustic skin',
		'Toxic tongue',
		'Covered in toxic bristles',
		'Venom-laden claws',
		'Armoured skull',
		'Regularly sheds skin',
		'Monstrous tongue',
		'Tiny organs',
		'Metal bones',
		'Bioluminescent teeth',
		'Thick skull',
		'Toughened skin',
		'Massive tongue',
		'Stores water in hidden sacs',
		'Sheds and regrows bones',
		'Sharp claws',
		'Rubber skull',
		'Porous skin',
		'Regrows teeth each day',
		'Grows lungs after birth',
		'Carbon-based skeleton',
		'Decentralised nervous system',
		'Skull full of holes',
		'Skin parasites',
		'Tongue parasites',
		'Extensive gut bacteria',
		'Digests via symbionts',
		'Claws harbour disease',
		'Spawns in water',
		'Goes underground to die',
		'Tapeworm host',
		'Delicious',
		'Easily trained',
		'Inflates when stressed',
		'Poor sense of direction',
		'Excellent navigator',
		'Can sense magnetic fields',
		'Easily confused',
		'Frequently lost',
		'Hears ground vibrations',
		'Scared of fire',
		'Hydrophobic',
		'Vestigial udders',
		'Makes art with sticks',
		'Recognises other species',
		'Beloved by the [[Gek]]',
		'Bonds with [[Vy\'keen]]',
		'Hunts [[Sentinel]]s',
		'Matriarchal society',
		'Digs underground nests',
		'One extendible finger',
		'Grows wings before death',
		'Alluring pheromones',
		'Sings beautifully',
		'Deceptively fast',
		'Lacks gallbladder',
		'Both gills and lungs',
		'Respires inorganically',
		'Has chlorophyll glands',
		'Sleeps standing up',
		'Never blinks',
		'Frequently regurgitates',
		'Irritable',
		'Highly social',
		'Dislikes being scanned',
		'Telepathic',
		'Burns in the sun',
		'Well insulated',
		'Photosensitive',
		'Secretes phytotoxins',
		'Lovely eyes',
		'Good parent',
		'Can feel love',
		'Screams when upset',
		'Forms colonies',
		'Hatched from cocoons',
		'Fragrant',
		'Particularly oily',
		'Gets cold easily',
		'Drinks blood',
		'Does not age',
		'Always waiting',
		'Always watching',
		'Aware of its fate',
		'Senses ATLAS',
		'Limited sentience',
		'Born on meteors',
		'Laden with nectar',
		'Occasionally eats rocks',
		'Scared of mirrors',
		'Self-aware',
		'Eyes regrow after damage',
		'Superheated stomach',
		'Three hearts',
		'Two livers',
		'Acidic blood',
		'Respires anaerobically',
		'Carries symbiotic worms',
		'Riddled with pests',
		'Carries babies in pouch',
		'Promiscuous',
		'Symmetrical insides',
		'Occasionally invisible',
		'Limited mind control',
		'Buries food supplies',
		'Cannot sweat',
		'Weak lungs',
		'Strong swimmer',
		'Made of stardust',
		'Requires dietary iron',
		'Magnetic teeth',
		'Retractable eyestalks',
		'Breathes through mouth',
		'Smells with tongue',
		'Cannot drown',
		'Highly fertile',
		'Nitrogen-rich blood',
		'Bioluminescent blood',
		'Fears the rain',
		'Echolocation glands',
		'Possesses language',
		'Varied phenotype',
		'Tiny brain',
		'Cannot digest starch',
		'Seeks red flowers',
		'Nests in blue foliage',
		'Elaborate mating displays',
		'Brain hemispheres not linked',
		'Sweats milk for infants',
		'No stomach',
		'Double-coned eyes',
		'Cutaneous respiration',
		'Barbed feet',
		'Extremely homozygous',
		'Extremely heterozygous',
		'Parasites in brain',
		'Night vision'
	],
	specialNotesData: [
		'Evil',
		'Sheds and regrows bones',
		'But there is something particularly unsettling about this creature, some deep shadow hanging over them. They are to be treated with extreme caution.',
		'Skeletal analysis reveals unusually supple bones, as if they had only recently grown: possible defense mechanism to shed and rapidly regrow body parts?',
		...robotSentences
	],
	behaviourData: [
		'01100001 01101110 01100111 01110010 01111001',
		'01110011 01100001 01100100',
		'01100001 01101100 01101111 01101110 01100101',
		'01101000 01100101 01101100 01110000',
		'01110111 01100001 01101001 01110100',
		'01101000 01110101 01101110 01110100',
		'01101011 01101001 01101100 01101100',
		'01100110 01100001 01101001 01101100',
		'01100110 01110010 01101001 01100101 01101110 01100100',
		'Sedate',
		'Erratic',
		'Active',
		'Distinctive',
		'Hibernator',
		'Unintelligent',
		'Careful hunter',
		'Patient hunter',
		'Cautious',
		'Impulsive',
		'Reckless',
		'Aggressive',
		'Unafraid',
		'Cold-blooded',
		'Does not fear death',
		'Intelligent',
		'Calm',
		'Enjoys the hunt',
		'Bold',
		'Stalks prey for days',
		'Unpredictable',
		'Dangerous',
		'Wildly aggressive',
		'Vicious',
		'Cruel',
		'Hyperviolent',
		'Excited by violence',
		'Angry',
		'Easily enraged',
		'Warlike',
		'Apex predator',
		'Watchful',
		'Nervous',
		'Skittish',
		'Timid',
		'Shy',
		'Highly observant',
		'Slow grazer',
		'Tends plants',
		'Seeks company',
		'Wary',
		'Easily startled',
		'Vigilant',
		'Inattentive',
		'Constantly moving',
		'Hasty',
		'Fidgety',
		'Anxious',
		'Long-distance migration',
		'Nomadic',
		'Remembers faces',
		'Submissive',
		'Highly intelligent',
		'Passive',
		'Docile',
		'Wise',
		'Prudent',
		'Far-sighted',
		'Always foraging',
		'Methodical',
		'Friendly',
		'Cheerful',
		'Gentle',
		'Peaceful',
		'Flighty',
		'Collects shiny objects',
		'Builds large nests',
		'Easily scared',
		'Migratory',
		'Very cautious',
		'Sings at dusk',
		'Long-sighted',
		'Ever-moving',
		'Instinctive',
		'Desperate',
		'Food-seeking',
		'Mate-seeking',
		'Never sleeps',
		'Melancholy',
		'Lonely',
		'Observant',
		'Drifts on currents',
		'Deep-diving',
		'Seeks cold',
		'Seeks warmth',
		'Bioelectric Defenses',
		'Can inflate quickly',
		'Lost',
		'Haunted by unheard sound',
		'Uses sonar',
		'Effectively blind',
		'Pressure sensitive',
		'Photophobic',
		'Only sees up',
		'Chromatophoric',
		'Forms schools',
		'Frequent shoaling',
		'Smells blood',
		'Silent stalker',
		'Hostile',
		'Ambush predation',
		'Shoots neurotoxic spines',
		'Strikes from below',
		'Pack hunter',
		'Lone predator',
		'Threatening',
		'Transcendent',
		'Self-aware',
		'Hungry',
		'Afraid'
	],
	dietData: [
		'[[Star Bramble]]',
		'[[Echinocactus]]',
		'[[Solar Vine]]',
		'[[Frostwort]]',
		'[[Fungal Cluster]]',
		'[[Gamma Weed]]',
		'[[Mordite Root]]',
		'Nitrous Oxide',
		'[[Cadmium]]',
		'[[Emeril]]',
		'[[Indium]]',
		'[[Kelp Sac]]',
		'[[Condensed Carbon]]',
		'Vegetation',
		'Foliage',
		'Small trees',
		'Rotting fruit',
		'Fresh leaves',
		'Plant roots',
		'Digs for tubers',
		'Grass',
		'Foraged nuts',
		'Collects seeds',
		'Nibbles at shoots',
		'Tall grasses',
		'[[Cave Marrow|Cave marrow]]',
		'[[Mordite Root|Mordite roots]]',
		'[[Faecium]]',
		'[[Coprite]]',
		'Well-Matured Dung',
		'Mostly rocks',
		'[[Di-hydrogen]] crystals',
		'Processes dirt',
		'Oxide elements',
		'Absorbed nutrients',
		'[[NipNip Buds|NipNip buds]]',
		'[[Gravitino Ball|Gravitino balls]]',
		'Stinging leaves',
		'Algae',
		'Flowers',
		'Petals',
		'Nectar',
		'Pollen',
		'Scavenged scraps',
		'Insects and grubs',
		'Worms',
		'Anything',
		'[[Faecium|Faeces]]',
		'Birds',
		'Scavenged remains',
		'Partially-digested meat',
		'Eggs',
		'Steals from others',
		'[[Venom Urchin]]s',
		'Foraged leftovers',
		'Small animals',
		'Old bones',
		'[[Mordite]]',
		'Carnivorous',
		'Meat-eater',
		'Hypnotises prey',
		'Crunches bones',
		'Blood-drinker',
		'Liquidised organs',
		'Extracts bone marrow',
		'Organs',
		'Raw meat',
		'Flesh-eater',
		'Hypercarnivore',
		'Brain matter',
		'Sinew',
		'Fresh meat',
		'Corpses',
		'Putrefied meat',
		'Cannibal',
		'Offal',
		'Removed hearts',
		'Other carnivores',
		'Large mammals',
		'Flesh chunks',
		'Meat chunks',
		'Coagulated blood',
		'Frozen meat',
		'Boiled meat',
		'Radioactive meat',
		'Toxic meat',
		'Rotten meat',
		'Preserved meat',
		'Fetid meat',
		'Charred meat',
		'Marine snow',
		'Chemosynthesis',
		'Vented minerals',
		'Plankton',
		'Seaweed',
		'Deepwater algae',
		'Small crustaceans',
		'Rotten wood',
		'Decayed plant life',
		'Marine detritus',
		'Algal particulates',
		'Coral',
		'Living sponges',
		'Deepwater spores',
		'Nibbles at moss',
		'Hydrothermal minerals',
		'Water filtration',
		'Drifting plants',
		'Silicates',
		'High in calcium',
		'Water vines',
		'[[Kelp Sac|Kelp sacs]]',
		'Nutritious water weeds',
		'Other fish',
		'Cannibalism',
		'Marine eggs',
		'Turtles',
		'Shellfish',
		'Drifting carcasses',
		'Bones',
		'Hunts squid',
		'Brined organs',
		'Salinated flesh',
		'Brains',
		'Blood',
		'Gelatinous chunks',
		'Wasteflesh',
		'Pure Silicon',
		'Siphoned Data',
		'[[Nanite Cluster]]s',
		'Recycled Heat',
		'Cosmic Rays',
		'Decaying Atoms',
		'Random',
		'Interlopers'
	]
}

export function getGenderData(genus: string = '') {
	const genderData = {
		Mechanoceris: [
			'Asynchronous',
			'Circular',
			'Electronic',
			'Mutable',
			'Non-boolean',
			'Non-Euclidean',
			'Uninitialised',
			'Unmeasurable',
			'Virtual'
		],
		default: [
			'Alpha',
			'Asymmetric',
			'Asymptotic',
			'Exotic',
			'Female',
			'Indeterminate',
			'Male',
			'Non-uniform',
			'None',
			'Orthogonal',
			'Prime',
			'Radical',
			'Rational',
			'Symmetric',
			'Unknown',
			'Vectorised'
		]
	}

	switch (genus) {
		case 'Mechanoceris':
			return genderData.Mechanoceris;

		case '':
			return genderData;

		default:
			return genderData.default;
	}
}

export default creatureDatalists;