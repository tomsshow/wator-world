import Entity from './entity';
import Fish from './fish';
import World from './world';

test('when there is an empty adjacent location, we move to it', ()=>{
    let fish = new Fish(1, 1, 3);
    let world = new World(3, 3);
    world.addEntity(fish);

    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[1,2]]));
    
    fish.tick(world);

    expect(fish.x).toEqual(1);
    expect(fish.y).toEqual(2);

    expect(world.getEntityAt(1,1)).toBeNull();
    expect(world.getEntityAt(1,2)).toBe(fish);
})

test('when all adjacent locations already have a fish, we stay in place', ()=> {
    let redFish = new Fish(1,1,3);
    let blueFish = new Fish(1,0,3);


    let world = new World(3,3);
    world.addEntity(redFish);
    world.addEntity(blueFish);
 
    // replace the implementation of world.getAdjacentLocations with a mock 
    // that only returns one square: the square containing bluefish.
    // this replaces the random locaiton with a location we can test the scenario with
    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[blueFish.x, blueFish.y]]));

    redFish.tick(world);

    expect(redFish.x).toEqual(1);
    expect(redFish.y).toEqual(1);

    expect(world.getEntityAt(1,1)).toBe(redFish);
    expect(world.getEntityAt(1,0)).toBe(blueFish);
    
})

test('when there are two adjacent locations and one is full, we move to the empty location', () => {
    let redFish = new Fish(0,1,3);
    let blueFish = new Fish(0,0,3);
    let [emptyX, emptyY] = [1, 1];
    

    let world = new World(3,3);
    world.addEntity(redFish);
    world.addEntity(blueFish);

    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([
        [blueFish.x, blueFish.y],
        [emptyX, emptyY] // An empty location
    ])); // need nudge on making this more dynamic

    redFish.tick(world);

    expect(redFish.x).toEqual(emptyX);
    expect(redFish.y).toEqual(emptyY);
    
    expect(world.getEntityAt(0,0)).toBe(blueFish);
    expect(world.getEntityAt(0,1)).toBeNull();
    expect(world.getEntityAt(emptyX,emptyY)).toBe(redFish);

//visual expectation    
//   0    1     
// [ b ][   ] 0
// [ r ][ e ] 1
})

test('when a fish is not ready to breed and there is an adjacent empty location, we move there and our old location is empty', () => {
    // TODO implement me
    let redFish = new Fish(0,1,3, 0);
    let world = new World(3,3);
    let [emptyX, emptyY] = [1, 1];

    world.addEntity(redFish);

    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[emptyX, emptyY]]));
    
    redFish.tick(world);

    expect(redFish.age).toBe(1);
    expect(world.getEntityAt(0,1)).toBeNull(); // The fish has moved, so its previous spot should be empty.
    expect(world.getEntityAt(emptyX, emptyY)).toBe(redFish); // The fish has moved to the new spot.    
})

test('when a fish is ready to breed and there is an adjacent empty location, we create a new fish', () => {
        let breedAtAge = 3;
        // TODO implement me
        let redFish = new Fish(0,1, breedAtAge, breedAtAge); // The fish is ready to breed on the next tick
        let world = new World(3,3);
        let [emptyX, emptyY] = [1, 1];
    
        world.addEntity(redFish);
    
        jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[emptyX, emptyY]]));
        
        redFish.tick(world);
    
        let newFish1 = world.getEntityAt(0, 1);
        let newFish2 = world.getEntityAt(emptyX, emptyY);

        expect(newFish1).toBeInstanceOf(Fish);
        expect(newFish2).toBeInstanceOf(Fish);
        expect(newFish1.age).toBe(0); // both fishes should now be newborns
        expect(newFish2.age).toBe(0);
})

test('when a fish is ready to breed and there is no adjacent location, what do we do???', () => {
    expect(false).toEqual(true);
})