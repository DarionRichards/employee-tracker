const { getDepartments, getRoles } = require("./choices");

const introQuestions = [{
    type: "list",
    name: "option",
    message: "Please choose from one of the following options: ",
    choices: [{
            name: "Add a Department",
            value: "addDepartment",
        },
        {
            name: "View All Departments",
            value: "viewDepartment",
        },
        {
            name: "Add a Role",
            value: "addRole",
        },
        {
            name: "View All Roles",
            value: "viewRole",
        },
        {
            name: "Add a Employee",
            value: "addEmployee",
        },
        {
            name: "View All Employees",
            value: "viewEmployee",
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
    message: "Please enter the Department name:",
}, ];

const roleQuestions = async(db) => {
    return [{
            type: "input",
            name: "name",
            message: "Enter the name for the role:",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter salary for the role:",
        },
        {
            type: "list",
            name: "department_id",
            message: "Please choose corresponding department for the role:",
            choices: await getDepartments(db),
        },
    ];
};

const employeeQuestions = async(db) => {
    return [{
            type: "input",
            name: "firstName",
            message: "Enter the first name:",
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the last name:",
        },
        {
            type: "list",
            name: "role_id",
            message: "Please choose corresponding role for the employee:",
            choices: await getRoles(db),
        },
    ];
};

module.exports = {
    introQuestions,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
};