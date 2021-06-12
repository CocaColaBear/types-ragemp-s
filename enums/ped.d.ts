declare namespace RageEnums.Ped {
    /** {@link https://wiki.rage.mp/index.php?title=Player::setHeadOverlay|Player::setHeadOverlay} */
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
}

declare namespace RageEnums {
    export import HeadOverlay = RageEnums.Ped.HeadOverlay;
}