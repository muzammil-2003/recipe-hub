import { useContext } from "react"
import { Link } from "react-router-dom"
import { recipecontext } from "../context/Recipecontext"
import RecipeCard from "../components/RecipeCard"

const Recipes = () => {
  const { data } = useContext(recipecontext)

  return (
    <div className="w-full py-8 md:py-10 space-y-8">
      <section className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-gray-700 bg-gray-900/50 p-5 sm:p-6">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">All Recipes</h1>
          <p className="mt-1 text-sm text-gray-300">
            Browse, open details, and manage your saved cooking ideas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200 sm:text-sm">
            {data.length} {data.length === 1 ? "Recipe" : "Recipes"}
          </span>
          <Link
            to="/create-recipe"
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-green-600"
          >
            Create New
          </Link>
        </div>
      </section>

      {data.length > 0 ? (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-gray-600 bg-gray-900/30 px-6 py-12 text-center">
          <h2 className="text-xl font-semibold">No recipes available</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-300">
            Start by creating your first recipe to build your personal collection.
          </p>
          <Link
            to="/create-recipe"
            className="mt-5 inline-flex rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-green-600"
          >
            Add First Recipe
          </Link>
        </section>
      )}
    </div>
  )
}

export default Recipes