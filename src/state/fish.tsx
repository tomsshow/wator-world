import Entity from "./entity";
import World from "./world";


export default class Fish extends Entity {
    constructor(x: number, y: number, breedAtAge: number, age?: number){
        super(x, y, breedAtAge, age || 0);
    }

    _pickLocation(world: World): [number, number]|null {
        const adjacentLocations = Array.from(world.getAdjacentLocations(this.x, this.y).values());

        for (let location of adjacentLocations) {
            if (world.getEntityAt(location[0], location[1]) === null) {
                return location; // unconditonally pick the first empty location
            }
        }

        return null;
    }

    tick(world: World) {
        const newLocation = this._pickLocation(world);
        if (newLocation === null) {
            return;
        }
        
        const [newX, newY] = newLocation;

        this.x = newX;
        this.y = newY;

        //move first
            // get adjacent locations
            // check world if [x,y]: locaiton has an entity in it
                // if that position in the world has something then ignore the [x,y]: location and move to next tuple
                // if the remaining positions are empty, math.random one of the tupes
                    // move to that randomly selected location
            
        // Uncondtionally move to the first location in the list.
        // this.x = adjacentLocations[0][0];
        // this.y = adjacentLocations[0][1];

        //how do you prevent the fish from moving in a locaiton whith something in it?

//         this.breed -= this.breed;
    }
}