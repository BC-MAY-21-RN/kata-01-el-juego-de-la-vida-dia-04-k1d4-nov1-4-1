// testeo

// import {newcell} from "./main"
const game = require('./main.js')

test('should do check dead cell', () => {

    expect(game.newcell.toString()).toBe('.');
    
})
test('should do check life cells', () => {

    game.newcell.setLife(1);
    expect(game.newcell.toString()).toBe('*');
    
})
test('should do check game', () => {
    expect(game.getArrayCell()).toBe(game.getArrayCell());
    
})
test('should do check setNeighbors', () => {

    game.newcell.setNeighbors(5);
    expect(game.newcell.getNeighbors()).toBe(5);
    
})
test('should do check rows', () => {

    expect(game.getRows()).toBe(4);
    
})
test('should do check colums', () => {
    
    expect(game.getColumns()).toBe(8);
    
})
