const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name, id, email, ghUsername) {

        super(name, id, email);

        this.ghUsername = ghUsername;
    }

    getGithub() {
        return this.ghUsername;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;