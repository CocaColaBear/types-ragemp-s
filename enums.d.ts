export declare namespace RageEnums {
	const enum EventKey {
		entityCreated = "entityCreated",
		entityDestroyed = "entityDestroyed",
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
