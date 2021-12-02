import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import MenuItemService from "../../services/menu-item-service";

const MenuItemList = (props) => {
    const history = useHistory();
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        findAllMenuItems();
    }, []);

    const findAllMenuItems = async () => {
        try {
            const response = await MenuItemService.findAllMenuItems();
            setMenuItems(response);
        } catch (e) {
            console.log(e);
        }
    }    

    return (
        <div className="container">
            <h2>MenuItem List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/menuitems/new")}>
                Add MenuItem
            </button>

            <ul className="list-group mt-3">
                {menuItems.map((menuItem, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/menuitems/${menuItem.menuItemId}`}>
                            {menuItem.name},
                            {menuItem.serveTime},
                            {menuItem.price}
                        </Link>
                    </li>})
                }
            </ul>
        </div>)    
}

export default MenuItemList;