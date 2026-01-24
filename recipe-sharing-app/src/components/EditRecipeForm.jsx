 // RecipeDetails component
 import { useState} from "react";
 import useRecipeStore  from './recipeStore';

  const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description)

    const handleSubmit = (e) => {
        e.preventDefault();

        updateRecipe({
            id: recipe.id,
            title,
            description,
        });
        alert ("Recipe updated")
    };
    return (
      <form onSubmit={handleSubmit} style={{marginTop: "20px"}}>
        <h3>Edit Recipe</h3>
        <div>
            <label>Title</label>
            <input t
                type="text" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)} required/>
        </div>
        <div>
            <label>Description</label>
            <textarea 
                value={description} 
                onChange={(e) =>setDescription(e.target.value)}  required/>
        </div>       
       
        <button type="submit">update Recipe</button>
      </form>
    );
  };

  export default EditRecipeForm;