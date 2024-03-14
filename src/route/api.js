const express = require('express');
const {   createProfile, userLogin, selectProfile, profileUpdate } = require('../controller/userController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const { createTodo, selectTodo, updateTodo, statusUpdateTodo, deleteTodo } = require('../controller/TodoController');



const router = express.Router();






module.exports = router;