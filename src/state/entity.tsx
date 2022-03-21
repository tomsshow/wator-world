export default class Entity{

    x: number;
    y: number;
    breed: number;
    
    constructor(x: number, y: number, breed: number){
        this.x = x;
        this.y = y;
        this.breed = breed;
    }

    /** */
    tick(world){
        throw new Error("unimplimented")    
    }
}