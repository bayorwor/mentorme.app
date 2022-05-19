import { Row, Col, Image, Button, Typography, Carousel, Alert } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import MentorsList from "./mentors/MentorsList";
import MentorsCard from "../components/mentors/MentorsCard";
import Loader from "../components/Loader";
import { listTopMentors } from "../actions/mentorActions";

const { Title } = Typography;

function Home() {
  const dispatch = useDispatch();

  const mentorTopRated = useSelector((state) => state.mentorTopRated);
  const { mentors, loading, error } = mentorTopRated;

  useEffect(() => {
    dispatch(listTopMentors());
  }, [dispatch]);

  return (
    <div data-aos="fade-right">
      <Carousel autoplay>
        <div>
          <Row
            style={{
              height: "40vh",
              // background: "#041529",
              display: "flex",
              alignItems: "center",
              padding: "0px 20px",
              // "url(./assets/mentor3.jpeg) no-repeat center center cover",
            }}
          >
            <Col span={12}>
              <Title type="danger">Welcome to MentorMe</Title>
              <Title level={3}>
                Mentorship can provide numerous benefits for mentors and their
                mentees. Developing this relationship can help both of you learn
                new things, build your networks and grow as professionals.
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
        <div>
          <Image src="./assets/mentor3.jpeg" height={"40vh"} width={"100%"} />
        </div>
      </Carousel>
      <Col>
        <Row gutter={[26, 26]} align="center" data-aos="fade-up">
          <Title style={{ margin: 40 }} type="warning" level={2}>
            Top Rated Mentors
          </Title>
        </Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <Alert message="Error" />
        ) : (
          <Row gutter={[26, 26]} align="center">
            {mentors.map((mentor) => (
              <Col key={mentor.id} span={6}>
                <MentorsCard data={mentor} />
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </div>
  );
}

export default Home;
