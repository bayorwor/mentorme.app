import React, { useEffect } from "react";
import MentorsCard from "../../components/mentors/MentorsCard";
import { Alert, Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { listMentors } from "../../actions/mentorActions";
import Loader from "../../components/Loader";

const MentorsList = () => {
  const dispatch = useDispatch();

  const mentorList = useSelector((state) => state.mentorList);
  const { mentors, loading, error } = mentorList;

  useEffect(() => {
    dispatch(listMentors());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="title">Our List of Mentors</h1>
      <h4 className="p-3">
        Mentorship can provide numerous benefits for mentors and their mentees.
      </h4>
      <Row gutter={[26, 26]} align="center" data-aos="fade-up">
        {mentors.length <= 0 && (
          <Alert
            message="No mentors found"
            description="We are sorry, no mentors were found. Please try again later."
          />
        )}
        {mentors.map((mentor) => (
          <Col key={mentor._id} span={6}>
            <MentorsCard data={mentor} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MentorsList;
