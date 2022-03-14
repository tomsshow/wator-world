export default class Entity{

    x: number;
    y: number;
    
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    /** */
    tick(world){
        throw new Error("unimplimented")    
    }
}