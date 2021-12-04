import OrderToItemService from "../../../services/order-to-item-service";
import React, {useState, useEffect} from "react";

const OrderToItem = (props) => {
    const {id, menuItems} = props;
    const [orderToItem, setItem] = useState({});

    useEffect(() => {
        findOrderToItemById(id);
    }, [])

    const findOrderToItemById = async (id) => {
        try {
            const response = await OrderToItemService.findOrderToItemById(id);
            setItem(response);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteOrderToItem = async (id) => {
        try {
            await OrderToItemService.deleteOrderToItem(id);
        } catch (e) {
            console.log(e);
        }
    };


    const updateOrderToItem = async (id, orderToItem) => {
        try {
            const response = await OrderToItemService.updateOrderToItem(id, orderToItem);
            setItem(response);
        } catch (e) {
            console.log(e);
        }
    };    

    return (
        <div className="container">
        <label>MenuItem</label>
        <select value={orderToItem.menuItemId} onChange={(e) => setItem({...orderToItem, menuItemId: e.target.value})}>
            <option></option>
            {
                menuItems.map((m, idx) =><option key={idx} value={m.menuItemId}>{m.name} ${m.price}</option>)
            }
        </select>
            <br/>           
            <label>Quantity</label>
            <input className="form-control"
                   value={orderToItem.quantity}
                   onChange={(e) => setItem({...orderToItem, quantity: e.target.value})}
            />
            <button className="btn btn-danger me-3"
                    onClick={() => deleteOrderToItem(orderToItem.orderToMenuItemId)}>
                Delete
            </button>  
            <button onClick={() => updateOrderToItem(orderToItem.orderToMenuItemId, orderToItem)}
                    className="btn btn-primary me-3">
                Save
            </button>                               
            <br/>
        </div>
    )
}

export default OrderToItem;