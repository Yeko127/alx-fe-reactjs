import { create } from 'zustand'

const useRecipeStore = create((set, get => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],


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

  addFavorite: (recipeId) => 
    set(state => ({
      favorites: state.favorites.includes(recipeId) 
      ? state.favorites
      : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) => 
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),


  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return {recommendations: recommended};
  }),
  

  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id) })),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map((recipe) => recipe.id === updatedRecipe.id ? updatedRecipe : recipe), })),
  
  setRecipes: (recipes) => set({ recipes })

  
}));


export default useRecipeStore;