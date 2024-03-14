const express = require('express');
const {   createProfile, userLogin, selectProfile, profileUpdate } = require('../controller/userController');
const AuthMiddleware = require('../middlerware/AuthMiddleware');
const { createTodo, selectTodo, updateTodo, statusUpdateTodo, deleteTodo } = require('../controller/TaskController');



const router = express.Router();

// routing
router.post('/createProfile' , createProfile)

// user routing
router.post('/userLogin', userLogin)
router.get('/selectProfile', AuthMiddleware , selectProfile)
router.post('/profileUpdate' , AuthMiddleware , profileUpdate)

// todo_routing
router.post('/createTodo' , AuthMiddleware , createTodo)
router.get('/selectTodo' , AuthMiddleware , selectTodo)
router.post('/updateTodo' ,AuthMiddleware , updateTodo )
router.post('/statusUpdateTodo' ,AuthMiddleware , statusUpdateTodo )
router.get('/deleteTodo' ,AuthMiddleware , deleteTodo )



module.exports = router;