const CUSTOMER_URL = "http://localhost:8080/customers";

const CustomerService = {

    findAllCustomers : () => {
        return fetch(`${CUSTOMER_URL}/find`, {
            method: "GET"
        }).then(res => res.json());
    },

    findCustomerById : (id) => {
        return fetch(`${CUSTOMER_URL}/find/id/${id}`, {
            method: "GET"
        }).then(res => res.json());
    },

    updateCustomer : (id, updatedCustomer) => {
        return fetch(`${CUSTOMER_URL}/update/id/${id}`, {
            method: "POST",
            body: JSON.stringify(updatedCustomer),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json());
    },

    deleteCustomer : (id) => {
        return fetch(`${CUSTOMER_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.json());
    }
}

export default CustomerService;