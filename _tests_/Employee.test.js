const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const player = new Employee('Felix');

    expect(player.name).toBe('Felix');
    expect(player.id).toEqual(expect.any(""));
    expect(player.email).toEqual(expect.any(""));
    
});
