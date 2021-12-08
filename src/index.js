// import modules
const inquirer = require("inquirer");

// import questions
const {
    introQuestions,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
} = require("./utils/questions");

const askIntroQuestions = async() => await inquirer.prompt(introQuestions);

const askDepartmentQuestions = async() =>
    await inquirer.prompt(departmentQuestions);

const askRoleQuestions = async() => await inquirer.prompt(roleQuestions);

const askEmployeeQuestions = async() =>
    await inquirer.prompt(employeeQuestions);

const start = async() => {
    let active = true;
    let departmentArray = [];
    let roleArray = [];
    let employeeArray = [];

    while (active) {
        const { option } = await askIntroQuestions();

        if (option === "addDepartment") {
            const departmentName = await askDepartmentQuestions();
            departmentArray.push(departmentName);
            console.log(departmentArray);
        }
        if (option === "addRole") {
            // get departments, if non dont proceed.
            const roleAnswers = await askRoleQuestions();
            roleArray.push(roleAnswers);
            console.log(roleAnswers);
        }
        if (option === "addEmployee") {
            const employeeAnswers = await askEmployeeQuestions();
            employeeArray.push(employeeAnswers);
            console.log(employeeAnswers);
        }
        if (option === "updateEmployeeRole") {
            console.log("Update Employees");
        }
        if (option === "quit") {
            active = false;
            console.log("Goodbye!");
        }
    }
};

start();