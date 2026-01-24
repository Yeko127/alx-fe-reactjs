import useRecipeStore  from './recipeStore';

const SearchBar = () => {
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const setSearchTerm = useRecipeStore(state =>state.setSearchTerm);

    return (
        <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full p-2 border rounded mb-4" />
        
    );
};

export default SearchBar;