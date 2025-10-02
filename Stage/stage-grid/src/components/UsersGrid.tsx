import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"; // <-- notez le singulier
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// 🔹 Enregistrement du module communautaire
ModuleRegistry.registerModules([AllCommunityModule]);

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersGrid: React.FC = () => {
    const [rowData, setRowData] = useState<User[]>([]);

    const columnDefs: ColDef<User>[] = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name" },
        { headerName: "Email", field: "email" },
    ];

    useEffect(() => {
        const users: User[] = [
            { id: 1, name: "Alice", email: "alice@example.com" },
            { id: 2, name: "Bob", email: "bob@example.com" },
            { id: 3, name: "Charlie", email: "charlie@example.com" },
        ];
        setRowData(users);
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
            <AgGridReact<User>
                rowData={rowData}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={5}
            />
        </div>
    );
};

export default UsersGrid;
