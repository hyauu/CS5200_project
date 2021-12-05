const EMPLOYEE_URL = "http://localhost:8080/employees";

const EmployeeService = {

    findAllEmployees : () => {
        return fetch(`${EMPLOYEE_URL}/find`, {
            method: "GET"
        }).then(res => res.json());
    },

    findEmployeeById : (id) => {
        return fetch(`${EMPLOYEE_URL}/find/id/${id}`, {
            method: "GET"
        }).then(res => res.json());
    },

    updateEmployee : (id, updatedEmployee) => {
        return fetch(`${EMPLOYEE_URL}/update/id/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedEmployee),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json());
    },

    deleteEmployee : (id) => {
        return fetch(`${EMPLOYEE_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.status);
    },

    createEmployee : (employee) =>
        fetch(`${EMPLOYEE_URL}/create`, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
}

export default EmployeeService;

