
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//importing components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<RecipeList />} />
       <Route path="/recipes/:id" element={<RecipeDetails />} />
       <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  )  
    

}
export default App;
 




