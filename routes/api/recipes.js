const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/items
router.get('/', recipesCtrl.getAll);
// GET /api/items/:id
router.post('/', recipesCtrl.create);

module.exports = router;