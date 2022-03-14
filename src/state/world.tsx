import { assert } from "console";
import Entity from "./entity";

export default class World {
    width: number;
    height: number;
    entities: Array<Entity>;

    constructor(width: number, height: number) {
        console.assert(width >= 0);
        console.assert(height >= 0);

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

    /** 
    */
    getAdjacentLocations(x: number, y: number): Set<[number, number]> {
        
        console.assert(this.height > 0);
        console.assert(this.width > 0);
        console.assert(x >= 0);
        console.assert(x < this.width);
        console.assert(y >= 0);
        console.assert(y < this.height);

        return new Set<[number,number]>([
            [(x+this.width-1)%this.width,y],
            [(x+1)%this.width ,y],
            [x,(y+this.height-1)%this.height],
            [x,(y+1)%this.height]
        ])
    }
}