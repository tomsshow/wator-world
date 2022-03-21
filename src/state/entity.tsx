export default class Entity{

    x: number;
    y: number;
    breedAtAge: number;
    age: number;
    
    constructor(x: number, y: number, breedAtAge: number, age: number){
        this.x = x;
        this.y = y;
        this.breedAtAge = breedAtAge;
        this.age = age;
    }

    /** */
    tick(world){
        throw new Error("unimplimented")    
    }
}