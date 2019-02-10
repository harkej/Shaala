import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AnalyticsContent from "./AnalyticsContent";
import ClassAnalytics from "./ClassAnalytics";
import SubjectAnalytics from "./SubjectAnalytics";

class RegularTables extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nameOfClass: '',
      section: '',
      test: '',
      subject: '',
    };
  }

  handleChange = name => event => {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  renderContent = () => {
  }

  render() {
    const { nameOfClass, section, test, subject } = this.state;
    return (
      <div className="content analytics-container">
        <div className="analytics-sidebar">
          <h4>Filters:</h4>
          <div className="filter-container">
            <div className="select-container">
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
            <div className="select-container">
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
            <div className="select-container">
              <FormControl 
                classes={{
                  root: 'width80',
                }}
              >
                <InputLabel htmlFor="age-simple">Section</InputLabel>
                <Select
                  value={section}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                  disabled={false}
                  onChange={this.handleChange('section')}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='A'>A</MenuItem>
                  <MenuItem value='B'>B</MenuItem>
                  <MenuItem value='C'>C</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="select-container">
              <FormControl 
                classes={{
                  root: 'width80',
                }}
              >
                <InputLabel htmlFor="age-simple">Subject</InputLabel>
                <Select
                  value={subject}
                  inputProps={{
                    name: 'age',
                    id: 'age-simple',
                  }}
                  onChange={this.handleChange('subject')}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Biology'>Biology</MenuItem>
                  <MenuItem value='Chemistry'>Chemistry</MenuItem>
                  <MenuItem value='Physics'>Physics</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div style={{margin: '20px 0 0'}}>
            <Button 
              type="button" 
              color="primary" 
              onClick={this.applyFilter}
            >
              Apply Filters
            </Button>
          </div>
        </div>
        <div className="analytics-content">
          <Row>
              {
                test &&
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
                            <p className="card-category">Test</p>
                            <CardTitle tag="p">{test}</CardTitle>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              }
              {
                nameOfClass &&
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
                            <p className="card-category">Class</p>
                            <CardTitle tag="p">{nameOfClass}</CardTitle>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              }
              {
                section &&
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
                            <p className="card-category">Section</p>
                            <CardTitle tag="p">{section}</CardTitle>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              }
              {
                subject &&
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
                            <p className="card-category">Subject</p>
                            <CardTitle tag="p">{subject}</CardTitle>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              }
          </Row>
          {
            test && nameOfClass && section && subject &&
            <AnalyticsContent
              test={test}
              nameOfClass={nameOfClass}
              section={section}
              subject={subject}
            />
          }
          {
            test && nameOfClass && !section && !subject &&
            <ClassAnalytics
              test={test}
              nameOfClass={nameOfClass}
              section={section}
              subject={subject}
            />
          }
          {
            test && nameOfClass && section && !subject &&
            <SubjectAnalytics
                test={test}
                nameOfClass={nameOfClass}
                section={section}
                subject={subject}
            />
          }
        </div>
      </div>
    );
  }
}

export default RegularTables;
