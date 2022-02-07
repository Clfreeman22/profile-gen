const generateWebPage = require('./src/generateWebPage.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

let teamMembers = []

const managerQuestions = () => {
    console.log(`
        Input Team Manager Information
    `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'deptNumber',
            message: "What is the Manager's department number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter a department number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        let { deptNumber } = managerData;
        let role = 'Manager';
        employeeQuestions(role, deptNumber);
    })
};

const employeeTypeQuestions = () => {
    inquirer.prompt([
    // Employee type
        {
            type: 'list',
            name: 'role',
            message: "Please choose the type of employee you would like to add from the list below:",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(empTypeData => {
        let { role } = empTypeData;
        
        if (role === 'Engineer') {
            console.log('Engineer was selected! ', role)
            engineerQuestions();
        } else if (role === 'Intern') {
            console.log('Intern was selected! ', role)
            internQuestions();
        } else {
            console.log('How did you get here? (employeeTypeQuestions() Function)');
        }
    })
}

const employeeQuestions = (value1, value2) => {
    inquirer.prompt([
    // Employee Name
        {
            type: 'input',
            name: 'name',
            message: "What is the their full name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter this employees full name!');
                }
            }
        },
        // Employee ID #
        {
            type: 'input',
            name: 'id',
            message: "What is their unique ID number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter this employee ID number!');
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        // Employee Email Address
        {
            type: 'input', 
            name: 'email',
            message: "What is their email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter this employees email address!');
                }
            }
        }
    ])
    .then(employeeData => {
        // Creates new Manager, Engineer, Intern based on role
        if (value1 === 'Manager') {
            let officeNum = value2;
            let {name, id, email } = employeeData;
            const manager = new Manager (name, id, email, officeNum);
            teamMembers.push(manager);
        } else if (value1 === 'Engineer') {
            let ghUsername = value2;
            let {name, id, email } = employeeData;
            const engineer = new Engineer (name, id, email, ghUsername);
            teamMembers.push(engineer);
        } else if (value1 = 'Intern') {
            let school = value2;
            let {name, id, email } = employeeData;
            const intern = new Intern (name, id, email, school);
            teamMembers.push(intern);
        } else {
            console.log("How did you get here? (employeeQuestions constructor function)")
        }
        anotherEmployeeQuestions();
    })
};

const anotherEmployeeQuestions = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployeeResponse',
            message: "Would you like to create another Team Member's profile?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            },
        }
    ])
    .then(employeeAddData => {
        let { addEmployeeResponse } = employeeAddData;
        if (addEmployeeResponse === true) {
            employeeTypeQuestions();
        } else {
            console.log(`
        You have completed making your team!
            `);
            return writeToFile(teamMembers);
        }
    })
};

function init() {
    managerQuestions()
}

init();