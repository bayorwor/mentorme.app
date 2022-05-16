import { Row, Col, Image, Button, Typography, Carousel } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import MentorsList from "./mentors/MentorsList";

const { Title } = Typography;

function Home() {
  return (
    <div data-aos="fade-right">
      <Carousel autoplay>
        <div>
          <Row
            style={{
              height: "50vh",
              background: "#",
              display: "flex",
              alignItems: "center",
              padding: "0px 20px",
              // "url(./assets/mentor3.jpeg) no-repeat center center cover",
            }}
          >
            <Col span={12}>
              <Title type="danger">Welcome to MentorMe</Title>
              <Title level={4}>
                Mentorship can provide numerous benefits for mentors and their
                mentees. Developing this relationship can help both of you learn
                new things, build your networks and grow as professionals.
                Understanding these benefits can help you decide whether to find
                a mentor or become one. In this article, we discuss why a mentor
                is important, along with several reasons to become a mentor.
              </Title>
              <br />
              <br />
              <Button shape="round" type="primary">
                <Link to="/mentors">Find a Mentor</Link>
              </Button>
            </Col>
            <Col offset={4} span={8}>
              <Image
                data-aos="zoom-out-down"
                src="./assets/hero.png"
                preview={false}
                style={{ height: "50vh" }}
              />
            </Col>
          </Row>
        </div>
        <div></div>
      </Carousel>
      <Col>
        <MentorsList />
      </Col>
    </div>
  );
}

export default Home;
