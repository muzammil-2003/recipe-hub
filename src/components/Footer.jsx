import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-10 rounded-2xl border border-gray-700 bg-gray-900/70 px-5 py-6 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-100">Recipe Hub</p>
          <p className="mt-1 text-xs text-gray-400">Organize meals, save favorites, and cook better every day.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <Link to="/" className="rounded-md bg-gray-800 px-3 py-1.5 text-gray-200 transition hover:bg-gray-700">
            Home
          </Link>
          <Link to="/recipes" className="rounded-md bg-gray-800 px-3 py-1.5 text-gray-200 transition hover:bg-gray-700">
            Recipes
          </Link>
          <Link to="/fav" className="rounded-md bg-gray-800 px-3 py-1.5 text-gray-200 transition hover:bg-gray-700">
            Favorites
          </Link>
          <Link to="/create-recipe" className="rounded-md bg-green-600 px-3 py-1.5 text-white transition hover:bg-green-700">
            Create
          </Link>
        </nav>
      </div>

      <div className="mt-5 border-t border-gray-700 pt-4 text-xs text-gray-400 sm:text-sm">
        © {currentYear} Recipe Hub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer