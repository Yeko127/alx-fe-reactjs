import useRecipeStore from "./recipeStore";
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(
    state => state.recommendations()
  );

  if (recommendations.length === 0) {
    return <p>No recommendations yet.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">
        🔥 Recommended for You
      </h2>

      {recommendations.map(recipe => (
        <div key={recipe.id} className="p-3 border rounded mb-2">
          <h3 className="font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link
            to={`/recipes/${recipe.id}`}
            className="text-blue-500"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;

