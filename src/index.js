// import modules
const inquirer = require("inquirer");

// import questions
const { introQuestions, departmentQuestions } = require("./utils/questions");

const askIntroQuestions = async() => {
    const optionChosen = await inquirer.prompt(introQuestions);
    return optionChosen;
};

const askDepartmentQuestions = async() => {
    const departmentName = await inquirer.prompt(departmentQuestions);
    return departmentName;
};

const start = async() => {
    const optionChosen = await askIntroQuestions();

    if (optionChosen.option === "addDepartment") {
        const departmentName = await askDepartmentQuestions();
        console.log(departmentName);
    }
    if (optionChosen.option === "addRole") {
        // ask role quesitons
    }
    if (optionChosen.option === "addEmployee") {
        // ask role quesitons
    }
};

start();