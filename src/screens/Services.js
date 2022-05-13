import { Row, Col } from "antd";
import React from "react";
import ServicesCard from "../components/services/ServicesCard";

const Services = () => {
  return (
    <div>
      <h1 className="title">Services</h1>
      <h4 className="p-3">
        Mentorship can provide numerous benefits for mentors and their mentees.
        <br />
        Developing this relationship can help both of you learn new things,
        build your networks and grow as professionals. Understanding these
        <br />
        benefits can help you decide whether to find a mentor or become one.
      </h4>

      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
        <Col className="gutter-row" span={8}>
          <ServicesCard />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
