import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Divider,
  Row,
  Col,
  Image,
  Alert,
  Space,
  Tag,
  List,
  Avatar,
  Input,
  Rate,
  Form,
  Spin,
  message,
} from "antd";
import { ScheduleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  createMentorReview,
  listMentorDetails,
} from "../../actions/mentorActions";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

const MentorDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const mentorDetails = useSelector((state) => state.mentorDetails);
  const { loading, error, mentor } = mentorDetails;

  const mentorReviewCreate = useSelector((state) => state.mentorReviewCreate);
  const {
    loading: reviewLoading,
    error: reviewError,
    success: reviewSuccess,
  } = mentorReviewCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (reviewSuccess) {
      setRating(0);
      setComment("");
    }
    dispatch(listMentorDetails(id));
  }, [reviewSuccess, id, dispatch]);

  useEffect(() => {
    if (reviewError) {
      setRating(0);
      setComment("");
      message.error(reviewError);
    }
  }, [reviewError]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createMentorReview(id, { rating, comment }));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </div>
    );
  }

  console.log("mentor one : ", mentor);
  return (
    <>
      {mentor && (
        // <Space size="large">
        <Row gutter={[16]}>
          <Col span={12}>
            <Image
              src={mentor.profile}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col span={12}>
            <h1>{mentor.name}</h1>
            <h3 style={{ color: "blueviolet" }}>{mentor.profession}</h3>
            <p>
              {/* {mentor.skills.split(",").map((skill) => (
                <Tag color={"green"} key={skill}>
                  {skill}
                </Tag>
              ))} */}
            </p>
            <Divider />
            <Button type="primary" shape="round" icon={<ScheduleOutlined />}>
              Book Session
            </Button>
            <Divider />
            {mentor.reviews.length > 0 ? (
              <List
                itemLayout="horizontal"
                dataSource={mentor.reviews}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Rate
                        // disabled
                        defaultValue={item.rating}
                        // style={{ fontSize: "20px" }}
                      />,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.profile} />}
                      title={<a href="#">{item.name}</a>}
                      description={item.comment}
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Card>
                <Alert message="No reviews yet" type="info" />
              </Card>
            )}
            <Divider />
            {userInfo ? (
              <Col span={12}>
                <Form
                  style={{
                    padding: "20px",
                    border: "1px solid #d9d9d9",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 3px rgba(26,26,26,.1)",
                  }}
                >
                  <Rate
                    allowHalf
                    defaultValue={2.5}
                    value={rating}
                    onChange={(value) => setRating(value)}
                  />
                  <Input.TextArea
                    placeholder="Leave a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <Divider />
                  <Button
                    onClick={submitHandler}
                    type="primary"
                    htmlType="submit"
                  >
                    {reviewLoading ? <Spin /> : "Submit"}
                  </Button>
                </Form>
              </Col>
            ) : (
              <Alert
                message="Error"
                description="You need to login to see this page"
                type="error"
                showIcon={true}
              />
            )}
          </Col>
        </Row>
        // </Space>
      )}
    </>
  );
};

export default MentorDetails;
