import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import RecipeService from "../../services/recipe-service";

const RecipeEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [recipe, setRecipe] = useState({});



    useEffect(() => {
        console.log(id);
        if (id !== "new") {
            findRecipeById(id);
        }
    }, []);



    const findRecipeById = async (id) => {
        try {
            const response = await RecipeService.findRecipeById(id);
            setRecipe(response);
        } catch (e) {
            console.log(e);
        }
    };


    const deleteRecipe = async (id) => {
        try {
            const response = await RecipeService.deleteRecipe(id);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };


    const updateRecipe = async (id, recipe) => {
        try {
            const resposne = await RecipeService.updateRecipe(id, recipe);
            setRecipe(resposne);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    const createRecipe = async (recipe) => {
        try {
            let val = {...recipe};
            delete val.recipeId;
            console.log(val);
            const response = await RecipeService.createRecipe(val);
            setRecipe(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <div className="container">
            <h2>Recipe Editor</h2>

            <label>Instructions</label>
            <textarea className="form-control"
                   value={recipe.instructions}
                   onChange={(e) => setRecipe({...recipe, instructions: e.target.value})}
            /><br/>

            <button className="btn btn-warning me-3"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger me-3"
                    onClick={() => deleteRecipe(recipe.recipeId)}>
                Delete
            </button>
            <button onClick={() => updateRecipe(recipe.recipeId, recipe)}
                    className="btn btn-primary me-3">Save
            </button>
            <button onClick={() => createRecipe(recipe)} className="btn btn-success">Create
            </button>

        </div>)
}

export default RecipeEditor;