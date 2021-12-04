const ORDER_TO_ITEM_URL = "http://localhost:8080/ordertomenuitems";

const OrderToItemService = {
    findAllOrderToItems: () => {
        return fetch(`${ORDER_TO_ITEM_URL}/find`, {
            method: "GET"
        }).then(res => res.json());
    },

    findOrderToItemById: (id) => {
        return fetch(`${ORDER_TO_ITEM_URL}/find/id/${id}`, {
            method: "GET"
        }).then(res => res.json());
    },

    updateOrderToItem : (id, updatedOrderToItem) => {
        return fetch(`${ORDER_TO_ITEM_URL}/update/id/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedOrderToItem),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json());
    },

    deleteOrderToItem : (id) => {
        return fetch(`${ORDER_TO_ITEM_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.status);
    },

   createOrderToItem : (orderToItem) =>
        fetch(`${ORDER_TO_ITEM_URL}/create`, {
            method: 'POST',
            body: JSON.stringify(orderToItem),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())    
}

export default OrderToItemService;