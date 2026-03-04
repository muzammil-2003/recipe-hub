import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const baseNavClass = "rounded-lg px-4 py-2 text-sm font-semibold transition"

    return (
        <header className="sticky top-4 z-40 mb-6 rounded-2xl border border-gray-700 bg-gray-900/80 p-3 backdrop-blur-sm sm:mb-8">
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <NavLink
                    to="/"
                    className={({ isActive }) => `${baseNavClass} ${isActive ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => `${baseNavClass} ${isActive ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                >
                    About
                </NavLink>

                <NavLink
                    to="/recipes"
                    className={({ isActive }) => `${baseNavClass} ${isActive ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                >
                    Recipes
                </NavLink>

                <NavLink
                    to="/fav"
                    className={({ isActive }) => `${baseNavClass} ${isActive ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-200 hover:bg-gray-700"}`}
                >
                    Favorites
                </NavLink>

                <NavLink
                    to="/create-recipe"
                    className={({ isActive }) => `${baseNavClass} ${isActive ? "bg-green-500 text-white" : "bg-green-600 text-white hover:bg-green-700"}`}
                >
                    Create
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar