import { assert } from "console";
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
        console.assert(this.getEntityAt(entity.x, entity.y) === null, "Already an entity at location (%d,%d)", entity.x, entity.y);

        this.entities.push(entity);
    }

    /** */
    getEntityAt(x: number, y: number): Entity|null {
        console.assert(x >= 0);
        console.assert(x < this.width);
        console.assert(y >= 0);
        console.assert(y < this.height);

        for (const v of this.entities) {
            if (v.x === x && v.y === y) {
                return v;
            }
        }
        return null;
    }

    /** */
    removeEntity(entity: Entity) {
        console.assert(this.getEntityAt(entity.x, entity.y) === entity);

        throw new Error("unimplimented");
    }

    /** */
    getAdjacentLocations(x: number, y: number): Set<[number, number]> {
        let ret = new Set<[number, number]>();

        // TODO: implement me!

        return ret;
    }
}