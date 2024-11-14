import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataContext';
import Actions from '../Actions/Actions';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Table = () => {
    const { data: rowData } = useContext(DataContext);

    const [colDefs] = useState([
        { field: "id", headerName: "ID" },
        { field: "title", headerName: "Title" },
        { field: "body", headerName: "Body" },
        {
            field: "actions",
            headerName: "Actions",
            cellRenderer: Actions
        },
    ]);

    return (
        <div className='box'>
            <div className="ag-theme-quartz" style={{ height: '100vh', width: '50%' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </div>
    );
};

export default Table;
