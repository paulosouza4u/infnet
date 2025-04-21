//services/ Onde mora a lógica de negócio real, como validações, filtros, cálculos etc.

const usersModel = require('../models/users.model');

const getAllUsers = async () => {
    const users = await usersModel.getUsers();
    if (!users || users.length === 0) {
        throw new Error('Users not found!');
    }
    return users;
};

module.exports = {
    getAllUsers
};