import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import CustomerService from "../../services/customer-service";


const CustomerList = (props) => {
    const history = useHistory()

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        findAllCustomers();
    }, []);

    const findAllCustomers = async () => {
        try {
            const response = await CustomerService.findAllCustomers();
            setCustomers(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <h2>Customer List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/customer/new")}>
                Add Customer
            </button>

            <ul className="list-group mt-3">
                {customers.map((customer, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/customer/${customer.customerId}`}>
                            {customer.firstName},
                            {customer.lastName},
                            {customer.username}
                        </Link>
                    </li>})
                }
            </ul>
        </div>)
}

export default CustomerList;