const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.post('/', ProductController.create);
router.put('/id/:id', ProductController.update)
router.delete('/id/:id', ProductController.destroy);
router.get('/', ProductController.getAll);

module.exports = router;