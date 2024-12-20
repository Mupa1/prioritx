const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/', userController.getUsers);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/delete-all', userController.deleteAll);
router.put('/:id', userController.updateUser);

module.exports = router;