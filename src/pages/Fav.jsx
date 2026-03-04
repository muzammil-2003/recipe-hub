import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { recipecontext } from '../context/Recipecontext'

const Fav = () => {
  const { data } = useContext(recipecontext)

  const favoriteIds = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('fav')) || []
    } catch {
      return []
    }
  }, [])

  const favoriteRecipes = useMemo(() => {
    return data.filter((recipe) => favoriteIds.includes(recipe.id))
  }, [data, favoriteIds])

  return (
    <div className="w-full py-8 md:py-10 space-y-8">
      <section className="flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-gray-700 bg-gray-900/50 p-5 sm:p-6">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl">Favorite Recipes</h1>
          <p className="mt-1 text-sm text-gray-300">
            Your saved picks for quick access whenever you need inspiration.
          </p>
        </div>

        <span className="rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 sm:text-sm">
          {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'Favorite' : 'Favorites'}
        </span>
      </section>

      {favoriteRecipes.length > 0 ? (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-gray-600 bg-gray-900/30 px-6 py-12 text-center">
          <h2 className="text-xl font-semibold">No favorite recipes yet</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-300">
            Open any recipe and tap the heart icon to save it here.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/recipes"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold transition hover:bg-blue-600"
            >
              Explore Recipes
            </Link>
            <Link
              to="/create-recipe"
              className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-semibold transition hover:border-gray-300"
            >
              Create New Recipe
            </Link>
          </div>
        </section>
      )}
    </div>
  )
}

export default Fav