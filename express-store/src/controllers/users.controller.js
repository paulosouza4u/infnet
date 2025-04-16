const usersModel = require('../models/users.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await usersModel.getUsers();

        if (!users || !users.length === 0) {
            return res.status(404).json({message: 'No users found.'});
        }

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Something went wrong.'});
    }
}

module.exports = {
    getAllUsers
}