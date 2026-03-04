import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/Recipecontext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Create = () => {
    const navigate = useNavigate()
    const { setdata } = useContext(recipecontext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (recipe) => {
        recipe.id = nanoid()
        setdata((prev) => {
            const updated = [...prev, recipe]
            localStorage.setItem("recipes", JSON.stringify(updated))
            return updated
        })
        toast.success("Recipe created successfully!")
        reset()
        navigate("/recipes")
    }
    
  return (
    <div className="w-full py-8 md:py-10 space-y-6">
        <section className="rounded-2xl border border-gray-700 bg-gray-900/50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Create Recipe</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Add a new recipe</h1>
            <p className="mt-1 text-sm text-gray-300">
                Fill the form to save your recipe with image, category, and cooking details.
            </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5 sm:p-6 lg:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                            className="w-full resize-none rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400"
                            {...register("ingredients", { required: true })}
                        ></textarea>
                        {errors.ingredients && <span className="mt-1 block text-xs text-red-400">Ingredients field is required</span>}
                    </div>

                    <div>
                        <textarea
                            rows="4"
                            placeholder="Recipe instructions"
                            className="w-full resize-none rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400"
                            {...register("instructions", { required: true })}
                        ></textarea>
                        {errors.instructions && <span className="mt-1 block text-xs text-red-400">Instructions field is required</span>}
                    </div>

                    <div>
                        <select
                            name="category"
                            id="category"
                            className="w-full rounded-lg border border-gray-600 bg-gray-900 px-3 py-2.5 text-sm outline-none transition focus:border-blue-400"
                            {...register("category", { required: true })}
                        >
                            <option value="">Select category</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                        {errors.category && <span className="mt-1 block text-xs text-red-400">Category field is required</span>}
                    </div>

                    <button type="submit" className="mt-1 rounded-lg bg-green-600 py-2.5 text-sm font-semibold transition hover:bg-green-700 cursor-pointer">
                        Create Recipe
                    </button>
                </form>
            </section>

            <aside className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5 sm:p-6 space-y-4">
                <h2 className="text-lg font-semibold">Tips for a better recipe</h2>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>Use a clear and high-quality image URL.</li>
                    <li>List ingredients in a readable sequence.</li>
                    <li>Keep instructions short and step-focused.</li>
                    <li>Choose the correct category for easy filtering.</li>
                </ul>

                <div className="pt-2">
                    <Link
                        to="/recipes"
                        className="inline-flex rounded-lg border border-gray-500 px-4 py-2 text-sm font-semibold transition hover:border-gray-300"
                    >
                        Browse Existing Recipes
                    </Link>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default Create