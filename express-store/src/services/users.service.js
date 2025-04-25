//services/ Onde mora a lógica de negócio real, como validações, filtros, cálculos etc.

const usersModel = require('../models/users.model');

const getAllUsers = async () => {
    const users = await usersModel.getUsers();
    if (!users || users.length === 0) {
        throw new Error('Users not found!');
    }
    return users;
};

const saveUser = async ({username, email, password}) => {
    const users = await usersModel.getUsers();

    const userExists = users.some(
        user =>
            user.username === username ||
            user.email === email

        //continuar...
    )
}

module.exports = {
    getAllUsers,
    saveUser
};