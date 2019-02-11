
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactTable, { ReactTableDefaults } from "react-table";
import "react-table/react-table.css";

export default class StudentsTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openNotify: false,
    };
  }

  getAggregate = (data) => {
    const { low, medium, high } = data;
    const aggregate = (low + medium + high) / 3;
    return parseFloat(aggregate).toFixed(2);
  }

  getTotal = (data) => {
    const {
      english,
      hindi,
      kannada,
      math,
      science,
      social
    } = data;
    const total = (english + hindi + kannada + math + science + social) / 6;
    return parseFloat(total).toFixed(2);
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
      <>
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
              Header: 'Name of Student',
              accessor: 'index',
            },
            {
              Header: 'English',
              accessor: 'english',
            },
            {
              Header: 'Hindi',
              accessor: 'hindi',
            },
            {
              Header: 'Kannada',
              accessor: 'kannada',
            },
            {
              Header: 'Mathematics',
              accessor: 'math',
            },
            {
              Header: 'Science',
              accessor: 'science',
            },
            {
              Header: 'Social Studies',
              accessor: 'social',
            },
            {
              Header: 'Total',
              accessor: 'total',
              Cell: row => <span>{this.getTotal(row.original)}</span>
            },
            {
              Header: 'Action',
              accessor: '',
              Cell: row => <Button type="button" color="primary" onClick={this.handleDialog} >Notify Parent</Button>
            },
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
      </>  
    );
  }
}
