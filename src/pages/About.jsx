import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import { recipecontext } from "../context/Recipecontext"

const About = () => {
  const { data } = useContext(recipecontext)

  const favorites = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("fav")) || []
    } catch {
      return []
    }
  }, [])

  const categories = useMemo(() => {
    const counts = { breakfast: 0, lunch: 0, dinner: 0 }
    data.forEach((recipe) => {
      if (counts[recipe.category] !== undefined) counts[recipe.category] += 1
    })
    return counts
  }, [data])

  const highlights = [
    {
      title: "Easy Recipe Creation",
      description:
        "Create recipes quickly with image, ingredients, instructions, and category in one clean form.",
    },
    {
      title: "Smart Organization",
      description:
        "Group meals into breakfast, lunch, and dinner so planning your week feels simple and fast.",
    },
    {
      title: "Favorites Workflow",
      description:
        "Mark your best dishes as favorites and return to them whenever you need reliable meal ideas.",
    },
  ]

  const steps = [
    "Create a recipe with all details.",
    "Browse and open recipe detail pages.",
    "Update, delete, or favorite recipes.",
    "Plan meals faster with organized categories.",
  ]

  return (
    <div className="w-full py-8 md:py-10 space-y-10 md:space-y-12">
      <section className="rounded-3xl border border-gray-700 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold tracking-wide text-blue-200">
            About This Project
          </span>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            A focused recipe manager built for speed, clarity, and everyday use.
          </h1>
          <p className="text-sm text-gray-300 sm:text-base">
            This app helps you capture recipes, keep them organized, and access your
            favorites with a smooth user experience across mobile, tablet, and
            desktop screens.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-400">Total Recipes</p>
          <p className="mt-2 text-3xl font-bold">{data.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-400">Favorites</p>
          <p className="mt-2 text-3xl font-bold">{favorites.length}</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-400">Breakfast</p>
          <p className="mt-2 text-3xl font-bold">{categories.breakfast}</p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5">
          <p className="text-xs uppercase tracking-wider text-gray-400">Lunch + Dinner</p>
          <p className="mt-2 text-3xl font-bold">{categories.lunch + categories.dinner}</p>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-700 bg-gray-900/50 p-5"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-2xl border border-gray-700 bg-gray-900/50 p-6 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold">How It Works</h3>
          <p className="mt-2 text-sm text-gray-300">
            The flow is intentionally minimal so you can go from idea to stored
            recipe in moments.
          </p>
          <ol className="mt-4 space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-semibold text-blue-200">
                  {index + 1}
                </span>
                <span className="text-sm text-gray-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-gray-700 bg-gray-900/70 p-5">
          <h3 className="text-xl font-semibold">Why This UX Works</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Consistent actions across all key pages.</li>
            <li>Responsive layouts for better mobile accessibility.</li>
            <li>Clear hierarchy with readable typography and spacing.</li>
            <li>Fast local storage access without backend setup.</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/recipes"
              className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-semibold transition hover:border-gray-300"
            >
              Explore Recipes
            </Link>
            <Link
              to="/create-recipe"
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold transition hover:bg-green-600"
            >
              Create New Recipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About