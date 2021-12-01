import React, {useState, useEffect} from "react";
import CustomerService from "../../services/customer-service";

const Customer = (props) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        findAllCustomers();
    }, []);

    const findAllCustomers = async () => {
        try {
            const response = await CustomerService.findAllCustomers();
            setCustomers(response);
        } catch(e) {
            console.log(e);
        }
    }

    return (<div>
        <h2>Customers</h2>
        <button>Add Customer</button>
        {customers.map((c, idx) => {
           return <div key={idx}>{c.username}</div> 
        })
        }
        </div>)
}

export default Customer;