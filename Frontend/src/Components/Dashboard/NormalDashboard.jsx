import React, { Component } from "react";

import { Col, Container, Row, Table } from "react-bootstrap";
import { upcommingAppointments, reports } from "./data";
class NormalDashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">User's Dashboard</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4 className="text-center">Upcomming Appointments</h4>
          </Col>
        </Row>

        <Row>
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Add To Calander</th>
                </tr>
              </thead>
              <tbody>
                {upcommingAppointments.map((x, i) => {
                  return (
                    <>
                      <tr>
                        <td style={{ padding: "15px" }}>{i + 1}</td>
                        <td style={{ padding: "15px" }}>{x.Date}</td>
                        <td style={{ padding: "15px" }}>{x.Location}</td>
                        <td style={{ padding: "15px" }}>{x.Time}</td>
                        <td style={{ padding: "15px" }}>Add to calander</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Row>
        <Row>
          <Col>
            <h4 className="text-center">Pathalogy Reports</h4>
          </Col>
        </Row>
        <Row>
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
            <Col>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Date</th>
                    <th>Test</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((x, i) => {
                    return (
                      <>
                        <tr>
                          <td style={{ padding: "15px" }}>{i + 1}</td>
                          <td style={{ padding: "15px" }}>{x.Date}</td>
                          <td style={{ padding: "15px" }}>{x.Test}</td>
                          <td style={{ padding: "15px" }}>{x.Status}</td>
                          <td style={{ padding: "15px" }}>View</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default NormalDashboard;
