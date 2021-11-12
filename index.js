const inquirer = require('inquirer');

const askQuestion = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: [
                // Shows Departments Names and Ids (in a table)
                'View All Departments',
                // Shows Job Title, Role Id, Department that role belongs to, and a salary for that role
                'View All Roles',
                // Shows Employee Data, including employee ids, first name, last name, job titles, departments, salaries, and managers that the employees report to
                'View All Employees',
                // Enters Department Name into database
                'Add a Department',
                // Enter the name, salary, and department for the role into the database
                'Add a Role',
                // Employee's first name, last name, role, and manager
                'Add an Employee',
                // Select an employee and update their role in database
                'Update an Employee Role'
            ]
        }
    ])
}

askQuestion();