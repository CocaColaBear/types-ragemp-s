declare namespace RageEnums {
	const enum EventKey {
		ENTITY_CREATED = "entityCreated",
		ENTITY_DESTROYED = "entityDestroyed",
		ENTITY_MODEL_CHANGE = "entityModelChange",
		PLAYER_CHAT = "playerChat",
		PLAYER_COMMAND = "playerCommand",
		PLAYER_DAMAGE = "playerDamage",
		PLAYER_DEATH = "playerDeath",
		PLAYER_ENTER_CHECKPOINT = "playerEnterCheckpoint",
		PLAYER_ENTER_COLSHAPE = "playerEnterColshape",
		PLAYER_ENTER_VEHICLE = "playerEnterVehicle",
		PLAYER_EXIT_CHECKPOINT = "playerExitCheckpoint",
		PLAYER_EXIT_COLSHAPE = "playerExitColshape",
		PLAYER_EXIT_VEHICLE = "playerExitVehicle",
		PLAYER_JOIN = "playerJoin",
		PLAYER_MARK_WAYPOINT = "playerMarkWaypoint",
		PLAYER_QUIT = "playerQuit",
		PLAYER_REACH_WAYPOINT = "playerReachWaypoint",
		PLAYER_READY = "playerReady",
		PLAYER_SPAWN = "playerSpawn",
		PLAYER_START_ENTER_VEHICLE = "playerStartEnterVehicle",
		PLAYER_START_EXIT_VEHICLE = "playerStartExitVehicle",
		PLAYER_STREAM_IN = "playerStreamIn",
		PLAYER_STREAM_OUT = "playerStreamOut",
		PLAYER_WEAPON_CHANGE = "playerWeaponChange",
		TRAILER_ATTACHED = "trailerAttached",
		VEHICLE_DAMAGE = "vehicleDamage",
		VEHICLE_HORN_TOGGLE = "vehicleHornToggle",
		VEHICLE_SIREN_TOGGLE = "vehicleSirenToggle",
		VEHICLE_STREAM_IN = "vehicleStreamIn",
		VEHICLE_STREAM_OUT = "vehicleStreamOut"
	}

	const enum Scenarios {
		Standing = "Standing",
		WORLD_HUMAN_AA_COFFEE = "WORLD_HUMAN_AA_COFFEE",
		WORLD_HUMAN_AA_SMOKE = "WORLD_HUMAN_AA_SMOKE",
		WORLD_HUMAN_BINOCULARS = "WORLD_HUMAN_BINOCULARS",
		WORLD_HUMAN_BUM_FREEWAY = "WORLD_HUMAN_BUM_FREEWAY",
		WORLD_HUMAN_BUM_SLUMPED = "WORLD_HUMAN_BUM_SLUMPED",
		WORLD_HUMAN_BUM_STANDING = "WORLD_HUMAN_BUM_STANDING",
		WORLD_HUMAN_BUM_WASH = "WORLD_HUMAN_BUM_WASH",
		WORLD_HUMAN_CAR_PARK_ATTENDANT = "WORLD_HUMAN_CAR_PARK_ATTENDANT",
		WORLD_HUMAN_CHEERING = "WORLD_HUMAN_CHEERING",
		WORLD_HUMAN_CLIPBOARD = "WORLD_HUMAN_CLIPBOARD",
		WORLD_HUMAN_CLIPBOARD_FACILITY = "WORLD_HUMAN_CLIPBOARD_FACILITY",
		WORLD_HUMAN_CONST_DRILL = "WORLD_HUMAN_CONST_DRILL",
		WORLD_HUMAN_COP_IDLES = "WORLD_HUMAN_COP_IDLES",
		WORLD_HUMAN_DRINKING = "WORLD_HUMAN_DRINKING",
		WORLD_HUMAN_DRINKING_FACILITY = "WORLD_HUMAN_DRINKING_FACILITY",
		WORLD_HUMAN_DRUG_DEALER = "WORLD_HUMAN_DRUG_DEALER",
		WORLD_HUMAN_DRUG_DEALER_HARD = "WORLD_HUMAN_DRUG_DEALER_HARD",
		WORLD_HUMAN_MOBILE_FILM_SHOCKING = "WORLD_HUMAN_MOBILE_FILM_SHOCKING",
		WORLD_HUMAN_GARDENER_LEAF_BLOWER = "WORLD_HUMAN_GARDENER_LEAF_BLOWER",
		WORLD_HUMAN_GARDENER_PLANT = "WORLD_HUMAN_GARDENER_PLANT",
		WORLD_HUMAN_GOLF_PLAYER = "WORLD_HUMAN_GOLF_PLAYER",
		WORLD_HUMAN_GUARD_PATROL = "WORLD_HUMAN_GUARD_PATROL",
		WORLD_HUMAN_GUARD_STAND = "WORLD_HUMAN_GUARD_STAND",
		WORLD_HUMAN_GUARD_STAND_CLUBHOUSE = "WORLD_HUMAN_GUARD_STAND_CLUBHOUSE",
		WORLD_HUMAN_GUARD_STAND_FACILITY = "WORLD_HUMAN_GUARD_STAND_FACILITY",
		WORLD_HUMAN_GUARD_STAND_ARMY = "WORLD_HUMAN_GUARD_STAND_ARMY",
		WORLD_HUMAN_HAMMERING = "WORLD_HUMAN_HAMMERING",
		WORLD_HUMAN_HANG_OUT_STREET = "WORLD_HUMAN_HANG_OUT_STREET",
		WORLD_HUMAN_HANG_OUT_STREET_CLUBHOUSE = "WORLD_HUMAN_HANG_OUT_STREET_CLUBHOUSE",
		WORLD_HUMAN_HIKER_STANDING = "WORLD_HUMAN_HIKER_STANDING",
		WORLD_HUMAN_HUMAN_STATUE = "WORLD_HUMAN_HUMAN_STATUE",
		WORLD_HUMAN_JANITOR = "WORLD_HUMAN_JANITOR",
		WORLD_HUMAN_JOG_STANDING = "WORLD_HUMAN_JOG_STANDING",
		WORLD_HUMAN_LEANING = "WORLD_HUMAN_LEANING",
		WORLD_HUMAN_MAID_CLEAN = "WORLD_HUMAN_MAID_CLEAN",
		WORLD_HUMAN_MUSCLE_FLEX = "WORLD_HUMAN_MUSCLE_FLEX",
		WORLD_HUMAN_MUSCLE_FREE_WEIGHTS = "WORLD_HUMAN_MUSCLE_FREE_WEIGHTS",
		WORLD_HUMAN_MUSICIAN = "WORLD_HUMAN_MUSICIAN",
		WORLD_HUMAN_PAPARAZZI = "WORLD_HUMAN_PAPARAZZI",
		WORLD_HUMAN_PARTYING = "WORLD_HUMAN_PARTYING",
		WORLD_HUMAN_PICNIC = "WORLD_HUMAN_PICNIC",
		WORLD_HUMAN_PROSTITUTE_HIGH_CLASS = "WORLD_HUMAN_PROSTITUTE_HIGH_CLASS",
		WORLD_HUMAN_PROSTITUTE_LOW_CLASS = "WORLD_HUMAN_PROSTITUTE_LOW_CLASS",
		WORLD_HUMAN_PUSH_UPS = "WORLD_HUMAN_PUSH_UPS",
		WORLD_HUMAN_SEAT_LEDGE = "WORLD_HUMAN_SEAT_LEDGE",
		WORLD_HUMAN_SEAT_LEDGE_EATING = "WORLD_HUMAN_SEAT_LEDGE_EATING",
		WORLD_HUMAN_SEAT_STEPS = "WORLD_HUMAN_SEAT_STEPS",
		WORLD_HUMAN_SEAT_WALL = "WORLD_HUMAN_SEAT_WALL",
		WORLD_HUMAN_SEAT_WALL_EATING = "WORLD_HUMAN_SEAT_WALL_EATING",
		WORLD_HUMAN_SEAT_WALL_TABLET = "WORLD_HUMAN_SEAT_WALL_TABLET",
		WORLD_HUMAN_SECURITY_SHINE_TORCH = "WORLD_HUMAN_SECURITY_SHINE_TORCH",
		WORLD_HUMAN_SIT_UPS = "WORLD_HUMAN_SIT_UPS",
		WORLD_HUMAN_SMOKING = "WORLD_HUMAN_SMOKING",
		WORLD_HUMAN_SMOKING_CLUBHOUSE = "WORLD_HUMAN_SMOKING_CLUBHOUSE",
		WORLD_HUMAN_SMOKING_POT = "WORLD_HUMAN_SMOKING_POT",
		WORLD_HUMAN_SMOKING_POT_CLUBHOUSE = "WORLD_HUMAN_SMOKING_POT_CLUBHOUSE",
		WORLD_HUMAN_STAND_FIRE = "WORLD_HUMAN_STAND_FIRE",
		WORLD_HUMAN_STAND_FISHING = "WORLD_HUMAN_STAND_FISHING",
		WORLD_HUMAN_STAND_IMPATIENT = "WORLD_HUMAN_STAND_IMPATIENT",
		WORLD_HUMAN_STAND_IMPATIENT_CLUBHOUSE = "WORLD_HUMAN_STAND_IMPATIENT_CLUBHOUSE",
		WORLD_HUMAN_STAND_IMPATIENT_FACILITY = "WORLD_HUMAN_STAND_IMPATIENT_FACILITY",
		WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT = "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT",
		WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT_FACILITY = "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT_FACILITY",
		WORLD_HUMAN_STAND_MOBILE = "WORLD_HUMAN_STAND_MOBILE",
		WORLD_HUMAN_STAND_MOBILE_CLUBHOUSE = "WORLD_HUMAN_STAND_MOBILE_CLUBHOUSE",
		WORLD_HUMAN_STAND_MOBILE_BRIEFCASE = "WORLD_HUMAN_STAND_MOBILE_BRIEFCASE",
		WORLD_HUMAN_STAND_MOBILE_FACILITY = "WORLD_HUMAN_STAND_MOBILE_FACILITY",
		WORLD_HUMAN_STAND_MOBILE_UPRIGHT = "WORLD_HUMAN_STAND_MOBILE_UPRIGHT",
		WORLD_HUMAN_STAND_MOBILE_UPRIGHT_CLUBHOUSE = "WORLD_HUMAN_STAND_MOBILE_UPRIGHT_CLUBHOUSE",
		WORLD_HUMAN_STRIP_WATCH_STAND = "WORLD_HUMAN_STRIP_WATCH_STAND",
		WORLD_HUMAN_STUPOR = "WORLD_HUMAN_STUPOR",
		WORLD_HUMAN_STUPOR_CLUBHOUSE = "WORLD_HUMAN_STUPOR_CLUBHOUSE",
		WORLD_HUMAN_SUNBATHE = "WORLD_HUMAN_SUNBATHE",
		WORLD_HUMAN_SUNBATHE_BACK = "WORLD_HUMAN_SUNBATHE_BACK",
		WORLD_HUMAN_SUPERHERO = "WORLD_HUMAN_SUPERHERO",
		WORLD_HUMAN_SWIMMING = "WORLD_HUMAN_SWIMMING",
		WORLD_HUMAN_TENNIS_PLAYER = "WORLD_HUMAN_TENNIS_PLAYER",
		WORLD_HUMAN_TOURIST_MAP = "WORLD_HUMAN_TOURIST_MAP",
		WORLD_HUMAN_TOURIST_MOBILE = "WORLD_HUMAN_TOURIST_MOBILE",
		WORLD_HUMAN_VEHICLE_MECHANIC = "WORLD_HUMAN_VEHICLE_MECHANIC",
		WORLD_HUMAN_WELDING = "WORLD_HUMAN_WELDING",
		WORLD_HUMAN_WINDOW_SHOP_BROWSE = "WORLD_HUMAN_WINDOW_SHOP_BROWSE",
		WORLD_HUMAN_YOGA = "WORLD_HUMAN_YOGA",
		WORLD_BOAR_GRAZING = "WORLD_BOAR_GRAZING",
		WORLD_CAT_SLEEPING_GROUND = "WORLD_CAT_SLEEPING_GROUND",
		WORLD_CAT_SLEEPING_LEDGE = "WORLD_CAT_SLEEPING_LEDGE",
		WORLD_COW_GRAZING = "WORLD_COW_GRAZING",
		WORLD_COYOTE_HOWL = "WORLD_COYOTE_HOWL",
		WORLD_COYOTE_REST = "WORLD_COYOTE_REST",
		WORLD_COYOTE_WANDER = "WORLD_COYOTE_WANDER",
		WORLD_CHICKENHAWK_FEEDING = "WORLD_CHICKENHAWK_FEEDING",
		WORLD_CHICKENHAWK_STANDING = "WORLD_CHICKENHAWK_STANDING",
		WORLD_CORMORANT_STANDING = "WORLD_CORMORANT_STANDING",
		WORLD_CROW_FEEDING = "WORLD_CROW_FEEDING",
		WORLD_CROW_STANDING = "WORLD_CROW_STANDING",
		WORLD_DEER_GRAZING = "WORLD_DEER_GRAZING",
		WORLD_DOG_BARKING_ROTTWEILER = "WORLD_DOG_BARKING_ROTTWEILER",
		WORLD_DOG_BARKING_RETRIEVER = "WORLD_DOG_BARKING_RETRIEVER",
		WORLD_DOG_BARKING_SHEPHERD = "WORLD_DOG_BARKING_SHEPHERD",
		WORLD_DOG_SITTING_ROTTWEILER = "WORLD_DOG_SITTING_ROTTWEILER",
		WORLD_DOG_SITTING_RETRIEVER = "WORLD_DOG_SITTING_RETRIEVER",
		WORLD_DOG_SITTING_SHEPHERD = "WORLD_DOG_SITTING_SHEPHERD",
		WORLD_DOG_BARKING_SMALL = "WORLD_DOG_BARKING_SMALL",
		WORLD_DOG_SITTING_SMALL = "WORLD_DOG_SITTING_SMALL",
		WORLD_FISH_IDLE = "WORLD_FISH_IDLE",
		WORLD_GULL_FEEDING = "WORLD_GULL_FEEDING",
		WORLD_GULL_STANDING = "WORLD_GULL_STANDING",
		WORLD_HEN_PECKING = "WORLD_HEN_PECKING",
		WORLD_HEN_STANDING = "WORLD_HEN_STANDING",
		WORLD_MOUNTAIN_LION_REST = "WORLD_MOUNTAIN_LION_REST",
		WORLD_MOUNTAIN_LION_WANDER = "WORLD_MOUNTAIN_LION_WANDER",
		WORLD_PIG_GRAZING = "WORLD_PIG_GRAZING",
		WORLD_PIGEON_FEEDING = "WORLD_PIGEON_FEEDING",
		WORLD_PIGEON_STANDING = "WORLD_PIGEON_STANDING",
		WORLD_RABBIT_EATING = "WORLD_RABBIT_EATING",
		WORLD_RATS_EATING = "WORLD_RATS_EATING",
		WORLD_SHARK_SWIM = "WORLD_SHARK_SWIM",
		PROP_BIRD_IN_TREE = "PROP_BIRD_IN_TREE",
		PROP_BIRD_TELEGRAPH_POLE = "PROP_BIRD_TELEGRAPH_POLE",
		PROP_HUMAN_ATM = "PROP_HUMAN_ATM",
		PROP_HUMAN_BBQ = "PROP_HUMAN_BBQ",
		PROP_HUMAN_BUM_BIN = "PROP_HUMAN_BUM_BIN",
		PROP_HUMAN_BUM_SHOPPING_CART = "PROP_HUMAN_BUM_SHOPPING_CART",
		PROP_HUMAN_MUSCLE_CHIN_UPS = "PROP_HUMAN_MUSCLE_CHIN_UPS",
		PROP_HUMAN_MUSCLE_CHIN_UPS_ARMY = "PROP_HUMAN_MUSCLE_CHIN_UPS_ARMY",
		PROP_HUMAN_MUSCLE_CHIN_UPS_PRISON = "PROP_HUMAN_MUSCLE_CHIN_UPS_PRISON",
		PROP_HUMAN_PARKING_METER = "PROP_HUMAN_PARKING_METER",
		PROP_HUMAN_SEAT_ARMCHAIR = "PROP_HUMAN_SEAT_ARMCHAIR",
		PROP_HUMAN_SEAT_BAR = "PROP_HUMAN_SEAT_BAR",
		PROP_HUMAN_SEAT_BENCH = "PROP_HUMAN_SEAT_BENCH",
		PROP_HUMAN_SEAT_BENCH_FACILITY = "PROP_HUMAN_SEAT_BENCH_FACILITY",
		PROP_HUMAN_SEAT_BENCH_DRINK = "PROP_HUMAN_SEAT_BENCH_DRINK",
		PROP_HUMAN_SEAT_BENCH_DRINK_FACILITY = "PROP_HUMAN_SEAT_BENCH_DRINK_FACILITY",
		PROP_HUMAN_SEAT_BENCH_DRINK_BEER = "PROP_HUMAN_SEAT_BENCH_DRINK_BEER",
		PROP_HUMAN_SEAT_BENCH_FOOD = "PROP_HUMAN_SEAT_BENCH_FOOD",
		PROP_HUMAN_SEAT_BENCH_FOOD_FACILITY = "PROP_HUMAN_SEAT_BENCH_FOOD_FACILITY",
		PROP_HUMAN_SEAT_BUS_STOP_WAIT = "PROP_HUMAN_SEAT_BUS_STOP_WAIT",
		PROP_HUMAN_SEAT_CHAIR = "PROP_HUMAN_SEAT_CHAIR",
		PROP_HUMAN_SEAT_CHAIR_DRINK = "PROP_HUMAN_SEAT_CHAIR_DRINK",
		PROP_HUMAN_SEAT_CHAIR_DRINK_BEER = "PROP_HUMAN_SEAT_CHAIR_DRINK_BEER",
		PROP_HUMAN_SEAT_CHAIR_FOOD = "PROP_HUMAN_SEAT_CHAIR_FOOD",
		PROP_HUMAN_SEAT_CHAIR_UPRIGHT = "PROP_HUMAN_SEAT_CHAIR_UPRIGHT",
		PROP_HUMAN_SEAT_CHAIR_MP_PLAYER = "PROP_HUMAN_SEAT_CHAIR_MP_PLAYER",
		PROP_HUMAN_SEAT_COMPUTER = "PROP_HUMAN_SEAT_COMPUTER",
		PROP_HUMAN_SEAT_COMPUTER_LOW = "PROP_HUMAN_SEAT_COMPUTER_LOW",
		PROP_HUMAN_SEAT_DECKCHAIR = "PROP_HUMAN_SEAT_DECKCHAIR",
		PROP_HUMAN_SEAT_DECKCHAIR_DRINK = "PROP_HUMAN_SEAT_DECKCHAIR_DRINK",
		PROP_HUMAN_SEAT_MUSCLE_BENCH_PRESS = "PROP_HUMAN_SEAT_MUSCLE_BENCH_PRESS",
		PROP_HUMAN_SEAT_MUSCLE_BENCH_PRESS_PRISON = "PROP_HUMAN_SEAT_MUSCLE_BENCH_PRESS_PRISON",
		PROP_HUMAN_SEAT_SEWING = "PROP_HUMAN_SEAT_SEWING",
		PROP_HUMAN_SEAT_STRIP_WATCH = "PROP_HUMAN_SEAT_STRIP_WATCH",
		PROP_HUMAN_SEAT_SUNLOUNGER = "PROP_HUMAN_SEAT_SUNLOUNGER",
		PROP_HUMAN_STAND_IMPATIENT = "PROP_HUMAN_STAND_IMPATIENT",
		CODE_HUMAN_COWER = "CODE_HUMAN_COWER",
		CODE_HUMAN_CROSS_ROAD_WAIT = "CODE_HUMAN_CROSS_ROAD_WAIT",
		CODE_HUMAN_PARK_CAR = "CODE_HUMAN_PARK_CAR",
		PROP_HUMAN_MOVIE_BULB = "PROP_HUMAN_MOVIE_BULB",
		PROP_HUMAN_MOVIE_STUDIO_LIGHT = "PROP_HUMAN_MOVIE_STUDIO_LIGHT",
		CODE_HUMAN_MEDIC_KNEEL = "CODE_HUMAN_MEDIC_KNEEL",
		CODE_HUMAN_MEDIC_TEND_TO_DEAD = "CODE_HUMAN_MEDIC_TEND_TO_DEAD",
		CODE_HUMAN_MEDIC_TIME_OF_DEATH = "CODE_HUMAN_MEDIC_TIME_OF_DEATH",
		CODE_HUMAN_POLICE_CROWD_CONTROL = "CODE_HUMAN_POLICE_CROWD_CONTROL",
		CODE_HUMAN_POLICE_INVESTIGATE = "CODE_HUMAN_POLICE_INVESTIGATE",
		CODE_HUMAN_STAND_COWER = "CODE_HUMAN_STAND_COWER",
		EAR_TO_TEXT = "EAR_TO_TEXT",
		EAR_TO_TEXT_FAT = "EAR_TO_TEXT_FAT"
	}

	const enum Explosions {
		EXP_TAG_GRENADE = 0,
		EXP_TAG_GRENADELAUNCHER = 1,
		EXP_TAG_STICKYBOMB = 2,
		EXP_TAG_MOLOTOV = 3,
		EXP_TAG_ROCKET = 4,
		EXP_TAG_TANKSHELL = 5,
		EXP_TAG_HI_OCTANE = 6,
		EXP_TAG_CAR = 7,
		EXP_TAG_PLANE = 8,
		EXP_TAG_PETROL_PUMP = 9,
		EXP_TAG_BIKE = 10,
		EXP_TAG_DIR_STEAM = 11,
		EXP_TAG_DIR_FLAME = 12,
		EXP_TAG_DIR_WATER_HYDRANT = 13,
		EXP_TAG_DIR_GAS_CANISTER = 14,
		EXP_TAG_BOAT = 15,
		EXP_TAG_SHIP_DESTROY = 16,
		EXP_TAG_TRUCK = 17,
		EXP_TAG_BULLET = 18,
		EXP_TAG_SMOKEGRENADELAUNCHER = 19,
		EXP_TAG_SMOKEGRENADE = 20,
		EXP_TAG_BZGAS = 21,
		EXP_TAG_FLARE = 22,
		EXP_TAG_GAS_CANISTER = 23,
		EXP_TAG_EXTINGUISHER = 24,
		EXP_TAG_PROGRAMMABLEAR = 25,
		EXP_TAG_TRAIN = 26,
		EXP_TAG_BARREL = 27,
		EXP_TAG_PROPANE = 28,
		EXP_TAG_BLIMP = 29,
		EXP_TAG_DIR_FLAME_EXPLODE = 30,
		EXP_TAG_TANKER = 31,
		EXP_TAG_PLANE_ROCKET = 32,
		EXP_TAG_VEHICLE_BULLET = 33,
		EXP_TAG_GAS_TANK = 34,
		EXP_TAG_BIRD_CRAP = 35,
		EXP_TAG_RAILGUN = 36,
		EXP_TAG_BLIMP2 = 37,
		EXP_TAG_FIREWORK = 38,
		EXP_TAG_SNOWBALL = 39,
		EXP_TAG_PROXMINE = 40,
		EXP_TAG_VALKYRIE_CANNON = 41,
		EXP_TAG_AIR_DEFENCE = 42,
		EXP_TAG_PIPEBOMB = 43,
		EXP_TAG_VEHICLEMINE = 44,
		EXP_TAG_EXPLOSIVEAMMO = 45,
		EXP_TAG_APCSHELL = 46,
		EXP_TAG_BOMB_CLUSTER = 47,
		EXP_TAG_BOMB_GAS = 48,
		EXP_TAG_BOMB_INCENDIARY = 49,
		EXP_TAG_BOMB_STANDARD = 50,
		EXP_TAG_TORPEDO = 51,
		EXP_TAG_TORPEDO_UNDERWATER = 52,
		EXP_TAG_BOMBUSHKA_CANNON = 53,
		EXP_TAG_BOMB_CLUSTER_SECONDARY = 54,
		EXP_TAG_HUNTER_BARRAGE = 55,
		EXP_TAG_HUNTER_CANNON = 56,
		EXP_TAG_ROGUE_CANNON = 57,
		EXP_TAG_MINE_UNDERWATER = 58,
		EXP_TAG_ORBITAL_CANNON = 59,
		EXP_TAG_BOMB_STANDARD_WIDE = 60,
		EXP_TAG_EXPLOSIVEAMMO_SHOTGUN = 61,
		EXP_TAG_OPPRESSOR2_CANNON = 62
	}

	const enum ClothesComponent {
		HEAD = 0,
    	BEARD = 1,
    	HAIR = 2,
    	TORSO = 3,
    	LEGS = 4,
    	HANDS = 5,
    	FOOT = 6,
    	NONE = 7,
    	ACCESSORIES_1 = 8,
    	ACCESSORIES_2 = 9,
		MASK = 10,
    	DECALS = 11,
    	AUXILIARY = 12
	}

	const enum ColshapeType {
		CIRCLE = "circle",
		CUBOID = "cuboid",
		POLYGON = "polygon",
		RECTANGLE = "rectangle",
		SPHERE = "sphere",
		TUBE = "tube"
	}

	const enum EntityType {
		BLIP = "blip",
		CHECKPOINT = "checkpoint",
		COLSHAPE = "colshape",
		MARKER = "marker",
		OBJECT = "object",
		PICKUP = "pickup",
		PLAYER = "player",
		VEHICLE = "vehicle"
	}

	const enum HeadOverlay {
		BLEMISHES = 0,
    FACIAL_HAIR = 1,
    EYEBROWS = 2,
    AGEING = 3,
    MAKEUP = 4,
    BLUSH = 5,
    COMPLEXION = 6,
    SUN_DAMAGE = 7,
    LIPSTICK = 8,
    FRECKLES = 9,
    CHEST_HAIR = 10,
    BODY_BLEMISHES = 11,
    ADD_BODY_BLEMISHES = 12
	}

	const enum Marker {
		UPSIDE_DOWN_CONE = 0,
    VERTICAL_CYLINDER = 1,
    THICK_CEVRON_UP = 2,
    THIN_CEVRON_UP = 3,
    CHECKERED_FLAG_RECT = 4,
    CHECKERED_FLAG_CIRCLE = 5,
    VERTICAL_CIRCLE = 6,
    PLANE_MODEL = 7,
    LOST_MC_DARK = 8,
    LOST_MC_LIGHT = 9,
    NUMBER_0 = 10,
    NUMBER_1 = 11,
    NUMBER_2 = 12,
    NUMBER_3 = 13,
    NUMBER_4 = 14,
    NUMBER_5 = 15,
    NUMBER_6 = 16,
    NUMBER_7 = 17,
    NUMBER_8 = 18,
    NUMBER_9 = 19,
    CHEVRON_UP_1 = 20,
    CHEVRON_UP_2 = 21,
    CHEVRON_UP_3 = 22,
    HORIZONTAL_CIRCLE_FLAT = 23,
    REPLAY_ICON = 24,
    HORIZONTAL_CIRCLE_SKINNY = 25,
    HORIZONTAL_CIRCLE_ARROW = 26,
    HORIZONTAL_SPLIT_ARROW_CIRCLE = 27,
    DEBUG_SPHERE = 28,
    DOLLOR_SIGN = 29,
    HORIZONTAL_BARS = 30,
    WOLF_HEAD = 31
	}

	const enum PlayerProp {
		HELMET = 0,
		GLASSES = 1,
		EAR_ACCESSORY = 2
	}

	const enum VehicleSeat {
		DRIVER = 0,
		PASSENGER_1 = 1,
		PASSENGER_2 = 2,
		PASSENGER_3 = 3
	}

	const enum Weather {
		BLIZZARD = "BLIZZARD",
		CLEAR = "CLEAR",
		CLEARING = "CLEARING",
		CLOUDS = "CLOUDS",
		EXTRA_SUNNY = "EXTRASUNNY",
		FOGGY = "FOGGY",
		OVERCAST = "OVERCAST",
		RAIN = "RAIN",
		SMOG = "SMOG",
		SNOW_LIGHT = "SNOWLIGHT",
		THUNDER = "THUNDER",
		XMAS = "XMAS"
	}
}
