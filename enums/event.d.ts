declare namespace RageEnums.Event {
    /** [https://wiki.rage.mp/index.php?title=Server-side_events](https://wiki.rage.mp/index.php?title=Server-side_events) */
    const enum Key {
        /** [https://wiki.rage.mp/index.php?title=EntityCreated](https://wiki.rage.mp/index.php?title=EntityCreated) */
        ENTITY_CREATED = "entityCreated",
        /** [https://wiki.rage.mp/index.php?title=EntityDestroyed](https://wiki.rage.mp/index.php?title=EntityDestroyed) */
        ENTITY_DESTROYED = "entityDestroyed",
        /** [https://wiki.rage.mp/index.php?title=EntityModelChange](https://wiki.rage.mp/index.php?title=EntityModelChange) */
        ENTITY_MODEL_CHANGE = "entityModelChange",
        /** [https://wiki.rage.mp/index.php?title=IncomingConnection](https://wiki.rage.mp/index.php?title=IncomingConnection) */
        INCOMING_CONNECTION = "incomingConnection",
        /** [https://wiki.rage.mp/index.php?title=PackagesLoaded](https://wiki.rage.mp/index.php?title=PackagesLoaded) */
        PACKAGES_LOADED = "packagesLoaded",
        /** [https://wiki.rage.mp/index.php?title=PlayerChat](https://wiki.rage.mp/index.php?title=PlayerChat) */
        PLAYER_CHAT = "playerChat",
        /** [https://wiki.rage.mp/index.php?title=PlayerCommand](https://wiki.rage.mp/index.php?title=PlayerCommand) */
        PLAYER_COMMAND = "playerCommand",
        /** [https://wiki.rage.mp/index.php?title=PlayerDamage](https://wiki.rage.mp/index.php?title=PlayerDamage) */
        PLAYER_DAMAGE = "playerDamage",
        /** [https://wiki.rage.mp/index.php?title=PlayerDeath](https://wiki.rage.mp/index.php?title=PlayerDeath) */
        PLAYER_DEATH = "playerDeath",
        /** [https://wiki.rage.mp/index.php?title=PlayerDeath](https://wiki.rage.mp/index.php?title=PlayerDeath) */
        PLAYER_ENTER_CHECKPOINT = "playerEnterCheckpoint",
        /** [https://wiki.rage.mp/index.php?title=PlayerEnterColshape](https://wiki.rage.mp/index.php?title=PlayerEnterColshape) */
        PLAYER_ENTER_COLSHAPE = "playerEnterColshape",
        /** [https://wiki.rage.mp/index.php?title=PlayerEnterVehicle](https://wiki.rage.mp/index.php?title=PlayerEnterVehicle) */
        PLAYER_ENTER_VEHICLE = "playerEnterVehicle",
        /** [https://wiki.rage.mp/index.php?title=PlayerExitCheckpoint](https://wiki.rage.mp/index.php?title=PlayerExitCheckpoint) */
        PLAYER_EXIT_CHECKPOINT = "playerExitCheckpoint",
        /** [https://wiki.rage.mp/index.php?title=PlayerExitColshape](https://wiki.rage.mp/index.php?title=PlayerExitColshape) */
        PLAYER_EXIT_COLSHAPE = "playerExitColshape",
        /** [https://wiki.rage.mp/index.php?title=PlayerExitVehicle](https://wiki.rage.mp/index.php?title=PlayerExitVehicle) */
        PLAYER_EXIT_VEHICLE = "playerExitVehicle",
        /** [https://wiki.rage.mp/index.php?title=PlayerJoin](https://wiki.rage.mp/index.php?title=PlayerJoin) */
        PLAYER_JOIN = "playerJoin",
        /** [https://wiki.rage.mp/index.php?title=PlayerCreateWaypoint](https://wiki.rage.mp/index.php?title=PlayerCreateWaypoint) */
        PLAYER_CREATE_WAYPOINT = "playerCreateWaypoint",
        /** [https://wiki.rage.mp/index.php?title=PlayerQuit](https://wiki.rage.mp/index.php?title=PlayerQuit) */
        PLAYER_QUIT = "playerQuit",
        /** [https://wiki.rage.mp/index.php?title=PlayerReachWaypoint](https://wiki.rage.mp/index.php?title=PlayerReachWaypoint) */
        PLAYER_REACH_WAYPOINT = "playerReachWaypoint",
        /** [https://wiki.rage.mp/index.php?title=PlayerReady](https://wiki.rage.mp/index.php?title=PlayerReady) */
        PLAYER_READY = "playerReady",
        /** [https://wiki.rage.mp/index.php?title=PlayerSpawn](https://wiki.rage.mp/index.php?title=PlayerSpawn) */
        PLAYER_SPAWN = "playerSpawn",
        /** [https://wiki.rage.mp/index.php?title=PlayerStartEnterVehicle](https://wiki.rage.mp/index.php?title=PlayerStartEnterVehicle) */
        PLAYER_START_ENTER_VEHICLE = "playerStartEnterVehicle",
        /** [https://wiki.rage.mp/index.php?title=PlayerStartExitVehicle](https://wiki.rage.mp/index.php?title=PlayerStartExitVehicle) */
        PLAYER_START_EXIT_VEHICLE = "playerStartExitVehicle",
        /** [https://wiki.rage.mp/index.php?title=PlayerStreamIn](https://wiki.rage.mp/index.php?title=PlayerStreamIn) */
        PLAYER_STREAM_IN = "playerStreamIn",
        /** [https://wiki.rage.mp/index.php?title=PlayerStreamOut](https://wiki.rage.mp/index.php?title=PlayerStreamOut) */
        PLAYER_STREAM_OUT = "playerStreamOut",
        /** [https://wiki.rage.mp/index.php?title=PlayerWeaponChange](https://wiki.rage.mp/index.php?title=PlayerWeaponChange) */
        PLAYER_WEAPON_CHANGE = "playerWeaponChange",
        /** [https://wiki.rage.mp/index.php?title=ServerShutdown](https://wiki.rage.mp/index.php?title=ServerShutdown) */
        SERVER_SHUTDOWN = "serverShutdown",
        /** [https://wiki.rage.mp/index.php?title=TrailerAttached](https://wiki.rage.mp/index.php?title=TrailerAttached) */
        TRAILER_ATTACHED = "trailerAttached",
        /** [https://wiki.rage.mp/index.php?title=VehicleDamage](https://wiki.rage.mp/index.php?title=VehicleDamage) */
        VEHICLE_DAMAGE = "vehicleDamage",
        /** [https://wiki.rage.mp/index.php?title=VehicleDeath](https://wiki.rage.mp/index.php?title=VehicleDeath) */
        VEHICLE_DEATH = "vehicleDeath",
        /** [https://wiki.rage.mp/index.php?title=VehicleHornToggle](https://wiki.rage.mp/index.php?title=VehicleHornToggle) */
        VEHICLE_HORN_TOGGLE = "vehicleHornToggle",
        /** [https://wiki.rage.mp/index.php?title=VehicleSirenToggle](https://wiki.rage.mp/index.php?title=VehicleSirenToggle) */
        VEHICLE_SIREN_TOGGLE = "vehicleSirenToggle",
        /** [https://wiki.rage.mp/index.php?title=PlayerStreamIn](https://wiki.rage.mp/index.php?title=PlayerStreamIn) */
        VEHICLE_STREAM_IN = "vehicleStreamIn",
        /** [https://wiki.rage.mp/index.php?title=PlayerStreamOut](https://wiki.rage.mp/index.php?title=PlayerStreamOut) */
        VEHICLE_STREAM_OUT = "vehicleStreamOut"
    }
}

declare namespace RageEnums {
    export import EventKey = RageEnums.Event.Key;
}
