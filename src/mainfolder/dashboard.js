import React, { useState, useEffect } from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Dashboard(){
    return(
        <div>
            <DataTable value={''}>
                <Column field="name" header="Email"></Column>
                <Column field="category" header="Provider"></Column>
                <Column field="quantity" header="actions"></Column>
            </DataTable>
        </div>
    );
};