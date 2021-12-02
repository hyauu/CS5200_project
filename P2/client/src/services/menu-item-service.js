const MENUITEM_URL = "http://localhost:8080/menuitems";
const MenuItemService = {

    findAllMenuItems : () => {
        return fetch(`${MENUITEM_URL}/find`, {
            method: "GET"
        }).then(res => res.json());
    },

    findMenuItemById : (id) => {
        return fetch(`${MENUITEM_URL}/find/id/${id}`, {
            method: "GET"
        }).then(res => res.json());
    },

    updateMenuItem : (id, updatedMenuItem) => {
        return fetch(`${MENUITEM_URL}/update/id/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMenuItem),
            headers: {
                "content-type" : "application/json"
            }
        }).then(res => res.json());
    },

    deleteMenuItem : (id) => {
        return fetch(`${MENUITEM_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.status);
    },

    createMenuItem : (menuItem) => {
        return fetch(`${MENUITEM_URL}/create`, {
            method: "POST",
            body: JSON.stringify(menuItem),
            headers: {
                "content-type" : "application/json"
            }
        }).then(res => res.json());
    }
}

export default MenuItemService;