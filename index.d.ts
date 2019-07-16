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

// -------------------------------------------------------------------------
// Main MP type
// -------------------------------------------------------------------------

type Mp = {
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
	config: ConfigMp,
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
	readonly seat: RageEnums.VehicleSeat;
	readonly socialClub: string;
	readonly streamedPlayers: PlayerMp[];
	readonly weapons: PlayerWeaponCollectionMp;
	readonly vehicle: VehicleMp;
	readonly voiceListeners: PlayerMp[];

	ban(reason: string): void;
	call(eventName: string, ...args: any[]): void;
	clearDecorations(): void;
	disableVoiceTo(targetPlayer: PlayerMp): void;
	enableVoiceTo(targetPlayer: PlayerMp): void;
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
	getHeadOverlay(overlay: RageEnums.HeadOverlay | number): Array4d;
	getProp(prop: RageEnums.PlayerProp | number): {
		drawable: number,
		texture: number
	};
	getWeaponAmmo(weapon: RageEnums.Hashes.Weapon | HashOrString): number;
	giveWeapon(weaponHash: RageEnums.Hashes.Weapon | HashOrString, ammo: number): void;
	giveWeapon(weaponHashes: (RageEnums.Hashes.Weapon | HashOrString)[], ammo: number): void;
	isStreamed(player: PlayerMp): boolean;
	invoke(hash: string, ...args: any[]): void;
	kick(reason: string): void;
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
	setHeadOverlay(overlay: RageEnums.HeadOverlay | number, value: Array4d): void;
	setProp(prop: RageEnums.PlayerProp | number, drawable: number, texture: number): void;
	setWeaponAmmo(weapon: RageEnums.Hashes.Weapon | HashOrString, ammo: number): void;
	spawn(position: Vector3Mp): void;
	updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
	playScenario(scenario: string): void;
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
	at(index: number): TEntity;
	exists(entity: TEntity | number): boolean;
	forEach(fn: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, fn: (entity: TEntity) => void): void;
	forEachInRange(position: Vector3Mp, range: number, dimension: number, fn: (entity: TEntity) => void): void;
	forEachInDimension(dimension: number, fn: (entity: TEntity) => void): void;
	toArray(): TEntity[];
}

interface EventMpPool {
	add(eventName: RageEnums.EventKey | string, callback: (...args: any[]) => void): void;
	add(events: ({ [name: string]: (...args: any[]) => void; })): void;
	addCommand(commandName: string, callback: (player: PlayerMp, fullText: string, ...args: string[]) => void): void;
	addCommand(commands: { [commandName: string]: (player: PlayerMp, fullText: string, ...args: string[]) => void; }): void;
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
	divide(value: number): Vector3Mp;
	divide(vector3: Vector3Mp): Vector3Mp;
	length(): number;
	multiply(value: number): Vector3Mp;
	multiply(vector3: Vector3Mp): Vector3Mp;
	subtract(value: number): Vector3Mp;
	subtract(vector3: Vector3Mp): Vector3Mp;
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
