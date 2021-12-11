const getDepartments = async(db) => {
    const departments = await db.query(`SELECT * FROM department`);

    const choices = departments.map((department) => {
        return {
            name: department.name,
            value: department.id,
        };
    });

    return choices;
};

const getRoles = async(db) => {
    const roles = await db.query("SELECT * FROM role");

    const choices = roles.map((role) => {
        return {
            name: role.title,
            value: role.id,
        };
    });

    return choices;
};

module.exports = {
    getDepartments,
    getRoles,
};