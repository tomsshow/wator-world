import Entity from './entity';
import Fish from './fish';
import World from './world';

test('when there is an empty adjacent location, we move to it', ()=>{
    let fish = new Fish(1, 1);
    let world = new World(3, 3);

    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[1,2]]));
    
    fish.tick(world);

    expect(fish.x).toEqual(1);
    expect(fish.y).toEqual(2);
})

test('when all adjacent locations already have a fish, we stay in place', ()=> {
    let redFish = new Fish(1,1);
    let blueFish = new Fish(1,2);

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

    //visual expectation    
//   0    1    2   
// [   ][   ][   ] 0
// [   ][ r ][   ] 1
// [   ][ b ][   ] 2
})

test('when there are two adjacent locations and one is full, we move to the empty location', () => {
    // TODO implement me
    let redFish = new Fish(1,1);
    let blueFish = new Fish(1,2);
    
    let world = new World(3,3);
    world.addEntity(redFish);
    world.addEntity(blueFish);

    jest.spyOn(world, "getAdjacentLocations").mockImplementation((x,y) => new Set([[blueFish.x, blueFish.y], [1,0]]));


    expect(false).toEqual(true);
    //visual expectation    
//   0    1    2   
// [   ][   ][   ] 0
// [   ][ r ][   ] 1
// [   ][ b ][   ] 2
})

test('when a fish is not ready to breed and there is an adjacent empty location, we move there and our old location is empty', () => {
    // TODO implement me
    expect(false).toEqual(true);
})

test('when a fish is ready to breed and there is an adjacent empty location, we create a new fish', () => {
    // TODO implement me
    expect(false).toEqual(true);

})
