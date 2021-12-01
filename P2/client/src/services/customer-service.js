const CUSTOMER_URL = "http://localhost:8080/customers";

const CustomerService = {

    findAllCustomers : () => {
        return fetch(CUSTOMER_URL+"/find", {
            method: "GET"
        }).then(res => res.json()).catch(e => []);
    }
}

export default CustomerService;