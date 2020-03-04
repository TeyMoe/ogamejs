const ATTRIBUTES = Object.freeze({
	TYPES: {
		ATTACK: 'attack',
		CIVIL: 'civil',
		DEFENSE: 'defense'
	},
	CATEGORIES: {
		SHIPS: 'ships',
		DEFENSES: 'defenses',
		MISSILE: 'missiles'
	}
});

const DESTROYABLE = Object.freeze({
	1: {
		name: 'chasseur léger',
		structure: 4000,
		shield: 10,
		attack: 50,
		speed: 12500,
		fret: 50,
		deutCost: 10,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 3000,
			crystal: 1000,
			deut: 0
		}
	},
	2: {
		name: 'chasseur lourd',
		structure: 10000,
		shield: 25,
		attack: 150,
		speed: 10000,
		fret: 100,
		deutCost: 37.5,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 11,
				fire: 3
			},
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 6000,
			crystal: 4000,
			deut: 0
		}
	},
	3: {
		name: 'Croiseurs',
		structure: 27000,
		shield: 50,
		attack: 400,
		speed: 15000,
		fret: 800,
		deutCost: 150,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 1,
				fire: 6
			},
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			},
			{
				target: 201,
				fire: 10
			}
		],
		cost: {
			metal: 20000,
			crystal: 7000,
			deut: 2000
		}
	},
	4: {
		name: 'Vaisseau de bataille',
		structure: 60000,
		shield: 200,
		attack: 1000,
		speed: 10000,
		fret: 1500,
		deutCost: 250,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 45000,
			crystal: 15000,
			deut: 0
		}
	},
	5: {
		name: 'Traqueur',
		structure: 70000,
		shield: 400,
		attack: 700,
		speed: 10000,
		fret: 750,
		deutCost: 125,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 2,
				fire: 4
			},
			{
				target: 3,
				fire: 4
			},
			{
				target: 4,
				fire: 7
			},
			{
				target: 11,
				fire: 3
			},
			{
				target: 12,
				fire: 3
			},
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 30000,
			crystal: 40000,
			deut: 15000
		}
	},
	6: {
		name: 'Bombardier',
		structure: 75000,
		shield: 500,
		attack: 1000,
		speed: 4000,
		fret: 500,
		deutCost: 350,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			},
			{
				target: 201,
				fire: 20
			},
			{
				target: 202,
				fire: 20
			},
			{
				target: 203,
				fire: 10
			},
			{
				target: 204,
				fire: 5
			},
			{
				target: 205,
				fire: 10
			},
			{
				target: 206,
				fire: 5
			}
		],
		cost: {
			metal: 50000,
			crystal: 25000,
			deut: 15000
		}
	},
	7: {
		name: 'Destructeur',
		structure: 110000,
		shield: 500,
		attack: 2000,
		speed: 5000,
		fret: 2000,
		deutCost: 500,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			},
			{
				target: 5,
				fire: 2
			},
			{
				target: 202,
				fire: 10
			}
		],
		cost: {
			metal: 60000,
			crystal: 50000,
			deut: 15000
		}
	},
	8: {
		name: 'Étoile de la mort',
		structure: 9000000,
		shield: 50000,
		attack: 200000,
		speed: 100,
		fret: 1000000,
		deutCost: 0.5,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 1,
				fire: 200
			},
			{
				target: 2,
				fire: 100
			},
			{
				target: 3,
				fire: 33
			},
			{
				target: 4,
				fire: 30
			},
			{
				target: 5,
				fire: 15
			},
			{
				target: 6,
				fire: 25
			},
			{
				target: 7,
				fire: 5
			},
			{
				target: 9,
				fire: 10
			},
			{
				target: 10,
				fire: 30
			},
			{
				target: 11,
				fire: 250
			},
			{
				target: 12,
				fire: 250
			},
			{
				target: 13,
				fire: 250
			},
			{
				target: 14,
				fire: 250
			},
			{
				target: 15,
				fire: 1250
			},
			{
				target: 16,
				fire: 1250
			},
			{
				target: 17,
				fire: 1250
			},
			{
				target: 201,
				fire: 200
			},
			{
				target: 202,
				fire: 200
			},
			{
				target: 203,
				fire: 100
			},
			{
				target: 204,
				fire: 50
			},
			{
				target: 205,
				fire: 100
			}
		],
		cost: {
			metal: 5000000,
			crystal: 4000000,
			deut: 1000000
		}
	},
	9: {
		name: 'Faucheur',
		structure: 140000,
		shield: 700,
		attack: 2800,
		speed: 7000,
		fret: 10000,
		deutCost: 550,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			},
			{
				target: 4,
				fire: 7
			},
			{
				target: 6,
				fire: 4
			},
			{
				target: 7,
				fire: 3
			}
		],
		cost: {
			metal: 85000,
			crystal: 55000,
			deut: 20000
		}
	},
	10: {
		name: 'Éclaireur',
		structure: 23000,
		shield: 100,
		attack: 200,
		speed: 12000,
		fret: 10000,
		deutCost: 150,
		type: ATTRIBUTES.TYPES.ATTACK,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 1,
				fire: 3
			},
			{
				target: 2,
				fire: 2
			},
			{
				target: 3,
				fire: 3
			},
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 8000,
			crystal: 15000,
			deut: 8000
		}
	},
	11: {
		name: 'Petit transporteur',
		structure: 4000,
		shield: 10,
		attack: 5,
		speed: 5000,
		fret: 5000,
		deutCost: 5,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 2000,
			crystal: 2000,
			deut: 0
		}
	},
	12: {
		name: 'Grand transporteur',
		structure: 12000,
		shield: 25,
		attack: 5,
		speed: 7500,
		fret: 25000,
		deutCost: 25,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 6000,
			crystal: 6000,
			deut: 0
		}
	},
	13: {
		name: 'Vaisseaux de colonisation',
		structure: 30000,
		shield: 100,
		attack: 50,
		speed: 2500,
		fret: 7500,
		deutCost: 500,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 10000,
			crystal: 20000,
			deut: 10000
		}
	},
	14: {
		name: 'Recycleur',
		structure: 16000,
		shield: 10,
		attack: 1,
		speed: 2000,
		fret: 20000,
		deutCost: 150,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [
			{
				target: 15,
				fire: 5
			},
			{
				target: 16,
				fire: 5
			},
			{
				target: 17,
				fire: 5
			}
		],
		cost: {
			metal: 10000,
			crystal: 6000,
			deut: 2000
		}
	},
	15: {
		name: 'Sonde espionnage',
		structure: 1000,
		shield: 0,
		attack: 0,
		speed: 100000000,
		fret: 5,
		deutCost: 0.5,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [],
		cost: {
			metal: 0,
			crystal: 1000,
			deut: 0
		}
	},
	16: {
		name: 'Satellite solaire',
		structure: 2000,
		shield: 1,
		attack: 1,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [],
		cost: {
			metal: 0,
			crystal: 2000,
			deut: 500
		}
	},
	17: {
		name: 'Foreuse',
		structure: 4000,
		shield: 1,
		attack: 1,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.CIVIL,
		category: ATTRIBUTES.CATEGORIES.SHIPS,
		rapidFire: [],
		cost: {
			metal: 2000,
			crystal: 2000,
			deut: 1000
		}
	},
	201: {
		name: 'Lanceur missile',
		structure: 2000,
		shield: 20,
		attack: 80,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 2000,
			crystal: 0,
			deut: 0
		}
	},
	202: {
		name: 'Artillerie laser légère',
		structure: 2000,
		shield: 25,
		attack: 100,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 1500,
			crystal: 500,
			deut: 0
		}
	},
	203: {
		name: 'Artillerie laser lourde',
		structure: 8000,
		shield: 100,
		attack: 250,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 6000,
			crystal: 2000,
			deut: 0
		}
	},
	204: {
		name: 'Canon de gauss',
		structure: 35000,
		shield: 200,
		attack: 1100,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 20000,
			crystal: 15000,
			deut: 2000
		}
	},
	205: {
		name: 'Artillerie à ion',
		structure: 8000,
		shield: 500,
		attack: 150,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [
			{
				target: 9,
				fire: 2
			}
		],
		cost: {
			metal: 5000,
			crystal: 3000,
			deut: 0
		}
	},
	206: {
		name: 'Lanceur plasma',
		structure: 100000,
		shield: 300,
		attack: 3000,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 50000,
			crystal: 50000,
			deut: 30000
		}
	},
	207: {
		name: 'Petit bouclier',
		structure: 20000,
		shield: 2000,
		attack: 1,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 10000,
			crystal: 10000,
			deut: 0
		}
	},
	208: {
		name: 'Grand bouclier',
		structure: 100000,
		shield: 10000,
		attack: 1,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 50000,
			crystal: 50000,
			deut: 0
		}
	},
	301: {
		name: "Missile d'interception",
		structure: 8000,
		shield: 1,
		attack: 1,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 8000,
			crystal: 0,
			deut: 2000
		}
	},
	302: {
		name: 'Missile interplanétaire',
		structure: 15000,
		shield: 1,
		attack: 12000,
		speed: 0,
		fret: 0,
		deutCost: 0,
		type: ATTRIBUTES.TYPES.DEFENSE,
		category: ATTRIBUTES.CATEGORIES.DEFENSES,
		rapidFire: [],
		cost: {
			metal: 12500,
			crystal: 2500,
			deut: 10000
		}
	}
});

export default DESTROYABLE;
