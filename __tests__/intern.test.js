const Intern = require('../lib/Intern');

test("Creates an intern's school name", () => {
    const intern = new Intern('J-Dog', 0365, 'fakeemail@gmail.com', 'South Harmon');

    expect(intern.school).toEqual(expect.any(String));
})

test("Obtains the intern's school name", () => {
    const intern = new Intern('J-Dog', 0365, 'fakeemail@gmail.com', 'South Harmon');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("Obtains the intern's role", () => {
    const intern = new Intern('J-Dog', 0365, 'fakeemail@gmail.com', 'South Harmon');

    expect(intern.getRole()).toEqual('Intern');
})