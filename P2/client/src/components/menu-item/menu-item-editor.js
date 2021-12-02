import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import MenuItemService from "../../services/menu-item-service";
import RecipeService from "../../services/recipe-service";

const MenuItemEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [menuItem, setMenuItem] = useState({serveTime: "BREAKFAST"});
    const [recipes, setRecipes] = useState([]);
    const [hideSave, setHideSave] = useState(false);

    useEffect(() => {
        if (id !== "new") findMenuItemById(id);
        else setHideSave(true);

        findAllRecipes();
    }, [id]);

    const saveButton = <button onClick={() => updateMenuItem(menuItem.menuItemId, menuItem)}
                    className="btn btn-primary me-3">Save</button>;
    let style = hideSave ?  "" : saveButton;    

    const findMenuItemById = async (id) => {
        try {
            const response = await MenuItemService.findMenuItemById(id);
            setMenuItem(response);
        } catch (e) {
            console.log(e);
        }
    };


    const deleteMenuItem = async (id) => {
        try {
            await MenuItemService.deleteMenuItem(id);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };


    const updateMenuItem = async (id, menuItem) => {
        try {
            const response = await MenuItemService.updateMenuItem(id, menuItem);
            setMenuItem(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    const createMenuItem = async (menuItem) => {
        try {
            console.log(menuItem);
            const response = await MenuItemService.createMenuItem({...menuItem, menuItemId: undefined});
            setMenuItem(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };

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
            <h2>MenuItem Editor</h2>
            <label>Name</label>
            <input className="form-control"
                   value={menuItem.name}
                   onChange={(e) => setMenuItem({...menuItem, name: e.target.value})}
            /><br/>
            <label>Price</label>
            <input className="form-control"
                   value={menuItem.price}
                   onChange={(e) => setMenuItem({...menuItem, price: e.target.value})}
            /><br/>
            <label>Recipe Id</label>
            <select value={menuItem.recipeId} onChange={(e) => setMenuItem({...menuItem, recipeId: e.target.value})}>
                {
                    recipes.map((r, idx) => {
                        if (idx === 0) return <option value={r.recipeId} defaultValue>{r.recipeId}</option>;
                        return <option value={r.recipeId}>{r.recipeId}</option>;
                    })
                }
                
            </select>            
            <br/>
            <label>serveTime</label>
            <select value={menuItem.serveTime} onChange={(e) => setMenuItem({...menuItem, serveTime: e.target.value})}>
                <option value="BREAKFAST" defaultValue> breakfast</option>
                <option value="DINNER">dinner</option>
                <option value="LUNCH">lunch</option>
            </select>  
            <br/>                    
            <button className="btn btn-warning me-3"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger me-3"
                    onClick={() => deleteMenuItem(menuItem.menuItemId)}>
                Delete
            </button>
            {style}
            <button onClick={() => createMenuItem(menuItem)} className="btn btn-success">
                Create
            </button>

        </div>)
}

export default MenuItemEditor;