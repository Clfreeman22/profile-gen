const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, deptNum) {

        super(name, id, email);

        this.deptNum = deptNum;
    }

    getDeptNum() {
        return this.deptNum;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;