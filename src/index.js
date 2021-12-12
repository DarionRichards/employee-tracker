// import modules
const inquirer = require("inquirer");

// import questions
const {
    introQuestions,
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
    updateRoleQuestions,
    updateManagerQuestions,
    viewDepartmentQuestion,
    deleteDepartmentQuestion,
    deleteRoleQuestion,
    deleteEmployeeQuestion,
    calcUtilBudget,
} = require("./utils/questions");

// import DB
const Db = require("./db/Db");

// ask functions
const askIntroQuestions = async() => await inquirer.prompt(introQuestions);

const askDepartmentQuestions = async() =>
    await inquirer.prompt(departmentQuestions);

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
            const employeeQuery = "SELECT * FROM employee;";
            const employee = await db.query(employeeQuery);

            if (employee.length) {
                const questions = await updateRoleQuestions(db);
                const { employees, role_id } = await inquirer.prompt(questions);
                console.log(employees);
                // query to database
                const query = `UPDATE employee SET role_id = ${role_id} WHERE id = ${employees};`;
                await db.query(query);
            }
        }

        if (option === "updateEmployeeManager") {
            const employeeQuery = "SELECT * FROM employee;";
            const employee = await db.query(employeeQuery);
            console.table(employee);
            if (employee.length) {
                const questions = await updateManagerQuestions(db);
                const { employee, manager } = await inquirer.prompt(questions);
                console.log(employee, manager);

                const query = `UPDATE employee SET manager_id = ${manager} WHERE id = ${employee};`;
                await db.query(query);
            }
        }

        if (option === "viewEmployeeDepo") {
            // await choice of department
            const questions = await viewDepartmentQuestion(db);
            const { department } = await inquirer.prompt(questions);
            // query select employee where matches department
            const query = `SELECT first_name, last_name FROM employee INNER JOIN role ON employee.role_id = role.id WHERE department_id = ${department};`;
            console.table(await db.query(query));
        }
        if (option === "viewManager") {
            const managerQuery =
                "SELECT first_name AS firstName, last_name AS lastName FROM employee WHERE manager_id IS NULL;";
            const data = await db.query(managerQuery);
            console.table(data);
        }
        if (option === "deleteDepartment") {
            const questions = await deleteDepartmentQuestion(db);
            const { department } = await inquirer.prompt(questions);
            const query = `DELETE FROM department WHERE id = ${department};`;
            await db.query(query);
        }
        if (option === "deleteRole") {
            const questions = await deleteRoleQuestion(db);
            const { role } = await inquirer.prompt(questions);
            const query = `DELETE FROM role WHERE id = ${role};`;
            await db.query(query);
        }
        if (option === "deleteEmployee") {
            const questions = await deleteEmployeeQuestion(db);
            const { employee } = await inquirer.prompt(questions);
            const query = `DELETE FROM employee WHERE id = ${employee};`;
            await db.query(query);
        }
        if (option === "calcUtilBudget") {
            const question = await calcUtilBudget(db);
            const { department } = await inquirer.prompt(question);
            const query = `SELECT SUM(salary) AS Total_Utilized_Budget FROM role WHERE department_id = ${department};`;
            console.table(await db.query(query));
        }
        if (option === "quit") {
            active = false;
            db.stop();
            console.log("Goodbye!");
        }
    }
};

start();