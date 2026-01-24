 // RecipeDetails component
  import useRecipeStore  from './recipeStore';

  const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    
    
    return (
      <div>
        <button onClick ={() => deleteRecipe(recipeId)}>Delete Recipe</button>
      </div>
    );
  };
  export default DeleteRecipeButton;