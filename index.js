// npm i
// npm i --save mysql2
// npm i cli-table

const inquirer = require('inquirer');
const Table = require('cli-table');
const fs = require('fs');

// The user will be given the following options: "View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", and "Update an Employee Role"
function displayMenu() {
    console.log('');

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'userInput',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            },
        ])
        .then((response) => {
            switch(response.userInput) {
                // Select "View All Roles" to be presented with the job title, role id, the department that role belongs to, and the salary for that role
                case 'View All Roles':
                    break;

                // Select "View All Departments" to be presented with a formatted table showing department names and department ids
                case 'View All Departments':
                    const departments = [
                        { id: 1, name: 'Sales' },
                        { id: 2, name: 'Engineering' },
                        { id: 3, name: 'Finance' },
                        { id: 4, name: 'Legal' },
                    ];

                    const table = new Table({
                        head: ['ID', 'Department Name'],
                    });

                    departments.forEach((department) => {
                        table.push([department.id, department.name]);
                    });

                    console.log(table.toString());
                    break;

                // Select "Quit" to exit the program
                case 'Quit':
                    console.log('Exiting the Program...');
                    process.exit();
                    break;

                // Use default response if action is invalid
                default:
                    console.log('Invalid choice. Please try again.');
                    break;
            }

            // Recursive call to keep the program running
            displayMenu();
        });
}

// Start the program by calling the displayMenu function
displayMenu();