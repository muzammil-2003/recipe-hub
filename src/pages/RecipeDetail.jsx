import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/Recipecontext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const RecipeDetail = () => {
    const { data, setdata } = useContext(recipecontext)
    const [fav, setfav] = useState(() => {
        return JSON.parse(localStorage.getItem("fav")) || []
    })
    const { id } = useParams()
    const recipe = data.find(recipe => recipe.id === id)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (recipe) {
            reset(recipe)
        }
    }, [recipe, reset])

    const deleteRecipe = () => {
        setdata((prev) => {
            const updated = prev.filter(item => item.id !== id)
            localStorage.setItem("recipes", JSON.stringify(updated))
            return updated
        })
        setfav((prev) => {
            const updatedFav = prev.filter(favId => favId !== id)
            localStorage.setItem("fav", JSON.stringify(updatedFav))
            return updatedFav
        })
        toast.success("Recipe deleted successfully")
        navigate('/recipes')
    }

    const onSubmit = (updatedRecipe) => {
        setdata((prev) => {
            const updated = prev.map(item => item.id === id ? { ...item, ...updatedRecipe } : item)
            localStorage.setItem("recipes", JSON.stringify(updated))
            return updated
        })
        toast.success("Recipe updated successfully")
        navigate('/recipes')
    }

    const favHandler = () => {
        if (!fav.includes(recipe.id)) {
            const updatedFav = [...fav, recipe.id]
            localStorage.setItem("fav", JSON.stringify(updatedFav))
            setfav(updatedFav)
            toast.success("Recipe added to favorites")
        }
    }
    const unFavHandler = () => {
        if (fav.includes(recipe.id)) {
            const updatedFav = fav.filter(id => id !== recipe.id)
            localStorage.setItem("fav", JSON.stringify(updatedFav))
            setfav(updatedFav)
            toast.success("Recipe removed from favorites")
        }
    }

    if (!recipe) {
        return (
            <section className="mt-8 rounded-2xl border border-dashed border-gray-600 bg-gray-900/30 px-6 py-12 text-center">
                <h1 className="text-2xl font-semibold">Recipe not found</h1>
                <p className="mx-auto mt-2 max-w-lg text-sm text-gray-300">
                    This recipe may have been deleted or the link is invalid.
                </p>
                <Link
                    to="/recipes"
                    className="mt-5 inline-flex rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold transition hover:bg-blue-600"
                >
                    Back to Recipes
                </Link>
            </section>
        )
    }

    return (
        <div className='w-full py-8 md:py-10 space-y-6'>
            <section className="rounded-2xl border border-gray-700 bg-gray-900/50 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Recipe Details</p>
                <h1 className='mt-2 text-2xl font-semibold sm:text-3xl'>{recipe.title}</h1>
                <p className="mt-1 text-sm text-gray-300">
                    View recipe information and update fields whenever needed.
                </p>
            </section>

            <div className='grid gap-6 lg:grid-cols-2'>
                <section className='rounded-2xl border border-gray-700 bg-gray-900/60 overflow-hidden'>
                    <div className="relative">
                        <img src={recipe.image} alt={recipe.title} className="h-72 sm:h-96 w-full object-cover" />
                        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
                            {recipe.category || 'uncategorized'}
                        </span>
                        {fav.includes(recipe.id) ? (
                            <button
                                type="button"
                                onClick={unFavHandler}
                                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-red-500 transition hover:bg-black/80"
                                aria-label="Remove from favorites"
                            >
                                <i className="ri-poker-hearts-fill text-2xl"></i>
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={favHandler}
                                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-red-500 transition hover:bg-black/80"
                                aria-label="Add to favorites"
                            >
                                <i className="ri-poker-hearts-line text-2xl"></i>
                            </button>
                        )}
                    </div>

                    <div className="space-y-3 p-5">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400">Ingredients</p>
                            <p className="mt-1 text-sm text-gray-200">{recipe.ingredients}</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400">Instructions</p>
                            <p className="mt-1 text-sm text-gray-200">{recipe.instructions}</p>
                        </div>
                    </div>
                </section>

                <section className='rounded-2xl border border-gray-700 bg-gray-900/60 p-5 sm:p-6'>
                    <h2 className="text-xl font-semibold">Edit Recipe</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-4">
                        <div>
                            <input
                                type="url"
                                name="url"
                                id="url"
                                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400"
                                placeholder="Enter image URL"
                                {...register("image", { required: true })}
                            />
                            {errors.image && <span className="mt-1 block text-xs text-red-400">Image field is required</span>}
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Recipe title"
                                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span className="mt-1 block text-xs text-red-400">Title field is required</span>}
                        </div>

                        <div>
                            <textarea
                                rows="3"
                                placeholder="Recipe ingredients"
                                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400 resize-none"
                                {...register("ingredients", { required: true })}
                            ></textarea>
                            {errors.ingredients && <span className="mt-1 block text-xs text-red-400">Ingredients field is required</span>}
                        </div>

                        <div>
                            <textarea
                                rows="4"
                                placeholder="Recipe instructions"
                                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400 resize-none"
                                {...register("instructions", { required: true })}
                            ></textarea>
                            {errors.instructions && <span className="mt-1 block text-xs text-red-400">Instructions field is required</span>}
                        </div>

                        <div>
                            <select
                                name="category"
                                id="category"
                                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm capitalize outline-none transition focus:border-blue-400"
                                {...register("category", { required: true })}
                            >
                                <option value="">Select category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                            {errors.category && <span className="mt-1 block text-xs text-red-400">Category field is required</span>}
                        </div>

                        <div className="grid gap-3 pt-1 sm:grid-cols-2">
                            <button type="submit" className="rounded-lg bg-green-600 py-2.5 text-sm font-semibold transition hover:bg-green-700 cursor-pointer">
                                Update Recipe
                            </button>
                            <button type="button" className="rounded-lg bg-red-600 py-2.5 text-sm font-semibold transition hover:bg-red-700 cursor-pointer" onClick={deleteRecipe}>
                                Delete Recipe
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default RecipeDetail