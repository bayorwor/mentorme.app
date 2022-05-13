import { PageHeader, Image, Row, Col, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ContactHeader = () => {
  return (
    <PageHeader
      ghost={false}
      avatar={{ src: "./assets/mlogo2.png" }}
      title={"MentorMe"}
      extra={[
        <Button key="3" type="danger">
          <Link to="/register">Register</Link>
        </Button>,
        <Button key="1" type="primary">
          <Link to="/login">Login</Link>
        </Button>,
      ]}
    />
  );
};

export default ContactHeader;
