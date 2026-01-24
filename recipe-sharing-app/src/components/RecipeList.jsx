 // RecipeList component
  import {Link} from "react-router-dom"
  import useRecipeStore  from './recipeStore';
  import SearchBar from "./SearchBar";

  const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes());

    return (
      <div>
        <SearchBar />

        {filteredRecipes.length === 0 ? (
          <p>No recipes found.</p>
        ): (
          filteredRecipes.map(recipe => (
            <div key={recipe.id} className="mb-3 p-3 border rounded">
              <h3 className="font-bold">{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} className="text-blue-500">
              View Details
              </Link>
            </div>
          ))
        )}
      </div>
    );
  }

  
  export default RecipeList;