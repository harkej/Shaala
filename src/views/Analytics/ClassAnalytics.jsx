import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import { Bar, Doughnut } from 'react-chartjs-2';
import { 
  sectionBarGraph1, 
  sectionBarGraph2, 
  doughnutData1, 
  doughnutData2 
} from 'variables/charts';

import {
  sectionWiseData1,
  sectionWiseData2,
} from 'variables/tableData';
import ClassTable from './ClassTable';


export default class ClassAnalytics extends Component {

  render() {
    const { test, nameOfClass } = this.props;
    const barData = test === 'Test 1' ?
      JSON.parse(JSON.stringify(sectionBarGraph1)) :
      JSON.parse(JSON.stringify(sectionBarGraph2));
    const doughnutData = test === 'Test 1' ?
      JSON.parse(JSON.stringify(doughnutData1)) :
      JSON.parse(JSON.stringify(doughnutData2));
    const sectionData = test === 'Test 1' ?
      JSON.parse(JSON.stringify(sectionWiseData1)) :
      JSON.parse(JSON.stringify(sectionWiseData2));

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
                  data={barData.data}
                  options={barData.options}
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
                  data={doughnutData.data}
                  options={doughnutData.options}
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
                <ClassTable data={sectionData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
