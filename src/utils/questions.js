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

module.exports = { introQuestions };