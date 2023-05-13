import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getOne, update } from '../../utilities/recipes-api';

export default function RecipeEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const recipe = await getOne(id);
      setRecipe(recipe);
    }
    getRecipe();
  }, [id]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(recipe._id, recipe);
      navigate('/recipes');
    } catch (error) {
      console.error(error);
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={recipe.title} onChange={handleChange} />
        </label>
        <label>
          Prep Time:
          <input type="text" name="prepTime" value={recipe.prepTime} onChange={handleChange} />
        </label>
        <label>
          Instructions:
          <textarea name="instructions" value={recipe.instructions} onChange={handleChange} />
        </label>
        <label>
          Ingredients:
          <input name="ingredients" value={recipe.ingredients} onChange={handleChange} />
        </label>
        <button type="submit">Update Recipe</button>
      </form>
    </main>
  );
}
