import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from 'reactstrap';

import {
  sectionWiseData,
} from 'variables/tableData';
import ClassTable from './ClassTable';
import { Bar, Doughnut } from 'react-chartjs-2';

import { sectionBarGraph, doughnutData1 } from 'variables/charts.jsx';

export default class ClassAnalytics extends Component {

  render() {
    const { test, nameOfClass, section, subject } = this.props;

    return (
      <>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Card className='card-chart'>
              <CardHeader>
                <CardTitle>Section Wise Analysis</CardTitle>
                <p className='card-category'>Students below 70%</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={sectionBarGraph.data}
                  options={sectionBarGraph.options}
                  width={400}
                  height={100}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Overall Standings</CardTitle>
                <p className='card-category'>Number of students by Standings</p>
              </CardHeader>
              <CardBody>
                <Doughnut
                  data={doughnutData1.data}
                  options={doughnutData1.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag='h4'>Section Statistics</CardTitle>
              </CardHeader>
              <CardBody>
                <ClassTable data={sectionWiseData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}