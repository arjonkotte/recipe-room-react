import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewRecipeForm(props) {
  const [formData, setFormData] = useState({
    title: '',
    instructions: '',
    prepTime: '',
    ingredients: '',
    createdBy: props.user._id
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      error: ''
    });
  }

  const handleSubmit = async (evt) => {
    const recipesAPI = require('../../utilities/recipes-api');
    evt.preventDefault();

    try {  
      const newRecipe = { ...formData };
      delete newRecipe.confirm;
      delete newRecipe.error;
      await recipesAPI.add(newRecipe);
      navigate('/recipes');
    } catch {
      // Invalid recipe
      setError('Error Adding Recipe - Try Again');
    }
  }

  return (
    <main>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange}></input>
        <label>Prep. Time:</label>
        <input type="text" name="prepTime" value={formData.prepTime} onChange={handleChange}></input>
        <label>Instructions:</label>
        <textarea name="instructions" value={formData.instructions} onChange={handleChange}></textarea>
        <label>Ingredients:</label>
        <input name="ingredients" value={formData.ingredients} onChange={handleChange}></input>
        <button type="reset">Clear</button>
        <button type="button" onClick={handleSubmit}>Add Recipe</button>
        <Link to="/recipes"><button>Cancel</button></Link>
        {error && <div>{error}</div>}
      </form>
    </main>
  );
}
