
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
            Header: 'Section',
            accessor: 'index',
          },
          {
            Header: 'Total',
            accessor: 'total',
          },
          {
            Header: 'Highest',
            accessor: 'highest',
          },
          {
            Header: 'Average',
            accessor: 'avg',
          },
          {
            Header: 'Lowest',
            accessor: 'lowest',
          },
        ]}
        pageSize={10}
        showPageSizeOptions={false}
      />
    );
  }
}
