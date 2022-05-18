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
  Typography,
  Badge,
} from "antd";
import {
  ScheduleOutlined,
  BackwardFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  createMentorReview,
  listMentorDetails,
} from "../../actions/mentorActions";
import Loader from "../../components/Loader";
import { Link, useParams } from "react-router-dom";
import TimeAgo from "timeago-react";

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
      <Link to="/mentors">
        <Button ghost icon={<BackwardFilled />} type="link">
          Back to Mentors
        </Button>
      </Link>
      <Divider />
      {mentor && (
        // <Space size="large">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Badge.Ribbon text={<Rate disabled value={mentor.rating} />}>
              <Card
                cover={
                  <Image
                    src={mentor.profile}
                    alt="Mentor"
                    style={{ width: "100%", height: "100%" }}
                  />
                }
              />
            </Badge.Ribbon>
          </Col>
          <Col span={8}>
            <Typography.Title style={{ color: "darkblue" }} level={2}>
              {mentor.name}
            </Typography.Title>
            <Typography.Paragraph>{mentor.address}</Typography.Paragraph>
            <Typography.Paragraph>{mentor.email}</Typography.Paragraph>
            <Typography.Paragraph>{mentor.phone}</Typography.Paragraph>
            <Divider />

            {mentor.skills &&
              mentor.skills.split(",").map((skill) => (
                <Tag color={"green"} key={skill}>
                  {skill}
                </Tag>
              ))}
            <Divider />

            {mentor.reviews.length > 0 ? (
              <List
                itemLayout="horizontal"
                dataSource={mentor.reviews}
                renderItem={(item) => (
                  <List.Item actions={[<TimeAgo datetime={item.createdAt} />]}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.profile} />}
                      title={
                        <Typography.Title
                          style={{
                            color: "darkblue",
                          }}
                          level={5}
                        >
                          {item.name}
                        </Typography.Title>
                      }
                      description={
                        <Col>
                          <Typography.Paragraph>
                            {item.comment}
                          </Typography.Paragraph>
                          <Rate defaultValue={item.rating} />
                        </Col>
                      }
                    />
                  </List.Item>
                )}
              />
            ) : (
              <Card>
                <Alert
                  message="No reviews yet"
                  description="Please be the first to review"
                  type="info"
                  showIcon
                />
              </Card>
            )}
            <Divider />
            {userInfo ? (
              <Col span={24}>
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
          <Col span={8}>
            <Badge.Ribbon text={`${mentor.yearsOfExperience} yrs`}>
              <Card title={mentor.name}>
                <Typography.Title level={4} style={{ color: "blueviolet" }}>
                  {mentor.profession}
                </Typography.Title>
                <Divider />
                <Button type="danger" icon={<ScheduleOutlined />}>
                  Book Session
                </Button>
                <Link to="/videochat">
                  <Button type="primary" icon={<VideoCameraOutlined />}>
                    Video Call
                  </Button>
                </Link>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
        // </Space>
      )}
    </>
  );
};

export default MentorDetails;
