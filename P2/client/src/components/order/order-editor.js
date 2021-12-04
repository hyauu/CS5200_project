import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import OrderService from "../../services/order-service";

import OrderToItemList from "./order-to-item/order-to-item-list";

const OrderEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [order, setOrder] = useState({});
    const [hideSave, setHideSave] = useState(false);    

    useEffect(() => {
        if (id !== "new") findOrderById(id);
        else setHideSave(true);
    }, [id]);    


    const saveButton = <button onClick={() => updateOrder(order.orderId, order)}
                    className="btn btn-primary me-3">Save</button>;
    let style = hideSave ?  "" : saveButton;   

    const findOrderById = async (id) => {
        try {
            const response = await OrderService.findOrderById(id);
            setOrder(response);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteOrder = async (id) => {
        try {
            await OrderService.deleteOrder(id);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };

    const updateOrder = async (id, order) => {
        try {
            const response = await OrderService.updateOrder(id, order);
            setOrder(response);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };

    const createOrder = async (order) => {
        try {
            const response = await OrderService.createOrder(order);
            setOrder(response);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };

    return (
        <div className="container">
            <h2>Order Editor</h2>
            <label>Customer Id</label>
            <input className="form-control"
                    value={order.customerId}
                    onChange={(e) => setOrder({...order, customerId: e.target.value})}
            />
            <br/>
            <label>Table Id</label>
            <input className="form-control"
                    value={order.tableId}
                    onChange={(e) => setOrder({...order, tableId: e.target.value})}
            />
            <br/>    
            <button className="btn btn-warning me-3"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger me-3"
                    onClick={() => deleteOrder(order.orderId)}>
                Delete
            </button>
            {style}
            <button onClick={() => createOrder(order)} className="btn btn-success">
                Create
            </button>
            <br/> 
            {(id !== "new") && <OrderToItemList orderId={id} />}
        </div>
    )
};

export default OrderEditor;