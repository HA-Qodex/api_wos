const express = require('express');
const {user} = require("../models/users.model");
const {getUser, setUser, updateUser, deleteUser} = require('../controllers/users.controller')
const router = express.Router();

router.get('/',getUser);

router.post('/', setUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;