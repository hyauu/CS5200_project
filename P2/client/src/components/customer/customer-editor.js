import React, {useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import CustomerService from "../../services/customer-service";

const CustomerEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        console.log(id);
        if (id !== "new") findCustomerById(id);
    }, []);

    const findCustomerById = async (id) => {
        try {
            const response = await CustomerService.findCustomerById(id);
            setCustomer(response);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteCustomer = async () => {
        try {
            const response = await CustomerService.deleteCustomer(id);
        } catch (e) {
            console.log(e);
        }
    };

    const updateCustomer = async (id) => {
        try {
            const resposne = await CustomerService.updateCustomer(id, customer);
            setCustomer(resposne);
        } catch (e) {
            console.log(e);
        }
    };

    const createCustomer = async (customer) => {
        try {
            const response = await CustomerService.createCustomer(customer);
            setCustomer(response);
        } catch (e) {
            console.log(e);
        } 
    };

    
    return (<div>
        <h2>Customer Editor</h2>
        <label>First Name</label>
        <input className="form-control"
                value={customer.firstName}
                onChange={(e) => setCustomer({...customer, firstName: e.target.value})}
        /><br/>
        <label>Last Name</label>
        <input className="form-control"
                value={customer.lastName}
                onChange={(e) => setCustomer({...customer, lastName: e.target.value})}
        /><br/>
        <label>UserName</label>
        <input className="form-control"
                value={customer.username}
                onChange={(e) => setCustomer({...customer, username: e.target.value})}
        /><br/>
        <label>Password</label>
        <input className="form-control"
                value={customer.password}
                onChange={(e) => setCustomer({...customer, password: e.target.value})}
        /><br/>
        <label>Email</label>
        <input className="form-control"
                value={customer.email}
                onChange={(e) => setCustomer({...customer, email: e.target.value})}
        /><br/>  
        <label>Phone</label>
        <input className="form-control"
                value={customer.phone}
                onChange={(e) => setCustomer({...customer, phone: e.target.value})}
        /><br/>                        
        </div>)
}

export default CustomerEditor;