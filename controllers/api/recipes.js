const Recipe = require('../../models/recipe');

module.exports = {
  getAll,
  create,
  getOne
};

async function getAll(req, res) {
  const recipes = await Recipe.find({})
  .populate('createdBy', 'name')
  .sort('timestamp')
  .exec()
  res.json(recipes);
}

async function getOne(req,res) {
  const recipe = await Recipe.findById(req.params.id).exec()
  res.json(recipe)
}

async function create(req, res) {
  const recipe = await Recipe.create(req.body)
  res.json(recipe);
}
