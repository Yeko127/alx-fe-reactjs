 // RecipeDetails component
  import { useNavigate } from 'react-router-dom';
  import useRecipeStore  from './recipeStore';

  const DeleteRecipeButton = () => {
    const navigate = useNavigate();
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const handleDelete = () => {
        deleteRecipe();
        navigate("/");
    };
    
    
    return (
      <div>
        <button onClick ={handleDelete}>Delete Recipe</button>
      </div>
    );
  };
  export default DeleteRecipeButton;