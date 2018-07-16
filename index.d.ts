/// <reference path="enums.d.ts" />
/// <reference path="ped_hashes.d.ts" />
/// <reference path="vehicle_hashes.d.ts" />
/// <reference path="weapon_hashes.d.ts" />

declare namespace RageMP {
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

	type MpObject = {
		blips: BlipPool;
		checkpoints: CheckpointPool;
		colshapes: ColshapePool;
		events: EventPool;
		labels: TextLabelPool;
		markers: MarkerPool;
		pickups: PickupPool;
		players: PlayerPool;
		objects: ObjectPool;
		vehicles: VehiclePool;
		world: World;

		Event: { 
			new(eventName: RageMP.Enums.Event | string, callback: (...args: any[]) => void): Event
		};
		Vector3: Vector3;

		joaat(str: string): number;
		joaat(strs: string[]): number[];
	}

	// -------------------------------------------------------------------------
	// Entity MP types
	// -------------------------------------------------------------------------

	interface Blip extends Entity {
		color: number;
		name: string;
		drawDistance: number;
		rotation: number;
		scale: number;
		shortRange: boolean;
		sprite: number;

		routeFor(player: Player | undefined, color: number, scale: number): void;
		routeFor(players: Player[] | undefined, color: number, scale: number): void;
		unrouteFor(player: Player): void;
		unrouteFor(players: Player[]): void;
	}

	interface Checkpoint extends Entity {
		color: number;
		destination: Vector3;
		radius: number;
		visible: boolean;

		getColor(): number[];
		hideFor(player: Player): void;
		setColor(red: number, green: number, blue: number, alpha: number): void;
		showFor(player: Player): void;
	}

	interface Colshape extends Entity {
		readonly shapeType: RageMP.Enums.ColshapeType;

		isPointWithin(point: Vector3): boolean;
	}

	interface Entity {
		alpha: number;
		data: any;
		dimension: number;
		model: number;
		position: Vector3;
		readonly id: number;
		readonly type: RageMP.Enums.EntityType;
		
		getVariable(name: string): any | undefined;
		destroy(): void;
		dist(position: Vector3): number;
		distSquared(position: Vector3): number;
		setVariable(name: string, value: any): void;
	}

	interface Marker extends Entity {
		direction: Vector3;
		scale: number;
		visible: boolean;

		getColor(): number[];
		hideFor(player: Player): void;
		setColor(red: number, green: number, blue: number, alpha: number): void;
		showFor(player: Player): void;
	}

	interface Object extends Entity {
		rotation: Vector3;
	}

	interface Pickup extends Entity {
		pickupHash: number;
	}

	interface Player extends Entity {
		armour: number;
		eyeColor: number;
		heading: number;
		health: number;
		name: string;
		weapon: number;
		weaponAmmo: number;
		readonly action: string;
		readonly aimTarget: Player;
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
		readonly seat: RageMP.Enums.VehicleSeat;
		readonly socialClub: string;
		readonly streamedPlayers: Player[];
		readonly weapons: PlayerWeaponCollection;
		readonly vehicle: Vehicle;

		ban(reason: string): void;
		call(eventName: string, ...args: any[]): void;
		getClothes(component: RageMP.Enums.ClothesComponent | number): {
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
		getHeadOverlay(overlay: RageMP.Enums.HeadOverlay | number): Array4d;
		getProp(prop: RageMP.Enums.PlayerProp | number): {
			drawable: number,
			texture: number
		};
		getWeaponAmmo(weapon: RageMP.Hashes.Weapon | HashOrString): number;
		giveWeapon(weaponHash: RageMP.Hashes.Weapon | HashOrString, ammo: number): void;
		giveWeapon(weaponHashes: (RageMP.Hashes.Weapon | HashOrString)[], ammo: number): void;
		isStreamed(player: Player): boolean;
		invoke(hash: string, ...args: any[]): void;
		kick(reason: string): void;
		notify(message: string): void;
		outputChatBox(message: string): void;
		playAnimation(dict: string, name: string, speed: number, flag: number): void;
		putIntoVehicle(vehicle: Vehicle, seat: RageMP.Enums.VehicleSeat | number): void;
		removeAllWeapons(): void;
		removeDecoration(decoration: number, collection: number): void;
		removeFromVehicle(): void;
		removeObject(object: any): void; // TODO
		removeWeapon(weaponHash: RageMP.Hashes.Weapon | HashOrString): void;
		setClothes(component: RageMP.Enums.ClothesComponent | number, drawable: number, texture: number, palette: number): void;
		setCustomization(gender: boolean, shapeFirst: number, shapeSecond: number, shapeThird: number, skinFirst: number,
			skinSecond: number, skinThird: number, shapeMix: number, skinMix: number, thirdMix: number, eyeColor: number,
			hairColor: number, hightlightColor: number, faceFeatures: number[]
		): void;
		setDecoration(collection: number, overlay: number): void;
		setFaceFeature(index: number, scale: number): void;
		setHairColor(firstColor: number, secondColor: number): void;
		setHeadBlend(shapeFirst: number, shapeSecond: number, shapeThird: number, skinFirst: number, skinSecond: number,
			skinThird: number, shapeMix: number, skinMix: number, thirdMix: number): void;
		setHeadOverlay(overlay: RageMP.Enums.HeadOverlay | number, value: Array4d): void;
		setProp(prop: RageMP.Enums.PlayerProp | number, drawable: number, texture: number): void;
		setWeaponAmmo(weapon: RageMP.Hashes.Weapon | HashOrString, ammo: number): void;
		spawn(position: Vector3): void;
		updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
	}

	interface TextLabel extends Entity {
		color: RGB;
		drawDistance: number;
		los: boolean;
		text: string;
	}

	interface Vehicle extends Entity {
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
		rotation: Vector3;
		siren: boolean;
		steerAngle: number;
		taxiLights: boolean;
		trimColor: number;
		velocity: Vector3;
		wheelColor: number;
		wheelType: number;
		windowTint: number;
		readonly extras: boolean[];
		readonly heading: number;
		readonly mods: number[];
		readonly quaternion: Quaternion,
		readonly streamedPlayers: Player[];
		readonly trailer: Vehicle;
		readonly traileredBy: Vehicle;

		explode(): void;
		getColor(id: number): number; // id: 0 - primary, 1 - secondary
		getColorRGB(): RGB;
		getExtra(index: number): boolean;
		getMod(modType: number): number;
		getNeonColor(): number[];
		getOccupant(seat: number): Player;
		getOccupants(): Player[];
		getPaint(id: number): number; // id: 0 - primary, 1 - secondary
		isStreamed(player: Player): boolean;
		playScenario(scenario: string): void;
		repair(): void;
		setColor(primary: number, secondary: number): void;
		setColorRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;
		setExtra(index: number, value: boolean): void;
		setMod(modType: number, modIndex: number): void;
		setNeonColor(red: number, green: number, blue: number): void;
		setPaint(primaryType: number, primaryColor: number, secondaryType: number, secondaryColor: number): void;
		setOccupant(seat: number, player: Player): void;
		spawn(position: Vector3, heading: number): void;
		stopAnimation(): void;
	}

	// -------------------------------------------------------------------------
	// Simple MP types
	// -------------------------------------------------------------------------

	interface World {
		weather: RageMP.Enums.Weather | string;
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
		setWeatherTransition(weather: RageMP.Enums.Weather | string, duration?: number): void;
	}

	interface EventMp {
		destroy(): void;
	}

	// -------------------------------------------------------------------------
	// Pool MP types
	// -------------------------------------------------------------------------

	interface BlipPool extends EntityPool<Blip> {
		"new"(sprite: number, position: Vector3, options?: {
			alpha?: number,
			color?: number,
			dimension?: number,
			drawDistance?: number,
			name?: string,
			rotation?: number,
			scale?: number,
			shortRange?: boolean
		}): Blip;
	}

	interface CheckpointPool extends EntityPool<Checkpoint> {
		"new"(type: number, position: Vector3, radius: number, options?: {
			color?: RGBA,
			dimension?: number,
			direction?: Vector3,
			visible?	: boolean
		}): Checkpoint;
	}

	interface ColshapePool extends EntityPool<Colshape> {
		newCircle(x: number, y: number, range: number): Colshape;
		newCuboid(x: number, y: number, z: number, width: number, depth: number, height: number): Colshape;
		newRectangle(x: number, y: number, width: number, height: number): Colshape;
		newSphere(x: number, y: number, z: number, range: number): Colshape;
		newTube(x: number, y: number, z: number, range: number, height: number): Colshape;
	}

	interface EntityPool<TEntity> {
		readonly length: number;
		readonly size: number;

		apply(fn: (...args: any[]) => void, ...args: any[]): void;
		at(index: number): TEntity;
		exists(entity: TEntity | number): boolean;
		forEach(fn: (entity: TEntity) => void): void;
		forEachInRange(position: Vector3, range: number, fn: (entity: TEntity) => void): void;
		forEachInDimension(position: Vector3, range: number, dimension: number, fn: (entity: TEntity) => void): void;
		toArray(): TEntity[];
	}

	interface EventPool {
		add(eventName: RageMP.Enums.Event | string, callback: (...args: any[]) => void): void;
		add(events: ({ [name: string]: (...args: any[]) => void; })): void;
		addCommand(commandName: string, callback: (player: Player, fullText: string, ...args: string[]) => void): void;
		call(eventName: string, ...args: any[]): void;
		getAllOf(eventName: string): EventMp[];
		remove(eventName: string, handler?: (...args: any[]) => void): void;
		remove(eventNames: string[]): void;
		reset(): void;
	}

	interface MarkerPool extends EntityPool<Marker> {
		"new"(type: number, position: Vector3, scale: number, options?: {
			color?: RGBA,
			dimension?: number,
			direction?: Vector3,
			rotation?: Vector3,
			visible?: boolean
		}): Marker;
	}

	interface ObjectPool extends EntityPool<Object> {
		"new"(model: HashOrString, position: Vector3, options?: {
			alpha?: number,
			dimension?: number,
			rotation?: Vector3
		}): Object;
	}

	interface PickupPool extends EntityPool<Pickup> {
		"new"(...args: any[]): Pickup; // TODO
	}

	interface PlayerPool extends EntityPool<Player> {
		broadcast(text: string): void;
		broadcastInRange(position: Vector3, range: number, text: string): void;
		broadcastInRange(position: Vector3, range: number, dimension: number, text: string): void;
		call(eventName: string, ...args: any[]): void;
		call(players: Player[], eventName: string, ...args: any[]): void;
		callInDimension(eventName: string, ...args: any[]): void;
		callInRange(eventName: string, ...args: any[]): void;
	}

	interface TextLabelPool extends EntityPool<TextLabel> {
		"new"(text: string, position: Vector3, options?: {
			color?: RGBA,
			dimension?: number,
			drawDistance?: number,
			font?: number,
			los?: boolean
		}): TextLabel;
	}

	interface VehiclePool extends EntityPool<Vehicle> {
		"new"(model: RageMP.Hashes.Vehicle | HashOrString, position: Vector3, options?: {
			alpha?: number,
			color?: [ Array2d, Array2d ] | [ RGB, RGB ],
			dimension?: number,
			engine?: boolean,
			heading?: number;
			locked?: boolean,
			numberPlate?: string
		}): Vehicle;
	}

	// -------------------------------------------------------------------------
	// Additional MP types
	// -------------------------------------------------------------------------

	type Vector3 = {
		new(x: number, y: number, z: number): Vector3;

		x: number;
		y: number;
		z: number;
	}

	type PlayerWeaponCollection = {
		current: number;

		reset(): void;
	}

	type Quaternion = {
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
}

// -------------------------------------------------------------------------
// Vars
// -------------------------------------------------------------------------


declare const mp: RageMP.MpObject;
