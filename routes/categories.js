const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();

router.post('/', CategoryController.create);
router.put('/id/:id', CategoryController.update);
router.delete('/id/:id', CategoryController.destroy);
router.get('/', CategoryController.getAll);
router.get('/id/:id', CategoryController.getAll);


module.exports = router;
