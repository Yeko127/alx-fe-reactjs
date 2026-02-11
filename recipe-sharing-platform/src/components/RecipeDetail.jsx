import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json"

const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe= recipesData.find(recipe => recipe.id === Number(id));
        setRecipe(foundRecipe || null);
    }, [id]);

    if (!recipe) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl">Recipe not found.</p>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-green-100 py-10 px-4 md:px-8">
            {/*Back Link*/}
            <Link
             to="/"
             className="inline-block mb-6 text-blue-600 hover:text-blue-800"
            >
             &larr; Back to Home
            </Link>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
                <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                    <p className="text-gray-700">{recipe.summary}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {recipe.ingredients
                    ? recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))
                    : "No ingredients listed."}                
                </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    {recipe.instructions
                    ? recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))
                : "No instructions provided."}
                </ol>
            </div>

        </div>
    );
};

export default RecipeDetail;