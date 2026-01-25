 // RecipeDetails component
  import {useParams } from "react-router-dom";
  import  useRecipeStore  from './recipeStore';
  import EditRecipeForm from "./EditRecipeForm";
  import DeleteRecipeButton from "./DeleteRecipeButton";

  const RecipeDetails = () => {
    const {id} = useParams();

    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id.toString() === id)
    );
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);
    const isFavorite = useRecipeStore(state=> recipe? state.isFavorite(recipe.id) : false);
    
    if (!recipe) {
        return <p>Recipe not found</p>
    }

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />

        <button 
         onClick={() =>
          isFavorite
          ? removeFavorite(recipe.id)
          : addFavorite(recipe.id)
        }
        >
          {isFavorite? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    );

   
  };

  export default RecipeDetails;