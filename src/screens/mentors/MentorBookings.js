import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listMyBookings } from "../../actions/bookActions";
import {
  Rate,
  List,
  Typography,
  Card,
  Alert,
  Col,
  Avatar,
  Row,
  Button,
} from "antd";
import moment from "moment";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const MentorBookings = () => {
  const dispatch = useDispatch();

  const bookListMy = useSelector((state) => state.bookListMy);
  const { loading, error, mybookings } = bookListMy;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listMyBookings());
  }, []);

  console.log("New boookings", mybookings);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}
      {mybookings.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={mybookings.filter(
            (booking) => booking.booking.mentor === userInfo.user._id
          )}
          renderItem={(item) => (
            <Card>
              <Row>
                <Col span={12}>
                  <List.Item
                    actions={[
                      <Card title={moment(item.createdAt).fromNow()}>
                        <Col span={24}></Col>
                        <Col>
                          <Link to={"/videochat"}>
                            <Button type="primary">Call Now</Button>
                          </Link>
                        </Col>
                      </Card>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.booking.image} />}
                      title={
                        <Typography.Title
                          style={{
                            color: "darkblue",
                          }}
                          level={5}
                        >
                          {item.booking.name}
                        </Typography.Title>
                      }
                      description={
                        <Col>
                          <Typography.Paragraph>
                            {item.booking.mentor.skills}
                          </Typography.Paragraph>
                          <Rate defaultValue={item.booking.mentor.rating} />
                        </Col>
                      }
                    />
                  </List.Item>
                </Col>
                <Col span={12}>
                  <Card title="Mentor More Details">
                    <Typography.Paragraph>
                      {item.booking.mentor.phone}
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ color: "green" }}>
                      DATE : {item.booking.date}
                    </Typography.Paragraph>
                    <Typography.Paragraph style={{ color: "red" }}>
                      TIME : {item.booking.time}
                    </Typography.Paragraph>
                  </Card>
                </Col>
              </Row>
            </Card>
          )}
        />
      ) : (
        <Card>
          <Alert
            message="No Schedules"
            description="Please be the first to schedule"
            type="info"
            showIcon
          />
        </Card>
      )}
    </div>
  );
};

export default MentorBookings;
