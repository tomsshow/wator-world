import Entity from "./entity";
import World from "./world";


export default class Fish extends Entity {
    constructor(x: number, y: number, breed: number){
        super(x, y, breed);
    }

    tick(world: World) {
        const adjacentLocations = Array.from(world.getAdjacentLocations(this.x, this.y).values());
        // Uncondtionally move to the first location in the list.
        this.x = adjacentLocations[0][0];
        this.y = adjacentLocations[0][1];

        this.breed -= this.breed;
    }

    getBreedValue(currentBreedValue: number){
        console.assert(currentBreedValue >= 0)
        return this.breed;
    }

    setBreedValue(newBreedValue: number): number{

        console.assert(newBreedValue > 0);
        console.assert(newBreedValue !== this.breed);

        this.breed = newBreedValue;
        return this.breed;
    }

}