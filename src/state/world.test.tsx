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
    const adjacents = world.getAdjacentLocations(2,2);

    const expected = new Set([ [1,2], [2, 1], [2, 3], [3,2] ]);

    expect(adjacents).toEqual(expected);

//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][ y ][   ][   ] // 1
// [   ][ y ][ 0 ][ y ][   ] // 2
// [   ][   ][ y ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4

})



test('Get adjacent wrap left', () => {
    const world = new World(5,5);
    const adjacents = world.getAdjacentLocations(0,2);

    const expected = new Set([ [0,1], [0, 3], [1, 2], [4,2] ]);

    expect(adjacents).toEqual(expected);
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [ y ][   ][   ][   ][   ] // 1
// [ x ][ y ][   ][   ][ y ] // 2
// [ y ][   ][   ][   ][   ] // 3
// [   ][   ][   ][   ][   ] // 4

})

test('Get adjacent wrap right', () => {
    const world = new World(5,5);
    const adjacents = world.getAdjacentLocations(4,2);

    const expected = new Set([ [0,2], [3, 2], [4, 1], [4,3] ]);

    expect(adjacents).toEqual(expected);
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][   ][   ][   ] // 0
// [   ][   ][   ][   ][ y ] // 1
// [ y ][   ][   ][ y ][ x ] // 2
// [   ][   ][   ][   ][ y ] // 3
// [   ][   ][   ][   ][   ] // 4

})

test('Get adjacent wrap up', () => {
    const world = new World(5,5);
    const adjacents = world.getAdjacentLocations(2,0);

    const expected = new Set([ [1,0], [2, 1], [2, 4], [3,0] ]);

    expect(adjacents).toEqual(expected);
//visual expectation    
//   0    1    2    3    4 
// [   ][ y ][ x ][ y ][   ] // 0
// [   ][   ][ y ][   ][   ] // 1
// [   ][   ][   ][   ][   ] // 2
// [   ][   ][   ][   ][   ] // 3
// [   ][   ][ y ][   ][   ] // 4
})

test('Get adjacent wrap down', () => {
    const world = new World(5,5);
    const adjacents = world.getAdjacentLocations(2,4);

    const expected = new Set([ [1,4], [2, 0], [2, 3], [3,4] ]);

    expect(adjacents).toEqual(expected);
//visual expectation    
//   0    1    2    3    4 
// [   ][   ][ y ][   ][   ] // 0
// [   ][   ][   ][   ][   ] // 1
// [   ][   ][   ][   ][   ] // 2
// [   ][   ][ y ][   ][   ] // 3
// [   ][ y ][ x ][ y ][   ] // 4
})

//extra credit
test('Get adjacent works with small grids', () => {
    const world = new World(2, 2);
    const adjacents = world.getAdjacentLocations(0,0);
    const expected = new Set([[1, 0], [0, 1]]);
    expect(adjacents).toEqual(expected);

//visual expectation    
//   0    1     
// [ r ][ y ] // 0
// [ y ][   ] // 1
})