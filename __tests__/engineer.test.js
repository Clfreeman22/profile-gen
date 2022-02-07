const Engineer = require('../lib/Engineer');

test("Create an engineer GitHub username", () => {
    const engineer = new Engineer("Big MAC", 1722, 'fakeemail@gmail.com', 'BigMC');

    expect(engineer.ghUsername).toEqual(expect.any(String));
})

test("Obtains an engineer's GitHub username", () => {
    const engineer = new Engineer("Big MAC", 1722, 'fakeemail@gmail.com', 'BigMC');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test("Obtains an engineer's role", () => {
    const engineer = new Engineer("Big MAC", 1722, 'fakeemail@gmail.com', 'BigMC');

    expect(engineer.getRole()).toEqual('Engineer');
})