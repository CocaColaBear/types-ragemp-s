interface Mp {
	blips: BlipMpPool;
	checkpoints: CheckpointMpPool;
	colshapes: ColshapeMpPool;
	environment: EnvironmentMp;
	events: EventMpPool;
	markers: MarkertMp;
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
	id: string;
	model: number;
	position: Vector3Mp;
	type: string;
	
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
	readonly weapon: number; // TODO
	readonly vehicle: VehicleMp;

	ban(reason: string): void;
	call(eventName: string, ...args: any[]): void;
	getClothes(component: ClothesComponentMp): { 
		readonly drawable: number, 
		readonly texture: number,
		readonly palette: number };
	getFaceFeature(...args: any[]): void; // TODO
	getHeadBlend(...args: any[]): void; // TODO
	getProp(prop: PlayerPropMp): { readonly drawable: number, readonly texture: number };
	giveWeapon(weaponHash: number, ammo: number): void;
	giveWeapon(weaponHashes: number[], ammo: number): void;
	invoke(...args: any[]): void; // TODO
	kick(reason: string): void;
	notify(message: string): void;
	outputChatBox(message: string): void;
	putIntoVehicle(vehicle: VehicleMp, seat: VehicleSeatMp): void;
	removeFromVehicle(): void;
	setClothes(component: ClothesComponentMp, drawable: number, texture: number, palette: number): void;
	setFaceFeature(...args: any[]): void; // TODO
	setHairColour(...args: any[]): void; // TODO
	setHeadBlend(...args: any[]): void; // TODO
	setProp(prop: PlayerPropMp, drawable: number, texture: number): void;
	spawn(position: Vector3Mp): void;
	updateHeadBlend(...args: any[]): void; // TODO
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

	explode(...args: any[]): void; // TODO
	getColour(...args: any[]): void; // TODO
	getColourRGB(...args: any[]): void; // TODO
	getMod(...args: any[]): void; // TODO
	getNeonColour(...args: any[]): void; // TODO
	getOccupant(...args: any[]): PlayerMp; // TODO
	getOccupants(...args: any[]): PlayerMp[]; // TODO
	getPaint(...args: any[]): void; // TODO
	repair(): void;
	setColour(...args: any[]): void; // TODO
	setColourRGB(...args: any[]): void; // TODO
	setMod(...args: any[]): void; // TODO
	setNeonColour(...args: any[]): void; // TODO
	setPaint(...args: any[]): void; // TODO
	setOccupant(...args: any[]): void; // TODO
	spawn(...args: any[]): void; // TODO
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

	routeFor(player: PlayerMp): void;
	unrouteFor(player: PlayerMp): void;
}

interface CheckpointMp extends EntityMp {
	colour: number;
	destination: Vector3Mp;
	radius: number;
	visible: boolean;

	getColour(args: any[]): void; // TODO
	hideFor(player: PlayerMp): void;
	setColour(args: any[]): void; // TODO
	showFor(player: PlayerMp): void;
}

interface MarkertMp extends EntityMp {
	colour: number;
	direction: Vector3Mp;
	scale: number;
	visible: boolean;

	getColour(args: any[]): void; // TODO
	hideFor(player: PlayerMp): void;
	setColour(args: any[]): void; // TODO
	showFor(player: PlayerMp): void;
}

interface ColshapeMp extends EntityMp {
	shapeType: string;

	isPointWithin(point: Vector3Mp): boolean;
}

interface EntityMpPool<TEntity> {
	readonly length: number;
	readonly size: number;

	at(id: number): TEntity;
	forEach(entity: (entity: TEntity) => void): void;
	forEachInRange(range: number, entity: (entity: TEntity) => void): void; // TODO
	forEachInDimension(dimension: number, entity: (entity: TEntity) => void): void; // TODO
	toArray(): TEntity[];
}

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	broadcast(text: string): void;
	broadcastInRange(position: Vector3Mp, text: string): void; // TODO
	broadcastInRange(position: Vector3Mp, dimension: number, text: string): void; // TODO
	call(...args: any[]): void; // TODO
	callInRange(...args: any[]): void; // TODO
	callInDimension(...args: any[]): void; // TODO
}

interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	"new"(vehicleHash: number, position: Vector3Mp): VehicleMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(objectHash: number, position: Vector3Mp, rotation: Vector3Mp): ObjectMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	"new"(...args: any[]): PickupMp; // TODO
}

interface BlipMpPool extends EntityMpPool<BlipMp> {
	"new"(position: Vector3Mp): BlipMp;
	"new"(position: Vector3Mp, radius: number): BlipMp;
	"new"(entityToAttachTo: EntityMp): BlipMp;
}

interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	"new"(...args: any[]): CheckpointMp; // TODO
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(...args: any[]): ColshapeMp; // TODO
	newCuboid(...args: any[]): ColshapeMp; // TODO
	newRectangle(...args: any[]): ColshapeMp; // TODO
	newSphere(...args: any[]): ColshapeMp; // TODO
	newTube(...args: any[]): ColshapeMp; // TODO
}

interface EventMpPool extends EntityMpPool<EventMp> {
	add(eventName: string, callback: (...args: any[]) => void): void;
	addCommand(...args: any[]): void; // TODO
	call(eventName: string, ...args: any[]): void;
}

interface EnvironmentMp {
	weather: string;
	time: { hour: number, minute: number, second: number };
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

declare var mp: Mp;
