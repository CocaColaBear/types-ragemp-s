declare namespace RageEnums.Colshape {
    /** {@link https://wiki.rage.mp/index.php?title=Colshape::shapeType|Colshape::shapeType} */
    const enum Type {
        CIRCLE = "circle",
        CUBOID = "cuboid",
        POLYGON = "polygon",
        RECTANGLE = "rectangle",
        SPHERE = "sphere",
        TUBE = "tube"
    }
}

declare namespace RageEnums {
    export import ColshapeType = RageEnums.Colshape.Type;
}