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
    const optionChosen = await askIntroQuestions();

    if (optionChosen.option === "addDepartment") {
        const department = await askDepartmentQuestions();
        console.log(department);
    }
    if (optionChosen.option === "addRole") {
        // get departments, if non dont proceed.
        const roleAnswers = await askRoleQuestions();
        console.log(roleAnswers);
    }
    if (optionChosen.option === "addEmployee") {
        const employeAnswers = await askEmployeeQuestions();
        console.log(employeAnswers);
    }
};

start();