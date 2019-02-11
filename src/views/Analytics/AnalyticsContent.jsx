import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { chapterWiseData, difficultyWiseData } from "variables/tableData";
import ChapterTable from "./Table";
import DifficultyTable from "./DifficultyTable";
import { Bar, Doughnut } from "react-chartjs-2";

import { chapterBarGraph, doughnutData } from "variables/charts.jsx";

export default class AnalyticsContent extends Component {

  render() {
    const { test, nameOfClass, section, subject } = this.props;

    return (
      <>
        <Row>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle>Chapter Wise Analysis</CardTitle>
                <p className="card-category">Students below 70%</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={chapterBarGraph.data}
                  options={chapterBarGraph.options}
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
                <CardTitle tag="h4">Chapter Statistics</CardTitle>
              </CardHeader>
              <CardBody>
                <ChapterTable data={chapterWiseData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Difficulty Statistics</CardTitle>
              </CardHeader>
              <CardBody>
                <DifficultyTable data={difficultyWiseData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
