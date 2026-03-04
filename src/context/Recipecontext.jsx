import { createContext, useEffect, useState } from "react"

export const recipecontext = createContext(null)

const Recipecontext = ({children}) => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const savedRecipes = localStorage.getItem("recipes")        
        if (savedRecipes) {
            setdata(JSON.parse(savedRecipes))
        }
    }, [])

    return (
        <recipecontext.Provider value={{ data, setdata }}>
            {children}
        </recipecontext.Provider>
    )
}

export default Recipecontext