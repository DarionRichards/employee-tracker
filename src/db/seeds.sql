use company_db;

INSERT INTO department (name)
VALUES 
("Human Resources"),
("Engineering"),
("Sales"),
("Finance");

INSERT INTO role (title, salary, department_id)
VALUES 
("HR Manager", "35000", "1"),
("HR Analyst", "32000", "1"),
("Lead Engineer", "75000", "2"),
("Software Engineer", "55000", "2"),
("Sales Leader", "40000", "3"),
("Sales Person", "23000", "3"),
("Account Manager", "80000", "4"),
("Accountant", "60000", "4");

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
("Jovan", "Swift", "1"),
("Carlo", "Welch", "2"),
("Elle", "Pace", "3"),
("Bertie ", "Hagan", "4"),
("Etta", "Rivas", "4"),
("Conan", "Bains", "4"),
("Nella", "Plumber", "5"),
("Marguerite", "Dillard", "6"),
("Kaitlyn", "Robson", "6"),
("Tyrique", "Fox", "6"),
("Rudy", "John", "7"),
("Chanelle", "Leigh", "8");

UPDATE employee SET manager_id = 1 WHERE (role_id = 2);
UPDATE employee SET manager_id = 3 WHERE (role_id = 4);
UPDATE employee SET manager_id = 5 WHERE (role_id = 6);
UPDATE employee SET manager_id = 7 WHERE (role_id = 8);

