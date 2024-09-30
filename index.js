const inquirer = require('inquirer');
const db = require('./db');
const consoleTable = require('console.table');

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update employee role',
          'Exit'
        ]
      }
    ])
    .then(({ action }) => {
      switch (action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update employee role':
          updateEmployeeRole();
          break;
        default:
          db.end();
      }
    });
}

function viewAllDepartments() {
  db.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    mainMenu();
  });
}

function viewAllRoles() {
  const query = `
    SELECT roles.id, roles.title, roles.salary, departments.name AS department
    FROM roles
    JOIN departments ON roles.department_id = departments.id
  `;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    mainMenu();
  });
}

function viewAllEmployees() {
  const query = `
    SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, employees.manager_id
    FROM employees
    JOIN roles ON employees.role_id = roles.id
    JOIN departments ON roles.department_id = departments.id
  `;
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    mainMenu();
  });
}

// Add more functions for adding departments, roles, employees, and updating employee roles...
function addDepartment() {
    inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter the name of the department:'
        }
      ])
      .then(({ name }) => {
        db.query('INSERT INTO departments (name) VALUES ($1)', [name], (err) => {
          if (err) throw err;
          console.log(`Added ${name} to the database.`);
          mainMenu();
        });
      });
  }
  
mainMenu();
