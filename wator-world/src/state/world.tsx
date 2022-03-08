import Entity from "./entity";

export default class World {
    width: number;
    height: number;
    entities: Array<Entity>;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.entities = [];
    }


    /** */
    tick() {
        throw new Error("unimplimented");
    }

    /** */
    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    /** */
    getEntityAt(x: number, y: number){
        for (const v of this.entities) {
            if (v.x === x && v.y === y) {
                return v;
            }
        }
        return null;
    }

    /** */
    removeEntity(entity){
        throw new Error("unimplimented");
    }

    /** */
    getAdjacentLocations(){
        throw new Error("unimplimented");
    }
}