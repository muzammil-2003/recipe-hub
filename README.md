# Recipe Hub

A modern, responsive recipe management app built with React, Vite, and Tailwind CSS.

Users can create recipes, browse all recipes, update/delete them, mark favorites, and manage everything with a clean UI/UX.

## Features

- Responsive pages for Home, Recipes, Recipe Details, Create, Favorites, and About
- Recipe CRUD flow:
	- Create a recipe
	- View all recipes
	- Open recipe details
	- Update or delete a recipe
- Favorites support using localStorage
- Dynamic stats and featured sections on homepage
- Reusable app shell with Navbar and Footer
- Toast notifications for key actions

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- React Hook Form
- React Toastify
- Nano ID

## Project Structure

```text
src/
	components/
		Navbar.jsx
		Footer.jsx
		RecipeCard.jsx
	context/
		Recipecontext.jsx
	pages/
		Home.jsx
		Recipes.jsx
		RecipeDetail.jsx
		Create.jsx
		Fav.jsx
		About.jsx
		PageNotFound.jsx
	routes/
		Mainroutes.jsx
	App.jsx
	main.jsx
```

## Routes

- `/` → Home
- `/recipes` → All recipes
- `/recipe/details/:id` → Recipe detail/edit page
- `/create-recipe` → Create recipe form
- `/fav` → Favorite recipes
- `/about` → About page
- `*` → Not found page

## Local Data Storage

The app uses browser `localStorage`:

- `recipes` → array of recipe objects
- `fav` → array of favorite recipe IDs

No backend is required.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

### 5) Run lint

```bash
npm run lint
```

## Recipe Object Shape

```js
{
	id: string,
	image: string,
	title: string,
	ingredients: string,
	instructions: string,
	category: "breakfast" | "lunch" | "dinner"
}
```

## Notes

- Data persists per browser/device through localStorage.
- If you clear browser storage, recipes and favorites will reset.

## License

This project is for learning and portfolio use.