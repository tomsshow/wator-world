import Entity from "./entity";

export default class World {
    width: number;
    height: number;
    entities: Array<Entity>;
    locations: Array<number>;

    constructor(width: number, height: number, locations:[][]) {
        this.width = width;
        this.height = height;
        this.entities = [];
        this.locations = [][];
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
    getEntityAt(x: number, y: number): Entity|null {
        for (const v of this.entities) {
            if (v.x === x && v.y === y) {
                return v;
            }
        }
        return null;
    }

    /** */
    removeEntity(entity: Entity) {
        throw new Error("unimplimented");
    }

    /** */
    getAdjacentLocations(x: number, y: number): [number, number][] {
        
    }
}