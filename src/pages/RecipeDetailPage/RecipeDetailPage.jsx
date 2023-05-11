import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function RecipeDetailPage() {
    const recipesAPI = require('../../utilities/recipes-api')

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const recipe = await recipesAPI.getOne(id);
      setRecipe(recipe);
    }
    getRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2>{recipe.title}</h2>
      <p>Preparation Time: {recipe.prepTime}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Cooking Instructions:</h3>
      <p>{recipe.instructions}</p>
      <h3>Reviews:</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {recipe.reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.name}</td>
              <td>{review.review}</td>
              <td>{review.starRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
