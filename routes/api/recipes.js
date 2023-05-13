const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/recipes
router.get('/', recipesCtrl.getAll);
// GET /api/recipes/:id
router.get('/:id', recipesCtrl.getOne)

router.post('/', recipesCtrl.create);
router.post('/:id/edit', recipesCtrl.updateRecipe)

router.delete('/:id', recipesCtrl.deleteOne)

module.exports = router;