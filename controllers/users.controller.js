let {user} = require("../models/users.model");
const {v4: uuidv4} = require("uuid");

const getUser = (req, res) => {
    res.status(200).send({
        'success': true,
        'data': user
    })
}

const setUser = (req, res) => {
    const {name, address} = req.body;
    user.push({
        'id': uuidv4(),
        'name': name,
        'address': address
    });
    res.status(201).send({
        'success': true,
        'message': 'User has been added successfully',
        'data': user
    })
}

const updateUser = (req, res) => {
    const userId = req.params.id;
    const {name, address} = req.body;
    user.filter((e) => e.id === userId).map((e) => {
        e.name = name;
        e.address = address;
    })
    res.status(200).send({
        'success': true,
        'message': 'User has been updated successfully',
        'data': user
    })
}

const deleteUser = (req, res)=>{
    const userId = req.params.id;
    user = user.filter((e)=> e.id !== userId);
    res.status(200).send({
        'success': true,
        'message': 'User has been deleted successfully',
        'data': user
    })
}

module.exports = {getUser, setUser, updateUser, deleteUser}