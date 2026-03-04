import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import { recipecontext } from "../context/Recipecontext"

const CATEGORIES = ["breakfast", "lunch", "dinner"]

const Home = () => {
  const { data } = useContext(recipecontext)

  const favorites = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("fav")) || []
    } catch {
      return []
    }
  }, [])

  const categoryCounts = useMemo(() => {
    return CATEGORIES.map((category) => ({
      name: category,
      count: data.filter((recipe) => recipe.category === category).length,
    }))
  }, [data])

  const sortedCategories = [...categoryCounts].sort((a, b) => b.count - a.count)
  const topCategory =
    sortedCategories[0]?.count > 0 ? sortedCategories[0].name : "N/A"

  const featuredRecipes = data.slice(0, 3)

  const stats = [
    { label: "Total Recipes", value: data.length },
    { label: "Favorites", value: favorites.length },
    {
      label: "Top Category",
      value: topCategory,
    },
    {
      label: "Ready to Cook",
      value: data.length > 0 ? "Yes" : "No",
    },
  ]

  return (
    <div className="w-full py-8 md:py-10 space-y-10 md:space-y-14">
      <section className="relative overflow-hidden rounded-3xl border border-gray-700 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12">
        <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-green-400/20 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200">
              Your Personal Recipe Hub
            </span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Cook smarter, save favorites, and discover your next meal.
            </h1>
            <p className="max-w-xl text-sm text-gray-300 sm:text-base">
              Organize your recipes in one place, quickly revisit favorites, and
              explore breakfast, lunch, and dinner ideas with a clean, mobile-first
              experience.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/create-recipe"
                className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
              >
                Create Recipe
              </Link>
              <Link
                to="/recipes"
                className="rounded-lg border border-gray-500 px-5 py-2.5 text-sm font-semibold transition hover:border-gray-300"
              >
                Browse Recipes
              </Link>
              <Link
                to="/fav"
                className="rounded-lg border border-blue-400/50 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/20"
              >
                View Favorites
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-gray-700 bg-gray-900/70 p-4 sm:p-5"
              >
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold capitalize sm:text-2xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryCounts.map((category) => (
          <div
            key={category.name}
            className="rounded-2xl border border-gray-700 bg-gray-900/50 p-5"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-gray-300">
              {category.name}
            </p>
            <p className="mt-2 text-3xl font-bold text-white">{category.count}</p>
            <p className="mt-1 text-xs text-gray-400">recipes in this category</p>
          </div>
        ))}
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold">Featured Recipes</h2>
          <Link
            to="/recipes"
            className="text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            See all recipes →
          </Link>
        </div>

        {featuredRecipes.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredRecipes.map((recipe) => (
              <Link
                to={`/recipe/details/${recipe.id}`}
                key={recipe.id}
                className="group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 transition hover:-translate-y-1 hover:border-gray-500"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="space-y-2 p-4">
                  <p className="inline-flex rounded-full bg-gray-700 px-2.5 py-1 text-xs font-medium capitalize text-gray-200">
                    {recipe.category || "uncategorized"}
                  </p>
                  <h3 className="line-clamp-1 text-lg font-semibold">{recipe.title}</h3>
                  <p className="line-clamp-2 text-sm text-gray-300">
                    {recipe.instructions}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-600 bg-gray-900/30 px-6 py-10 text-center">
            <h3 className="text-xl font-semibold">No recipes yet</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-300">
              Start with your first recipe to unlock personalized recommendations,
              category insights, and quick access to your favorites.
            </p>
            <Link
              to="/create-recipe"
              className="mt-5 inline-flex rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-green-600"
            >
              Add Your First Recipe
            </Link>
          </div>
        )}
      </section>

      <section className="grid gap-4 rounded-2xl border border-gray-700 bg-gray-900/50 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
        <div>
          <h4 className="text-base font-semibold">Quick Add</h4>
          <p className="mt-1 text-sm text-gray-300">
            Save a new recipe in under a minute with your title, ingredients,
            instructions, and image.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold">Organized Categories</h4>
          <p className="mt-1 text-sm text-gray-300">
            Keep your meals sorted by breakfast, lunch, and dinner for faster
            weekly planning.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold">Favorites First</h4>
          <p className="mt-1 text-sm text-gray-300">
            Mark dishes you love and revisit them anytime from your favorites list.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home