const { getDepartments, getRoles, getEmployee } = require("./choices");

const askMenuQuestions = async(inquirer) => {
    const questions = [{
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
                name: "Update an Employee's Role",
                value: "updateEmployeeRole",
            },
            {
                name: "Update an Employee's Manager",
                value: "updateEmployeeManager",
            },
            {
                name: "View Employees by Department",
                value: "viewEmployeeDepo",
            },
            {
                name: "View All Managers",
                value: "viewManager",
            },
            {
                name: "Delete a Department",
                value: "deleteDepartment",
            },
            {
                name: "Delete a Role",
                value: "deleteRole",
            },
            {
                name: "Delete a Employee",
                value: "deleteEmployee",
            },
            {
                name: "Calculate Department Utilized Budget",
                value: "calcUtilBudget",
            },
            {
                name: "Quit",
                value: "quit",
            },
        ],
    }, ];

    const answer = await inquirer.prompt(questions);
    return answer;
};

const askDepartmentQuestions = async(inquirer) => {
    const question = [{
        type: "input",
        name: "departmentName",
        message: "Please enter the Department name:",
    }, ];

    const answer = inquirer.prompt(question);
    return answer;
};
const roleQuestions = async(db) => [{
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

const employeeQuestions = async(db) => [{
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

const updateRoleQuestions = async(db) => [{
        type: "list",
        name: "employees",
        message: "Please choose an employee to update:",
        choices: await getEmployee(db),
    },
    {
        type: "list",
        name: "role_id",
        message: "Please choose the role to update an employee:",
        choices: await getRoles(db),
    },
];

const updateManagerQuestions = async(db) => [{
        type: "list",
        name: "employee",
        message: "Please choose an employee to update:",
        choices: await getEmployee(db),
    },
    {
        type: "list",
        name: "manager",
        message: "Please choose the correct manager:",
        choices: await getEmployee(db),
    },
];

const viewDepartmentQuestion = async(db) => [{
    type: "list",
    name: "department",
    message: "Please choose the department to view:",
    choices: await getDepartments(db),
}, ];

const deleteDepartmentQuestion = async(db) => [{
    type: "list",
    name: "department",
    message: "Please choose the department to delete:",
    choices: await getDepartments(db),
}, ];

const deleteRoleQuestion = async(db) => [{
    type: "list",
    name: "role",
    message: "Please choose the role to delete:",
    choices: await getRoles(db),
}, ];

const deleteEmployeeQuestion = async(db) => [{
    type: "list",
    name: "employee",
    message: "Please choose the employee to delete:",
    choices: await getEmployee(db),
}, ];

const calcUtilBudget = async(db) => [{
    type: "list",
    name: "department",
    message: "Please choose a department:",
    choices: await getDepartments(db),
}, ];

module.exports = {
    askMenuQuestions,
    askDepartmentQuestions,
    roleQuestions,
    employeeQuestions,
    updateRoleQuestions,
    updateManagerQuestions,
    viewDepartmentQuestion,
    deleteDepartmentQuestion,
    deleteRoleQuestion,
    deleteEmployeeQuestion,
    calcUtilBudget,
};