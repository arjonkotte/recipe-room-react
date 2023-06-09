import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DeleteRecipeButton from '../../components/DeleteRecipeButton/DeleteRecipeButton';
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './RecipeDetailPage.css'

export default function RecipeDetailPage({user}) {
  const recipesAPI = require('../../utilities/recipes-api');
  const navigate = useNavigate(); // add this line to use navigate

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      const recipe = await recipesAPI.getOne(id);
      setRecipe(recipe);
    }
    getRecipe();
  }, [recipesAPI, id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  let isCreator = false
  if (user._id === recipe.createdBy){
    isCreator = true
  }

  // add an onClick function to the edit button
  const handleEdit = () => {
    navigate(`/recipes/${id}/edit`);
  };

  const handleReviewSubmit = async (review) => {
    const updatedRecipe = {
      ...recipe,
      reviews: [...recipe.reviews, review],
    };
    const updated = await recipesAPI.update(updatedRecipe._id, updatedRecipe);
    setRecipe(updated);
  };

  return (
    <main>
      <h2 className="title">{recipe.title}</h2>
      <h4>Preparation Time: {recipe.prepTime}</h4>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Cooking Instructions:</h3>
      <p>{recipe.instructions}</p>
      {isCreator && (
      <>
        <DeleteRecipeButton recipeId={recipe._id} />
        <button onClick={handleEdit}>Edit</button>
      </>
      )}
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

      <h4>Write a review!</h4>
      {user && <ReviewForm handleReviewSubmit={handleReviewSubmit} user={user} />}
    </main>
  );
}
