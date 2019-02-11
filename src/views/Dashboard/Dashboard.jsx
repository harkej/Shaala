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
import { Line, Pie, Doughnut, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Stats from "components/Stats/Stats.jsx";

import {
  testWiseAnalytics,
  doughnutData,
  subjectStatisticsData,
} from "variables/charts.jsx";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nameOfClass: 'Eighth',
      test: 'Test 1',
    }
  }

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { nameOfClass, test } = this.state;

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
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader className="dashboard-testwise-container">
                <div>
                  <CardTitle>Test Wise Analysis</CardTitle>
                  <p className="card-category">Average Performance Comparison</p>
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
                      <MenuItem value='Eighth'>Eighth</MenuItem>
                      <MenuItem value='Ninth'>Ninth</MenuItem>
                      <MenuItem value='Tenth'>Tenth</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardHeader>
              <CardBody>
                <Line
                  data={testWiseAnalytics.data}
                  options={testWiseAnalytics.options}
                  width={200}
                  height={50}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <Stats>
                  {[
                    {
                      i: "fas fa-history",
                      t: " Updated 3 minutes ago"
                    }
                  ]}
                </Stats>
              </CardFooter>
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
                  data={doughnutData.data}
                  options={doughnutData.options}
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
                      <MenuItem value='Test 3'>Test 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardHeader>
              <CardBody>
                <Bar
                  data={subjectStatisticsData.data}
                  options={subjectStatisticsData.options}
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
