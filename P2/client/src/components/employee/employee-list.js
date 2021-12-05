import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import EmployeeService from "../../services/employee-service";


const EmployeeList = (props) => {
    const history = useHistory()

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        findAllEmployees();
    }, []);

    const findAllEmployees = async () => {
        try {
            const response = await EmployeeService.findAllEmployees();
            setEmployees(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <h2>Employee List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/employee/new")}>
                Add Employee
            </button>

            <ul className="list-group mt-3">
                {employees.map((employee, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/employee/${employee.employeeId}`}>
                            {employee.firstName},
                            {employee.lastName},
                            {employee.username}
                        </Link>
                    </li>})
                }
            </ul>
        </div>)
}

export default EmployeeList;