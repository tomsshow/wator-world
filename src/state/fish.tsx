import Entity from "./entity";
import World from "./world";


export default class Fish extends Entity {
    constructor(x: number, y: number){
        super(x, y);
    }

    tick(world: World) {
        throw new Error("unimplimented");
    }
}