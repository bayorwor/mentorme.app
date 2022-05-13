import React from "react";
import { Row, Col, Image } from "antd";
// import {} from "react-router-dom";

function withLayout(Component) {
  return function Layout(props) {
    return (
      <Row>
        <Col span={12} className="height-100">
          <Image
            src="./assets/mentor1.jpg"
            preview={false}
            style={{ height: "100vh" }}
          />
        </Col>
        <Col span={12} className="height-100">
          <Component {...props} />
        </Col>
      </Row>
    );
  };
}

export default withLayout;
