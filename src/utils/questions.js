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
    message: "Please enter the Department name: ",
}, ];

const roleQuestions = [{
        type: "input",
        name: "name",
        message: "Enter the name for the role:",
    },
    {
        type: "input",
        name: "salary",
        message: "Enter salary for the role: ",
    },
];

module.exports = { introQuestions, departmentQuestions, roleQuestions };