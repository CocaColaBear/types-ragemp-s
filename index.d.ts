/// <reference path="enums.d.ts" />
/// <reference path="ped_hashes.d.ts" />
/// <reference path="vehicle_hashes.d.ts" />
/// <reference path="weapon_hashes.d.ts" />

// -------------------------------------------------------------------------
// Custom types
// -------------------------------------------------------------------------

type HashOrString = number | string;
type RGB = [ number, number, number ];
type RGBA = [ number, number, number, number ];
type Array2d = [ number, number ];
type Array3d = [ number, number, number ];
type Array4d = [ number, number, number, number ];
type KeyValueCollection = { [key: string]: any };

// -------------------------------------------------------------------------
// Main MP type
// -------------------------------------------------------------------------

interface Mp {
	blips: BlipMpPool;
	checkpoints: CheckpointMpPool;
	colshapes: ColshapeMpPool;
	dummies: DummyEntityMpPool;
	events: EventMpPool;
	labels: TextLabelMpPool;
	markers: MarkerMpPool;
	peds: PedMpPool;
	pickups: PickupMpPool;
	players: PlayerMpPool;
	objects: ObjectMpPool;
	vehicles: VehicleMpPool;
	config: ConfigMp,
	network: NetworkMp;
	world: WorldMp;

	Event: { 
		new(eventName: RageEnums.EventKey | string, callback: (...args: any[]) => void): EventMp 
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
	readonly shapeType: RageEnums.ColshapeType;

	isPointWithin(point: Vector3Mp): boolean;
}

interface DummyEntityMp {
	dummyType: number;
}

interface EntityMp {
	alpha: number;
	data: any;
	dimension: number;
	model: number;
	position: Vector3Mp;
	readonly id: number;
	readonly type: RageEnums.EntityType;
	
	getVariable(name: string): any | undefined;
	destroy(): void;
	dist(position: Vector3Mp): number;
	distSquared(position: Vector3Mp): number;
	setVariable(name: string, value: any): void;
	setVariables(values: KeyValueCollection): void;
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

interface PedMp extends EntityMp {
	controller: PlayerMp;
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
	gameType: string;
	heading: number;
	health: number;
	name: string;
	weapon: number;
	weaponAmmo: number;
	disableOutgoingSync: boolean;
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
	readonly rgscId: string;
	readonly seat: RageEnums.VehicleSeat;
	readonly serial: string;
	readonly socialClub: string;
	readonly streamedPlayers: PlayerMp[];
	readonly weapons: PlayerWeaponCollectionMp;
	readonly vehicle: VehicleMp;
	readonly voiceListeners: PlayerMp[];

	ban(reason: string): void;
	call(eventName: string, args?: any[]): void;
	callProc(eventName: string, args?: any[]): Promise<any>;
	callUnreliable(eventName: string, args?: any[]): void;
	cancelPendingRpc(procName?: string): void;
	clearDecorations(): void;
	disableVoiceTo(targetPlayer: PlayerMp): void;
	eval(code: string): void;
	enableVoiceTo(targetPlayer: PlayerMp): void;
	forceStreamingUpdate(): void;
	getClothes(component: RageEnums.ClothesComponent | number): {
		drawable: number,
		texture: number,
		palette: number
	};
	getDecoration(collection: number): number;
	getFaceFeature(index: number): number;
	getHeadBlend(): {
		shapes: number[],
		skins: number[],
		shapeMix: number,
		skinMix: number,
		thirdMix: number
	};
	getHeadBlendPaletteColor(type: 0 | 1 | 2 | 3): Array3d;
	getHeadOverlay(overlay: RageEnums.HeadOverlay | number): Array4d;
	getOwnVariable(key: string): any;
	getProp(prop: RageEnums.PlayerProp | number): {
		drawable: number,
		texture: number
	};
	getWeaponAmmo(weapon: RageEnums.Hashes.Weapon | HashOrString): number;
	giveWeapon(weaponHash: RageEnums.Hashes.Weapon | HashOrString, ammo: number): void;
	giveWeapon(weaponHashes: (RageEnums.Hashes.Weapon | HashOrString)[], ammo: number): void;
	hasPendingRpc(procName?: string): boolean;
	isStreamed(player: PlayerMp): boolean;
	invoke(hash: string, ...args: any[]): void;
	kick(reason: string): void;
	kickSilent(): void;
	notify(message: string): void;
	outputChatBox(message: string): void;
	playAnimation(dict: string, name: string, speed: number, flag: number): void;
	stopAnimation(): void;
	putIntoVehicle(vehicle: VehicleMp, seat: RageEnums.VehicleSeat | number): void;
	removeAllWeapons(): void;
	removeDecoration(decoration: number, collection: number): void;
	removeFromVehicle(): void;
	removeObject(object: any): void; // TODO
	removeWeapon(weaponHash: RageEnums.Hashes.Weapon | HashOrString): void;
	setClothes(component: RageEnums.ClothesComponent | number, drawable: number, texture: number, palette: number): void;
	setCustomization(gender: boolean, shapeFirst: number, shapeSecond: number, shapeThird: number, skinFirst: number,
		skinSecond: number, skinThird: number, shapeMix: number, skinMix: number, thirdMix: number, eyeColor: number,
		hairColor: number, hightlightColor: number, faceFeatures: number[]
	): void;
	setDecoration(collection: number, overlay: number): void;
	setFaceFeature(index: number, scale: number): void;
	setHairColor(firstColor: number, secondColor: number): void;
	setHeadBlend(shapeFirst: number, shapeSecond: number, shapeThird: number, skinFirst: number, skinSecond: number,
		skinThird: number, shapeMix: number, skinMix: number, thirdMix: number): void;
	setHeadBlendPaletteColor(rgbColor: Array3d, type: 0 | 1 | 2 | 3): void;
	setHeadOverlay(overlay: RageEnums.HeadOverlay | number, value: Array4d): void;
	setOwnVariable(key: string, value: any): void;
	setOwnVariables(values: KeyValueCollection): void;
	setProp(prop: RageEnums.PlayerProp | number, drawable: number, texture: number): void;
	setWeaponAmmo(weapon: RageEnums.Hashes.Weapon | HashOrString, ammo: number): void;
	spawn(position: Vector3Mp): void;
	updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
	playScenario(scenario: string): void;
	callToStreamed(includeSelf: boolean, eventName: string, args?: any[]): void;
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
	controller: PlayerMp | undefined;
	customTires: boolean;
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
	readonly heading: number;
	readonly mods: number[];
	readonly quaternion: QuaternionMp,
	readonly streamedPlayers: PlayerMp[];
	readonly trailer: VehicleMp;
	readonly traileredBy: VehicleMp;

	explode(): void;
	getColor(id: number): number; // id: 0 - primary, 1 - secondary
	getColorRGB(id: number): RGB; // id: 0 - primary, 1 - secondary
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
}

// -------------------------------------------------------------------------
// Simple MP types
// -------------------------------------------------------------------------

interface NetworkMp {
	startBatch(): void;
	endBatch(): void;
}

interface WorldMp {
	weather: RageEnums.Weather | string;
	time: { 
		hour: number,
		minute: number,
		second: number
		
		set(hour: number, minute: number, second: number): void;
	};
	trafficLights: {
		locked: boolean,
		state: number;
	};

	removeIpl(name: string): void;
	requestIpl(name: string): void;
	setWeatherTransition(weather: RageEnums.Weather | string, duration?: number): void;
}

interface EventMp {
	destroy(): void;
}

interface ConfigMp {
	announce: boolean,
	bind: string,
	gamemode: string,
	encryption: boolean,
	maxplayers: number,
	name: string,
	'stream-distance': number,
	port: number,
	'disallow-multiple-connections-per-ip': boolean,
	'limit-time-of-connections-per-ip': number,
	url: string,
	language: string,
	'sync-rate': number,
	'resource-scan-thread-limit': number,
	'max-ping': number,
	'min-fps': number,
	'max-packet-loss': number,
	'allow-cef-debugging': boolean,
	'enable-nodejs': boolean,
	'csharp': boolean,
	'enable-http-security': boolean,
	'voice-chat': boolean,
	'allow-voice-chat-input': number,
	'voice-chat-sample-rate': number,
	'fastdl-host': string,
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
	newCircle(x: number, y: number, range: number, dimension?: number): ColshapeMp;
	newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): ColshapeMp;
	newRectangle(x: number, y: number, width: number, height: number, dimension?: number): ColshapeMp;
	newSphere(x: number, y: number, z: number, range: number, dimension?: number): ColshapeMp;
	newTube(x: number, y: number, z: number, height: number, range: number, dimension?: number): ColshapeMp;
}

interface DummyEntityMpPool {
	"new"(dummyEntityType: number, sharedVariables: KeyValueCollection): DummyEntityMp;

	forEachByType(dummyEntityType: number, fn: (entity: DummyEntityMp) => void): void;
}

interface EntityMpPool<TEntity> {
	readonly length: number;
	readonly size: number;

	apply(fn: (...args: any[]) => void, ...args: any[]): void;
	at(index: number): TEntity;
	exists(entity: TEntity | number): boolean;
	forEach(fn: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, fn: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, dimension: number, fn: (entity: TEntity) => void): void;
	forEachInDimension(dimension: number, fn: (entity: TEntity) => void): void;
	getClosest(position: Vector3Mp): TEntity
	getClosest(position: Vector3Mp, limit: number): TEntity[]
	getClosestInDimension(position: Vector3Mp, dimension: number): TEntity;
	getClosestInDimension(position: Vector3Mp, dimension: number, limit: number): TEntity[];
	toArray(): TEntity[];
	toArrayFast(): TEntity[];
}

interface EventMpPool {
	delayShutdown: boolean
	delayInitialization: boolean

	add(eventName: RageEnums.EventKey.PLAYER_ENTER_CHECKPOINT, callback: (player: PlayerMp, checkpoint: CheckpointMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_EXIT_CHECKPOINT, callback: (player: PlayerMp, checkpoint: CheckpointMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_ENTER_COLSHAPE, callback: (player: PlayerMp, colshape: ColshapeMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_EXIT_COLSHAPE, callback: (player: PlayerMp, colshape: ColshapeMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_CREATED, callback: (entity: EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_DESTROYED, callback: (entity: EntityMp) => void): void;
	add(eventName: RageEnums.EventKey.ENTITY_MODEL_CHANGE, callback: (entity: EntityMp, oldModel: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_CHAT, callback: (player: PlayerMp, text: string) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_COMMAND, callback: (player: PlayerMp, command: string) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_DAMAGE, callback: (player: PlayerMp, healthLoss: number, armorLoss: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_DEATH, callback: (player: PlayerMp, reason: number, killer?: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_JOIN, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_QUIT, callback: (player: PlayerMp, exitType: string, reason: string) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_READY, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_SPAWN, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_WEAPON_CHANGE, callback: (player: PlayerMp, oldWeapon: number, newWeapon: number) => void): void;
	add(eventName: RageEnums.EventKey.SERVER_SHUTDOWN, callback: () => void): void;
	add(eventName: RageEnums.EventKey.INCOMING_CONNECTION, callback: (ip: string, serial: string, rgscName: string, rgscId: string, gameType: string) => void): void; // TODO: test actual gameType type (most likely  string)
	add(eventName: RageEnums.EventKey.PACKAGES_LOADED, callback: () => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_ENTER_VEHICLE, callback: (player: PlayerMp, vehicle: VehicleMp, seat: number) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_EXIT_VEHICLE, callback: (player: PlayerMp, vehicle: VehicleMp) => void): void;
	add(eventName: RageEnums.EventKey.PLAYER_START_ENTER_VEHICLE, callback: (player: PlayerMp, vehicle: VehicleMp, seat: number) => void): void;
	// todo: check vehicle param
	add(eventName: RageEnums.EventKey.PLAYER_START_EXIT_VEHICLE, callback: (player: PlayerMp) => void): void;
	add(eventName: RageEnums.EventKey.TRAILER_ATTACHED, callback: (vehicle: VehicleMp, trailer: VehicleMp) => void): void;
	add(eventName: RageEnums.EventKey.VEHICLE_DAMAGE, callback: (vehicle: VehicleMp, bodyHealthLoss: number, engineHealthLoss: number) => void): void;
	add(eventName: RageEnums.EventKey.VEHICLE_DEATH, callback: (vehicle: VehicleMp) => void): void;
	add(eventName: RageEnums.EventKey.VEHICLE_HORN_TOGGLE, callback: (vehicle: VehicleMp, toggle: boolean) => void): void;
	add(eventName: RageEnums.EventKey.VEHICLE_SIREN_TOGGLE, callback: (vehicle: VehicleMp, toggle: boolean) => void): void;

	add(eventName: RageEnums.EventKey | string, callback: (...args: any[]) => void): void;
	add(events: ({ [name: string]: (...args: any[]) => void; })): void;
	addProc(procName: string, callback: (...args: any[]) => void): void;
	addProc(procs: ({ [name: string]: (...args: any[]) => void; })): void;
	addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
	addCommand(commands: { [commandName: string]: (player: PlayerMp, fullText: string, ...args: string[]) => void; }): void;
	call(eventName: string, ...args: any[]): void;
	callLocal(eventName: string, args?: any[]): void;
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

interface PedMpPool extends EntityMpPool<PedMp> {
	"new"(modelHash: number, position: Vector3Mp, options?: {
		dynamic?: boolean,
		frozen?: boolean,
		invincible?: boolean,
		lockController?: boolean
	}): PedMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(model: HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		dimension?: number,
		rotation?: Vector3Mp
	}): ObjectMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	//"new"(...args: any[]): PickupMp; // Not working anymore
}

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	broadcast(text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, text: string): void;
	broadcastInRange(position: Vector3Mp, range: number, dimension: number, text: string): void;
	call(eventName: string, args?: any[]): void;
	call(players: PlayerMp[], eventName: string, args?: any[]): void;
	callInDimension(dimension: number, eventName: string, args?: any[]): void;
	callInRange(position: Vector3Mp, range: number, eventName: string, args?: any[]): void;
	callInRange(position: Vector3Mp, range: number, dimension: number, eventName: string, args?: any[]): void;
	callUnreliable(eventName: string, args?: any[]): void;
	callUnreliable(players: PlayerMp[], eventName: string, args?: any[]): void;
	callInDimensionUnreliable(dimension: number, eventName: string, args?: any[]): void;
	callInRangeUnreliable(position: Vector3Mp, range: number, eventName: string, args?: any[]): void;
	callInRangeUnreliable(position: Vector3Mp, range: number, dimension: number, eventName: string, args?: any[]): void;
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
	"new"(model: RageEnums.Hashes.Vehicle | HashOrString, position: Vector3Mp, options?: {
		alpha?: number,
		color?: [ Array2d, Array2d ] | [ RGB, RGB ],
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

type Vector3Mp = {
	new(x: number, y: number, z: number): Vector3Mp;

	x: number;
	y: number;
	z: number;

	add(value: number): Vector3Mp;
	add(vector3: Vector3Mp): Vector3Mp;
	angleTo(vector3: Vector3Mp): number;
	clone(): Vector3Mp;
	cross(vector3: Vector3Mp): Vector3Mp;
	divide(value: number): Vector3Mp;
	divide(vector3: Vector3Mp): Vector3Mp;
	dot(vector3: Vector3Mp): number;
	equals(vector3: Vector3Mp): boolean;
	length(): number;
	max(): number;
	min(): number;
	multiply(value: number): Vector3Mp;
	multiply(vector3: Vector3Mp): Vector3Mp;
	negative(): Vector3Mp;
	subtract(value: number): Vector3Mp;
	subtract(vector3: Vector3Mp): Vector3Mp;
	toAngles(): Array2d;
	toArray(): Array3d;
	unit(): Vector3Mp;
}

type PlayerWeaponCollectionMp = {
	current: number;

	reset(): void;
}

type QuaternionMp = {
	x: number;
	y: number;
	z: number;
	w: number;
}

// -------------------------------------------------------------------------
// Default typings extends
// -------------------------------------------------------------------------

interface Function {
	cancel: boolean;
	handler: EventMp;
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------

declare const mp: Mp;
