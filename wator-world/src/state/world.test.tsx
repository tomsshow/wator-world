import Fish from './fish';
import World from './world';

test('Sanity can construct a world', () => {
    const world = new World(2, 2);
})

test('Can add a fish', () => {
    const world = new World(2,2);
    const fish = new Fish(0,0);
    world.addEntity(fish);
    expect(world.getEntityAt(0, 0)).toBe(fish);
})

// create a test that the newly constructed world is empty: 
// that is to say, getEntityAt() will return null for every location
test('Initial world is empty', () => {
    const world = new World(2,2);
    expect(world.getEntityAt(0,0)).toBeNull();
    expect(world.getEntityAt(1,0)).toBeNull();
    expect(world.getEntityAt(0,1)).toBeNull();
    expect(world.getEntityAt(1,1)).toBeNull();
})

test('Get adjacent simple', () => {
    const world = new World(5,5); // creates worlds
    world.getAdjacentLocations(2,2); // asks for adjacent locations from the point 2,2

//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][ y ][ y ][ y ][   ] // 1
// [   ][ y ][ 0 ][ y ][   ] // 2
// [   ][ y ][ y ][ y ][   ] // 3
// [   ][   ][   ][   ][   ] // 4

})



test('Get adjacent wrap left', () => {
    const world = new World(5,5);
    world.getAdjacentLocations(2,2);
    expect(world.getEntityAt(1,2)).toBe([1,2]);
    
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][   ][   ][   ] // 1
// [   ][ y ][ x ][   ][   ] // 2
// [   ][   ][   ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4

})

test('Get adjacent wrap right', () => {
    const world = new World(5,5);
    world.getAdjacentLocations(2,2);
    expect(world.getEntityAt(3,2)).toBe([3,2]);
    
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][   ][   ][   ] // 1
// [   ][   ][ x ][ y ][   ] // 2
// [   ][   ][   ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4

})

test('Get adjacent wrap up', () => {
    const world = new World(5,5);
    world.getAdjacentLocations(2,2);
    expect(world.getEntityAt(2,1)).toBe([2,1]);
    
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][ y ][   ][   ] // 1
// [   ][   ][ x ][   ][   ] // 2
// [   ][   ][   ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4
})

test('Get adjacent wrap down', () => {
    const world = new World(5,5);
    world.getAdjacentLocations(2,2);
    expect(world.getEntityAt(2,3)).toBe([2,3]);
    
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][   ][   ][   ] // 1
// [   ][   ][ x ][   ][   ] // 2
// [   ][   ][ y ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4
})