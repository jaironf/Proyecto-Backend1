const express = require('express');
const UserController = require('../controllers/UserController');
const {authentication, isAdmin} = require('../middleware/authentication');
const router = express.Router();


router.post('/', authentication, isAdmin, UserController.create);
router.get('/', authentication, isAdmin, UserController.getAll);
router.post('/login', UserController.login);
router.delete('/logout', authentication, isAdmin, UserController.logout);

module.exports = router;
