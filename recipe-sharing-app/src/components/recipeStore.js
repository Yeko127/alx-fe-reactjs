import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term}),

  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !==id) })),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map((recipe) => recipe.id === updatedRecipe.id ? updatedRecipe : recipe), })),
  setRecipes: (recipes) => set({ recipes })

  filteredRecipes: () => {
    const {recipes, searchTerm} =get()

    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients?.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  },
}));


export default useRecipeStore;