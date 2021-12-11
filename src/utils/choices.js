const getDepartments = async(db) => {
    const departments = await db.query(`SELECT * FROM department`);

    const questions = departments.map((department) => {
        return {
            name: department.name,
            value: department.id,
        };
    });

    return questions;
};

module.exports = {
    getDepartments,
};