import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactTable, { ReactTableDefaults } from "react-table";
import "react-table/react-table.css";

export default class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openNotify: false,
    };
  }

  getAggregate = (data) => {
    const { C1, C2, C3 } = data;
    const aggregate = (C1 + C2 + C3) / 3;
    return parseFloat(aggregate).toFixed(2);
  }

  handleDialog = () => {
    this.setState({ openNotify: true });
  }

  handleClose = () => {
    this.setState({ openNotify: false });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
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
              Header: 'C1',
              accessor: 'C1',
              Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
            },
            {
              Header: 'C2',
              accessor: 'C2',
              Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
            },
            {
              Header: 'C3',
              accessor: 'C3',
              Cell: row => <span>{parseFloat(row.value).toFixed(2)}</span>
            },
            {
              Header: 'Aggregate',
              accessor: 'aggregate',
              Cell: row => <span onClick={this.handleEdit}>{this.getAggregate(row.original)}</span>
            },
            {
              Header: 'Action',
              accessor: '',
              Cell: row => <Button type="button" color="primary" onClick={this.handleDialog} >Notify Parent</Button>
            }
          ]}
          pageSize={10}
          showPageSizeOptions={false}
        />
        <Dialog
          open={this.state.openNotify}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Action"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to notify the parent about their child's marks?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
