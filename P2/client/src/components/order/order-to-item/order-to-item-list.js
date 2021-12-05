import OrderToItemService from "../../../services/order-to-item-service";
import React, {useState, useEffect} from "react";
import OrderToItem from "./order-to-item";
import MenuItemService from "../../../services/menu-item-service";

const OrderToItemList = (props) => {
    const {orderId} = props;
    const [orderToItems, setItems] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [newItem, setNewItem] = useState({orderId});

    useEffect(() => {
        findOrderToItems(orderId);
        findAllMenuItems();
    }, [])

    const findOrderToItems = async (orderId) => {
        try {
            let response = await OrderToItemService.findAllOrderToItems();
            setItems(response.filter(v => v.orderId == orderId));
            // console.log(orderToItems)
        } catch (e) {
            console.log(e);
        }
    }
    const findAllMenuItems = async () => {
        try {
            const response = await MenuItemService.findAllMenuItems();
            setMenuItems(response);
        } catch (e) {
            console.log(e);
        }
    }     

    const createOrderToItems = async (orderToItem) => {
        try {
            const response = await OrderToItemService.createOrderToItem(orderToItem);
            findOrderToItems(orderId);
        } catch (e) {
            console.log(e);
        }
    }



    return (<div className="container">
        <h3>Add Item</h3>
        <label>Quantity</label>
        <input className="form-control"
                onChange={(e) => setNewItem({...newItem, quantity: e.target.value})}
        />
        <label>MenuItem</label>
        <select value={newItem.menuItemId} onChange={(e) => setNewItem({...newItem, menuItemId: e.target.value})}>
            <option></option>;
            {
                menuItems.map((m, idx) =><option key={idx} value={m.menuItemId}>{m.name} ${m.price}</option>)
            }
        </select>
        <button onClick={() => createOrderToItems(newItem)} className="btn btn-success">
                Add
            </button>          
        <br/>

        <ul className="list-group mt-3">
            {
                orderToItems.map((item, idx) => {
                    // console.log(item)
                    return <li className="list-group-item" key={idx}>
                        <OrderToItem orderToMenuItemId={item.orderToMenuItemId} menuItems={menuItems} findOrderToItems={findOrderToItems} orderId={orderId}></OrderToItem>
                        </li>
                })
            }
        </ul>
    </div>)
};

export default OrderToItemList;