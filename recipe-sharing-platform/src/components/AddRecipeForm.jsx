import { useState } from "react";

const AddRecipeForm = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors ={};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!ingredients.trim()) newErrors.ingredients = "Ïngredients are required"
        else if (ingredients.split("\n").length < 2)
            newErrors.ingredients= "Please enter atleast two ingredients, one per line";
        if (!instructions.trim())
            newErrors.instructions ="Preparation steps are required";
        else if (instructions.split("\n").length < 2)
            newErrors.instructions = "Please enter at least two steps, one per line"

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validate()) return;
//form submission
        const newRecipe = {
            title,
            ingredients: ingredients.split("\n"),
            instructions: instructions.split("\n"),
        };

        console.log("Submitted recipe:", newRecipe);
        setSuccess(true);
//form reset
        setTitle("");
        setIngredients("")
        setInstructions("");
        setErrors({});
    };

    return (
        <div className="max-w-3xl mx-auto bg-gray-100 min-h-screen p-6 md:p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Add a new recipe</h1>

            {success && (
                <div className="bg-green-200 text-green-800 p-4 rounded mb-6">
                    Recipe submitted successfully!
                </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-6">
            {/*Title */}
            <div>
                <label className="block mb-2 font-semibold">Recipe Title</label>
                <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                 errors.ingredients ? "border-purple-500 focus:ring-purple-400" : "border-gray-300 focus:ring-blue-400"
                 }`}
                 placeholder="Enter recipe title"
                />
                {errors.title && <p className="text-purple-500 mt-1">{errors.title}</p>}
            </div>

         {/* Ingredients*/}
            <div>
                <label className="block mb-2 font-semibold">Ingredients (one per line)</label>
                <textarea
                value={ingredients}
                onChange={(event) => setIngredients(event.target.value)}
                className={`w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 ${
                 errors.ingredients ? "border-purple-500 focus:ring-purple-400" : "border-gray-300 focus:ring-blue-400"
                 }`}
                 placeholder="e.g. 200g spaghetti"
                />
                {errors.ingredients && <p className="text-purple-500 mt-1">{errors.ingredients}</p>}
            </div>
            
        {/* Instructions */}
             <div>
                <label className="block mb-2 font-semibold">Preparation steps (one per line)</label>
                <textarea
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
                className={`w-full border rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 ${
                 errors.instructions ? "border-purple-500 focus:ring-purple-400" : "border-gray-300 focus:ring-blue-400"
                 }`}
                 placeholder="e.g. Boil Water"
                />
                {errors.instructions && <p className="text-purple-500 mt-1">{errors.instructions}</p>}
            </div>
         {/* Submit button*/}
            <div className="text-center">
                <button 
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                    Submit Recipe
                </button>
            </div>
            
            </form>
        </div>
    );
};

export default AddRecipeForm;