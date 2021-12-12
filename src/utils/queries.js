const selectAllFromDepartmentTable = async(db) =>
    await db.query("SELECT * FROM department");

const selectAllFromRoleTable = async(db) =>
    await db.query("SELECT * FROM role;");

const selectAllFromEmployeeTable = async(db) =>
    await db.query("SELECT * FROM employee;");

module.exports = {
    selectAllFromDepartmentTable,
    selectAllFromRoleTable,
    selectAllFromEmployeeTable,
};