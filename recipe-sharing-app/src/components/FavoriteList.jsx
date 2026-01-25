import  useRecipeStore  from './recipeStore';

const FavoriteList =() => {
    const recipes= useRecipeStore(state => state.recipes);
    const favorites= useRecipeStore(state => state.favorites);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    const favoriteRecipes = favorites
    .map(id => recipes.find(recipe => recipe.id ===id))
    .filter(Boolean);

    if (favoriteRecipes.length === 0){
        return <p>No favorite recipesyet.</p>
    }

    return (
        <div>
      <h2 className="text-xl font-semibold mb-3">⭐ My Favorites</h2>

      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} className="p-3 border rounded mb-2">
          <h3 className="font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>

          <button
            onClick={() => removeFavorite(recipe.id)}
            className="text-red-500 mt-2"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};
    
export default FavoriteList;