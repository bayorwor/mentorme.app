import React from "react";
import { Row, Col, Image, Card } from "antd";
// import {} from "react-router-dom";

function withLayout(Component) {
  return function Layout(props) {
    return (
      <Card
        style={{
          margin: "20px auto",
          // background: "transparent",
        }}
      >
        <Row
          gutter={[20, 20]}
          align="center"
          data-aos="fade-up"
          style={{
            margin: "auto",
            marginTop: "40px",
            marginBottom: "40px",
            width: "100%",
            height: "100%",
          }}
        >
          <Col className="gutter-row">
            {/* <Image
              src="./assets/mentor1.jpg"
              preview={false}
              style={{ height: "350px" }}
            /> */}
          </Col>
          <Col span={8} className="gutter-row">
            <Component {...props} />
          </Col>
        </Row>
      </Card>
    );
  };
}

export default withLayout;
