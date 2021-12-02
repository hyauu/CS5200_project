import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

import TableService from "../../services/table-service";

const TableList = (props) => {
    const history = useHistory()

    const [tables, setTables] = useState([]);

    useEffect(() => {
        findAllTables();
    }, []);

    const findAllTables = async () => {
        try {
            const response = await TableService.findAllTables();
            setTables(response);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            <h2>Table List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/table/new")}>
                Add Table
            </button>

            <ul className="list-group mt-3">
                {tables.map((table, idx) => {
                    return <li className="list-group-item" key={idx}>
                        <Link to={`/table/${table.tableId}`}>
                            Table ID: {table.tableId}
                        </Link>
                    </li>
                })
                }
            </ul>
        </div>)
}

export default TableList;