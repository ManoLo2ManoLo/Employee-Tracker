const db = require ('./db/connection');
const inquirer = require('inquirer');

function printIntroduction() {
    console.log('███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗');
    console.log('██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝');
    console.log('█████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░');
    console.log('██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░');
    console.log('███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗');
    console.log('╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝');
    console.log('   ███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗██████╗░');
    console.log('   ████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝██╔══██╗');
    console.log('   ██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██████╔╝');
    console.log('   ██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██╔══██╗');
    console.log('   ██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░░██║');
    console.log('   ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝');

    askQuestion();
}

const askQuestion = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                // Enter the name, salary, and department for the role into the database
                'Add a Role',
                // Employee's first name, last name, role, and manager
                'Add an Employee',
                // Select an employee and update their role in database
                'Update an Employee Role'
            ]
        }
    ]).then(function(data){
        switch (data.task) {
            case "View All Departments":
                displayDepartments();
                break;
            case "View All Roles":
                displayRoles();
                break;
            case "View All Employees":
                displayEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;                
        }
    })
}

function displayDepartments() {
    const sql = `SELECT
                    department.id,
                    department.name AS depertment
                FROM department`

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        askQuestion();
    })
}

function displayRoles() {
    const sql = `SELECT
                    role.id,
                    role.title,
                    department.name AS department,
                    role.salary
                FROM role
                JOIN department ON role.department_id = department.id`

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        askQuestion();
    })
}

function displayEmployees() {
    const sql = `SELECT
                    employee.id,
                    employee.first_name,
                    employee.last_name,
                    role.title AS title,
                    department.name AS department,
                    role.salary AS salary,
                    manager.first_name AS manager
                FROM employee
                JOIN role ON employee.role_id = role.id
                JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id;`

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        askQuestion();
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What department would you like to add?',
            validate: input => {
                if (input && input.length <= 30) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(function(data) {
        const sql = `INSERT INTO department (name)
                    VALUES ('${data.department}')`

        db.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(results);
            askQuestion();
        });
    });
}

function addRole() {

}

function addEmployee() {

}

db.connect(err => {
    if (err) throw err;
    console.log()
})

printIntroduction();