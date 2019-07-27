import React from 'react';
import DataTable from 'react-data-table-component';
import data from './exampleData.js';
import HeatMap from './components/HeatMap';

const columns = [
    {
        name: 'id',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'smiles',
        selector: 'smiles',
        sortable: false,
    },
    {
        name: 'htsassays',
        selector: 'heatmap',
        sortable: false,
        cell: d => <HeatMap key={d.id} data={d.heatmap}/>
    }
];



function App() {
    return (
        <div className="App">
            <DataTable
                keyField={'uuid'}
                title="selected compounds"
                columns={columns}
                data={data}
                defaultSortField="id"
                defaultSortDirection="desc"
            />
        </div>
    );
}

export default App;
