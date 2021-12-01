import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import CustomerService from "../../services/customer-service";

const CustomerList = (props) => {
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
           return <div key={idx}><Link to={`/customer/${c.customerId}`}>{c.username}</Link></div> 
        })
        }
        </div>)
}

export default CustomerList;