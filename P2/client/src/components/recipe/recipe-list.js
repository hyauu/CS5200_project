import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import RecipeService from "../../services/recipe-service";

const RecipeList = (props) => {
    const history = useHistory()

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        findAllRecipes();
    }, []);

    const findAllRecipes = async () => {
        try {
            const response = await RecipeService.findAllRecipes();
            setRecipes(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <h2>Recipe List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/recipe/new")}>
                Add Recipe
            </button>

            <ul className="list-group mt-3">
                {recipes.map((recipe, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/recipe/${recipe.recipeId}`}>
                            Recipe ID: {recipe.recipeId}
                        </Link>
                    </li>
                })
                }
            </ul>
        </div>)
}

export default RecipeList;