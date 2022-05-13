import { Row, Col, Image, Button } from "antd";
import React from "react";
import LayoutComponent from "../components/Layout";
import { Link } from "react-router-dom";
import MentorsList from "./mentors/MentorsList";

function Home() {
  return (
    <div>
      <Row
        style={{
          height: "50vh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          padding: "0px 20px",
          // "url(./assets/mentor3.jpeg) no-repeat center center cover",
        }}
      >
        <Col span={16}>
          <h1>Welcome to MentorMe</h1>
          <p>
            Mentorship can provide numerous benefits for mentors and their
            mentees. Developing this relationship can help both of you learn new
            things, build your networks and grow as professionals. Understanding
            these benefits can help you decide whether to find a mentor or
            become one. In this article, we discuss why a mentor is important,
            along with several reasons to become a mentor.
          </p>
          <Button type="primary">
            <Link to="/mentors">See mentors</Link>
          </Button>
        </Col>
        <Col span={8}>
          <Image
            src="./assets/hero.png"
            preview={false}
            style={{ height: "50vh" }}
          />
        </Col>
      </Row>
      <Col
      // style={{
      //   backgroundColor: "#ffff",
      //   width: "100vw",
      // }}
      >
        <MentorsList />
      </Col>
    </div>
  );
}

export default Home;
