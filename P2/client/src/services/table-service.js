const TABLE_URL = "http://localhost:8080/tables";

const TableService = {

    findAllTables : () => {
        return fetch(`${TABLE_URL}/find`,{
            method: "GET"
        }).then(res => res.json());
    },

    findTableById : (id) => {
        return fetch(`${TABLE_URL}/find/id/${id}`,{
            method: "GET"
        }).then(res => res.json());
    },

    updateTable : (id, updatedTable) => {
        return fetch(`${TABLE_URL}/update/id/${id}`,{
            method: "PUT",
            body: JSON.stringify(updatedTable),
            headers: {
                "content-type": "application/json"
            }
        }).then(res => res.json());
    },

    deleteTable : (id) => {
        return fetch(`${TABLE_URL}/delete/id/${id}`, {
            method: "DELETE"
        }).then(res => res.status);
    },

    createTable : (table) =>
        fetch(`${TABLE_URL}/create`, {
            method: 'POST',
            body: JSON.stringify(table),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
}

export default TableService;

