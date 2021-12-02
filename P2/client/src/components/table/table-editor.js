import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import TableService from "../../services/table-service";

const TableEditor = (props) => {
    const {id} = useParams();
    const history = useHistory();
    const [table, setTable] = useState({});
    const [hideSave, setHideSave] = useState(false);



    useEffect(() => {
        console.log(id);
        if (id !== "new") {
            findTableById(id);
        }
        else setHideSave(true)
    }, [id]);

    const saveButton = <button onClick={() => updateTable(table.tableId, table)}
                               className="btn btn-primary me-3">Save
    </button>
    let style = hideSave ?  "" : saveButton;



    const findTableById = async (id) => {
        try {
            const response = await TableService.findTableById(id);
            setTable(response);
        } catch (e) {
            console.log(e);
        }
    };


    const deleteTable = async (id) => {
        try {
            const response = await TableService.deleteTable(id);
        } catch (e) {
            console.log(e);
        }
        history.goBack();
    };


    const updateTable = async (id, table) => {
        try {
            const response = await TableService.updateTable(id, table);
            setTable(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    const createTable = async (table) => {
        try {
            let val = {...table};
            delete val.tableId;
            console.log(val);
            const response = await TableService.createTable(val);
            setTable(response);
            history.goBack();
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <div className="container">
            <h2>Table Editor</h2>

            <label>Capacity</label>
            <input className="form-control"
                   value={table.capacity}
                   onChange={(e) => setTable({...table, capacity: e.target.value})}
            /><br/>

            <button className="btn btn-warning me-3"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger me-3"
                    onClick={() => deleteTable(table.tableId)}>
                Delete
            </button>
            {/*<button onClick={() => updateTable(table.tableId, table)}*/}
            {/*        className="btn btn-primary me-3">Save*/}
            {/*</button>*/}
            {style}
            <button onClick={() => createTable(table)} className="btn btn-success">Create
            </button>

        </div>)
}

export default TableEditor;