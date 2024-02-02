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

                // Select "View All Employees" to be presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
                case 'View All Employees':
                    const employees = [
                        { id: 1, first_name: 'Cody', last_name: 'Payment', title: 'Sales Lead', department: 'Sales', salary: '100000', manager: 'null'},
                    ];

                    const employeesTable = new Table({
                        head: ['ID', 'First Name', 'Last Name', 'Title', 'Department', 'Salary', 'Manager'],
                    });

                    employees.forEach((employee) => {
                        employeesTable.push([employee.id, employee.first_name, employee.last_name, employee.title, employee.department, employee.salary, employee.manager]);
                    });

                    console.log(employeesTable.toString());
                    break;

                // Select "View All Roles" to be presented with the job title, role id, the department that role belongs to, and the salary for that role
                case 'View All Roles':
                    const roles = [
                        { id: 1, title: 'Sales Lead', department: 'Sales', salary: '100000' },
                        { id: 2, title: 'Salesperson', department: 'Sales', salary: '80000' },
                        { id: 3, title: 'Lead Engineer', department: 'Engineering', salary: '150000' },
                        { id: 4, title: 'Software Engineer', department: 'Engineering', salary: '120000' },
                        { id: 5, title: 'Account Manager', department: 'Finance', salary: '160000' },
                        { id: 6, title: 'Accountant', department: 'Finance', salary: '125000' },
                        { id: 7, title: 'Legal Team Lead', department: 'Legal', salary: '250000' },
                        { id: 8, title: 'Lawyer', department: 'Legal', salary: '190000' },
                    ];

                    const rolesTable = new Table({
                        head: ['ID', 'Title', 'Department', 'Salary'],
                    });

                    roles.forEach((role) => {
                        rolesTable.push([role.id, role.title, role.department, role.salary]);
                    });

                    console.log(rolesTable.toString());
                    break;

                // Select "View All Departments" to be presented with a formatted table showing department names and department ids
                case 'View All Departments':
                    const departments = [
                        { id: 1, name: 'Sales' },
                        { id: 2, name: 'Engineering' },
                        { id: 3, name: 'Finance' },
                        { id: 4, name: 'Legal' },
                    ];

                    const departmentsTable = new Table({
                        head: ['ID', 'Department Name'],
                    });

                    departments.forEach((department) => {
                        departmentsTable.push([department.id, department.name]);
                    });

                    console.log(departmentsTable.toString());
                    break;

                // Select "Quit" to exit the program
                case 'Quit':
                    console.log('Exiting the Program...');
                    process.exit();

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