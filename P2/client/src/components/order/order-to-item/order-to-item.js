import OrderToItemService from "../../../services/order-to-item-service";
import React, {useState, useEffect} from "react";

const OrderToItem = (props) => {
    const {orderToMenuItemId, menuItems, findOrderToItems, orderId} = props;
    const [orderToItem, setItem] = useState({});
    const [editting, setEditting] = useState(false);
    useEffect(() => {
        findOrderToItemById(orderToMenuItemId);
    }, [])

    const findOrderToItemById = async (id) => {
        try {
            const response = await OrderToItemService.findOrderToItemById(id);
            setItem(response);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteOrderToItem = async (id, orderId) => {
        try {
            await OrderToItemService.deleteOrderToItem(id);
            findOrderToItems(orderId);
        } catch (e) {
            console.log(e);
        }
    };


    const updateOrderToItem = async (id, orderToItem) => {
        try {
            const response = await OrderToItemService.updateOrderToItem(id, orderToItem);
            setItem(response);
            setEditting(false);
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
                menuItems.map((m, idx) =>{
                    if (m.menuItemId === orderToItem.menuItemId) 
                        return <option key={idx} value={m.menuItemId} defaultValue>{m.name} ${m.price}</option>
                    return <option key={idx} value={m.menuItemId}>{m.name} ${m.price}</option>
                })
            }
        </select>
            <br/>           
            <label>Quantity</label>
            <input className="form-control"
                   value={orderToItem.quantity}
                   onChange={(e) => setItem({...orderToItem, quantity: e.target.value})}
            />
            {
                editting && <button className="btn btn-danger me-3"
                onClick={() => deleteOrderToItem(orderToItem.orderToMenuItemId, orderId)}>
                    Delete
                </button>  
            }
            {
                editting && <button onClick={() => updateOrderToItem(orderToItem.orderToMenuItemId, orderToItem)}
                    className="btn btn-primary me-3">
                    Save
                </button> 
            }
            {
                editting && <button onClick={() => setEditting(false)}
                    className="btn btn-primary me-3">
                    Cancel
                </button>
            }
            {
                !editting && <button onClick={() => setEditting(true)}
                className="btn btn-primary me-3">
                    Edit
                </button>
            }                            
            <br/>
        </div>
    )
}

export default OrderToItem;