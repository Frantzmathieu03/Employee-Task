<<<<<<< HEAD
# Employee-Task
=======
## Employee Management CLI Application

The Employee Management CLI Application is a command-line tool that allows a user to manage departments, roles, and employees in a PostgreSQL database. It provides an interface to view, add, and update departments, roles, and employees within an organization.

Table of Contents
Installation
Usage
Features
Database Schema
Technologies Used
License
Installation
Clone the repository:



## Create a PostgreSQL database named employee-management 

Created the necessary tables (departments, roles, employees) according to the schema described below.
You can use PGAdmin or psql to create the database and tables.
Configure the Database: Edit the db.js file with your PostgreSQL connection details:



### Main Menu Options

View All Departments: Displays a formatted table showing department names and IDs.
View All Roles: Shows job titles, role IDs, associated departments, and salaries.
View All Employees: Displays employee information such as IDs, first/last names, job titles, departments, salaries, and managers.
Add Department: Prompts for the department name and adds it to the database.
Add Role: Prompts for the role name, salary, and associated department and adds it to the database.
Add Employee: Prompts for the employee's first name, last name, role, and manager, then adds the employee to the database.
Update Employee Role: Prompts to select an employee and updates their role.
Features
View all departments, roles, and employees in a formatted table.
Add new departments, roles, and employees.
Update the role of an existing employee.
Database Schema
The PostgreSQL database consists of the following tables:
