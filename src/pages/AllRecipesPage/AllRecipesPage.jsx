import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllRecipesPage.css'


export default function AllRecipesPage() {
  
  const [recipes, setRecipes] = useState([]);


  const recipesAPI = require('../../utilities/recipes-api');
  useEffect(() => {
    async function fetchRecipes() {
      const data = await recipesAPI.getAll();
      setRecipes(data);
    }
    fetchRecipes();
  }, []);
  
  
  return (
    <main>
      <table id="list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Preparation Time</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.title}</td>
            <td>{recipe.prepTime}</td>
            <td>{recipe.createdBy.name}</td>
            <td><Link to={`/recipes/${recipe._id}`}>See Details</Link></td>
          </tr>
        ))}
        </tbody>
      </table>
    </main>
  );
}