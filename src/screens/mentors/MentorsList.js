import React from "react";
import MentorsCard from "../../components/mentors/MentorsCard";
import { Col, Row } from "antd";

const MentorsList = () => {
  return (
    <div>
      <h1 className="title">Our List of Mentors</h1>
      <h4 className="p-3">
        Mentorship can provide numerous benefits for mentors and their mentees.
      </h4>
      <Row align="center" data-aos="fade-up">
        <Col span={6}>
          <MentorsCard
            data={{
              name: "John Doe",
              description: "Cheif Executive Officer",
              img: "./assets/teams/abudu.jpg",
            }}
          />
        </Col>
        <Col span={6}>
          <MentorsCard
            data={{
              name: "John Doe",
              description: "Cheif Executive Officer",
              img: "./assets/teams/abudu.jpg",
            }}
          />
        </Col>
        <Col span={6}>
          <MentorsCard
            data={{
              name: "John Doe",
              description: "Cheif Executive Officer",
              img: "./assets/teams/abudu.jpg",
            }}
          />
        </Col>
        <Col span={6}>
          <MentorsCard
            data={{
              name: "John Doe",
              description: "Cheif Executive Officer",
              img: "./assets/teams/abudu.jpg",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MentorsList;
