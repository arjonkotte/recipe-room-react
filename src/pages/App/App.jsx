import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewRecipeForm from '../../components/NewRecipeForm/NewRecipeForm';
import AllRecipesPage from '../AllRecipesPage/AllRecipesPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage'
import RecipeEditPage from '../RecipeEditPage/RecipeEditPage'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/recipes/new" element={<NewRecipeForm user={user} setUser={setUser}/>} />
            <Route path="/recipes" element={<AllRecipesPage />} />
            <Route path="/" element={<AllRecipesPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailPage user={user}/>}/>
            <Route path="/recipes/:id/edit" element={<RecipeEditPage/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
