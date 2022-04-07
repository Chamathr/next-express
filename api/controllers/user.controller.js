const req = require('express/lib/request');
const res = require('express/lib/response');
const User = require('../models/user')
const responses = require('../constants/responses')

const resultBody = responses.resultBody;
const errorBody = responses.errorBody;

const getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find({});
        resultBody.status = 200;
        resultBody.result = users;
        res.send(resultBody);
    }
    catch(error){
        errorBody.error = error
        res.status(500).send(errorBody)
    }
}

const addUsers = async (req, res, next) => { 
      try{
        const userDetails = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
          });

        await userDetails.save();
        resultBody.status = 201;
        resultBody.result = userDetails;
        res.send(resultBody);
      }
      catch(error){
        errorBody.error = error;
        res.status(500).send(errorBody);
      }
}

const updateUser = async (req, res, next) => {
    try{
        const filter = { _id: req.body._id };
        const update = { name: req.body.name, email: req.body.email, age: req.body.age };
        const userDetails = await User.findOneAndUpdate(filter, update, {
            new: true
        });

        resultBody.status = 200;
        resultBody.result = userDetails;
        res.send(resultBody)
    }
    catch(error){
        errorBody.error = error
        res.status(500).send(errorBody)
    }
}

const deleteUser = async (req, res, next) => {
    try{
        const filter = { _id: req.body._id };
        await User.findOneAndDelete(filter)
        resultBody.status = 200;
        resultBody.result = '';
        res.send(resultBody)
    }
    catch(error){
        errorBody.error = error
        res.status(500).send(errorBody)
    }
}

module.exports = {getAllUsers, addUsers, updateUser, deleteUser}