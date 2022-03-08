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