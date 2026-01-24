
import './App.css'

//importing components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  
  return (
   <div className="app">
    <h1>Recipe App</h1>
    <RecipeList />
    <AddRecipeForm />

   </div>
  );
}

export default App;
 




