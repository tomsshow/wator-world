import Entity from "./entity";
import World from "./world";


export default class Fish extends Entity {
    constructor(x: number, y: number){
        super(x, y);
    }

    tick(world: World) {
        const adjacentLocations = Array.from(world.getAdjacentLocations(this.x, this.y).values());

        // Uncondtionally move to the first location in the list.
        this.x = adjacentLocations[0][0];
        this.y = adjacentLocations[0][1];
    }
}