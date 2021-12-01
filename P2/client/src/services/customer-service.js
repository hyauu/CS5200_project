const CUSTOMER_URL = "http://localhost:8080/customers/find";

const CustomerService = {

    findAllCustomers : () => {
        return fetch(CUSTOMER_URL, {mode: 'no-cors'}, {
            method: "GET"
        }).then(res => res.json()).catch(e => []);
    }
}

export default CustomerService;

