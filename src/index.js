// import modules
const inquirer = require("inquirer");

// import questions
const {
    introQuestions,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
} = require("./utils/questions");

// import DB
const Db = require("./db/Db");

// ask functions
const askIntroQuestions = async() => await inquirer.prompt(introQuestions);

const askDepartmentQuestions = async() =>
    await inquirer.prompt(departmentQuestions);

const askRoleQuestions = async() => await inquirer.prompt(roleQuestions);

const askEmployeeQuestions = async() =>
    await inquirer.prompt(employeeQuestions);

// start app
const start = async() => {
    const db = new Db({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "password123",
        database: process.env.DB_NAME || "company_db",
    });

    await db.start();

    let active = true;

    while (active) {
        const { option } = await askIntroQuestions();

        if (option === "addDepartment") {
            const { departmentName } = await askDepartmentQuestions();

            const query = `INSERT INTO department (name) VALUES ('${departmentName}');`;
            const data = await db.query(query);

            console.log(`Added ${departmentName} into database!`);
            console.table(data);
        }
        if (option === "addRole") {
            // get departments, if non dont proceed.
            const roleAnswers = await askRoleQuestions();
        }
        if (option === "addEmployee") {
            const employeeAnswers = await askEmployeeQuestions();
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