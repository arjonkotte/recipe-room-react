import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe } from '../../utilities/recipes-api';

export default function DeleteRecipeButton({ recipeId }) {
  const navigate = useNavigate();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    try {
      await deleteRecipe(recipeId);
      navigate('/recipes');
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <button onClick={handleDelete} disabled={deleting}>
      {deleting ? 'Deleting...' : 'Delete Recipe'}
    </button>
  );
}
