import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import OrderService from "../../services/order-service";

const OrderList = (props) => {
    const history = useHistory();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        findAllOrders();
    }, []);

    const findAllOrders = async () => {
        try {
            const response = await OrderService.findAllOrders();
            setOrders(response);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="container">
            <h2>Order List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/orders/new")}>
                Add Order
            </button>

            <ul className="list-group mt-3">
                {orders.map((order, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/orders/${order.orderId}`}>
                            {order.customerId},
                            {order.tableId}
                        </Link>
                    </li>})
                }
            </ul>
        </div>)    
}

export default OrderList;