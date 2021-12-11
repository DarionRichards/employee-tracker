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
            await db.query(query);

            console.log(`Added ${departmentName} into database!`);
        }

        if (option === "viewDepartment") {
            const query = "SELECT * FROM department";
            const data = await db.query(query);
            console.table(data);
        }

        if (option === "addRole") {
            // get departments, if non dont proceed.
            const query = `SELECT * FROM department;`;
            const departments = await db.query(query);

            if (departments.length) {
                const questions = await roleQuestions(db);
                const { name, salary, department_id } = await inquirer.prompt(questions);

                const query = `INSERT INTO role (title, salary, department_id) VALUES ("${name}", "${salary}", "${department_id}");`;
                await db.query(query);
                console.log(`Added ${name} into Role Table!`);
            } else {
                console.log("[ERROR]: Please enter a department before proceeding...");
            }
        }

        if (option === "viewRole") {
            const query = "SELECT * FROM role";
            const data = await db.query(query);
            console.table(data);
        }

        if (option === "addEmployee") {
            // get roles
            const query = `SELECT * FROM role;`;
            const role = await db.query(query);

            // if no roles, dont proceed
            if (role.length) {
                // get employee answers
                const questions = await employeeQuestions(db);
                const { firstName, lastName, role_id } = await inquirer.prompt(questions);

                // query to database
                const query = `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${firstName}","${lastName}","${role_id}");`;
                await db.query(query);
                console.log(`Created ${firstName} ${lastName} as an employee!`);
            } else {
                console.log("[ERROR]: Please enter a role before proceeding...");
            }
        }

        if (option === "viewEmployee") {
            const query = "SELECT * FROM employee";
            const data = await db.query(query);
            console.table(data);
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