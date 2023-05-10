import { useState, useEffect, useParams } from 'react';
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
          <th>Title</th>
          <th>Preparation Time</th>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <tr key={index}>
            <td>{recipe.title}</td>
            <td>{recipe.prepTime}</td>
            <td><Link to={`"/recipes/${recipe.id}"`}>See Details</Link></td>
          </tr>
        ))};
        </tbody>
      </table>
    </main>
  );
}