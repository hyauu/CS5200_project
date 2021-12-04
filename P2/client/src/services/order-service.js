const ORDER_URL="http://localhost:8080/orders";

const OrderService = {

    findAllOrders: () => {
        return fetch(`${ORDER_URL}/find`, {
            method: "GET"
        }).then(res => res.json());
    },

    findOrderById: (id) => {
        return fetch(`${ORDER_URL}/find/id/${id}`, {
            method: "GET"
        }).then(res => res.json());
    },

    updateOrder: (id, updatedOrder) => {
        return fetch(`${ORDER_URL}/update/id/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedOrder),
            headers: {
                "content-type" : "application/json"
            }
        }).then(res => res.json());
    },

    deleteOrder: (id) => {
        return fetch(`${ORDER_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => RTCRtpSender.json());
    },

    createOrder: (order) => {
        return fetch(`${ORDER_URL}/create`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "content-type" : "application/json"
            }
        }).then(res => res.json());
    }
}

export default OrderService;