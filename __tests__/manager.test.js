const Manager = require('../lib/Manager');

test("Create a Manager's department number", () => {
    const manager = new Manager('Chuck', 0001, 'boss_man@gmail.com', 22);

    expect(manager.officeNum).toEqual(expect.any(Number));
})

test("Obtains the Manager's department number", () => {
    const manager = new Manager('Chuck', 0001, 'boss_man@gmail.com', 22);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
})

test("Obtains the Manager's role", () => {
    role = 'Manager'
    const manager = new Manager('Chuck', 0001, 'boss_man@gmail.com', 22);

    expect(manager.getRole()).toEqual('Manager');
})