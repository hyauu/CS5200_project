import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import EmployeeService from "../../services/employee-service";

const EmployeeEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [employee, setEmployee] = useState({});
    const [hideSave, setHideSave] = useState(false);

    useEffect(() => {
        if (id !== "new") findEmployeeById(id);
        else setHideSave(true)
    }, [id]);

    const saveButton = <button onClick={() => updateEmployee(employee.employeeId, employee)}
                               className="btn btn-primary me-3">Save</button>;
    let style = hideSave ?  "" : saveButton;



    const findEmployeeById = async (id) => {
        try {
            const response = await EmployeeService.findEmployeeById(id);
            setEmployee(response);
        } catch (e) {
            console.log(e);
        }
    };


    const deleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };


    const updateEmployee = async (id, employee) => {
        try {
            const response = await EmployeeService.updateEmployee(id, employee);
            setEmployee(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    const createEmployee = async (employee) => {
        try {
            let val = {...employee};
            delete val.employeeId;
            console.log(val);
            const response = await EmployeeService.createEmployee(val);
            setEmployee(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <div className="container">
            <h2>Employee Editor</h2>
            <h6 className="btn-warning">Note: When creating a new employee, each blank should not be empty.
                Please do not enter a phone number larger than 2147483647, otherwise, it will generate overflow error.</h6>

            <label>Id</label>
            <input value={employee.employeeId} className="form-control"/><br/>
            <label>First Name</label>
            <input className="form-control"
                   value={employee.firstName}
                   onChange={(e) => setEmployee({...employee, firstName: e.target.value})}
            /><br/>
            <label>Last Name</label>
            <input className="form-control"
                   value={employee.lastName}
                   onChange={(e) => setEmployee({...employee, lastName: e.target.value})}
            /><br/>
            <label>UserName</label>
            <input className="form-control"
                   value={employee.username}
                   onChange={(e) => setEmployee({...employee, username: e.target.value})}
            /><br/>
            <label>Password</label>
            <input className="form-control"
                   value={employee.password}
                   onChange={(e) => setEmployee({...employee, password: e.target.value})}
            /><br/>
            <label>Email</label>
            <input type = "email" className="form-control"
                   value={employee.email}
                   onChange={(e) => setEmployee({...employee, email: e.target.value})}
            /><br/>
            <label>Phone</label>
            <input className="form-control"
                   value={employee.phone}
                   onChange={(e) => setEmployee({...employee, phone: e.target.value})}
            /><br/>
            <label>Date of Birth</label>
            <input className="form-control"
                   value={employee.dateOfBirth}
                   onChange={(e) => setEmployee({...employee, dateOfBirth: e.target.value})}

            /><br/>

            <label>Role</label>
            <select value={employee.role} onChange={(e) => setEmployee({...employee, role: e.target.value})}>
                <option></option>;
                <option value="ADMIN">Administrator</option>
                <option value="WAITER">Waiter</option>
                <option value="CHEF">Chef</option>
            </select>
            <br/><br/>

            <label>Salary</label>
            <input className="form-control"
                   value={employee.salary}
                   onChange={(e) => setEmployee({...employee, salary: e.target.value})}

            /><br/>

            <label>Table Id</label>
            <input className="form-control"
                   value={employee.tableId}
                   onChange={(e) => setEmployee({...employee, tableId: e.target.value})}
            /><br/>
            <label>Supervisor Id</label>
            <input className="form-control"
                   value={employee.supervisorId}
                   onChange={(e) => setEmployee({...employee, supervisorId: e.target.value})}
            />
            <br/>


            <button className="btn btn-warning me-3"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger me-3"
                    onClick={() => deleteEmployee(employee.employeeId)}>
                Delete
            </button>
            {style}
            <button onClick={() => createEmployee(employee)} className="btn btn-success">Create
            </button>

        </div>)
}

export default EmployeeEditor;