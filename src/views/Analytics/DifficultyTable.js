
import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from "react-table";
import "react-table/react-table.css";

export default class Table extends Component {

  getAggregate = (data) => {
    const { low, medium, high } = data;
    const aggregate = (low + medium + high) / 3;
    return parseFloat(aggregate).toFixed(2);
  }

  render() {
    const { data } = this.props;
    return (
      <ReactTable 
        data={data.data}
        noDataText="No products found!"
        column={{
          ...ReactTableDefaults.column,
          headerStyle: { 
            textAlign: 'center',
            overflow: 'unset !important',
            whiteSpace: 'pre-line !important',
            wordWrap: 'break-word !important',
          },
        }}
        columns={[
          {
            Header: 'Student Name',
            accessor: 'index',
          },
          {
            Header: 'Low',
            accessor: 'low',
            Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
          },
          {
            Header: 'Medium',
            accessor: 'medium',
            Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
          },
          {
            Header: 'High',
            accessor: 'high',
            Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
          },
          {
            Header: 'Aggregate',
            accessor: 'aggregate',
            Cell: row => <span onClick={this.handleEdit}>{this.getAggregate(row.original)}</span>
          },
        ]}
        pageSize={10}
        showPageSizeOptions={false}
      />
    );
  }
}
