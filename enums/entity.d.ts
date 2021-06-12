declare namespace RageEnums.Entity {
    /** {@link https://wiki.rage.mp/index.php?title=Entity::type|Entity::type} */
    const enum Type {
        BLIP = "blip",
        CHECKPOINT = "checkpoint",
        COLSHAPE = "colshape",
        DUMMY = "dummy",
        MARKER = "marker",
        OBJECT = "object",
        PED = 'ped',
        PICKUP = "pickup",
        PLAYER = "player",
        TEXT_LABEL = 'textlabel',
        VEHICLE = "vehicle"
    }
}

declare namespace RageEnums {
    export import EntityType = RageEnums.Entity.Type;
}