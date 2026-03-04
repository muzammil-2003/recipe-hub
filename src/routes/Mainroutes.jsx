import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import About from "../pages/About"
import Create from "../pages/Create"
import RecipeDetail from "../pages/RecipeDetail"
import Fav from "../pages/Fav"
import PageNotFound from "../pages/PageNotFound"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/details/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes