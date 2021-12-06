// import modules
const inquirer = require("inquirer");

// import questions
const { introQuestions } = require("./utils/questions");

const askIntroQuestions = async() => {
    const optionChosen = await inquirer.prompt(introQuestions);
    return optionChosen;
};

const start = async() => {
    const option = await askIntroQuestions();
    console.log(option);
};

start();