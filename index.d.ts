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

	Vector3: Vector3;

	joaat(str: string): number;
	joaat(strs: string[]): number[];
}

interface EntityMp {
	alpha: number;
	dimension: number;
	id: string;
	model: number;
	position: Vector3;
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
	readonly weapon: number; // ???
	readonly vehicle: VehicleMp;

	ban(reason: string): void;
	call(eventName: string, ...args: any[]): void;
	getClothes(component: ClothesComponentMp): { 
		readonly drawable: number, 
		readonly texture: number,
		readonly palette: number };
	getFaceFeature(...args: any[]): void; // ???
	getHeadBlend(...args: any[]): void; // ???
	getProp(prop: PlayerPropMp): { readonly drawable: number, readonly texture: number };
	giveWeapon(weaponHash: number, ammo: number): void;
	giveWeapon(weaponHashes: number[], ammo: number): void;
	invoke(...args: any[]): void; // ???
	kick(reason: string): void;
	notify(message: string): void;
	outputChatBox(message: string): void;
	putIntoVehicle(vehicle: VehicleMp, seat: VehicleSeatMp): void;
	removeFromVehicle(): void;
	setClothes(component: ClothesComponentMp, drawable: number, texture: number, palette: number): void;
	setFaceFeature(...args: any[]): void; // ???
	setHairColour(...args: any[]): void; // ???
	setHeadBlend(...args: any[]): void; // ???
	setProp(prop: PlayerPropMp, drawable: number, texture: number): void;
	spawn(position: Vector3): void;
	updateHeadBlend(...args: any[]): void; // ???
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
	position: Vector3;
	rocketBoost: boolean;
	rotation: Vector3;
	siren: boolean;
	steerAngle: number;
	velocity: Vector3;

	explode(...args: any[]): void; // ???
	getColour(...args: any[]): void; // ???
	getColourRGB(...args: any[]): void; // ???
	getMod(...args: any[]): void; // ???
	getNeonColour(...args: any[]): void; // ???
	getOccupant(...args: any[]): PlayerMp; // ???
	getOccupants(...args: any[]): PlayerMp[]; // ???
	getPaint(...args: any[]): void; // ???
	repair(): void;
	setColour(...args: any[]): void; // ???
	setColourRGB(...args: any[]): void; // ???
	setMod(...args: any[]): void; // ???
	setNeonColour(...args: any[]): void; // ???
	setPaint(...args: any[]): void; // ???
	setOccupant(...args: any[]): void; // ???
	spawn(...args: any[]): void; // ???
}

interface EventMp extends EntityMpPool<null> {
	
}

interface ObjectMp extends EntityMp {
	rotation: Vector3;
}

interface PickupMp extends EntityMp {
	pickupHash: number;
}

interface BlipMp extends EntityMp {
	colour: number;
	name: number;
	radius: number;
	scale: number;

	routeFor(player: PlayerMp): void;
	unrouteFor(player: PlayerMp): void;
}

interface CheckpointMp extends EntityMp {
	colour: number;
	destination: Vector3;
	radius: number;
	visible: boolean;

	getColour(args: any[]): void; // ???
	hideFor(player: PlayerMp): void;
	setColour(args: any[]): void; // ???
	showFor(player: PlayerMp): void;
}

interface MarkertMp extends EntityMp {
	colour: number;
	direction: Vector3;
	scale: number;
	visible: boolean;

	getColour(args: any[]): void; // ???
	hideFor(player: PlayerMp): void;
	setColour(args: any[]): void; // ???
	showFor(player: PlayerMp): void;
}

interface ColshapeMp extends EntityMp {
	shapeType: string;

	isPointWithin(point: Vector3): boolean;
}

interface EntityMpPool<TEntity> {
	readonly length: number;
	readonly size: number;

	at(id: number): TEntity;
	forEach(entity: (entity: TEntity) => void): void;
	forEachInRange(range: number, entity: (entity: TEntity) => void): void; // ???
	forEachInDimension(dimension: number, entity: (entity: TEntity) => void): void; // ???
	toArray(): TEntity[];
}

interface PlayerMpPool extends EntityMpPool<PlayerMp> {
	broadcast(text: string): void;
	broadcastInRange(position: Vector3, text: string): void; // ???
	broadcastInRange(position: Vector3, dimension: number, text: string): void; // ???
	call(...args: any[]): void; // ???
	callInRange(...args: any[]): void; // ???
	callInDimension(...args: any[]): void; // ???
}

interface VehicleMpPool extends EntityMpPool<VehicleMp> {
	"new"(vehicleHash: number, position: Vector3): VehicleMp;
}

interface ObjectMpPool extends EntityMpPool<ObjectMp> {
	"new"(objectHash: number, position: Vector3, rotation: Vector3): ObjectMp;
}

interface PickupMpPool extends EntityMpPool<PickupMp> {
	"new"(...args: any[]): PickupMp; // ???
}

interface BlipMpPool extends EntityMpPool<BlipMp> {
	"new"(position: Vector3): BlipMp;
	"new"(position: Vector3, radius: number): BlipMp;
	"new"(entityToAttachTo: EntityMp): BlipMp;
}

interface CheckpointMpPool extends EntityMpPool<CheckpointMp> {
	"new"(...args: any[]): CheckpointMp; // ???
}

interface ColshapeMpPool extends EntityMpPool<ColshapeMp> {
	newCircle(...args: any[]): ColshapeMp; // ???
	newCuboid(...args: any[]): ColshapeMp; // ???
	newRectangle(...args: any[]): ColshapeMp; // ???
	newSphere(...args: any[]): ColshapeMp; // ???
	newTube(...args: any[]): ColshapeMp; // ???
}

interface EventMpPool extends EntityMpPool<EventMp> {
	add(eventName: string, callback: (...args: any[]) => void) : void;
	call(eventName: string, ...args: any[]) : void;
}

interface EnvironmentMp {
	weather: string;
	time: TimeMp;
}

interface Vector3 {
	new(x: number, y: number, z: number): Vector3;

	x: number;
	y: number;
	z: number;
}

interface TimeMp {
	hour: number;
	minute: number;
	second: number;
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
