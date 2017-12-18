// -------------------------------------------------------------------------
// Custom types
// -------------------------------------------------------------------------

type HashOrString = number | string;
type RGB = [ number, number, number ];
type RGBA = [ number, number, number, number ];

// -------------------------------------------------------------------------
// Main MP type
// -------------------------------------------------------------------------

interface Mp {
	blips: BlipMpPool;
	checkpoints: CheckpointMpPool;
	colshapes: ColshapeMpPool;
	events: EventMpPool;
	labels: TextLabelMpPool;
	markers: MarkerMpPool;
	pickups: PickupMpPool;
	players: PlayerMpPool;
	objects: ObjectMpPool;
	vehicles: VehicleMpPool;
	world: WorldMp;

	Event: { 
		new(eventName: EnumsMp.EventKey | string, callback: (...args: any[]) => void): EventMp 
	};
	Vector3: Vector3Mp;

	joaat(str: string): number;
	joaat(strs: string[]): number[];
}

// -------------------------------------------------------------------------
// Entity MP types
// -------------------------------------------------------------------------

interface BlipMp extends EntityMp {
	color: number;
	name: string;
	drawDistance: number;
	rotation: number;
	scale: number;
	shortRange: boolean;
	sprite: number;

	routeFor(player: PlayerMp | undefined, color: number, scale: number): void;
	routeFor(players: PlayerMp[] | undefined, color: number, scale: number): void;
	unrouteFor(player: PlayerMp): void;
	unrouteFor(players: PlayerMp[]): void;
}

interface CheckpointMp extends EntityMp {
	color: number;
	destination: Vector3Mp;
	radius: number;
	visible: boolean;

	getColor(): number[];
	hideFor(player: PlayerMp): void;
	setColor(red: number, green: number, blue: number, alpha: number): void;
	showFor(player: PlayerMp): void;
}

interface ColshapeMp extends EntityMp {
	readonly shapeType: EnumsMp.ColshapeType;

	isPointWithin(point: Vector3Mp): boolean;
}

interface EntityMp {
	alpha: number;
	data: any;
	dimension: number;
	model: number;
	position: Vector3Mp;
	readonly id: number;
	readonly type: EnumsMp.EntityType;
	
	getVariable(name: string): any | undefined;
	destroy(): void;
	setVariable(name: string, value: any): void;
}

interface MarkerMp extends EntityMp {
	direction: Vector3Mp;
	scale: number;
	visible: boolean;

	getColor(): number[];
	hideFor(player: PlayerMp): void;
	setColor(red: number, green: number, blue: number, alpha: number): void;
	showFor(player: PlayerMp): void;
}

interface ObjectMp extends EntityMp {
	rotation: Vector3Mp;
}

interface PickupMp extends EntityMp {
	pickupHash: number;
}

interface PlayerMp extends EntityMp {
	armour: number;
	eyeColor: number;
	heading: number;
	health: number;
	name: string;
	weapon: number;
	weaponAmmo: number;
	readonly action: string;
	readonly aimTarget: PlayerMp;
	readonly allWeapons: number[];
	readonly ip: string;
	readonly isAiming: boolean;
	readonly isClimbing: boolean;
	readonly isEnteringVehicle: boolean;
	readonly isInCover: boolean;
	readonly isInMelee: boolean;
	readonly isJumping: boolean;
	readonly isLeavingVehicle: boolean;
	readonly isOnLadder: boolean;
	readonly isReloading: boolean;
	readonly hairColor: number;
	readonly hairHighlightColor: number;
	readonly packetLoss: number;
	readonly ping: number;
	readonly seat: EnumsMp.VehicleSeat;
	readonly socialClubName: string;
	readonly streamedPlayers: PlayerMp[];
	readonly weapons: PlayerWeaponCollection;
	readonly vehicle: VehicleMp;

	ban(reason: string): void;
	call(eventName: string, ...args: any[]): void;
	getClothes(component: EnumsMp.ClothesComponent | number): {
		drawable: number,
		texture: number,
		palette: number
	};
	getFaceFeature(index: number): number;
	getHeadBlend(): {
		shapes: number[],
		skins: number[],
		shapeMix: number,
		skinMix: number,
		thirdMix: number
	};
	getHeadOverlay(overlay: EnumsMp.HeadOverlay | number): [ number, number ];
	getProp(prop: EnumsMp.PlayerProp | number): {
		drawable: number,
		texture: number
	};
	getWeaponAmmo(weapon: HashOrString): number;
	giveWeapon(weaponHash: number, ammo: number): void;
	giveWeapon(weaponHashes: number[], ammo: number): void;
	isStreamed(player: PlayerMp): boolean;
	invoke(hash: string, ...args: any[]): void;
	kick(reason: string): void;
	notify(message: string): void;
	outputChatBox(message: string): void;
	playAnimation(dict: string, name: string, speed: number, flag: number): void;
	putIntoVehicle(vehicle: VehicleMp, seat: EnumsMp.VehicleSeat | number): void;
	removeAllWeapons(): void;
	removeFromVehicle(): void;
	removeObject(object: any): void; // TODO
	removeWeapon(weaponHash: number): void;
	setClothes(component: EnumsMp.ClothesComponent | number, drawable: number, texture: number, palette: number): void;
	setFaceFeature(index: number, scale: number): void;
	setHairColor(firstColor: number, secondColor: number): void;
	setHeadBlend(shapeFirstId: number, shapeSecondId: number, shapeThirdId: number, skinFirstId: number, skinSecondId: number,
		skinThirdId: number, shapeMix: number, skinMix: number, thirdMix: number): void;
	setHeadOverlay(overlay: EnumsMp.HeadOverlay | number, value: [ number, number ]): void;
	setProp(prop: EnumsMp.PlayerProp | number, drawable: number, texture: number): void;
	setWeaponAmmo(weapon: HashOrString, ammo: number): void;
	spawn(position: Vector3Mp): void;
	updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
}

interface TextLabelMp extends EntityMp {
	color: RGB;
	drawDistance: number;
	los: boolean;
	text: string;
}

interface VehicleMp extends EntityMp {
	bodyHealth: number;
	brake: boolean;
	engine: boolean;
	engineHealth: number;
	dashboardColor: number;
	dead: boolean;
	highbeams: boolean;
	horn: boolean;
	livery: number;
	locked: boolean;
	movable: boolean;
	neonEnabled: boolean;
	numberPlate: string;
	numberPlateType: number;
	pearlescentColor: number;
	rocketBoost: boolean;
	rotation: Vector3Mp;
	siren: boolean;
	steerAngle: number;
	taxiLights: boolean;
	trimColor: number;
	velocity: Vector3Mp;
	wheelColor: number;
	wheelType: number;
	windowTint: number;
	readonly extras: boolean[];
	readonly mods: number[];
	readonly streamedPlayers: PlayerMp[];
	readonly trailer: VehicleMp;
	readonly traileredBy: VehicleMp;

	explode(): void;
	getColor(id: number): number; // id: 0 - primary, 1 - secondary
	getColorRGB(): RGB;
	getExtra(index: number): boolean;
	getMod(modType: number): number;
	getNeonColor(): number[];
	getOccupant(seat: number): PlayerMp;
	getOccupants(): PlayerMp[];
	getPaint(id: number): number; // id: 0 - primary, 1 - secondary
	isStreamed(player: PlayerMp): boolean;
	playScenario(scenario: string): void;
	repair(): void;
	setColor(primary: number, secondary: number): void;
	setColorRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;
	setExtra(index: number, value: boolean): void;
	setMod(modType: number, modIndex: number): void;
	setNeonColor(red: number, green: number, blue: number): void;
	setPaint(primaryType: number, primaryColor: number, secondaryType: number, secondaryColor: number): void;
	setOccupant(seat: number, player: PlayerMp): void;
	spawn(position: Vector3Mp, heading: number): void;
	stopAnimation(): void;
}

// -------------------------------------------------------------------------
// Simple MP types
// -------------------------------------------------------------------------

interface WorldMp {
	weather: EnumsMp.Weather | string;
	time: { 
		hour: number,
		minute: number,
		second: number
	};
	trafficLights: {
		locked: boolean,
		state: number;
	};

	removeIpl(name: string): void;
	requestIpl(name: string): void;
	setWeatherTransition(weather: EnumsMp.Weather | string, duration?: number): void;
}

interface EventMp {
	destroy(): void;
}

// -------------------------------------------------------------------------
// Pool MP types
// -------------------------------------------------------------------------

interface BlipMpPool extends EntityMpPool<BlipMp> {
	"new"(sprite: number, position: Vector3Mp, options?: {
		alpha?: number,
		color?: number,
		dimension?: number,
		drawDistance?: number,
		name?: string,
		rotation?: number,
		scale?: number,
		shortRange?: boolean
	}): BlipMp;
}

interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	"new"(type: number, position: Vector3Mp, radius: number, options?: {
		color?: RGBA,
		dimension?: number,
		direction?: Vector3Mp,
		visible?	: boolean
	}): CheckpointMp;
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(x: number, y: number, range: number): ColshapeMp;
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number): ColshapeMp;
	newRectangle(x: number, y: number, width: number, height: number): ColshapeMp;
	newSphere(x: number, y: number, z: number, range: number): ColshapeMp;
	newTube(x: number, y: number, z: number, range: number, height: number): ColshapeMp;
}

interface EntityMpPool<TEntity> {
	readonly length: number;
	readonly size: number;

	apply(fn: (...args: any[]) => void, ...args: any[]): void;
	at(id: number): TEntity;
	exists(entity: TEntity): boolean;
	forEach(entity: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, entity: (entity: TEntity) => void): void;
	forEachInDimension(position: Vector3Mp, range: number, dimension: number, entity: (entity: TEntity) => void): void;
	toArray(): TEntity[];
}

interface EventMpPool {
	add(eventName: EnumsMp.EventKey | string, callback: (...args: any[]) => void): void;
	add(events: ({ [name: string]: (...args: any[]) => void; })): void;
	addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
	call(eventName: string, ...args: any[]): void;
	getAllOf(eventName: string): EventMp[];
	remove(eventName: string, handler?: (...args: any[]) => void): void;
	remove(eventNames: string[]): void;
	reset(): void;
}

interface MarkerMpPool extends EntityMpPool<MarkerMp> {
	"new"(type: number, position: Vector3Mp, scale: number, options?: {
		color?: RGBA,
		dimension?: number,
		direction?: Vector3Mp,
		rotation?: Vector3Mp,
		visible?: boolean
	}): MarkerMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(model: HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		dimension?: number,
		rotation?: Vector3Mp
	}): ObjectMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	"new"(...args: any[]): PickupMp; // TODO
}

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	broadcast(text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, dimension: number, text: string): void;
	call(eventName: string, ...args: any[]): void;
	call(players: PlayerMp[], eventName: string, ...args: any[]): void;
	callInDimension(eventName: string, ...args: any[]): void;
	callInRange(eventName: string, ...args: any[]): void;
}

interface TextLabelMpPool extends EntityMpPool<TextLabelMp> {
	"new"(text: string, position: Vector3Mp, options?: {
		color?: RGBA,
		dimension?: number,
		drawDistance?: number,
		font?: number,
		los?: boolean
	}): TextLabelMp;
}

interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	"new"(model: HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		color?: [ [number, number], [number, number] ] | [ RGB, RGB ],
		dimension?: number,
		engine?: boolean,
		heading?: number;
		locked?: boolean,
		numberPlate?: string
	}): VehicleMp;
}

// -------------------------------------------------------------------------
// Additional MP types
// -------------------------------------------------------------------------

interface Vector3Mp {
	new(x: number, y: number, z: number): Vector3Mp;

	x: number;
	y: number;
	z: number;
}

interface PlayerWeaponCollection {
	current: number;

	reset(): void;
}

// -------------------------------------------------------------------------
// Enums
// -------------------------------------------------------------------------

declare namespace EnumsMp {
	const enum EventKey {
		entityCreated = "entityCreated",
		entityModelChange = "entityModelChange",
		playerChat = "playerChat",
		playerCommand = "playerCommand",
		playerDamage = "playerDamage",
		playerDeath = "playerDeath",
		playerEnterCheckpoint = "playerEnterCheckpoint",
		playerEnterColshape = "playerEnterColshape",
		playerEnterVehicle = "playerEnterVehicle",
		playerExitCheckpoint = "playerExitCheckpoint",
		playerExitColshape = "playerExitColshape",
		playerExitVehicle = "playerExitVehicle",
		playerJoin = "playerJoin",
		playerMarkWaypoint = "playerMarkWaypoint",
		playerQuit = "playerQuit",
		playerReachWaypoint = "playerReachWaypoint",
		playerReady = "playerReady",
		playerSpawn = "playerSpawn",
		playerStartEnterVehicle = "playerStartEnterVehicle",
		playerStartExitVehicle = "playerStartExitVehicle",
		playerStreamIn = "playerStreamIn",
		playerStreamOut = "playerStreamOut",
		playerWeaponChange = "playerWeaponChange",
		vehicleAttachTrailer = "vehicleAttachTrailer",
		vehicleDamage = "vehicleDamage",
		vehicleHornToggle = "vehicleHornToggle",
		vehicleSirenToggle = "vehicleSirenToggle",
		vehicleStreamIn = "vehicleStreamIn",
		vehicleStreamOut = "vehicleStreamOut",
		vehicleTrailerAttach = "vehicleTrailerAttach"
	}

	const enum ClothesComponent {
		Head = 0,
		Beard = 1,
		Hair = 2,
		Torso = 3,
		Legs = 4,
		Hands = 5,
		Foot = 6,
		None = 7,
		Accessories1 = 8,
		Accessories2 = 9,
		Mask = 10,
		Decals = 11,
		Auxiliary = 12
	}

	const enum ColshapeType {
		sphere = "sphere",
		tube = "tube",
		circle = "circle",
		polygon = "polygon",
		cuboid = "cuboid",
		rectangle = "rectangle"
	}

	const enum EntityType {
		player = "player",
		vehicle = "vehicle",
		object = "object",
		pickup = "pickup",
		blip = "blip",
		checkpoint = "checkpoint",
		marker = "marker",
		colshape = "colshape"
	}

	const enum HeadOverlay {
		Blemishes = 0,
		FacialHair = 1,
		Eyebrows = 2,
		Ageing = 3,
		Makeup = 4,
		Blush = 5,
		Complexion = 6,
		SunDamage = 7,
		Lipstick = 8,
		Freckles = 9,
		ChestHair = 10,
		BodyBlemishes = 11,
		AddBodyBlemishes = 12
	}

	const enum Marker {
		UpsideDownCone = 0,
		VerticalCylinder = 1,
		ThickCevronUp = 2,
		ThinCevronUp = 3,
		CheckeredFlagRect = 4,
		CheckeredFlagCircle = 5,
		VerticalCircle = 6,
		PlaneModel = 7,
		LostMCDark = 8,
		LostMCLight = 9,
		Number0 = 10,
		Number1 = 11,
		Number2 = 12,
		Number3 = 13,
		Number4 = 14,
		Number5 = 15,
		Number6 = 16,
		Number7 = 17,
		Number8 = 18,
		Number9 = 19,
		ChevronUpX1 = 20,
		ChevronUpX2 = 21,
		ChevronUpX3 = 22,
		HorizontalCircleFlat = 23,
		ReplayIcon = 24,
		HorizontalCircleSkinny = 25,
		HorizontalCircleArrow = 26,
		HorizontalSplitArrowCircle = 27,
		DebugSphere = 28,
		DollorSign = 29,
		HorizontalBars = 30,
		WolfHead = 31
	}

	const enum PlayerProp {
		Helmet = 0,
		Glasses = 1,
		EarAccessory = 2
	}

	const enum VehicleSeat {
		Driver = 0,
		Passenger1 = 1,
		Passenger2 = 2,
		Passenger3 = 3
	}

	const enum Weather {
		Blizzard = "BLIZZARD",
		Clear = "CLEAR",
		Clearing = "CLEARING",
		Clouds = "CLOUDS",
		ExtraSunny = "EXTRASUNNY",
		Foggy = "FOGGY",
		Overcast = "OVERCAST",
		Rain = "RAIN",
		Smog = "SMOG",
		SnowLight = "SNOWLIGHT",
		Thunder = "THUNDER",
		Xmas = "XMAS"
	}
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare var mp: Mp;
