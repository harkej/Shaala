import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// react plugin used to create charts
import { Line, Doughnut, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Stats from 'components/Stats/Stats';

import {
  testWiseAnalytics1,
  testWiseAnalytics2,
  doughnutData1,
  doughnutData2,
  subjectStatisticsData1,
  subjectStatisticsData2,
} from 'variables/charts';
import { parseCsvFile, CSVtoArray } from "../../utils.js/csvHelpers";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nameOfClass: '8th',
      test: 'Test 1',
    };
  }

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  uploadCsv = async e => {
    const file = e.target.files[0];
    const uploadedProductList = await parseCsvFile(file);
    this.processData(uploadedProductList);
  };

  processData = data => {
    const processedData = {};
    processedData.studentsData = [];
    const { studentsData } = processedData;
    data.forEach((item, index) => {
      switch (index) {
        case 0:
          processedData.className = item.split(',')[1];
          break;
        case 1:
          processedData.section = item.split(',')[1];
          break;
        case 2:
          processedData.test = item.split(',')[1];
          break;
        case 3:
          processedData.subject = item.split(',')[1];
          break;
        case 4:
          processedData.schema = CSVtoArray(item.substr(item.indexOf(',')));
          break;
        case 5:
          processedData.chapter = CSVtoArray(item.substr(item.indexOf(',')));
          break;
        case 6:
          processedData.difficulty = CSVtoArray(item.substr(item.indexOf(',')));
          break;
        case 7:
          processedData.allottedMarks = CSVtoArray(item.substr(item.indexOf(',')));
          break;
        default:
          studentsData.push({
            name: item.substr(0, item.indexOf(',') + 1),
            schemaMarks: CSVtoArray(item.substr(item.indexOf(','))),
          });
          break;
      }
    });
    processedData.studentsData = studentsData;
  };

  render() {
    const { nameOfClass, test } = this.state;
    const subjectData = test === 'Test 1' ? 
      JSON.parse(JSON.stringify(subjectStatisticsData1.data)) : 
      JSON.parse(JSON.stringify(subjectStatisticsData2.data));
    delete subjectData._meta;
    subjectData.datasets.forEach(item => {
      delete item._meta;
    });

    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Complaints</p>
                      <CardTitle tag="p">50</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Suggestions</p>
                      <CardTitle tag="p">45</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Students</p>
                      <CardTitle tag="p">2300</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <i className="nc-icon nc-badge text-primary" />
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="numbers">
                      <p className="card-category">Staff</p>
                      <CardTitle tag="p">145</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xs={12} sm={6} md={6} lg={3}>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs={5} md={4}>
                    <div className="icon-big text-center">
                      <input
                        id="alliance_logo"
                        type="file"
                        accept="text/csv"
                        onChange={this.uploadCsv}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader className="dashboard-testwise-container">
                <div>
                  <CardTitle>Test Wise Analysis</CardTitle>
                  <p className="card-category">
                    Average Performance Comparison
                  </p>
                </div>
                <div style={{width: '200px'}}>
                  <FormControl 
                    classes={{
                      root: 'width80',
                    }}
                  >
                    <InputLabel htmlFor="age-simple">Class</InputLabel>
                    <Select
                      value={nameOfClass}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                      onChange={this.handleChange('nameOfClass')}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value='8th'>8th</MenuItem>
                      <MenuItem value='10th'>10th</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardHeader>
              <CardBody>
                <Line
                  data={nameOfClass === '8th' ? testWiseAnalytics1.data : testWiseAnalytics2.data}
                  options={testWiseAnalytics1.options}
                  width={200}
                  height={50}
                />
              </CardBody>
              {/* <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4}>
            <Card>
              <CardHeader>
                <CardTitle>Overall Standings</CardTitle>
                <p className="card-category">Number of students by Standings</p>
              </CardHeader>
              <CardBody>
                <Doughnut
                  data={
                    nameOfClass === '8th' ? 
                      JSON.parse(JSON.stringify(doughnutData1.data))
                    : 
                    JSON.parse(JSON.stringify(doughnutData2.data))
                  }
                  options={doughnutData1.options}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <Card className="card-chart">
              <CardHeader className="dashboard-testwise-container">
                <div>
                  <CardTitle>Subject Analysis</CardTitle>
                  <p className="card-category">Students below 70%</p>
                </div>
                <div style={{width: '200px'}}>
                  <FormControl 
                    classes={{
                      root: 'width80',
                    }}
                  >
                    <InputLabel htmlFor="age-simple">Test</InputLabel>
                    <Select
                      value={test}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                      onChange={this.handleChange('test')}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value='Test 1'>Test 1</MenuItem>
                      <MenuItem value='Test 2'>Test 2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardHeader>
              <CardBody>
                <Bar
                  data={subjectData}
                  options={subjectStatisticsData1.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              {/* <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-check",
                      t: " Data information certified"
                    }
                  ]}
                </Stats>
              </CardFooter> */}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
