const Recipe = require('../../models/recipe');

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
  updateRecipe
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
  try{
    const recipe = await Recipe.create(req.body)
    res.json(recipe);
  }
  catch{

  }
}

async function deleteOne(req, res) {
  try {
    await Recipe.deleteOne({ _id: req.params.id }).exec();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateRecipe(req, res) {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id, // recipe ID to update
      req.body, // new recipe data
      { new: true } // return the updated recipe
    );
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
