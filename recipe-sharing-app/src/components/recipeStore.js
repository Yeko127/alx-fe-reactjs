import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  favorites: [],

  setSearchTerm: (term) => set({ searchTerm: term}),

  filteredRecipes: () => {
    const {recipes, searchTerm} =get()

    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients?.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  },

  addFavorite: (recipeId) => set(state => ({favorites: state.favorites.includes(recipeId) ? state.favorites: [...state.favorites, recipeId],})),
  removeFavorite: (recipeId) => set(state => ({favorites: state.favorites.filter(id => id !== recipeId),})),
  isFavorite: (recipeId) => get().favorites.includes(recipeId),

  recommendations: () => {
    const {recipes, favorites} = get();
    if (favorites.length ===0) return [];

    const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

    return recipes.filter(recipe => {
      if (favorites.includes(recipe.id)) return false;

      return favoriteRecipes.some(fav =>
        fav.category && recipe.category === fav.category
      )
    });
  }
  

  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id) })),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map((recipe) => recipe.id === updatedRecipe.id ? updatedRecipe : recipe), })),
  setRecipes: (recipes) => set({ recipes })

  
}));


export default useRecipeStore;