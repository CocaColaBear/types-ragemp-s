interface Mp {
	blips: BlipMpPool;
	checkpoints: CheckpointMpPool;
	colshapes: ColshapeMpPool;
	environment: EnvironmentMp;
	events: EventMpPool;
	markers: MarkerMpPool;
	pickups: PickupMpPool;
	players: PlayerMpPool;
	objects: ObjectMpPool;
	vehicles: VehicleMpPool;

	Vector3: Vector3Mp;

	joaat(str: string): number;
	joaat(strs: string[]): number[];
}

interface EntityMp {
	alpha: number;
	dimension: number;
	model: number;
	position: Vector3Mp;
	readonly id: number;
	readonly type: EntityTypeMp;
	
	destroy(): void;
}

interface PlayerMp extends EntityMp {
	armour: number;
	eyeColour: number;
	hairColour: number;
	hairHighlightColour: number;
	heading: number;
	health: number;
	name: string;
	readonly aimTarget: PlayerMp;
	readonly action: string;
	readonly ip: string;
	readonly isAiming: boolean;
	readonly isClimbing: boolean;
	readonly isEnteringVehicle: boolean;
	readonly isInCover: boolean;
	readonly isJumping: boolean;
	readonly isLeavingVehicle: boolean;
	readonly ping: number;
	readonly seat: VehicleSeatMp;
	readonly weapon: number;
	readonly vehicle: VehicleMp;

	ban(reason: string): void;
	call(eventName: string, ...args: any[]): void;
	getClothes(component: ClothesComponentMp): {
		readonly drawable: number,
		readonly texture: number,
		readonly palette: number
	};
	getFaceFeature(index: number): number;
	getHeadBlend(): {
		readonly shapes: number[],
		readonly skins: number[],
		readonly shapeMix: number,
		readonly skinMix: number,
		readonly thirdMix: number
	};
	getProp(prop: PlayerPropMp): {
		readonly drawable: number,
		readonly texture: number
	};
	giveWeapon(weaponHash: number, ammo: number): void;
	giveWeapon(weaponHashes: number[], ammo: number): void;
	invoke(hash: string, ...args: any[]): void;
	kick(reason: string): void;
	notify(message: string): void;
	outputChatBox(message: string): void;
	playAnimation(dict: string, name: string, speed: number, flag: number): void;
	putIntoVehicle(vehicle: VehicleMp, seat: VehicleSeatMp): void;
	removeFromVehicle(): void;
	setClothes(component: ClothesComponentMp, drawable: number, texture: number, palette: number): void;
	setFaceFeature(index: number, scale: number): void;
	setHairColour(firstColour: number, secondColour: number): void;
	setHeadBlend(shapeFirstId: number, shapeSecondId: number, shapeThirdId: number, skinFirstId: number, skinSecondId: number,
		skinThirdId: number, shapeMix: number, skinMix: number, thirdMix: number): void;
	setProp(prop: PlayerPropMp, drawable: number, texture: number): void;
	spawn(position: Vector3Mp): void;
	updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
}

interface VehicleMp extends EntityMp {
	bodyHealth: number;
	brake: boolean;
	engine: boolean;
	engineHealth: number;
	dead: boolean;
	highbeams: boolean;
	horn: boolean;
	locked: boolean;
	neonEnabled: boolean;
	numberPlate: string;
	position: Vector3Mp;
	rocketBoost: boolean;
	rotation: Vector3Mp;
	siren: boolean;
	steerAngle: number;
	velocity: Vector3Mp;

	explode(): void;
	getColour(id: number): number; // id: 0 - primary, 1 - secondary
	getColourRGB(): number[];
	getMod(modType: number): number;
	getNeonColour(): number[];
	getOccupant(seat: number): PlayerMp;
	getOccupants(): PlayerMp[];
	getPaint(id: number): number; // id: 0 - primary, 1 - secondary
	repair(): void;
	setColour(primary: number, secondary: number): void;
	setColourRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;
	setMod(modType: number, modIndex: number): void;
	setNeonColour(red: number, green: number, blue: number): void;
	setPaint(primaryType: number, primaryColour: number, secondaryType: number, secondaryColour: number): void;
	setOccupant(seat: number, player: PlayerMp): void;
	spawn(position: Vector3Mp, heading: number): void;
}

interface EventMp extends EntityMpPool<null> {
	
}

interface ObjectMp extends EntityMp {
	rotation: Vector3Mp;
}

interface PickupMp extends EntityMp {
	pickupHash: number;
}

interface BlipMp extends EntityMp {
	colour: number;
	name: string;
	radius: number;
	scale: number;

	routeFor(player: PlayerMp | undefined, colour: number, scale: number): void;
	routeFor(players: PlayerMp[] | undefined, colour: number, scale: number): void;
	unrouteFor(player: PlayerMp): void;
	unrouteFor(players: PlayerMp[]): void;
}

interface CheckpointMp extends EntityMp {
	colour: number;
	destination: Vector3Mp;
	radius: number;
	visible: boolean;

	getColour(): number[];
	hideFor(player: PlayerMp): void;
	setColour(red: number, green: number, blue: number, alpha: number): void;
	showFor(player: PlayerMp): void;
}

interface MarkerMp extends EntityMp {
	direction: Vector3Mp;
	scale: number;
	visible: boolean;

	getColour(): number[];
	hideFor(player: PlayerMp): void;
	setColour(red: number, green: number, blue: number, alpha: number): void;
	showFor(player: PlayerMp): void;
}

interface ColshapeMp extends EntityMp {
	readonly shapeType: ColshapeTypeMp;

	isPointWithin(point: Vector3Mp): boolean;
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

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	broadcast(text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, dimension: number, text: string): void;
	call(eventName: string, ...args: any[]): void;
	call(players: PlayerMp[], eventName: string, ...args: any[]): void;
	callInDimension(eventName: string, ...args: any[]): void;
	callInRange(eventName: string, ...args: any[]): void;
}

interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	"new"(vehicleHash: number, position: Vector3Mp, heading: number, dimension?: number): VehicleMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(objectHash: number, position: Vector3Mp, rotation: Vector3Mp): ObjectMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	"new"(...args: any[]): PickupMp; // TODO
}

interface BlipMpPool extends EntityMpPool<BlipMp> {
	"new"(model: number, position: Vector3Mp): BlipMp;
	"new"(model: number, position: Vector3Mp, radius: number, dimension?: number): BlipMp;
	newStreamed(model: number, position: Vector3Mp, radius: number, dimension?: number): BlipMp;
}

interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	"new"(type: number, position: Vector3Mp, direction: Vector3Mp, radius: number,
		red: number, green: number, blue: number, alpha: number, visible: boolean, dimension?: number): CheckpointMp;
	"new"(type: number, position: Vector3Mp, direction: Vector3Mp, radius: number,
		red: number, green: number, blue: number, alpha: number, dimension: number): CheckpointMp;
}

interface MarkerMpPool extends EntityMpPool<MarkerMp> {
	"new"(type: number, position: Vector3Mp, rotation: Vector3Mp, direction: Vector3Mp, radius: number,
		red: number, green: number, blue: number, alpha: number, visible: boolean): MarkerMp;
	"new"(type: number, position: Vector3Mp, rotation: Vector3Mp, direction: Vector3Mp, radius: number,
		red: number, green: number, blue: number, alpha: number, dimension: number): MarkerMp;
	"new"(type: number, position: Vector3Mp, rotation: Vector3Mp, direction: Vector3Mp, radius: number,
		red: number, green: number, blue: number, alpha: number, visible: boolean, dimension: number): MarkerMp;
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(x: number, y: number, range: number): ColshapeMp;
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number): ColshapeMp;
	newRectangle(x: number, y: number, width: number, height: number): ColshapeMp;
	newSphere(x: number, y: number, z: number, range: number): ColshapeMp;
	newTube(x: number, y: number, z: number, range: number, height: number): ColshapeMp;
}

interface EventMpPool extends EntityMpPool<EventMp> {
	add(eventName: string, callback: (...args: any[]) => void): void;
	addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
	call(eventName: string, ...args: any[]): void;
}

interface EnvironmentMp {
	weather: string;
	time: { hour: number, minute: number, second: number };

	setWeatherTransition(weather: string): void;
	setWeatherTransition(weather: string, duration: number): void;
}

interface Vector3Mp {
	new(x: number, y: number, z: number): Vector3Mp;

	x: number;
	y: number;
	z: number;
}

declare const enum ClothesComponentMp {
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

declare const enum PlayerPropMp {
	Helmet = 0,
	Glasses = 1,
	EarAccessory = 2
}

declare const enum VehicleSeatMp {
	Driver = 0,
	Passenger1 = 1,
	Passenger2 = 2,
	Passenger3 = 3
}

declare const enum EntityTypeMp {
	player = "player",
	vehicle = "vehicle",
	object = "object",
	pickup = "pickup",
	blip = "blip",
	checkpoint = "checkpoint",
	marker = "marker",
	colshape = "colshape"
}

declare const enum ColshapeTypeMp {
	sphere = "sphere",
	tube = "tube",
	circle = "circle",
	polygon = "polygon",
	cuboid = "cuboid",
	rectangle = "rectangle"
}

declare const enum EventKeyMp {
	playerJoin = "playerJoin",
	playerQuit = "playerQuit",
	playerDeath = "playerDeath",
	playerSpawn = "playerSpawn",
	playerChat = "playerChat",
	playerCommand = "playerCommand",
	playerEnterVehicle = "playerEnterVehicle",
	playerEnteredVehicle = "playerEnteredVehicle",
	playerExitVehicle = "playerExitVehicle",
	playerLeftVehicle = "playerLeftVehicle",
	playerEnterCheckpoint = "playerEnterCheckpoint",
	playerExitCheckpoint = "playerExitCheckpoint",
	playerEnterColshape = "playerEnterColshape",
	playerExitColshape = "playerExitColshape"
}

declare var mp: Mp;
