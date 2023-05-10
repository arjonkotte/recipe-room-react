import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import AllRecipesPage from '../AllRecipesPage/AllRecipesPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [recipes, setRecipes] = useState([]);

  const recipesAPI = require('../../utilities/recipes-api')


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/recipes/new" element={<NewRecipeForm/>} />} />
            <Route path="/recipes" element={<AllRecipesPage />} />
            <Route path="/" element={<AllRecipesPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
