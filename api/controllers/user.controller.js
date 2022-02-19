const User = require('../models/user')

const GetAllUsers = async (req, res, next) => {
    const users = await User.find({});
    res.send(users);
}

module.exports = {GetAllUsers}