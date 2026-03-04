import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, image, title, ingredients, instructions, category } = props.recipe

    const ingredientPreview = ingredients?.length > 90 ? `${ingredients.slice(0, 90)}...` : ingredients
    const instructionPreview = instructions?.length > 120 ? `${instructions.slice(0, 120)}...` : instructions

    return (
        <Link
            to={`/recipe/details/${id}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 transition duration-300 hover:-translate-y-1 hover:border-gray-500 hover:shadow-lg hover:shadow-black/20"
        >
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
                    {category || "Uncategorized"}
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <h2 className="text-lg font-semibold leading-snug sm:text-xl">{title}</h2>

                <div className="space-y-2 text-sm text-gray-300">
                    <p>
                        <span className="font-semibold text-gray-100">Ingredients: </span>
                        {ingredientPreview || "N/A"}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-100">Instructions: </span>
                        {instructionPreview || "N/A"}
                    </p>
                </div>

                <div className="mt-auto pt-1">
                    <span className="inline-flex items-center rounded-lg border border-blue-400/40 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-200 transition group-hover:bg-blue-500/20">
                        View full recipe →
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard