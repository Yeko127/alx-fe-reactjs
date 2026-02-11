import { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        setRecipes(recipesData);
    }, []);
    return (
        <div className="min-h-screen bg-gray-200 py-10 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Recipe Collection
            </h1>

            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-xl font-semibold mb-2">
                                {recipe.title}
                            </h2>
                            <p className="text-black text-sm line-clamp-3">
                                {recipe.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );    
    
};

export default HomePage;