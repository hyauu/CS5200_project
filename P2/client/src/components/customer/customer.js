import React, {useState, useEffect} from "react";
import CustomerService from "../../services/customer-service";


const Customer = (props) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        findAllCustomers();
    }, []);

    const findAllCustomers = () => {
        CustomerService.findAllCustomers().then(vals => {
            setCustomers(vals);
            console.log("yoyo");
        });
        console.log(customers);
    }

    return (
        <div>
            <h2>Customers</h2>
            <button>Add Customer{customers.length}</button>
            {customers.map((c, idx) => {
                <div key={idx}>{c.username}</div>
            })
            }

        </div>)
}

export default Customer