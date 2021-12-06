const introQuestions = [{
    type: "list",
    name: "option",
    message: "Please choose from one of the following options: ",
    choices: [{
            name: "View Departments",
            value: "viewDepartments",
        },
        {
            name: "View Roles",
            value: "viewRoles",
        },
        {
            name: "View Employees",
            value: "viewEmployees",
        },
        {
            name: "Add a Department",
            value: "addDepartment",
        },
        {
            name: "Add a Role",
            value: "addRole",
        },
        {
            name: "Add a Employee",
            value: "addEmployee",
        },
        {
            name: "Add an Employee's Role",
            value: "updateEmployeeRole",
        },
        {
            name: "Quit",
            value: "quit",
        },
    ],
}, ];

const departmentQuestions = [{
    type: "input",
    name: "departmentName",
    message: "Please enter the related Department Name: ",
}, ];

module.exports = { introQuestions, departmentQuestions };