const RECIPE_URL = "http://localhost:8080/recipes";

const RecipeService = {

    findAllRecipes : () => {
        return fetch(`${RECIPE_URL}/find`,{
            method: "GET"
        }).then(res => res.json());
    },

    findRecipeById : (id) => {
        return fetch(`${RECIPE_URL}/find/id/${id}`,{
            method: "GET"
        }).then(res => res.json());
    },

    updateRecipe : (id, updatedRecipe) => {
        return fetch(`${RECIPE_URL}/update/id/${id}`,{
            method: "PUT",
            body: JSON.stringify(updatedRecipe),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json());
    },

    deleteRecipe : (id) => {
        return fetch(`${RECIPE_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.status);
    },

    createRecipe : (recipe) =>
        fetch(`${RECIPE_URL}/create`, {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
}

export default RecipeService;

