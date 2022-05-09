import React from "react";
import { Row, Col, Image } from "antd";
// import {} from "react-router-dom";

function withLayout(Component) {
  return function Layout(props) {
    return (
      <Row align="center">
        <Col span={12}>
          <Image src="./assets/mentor1.jpg" preview={false} />
        </Col>
        <Col span={12}>
          <Component {...props} />
        </Col>
      </Row>
    );
  };
}

export default withLayout;
