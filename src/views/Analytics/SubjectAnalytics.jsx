import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import {
  subjectWiseData,
  studentsWiseData
} from "variables/tableData";
import ChapterTable from "./Table";
import ClassTable from "./ClassTable";
import StudentsTable from "./StudentsTable";
import { Bar, Doughnut } from "react-chartjs-2";

import { subjectStatisticsData, doughnutData } from "variables/charts.jsx";

export default class SubjectAnalytics extends Component {

  render() {
    const { test, nameOfClass, section, subject } = this.props;

    return (
      <>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>Subject Wise Analysis</CardTitle>
                <p className="card-category">Students below 70%</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={subjectStatisticsData.data}
                  options={subjectStatisticsData.options}
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
                <p className="card-category">Number of students by Standings</p>
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
                <CardTitle tag="h4">Subject Statistics</CardTitle>
              </CardHeader>
              <CardBody>
                <ClassTable data={subjectWiseData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students Statistics</CardTitle>
              </CardHeader>
              <CardBody>
                <StudentsTable data={studentsWiseData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
