import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Divider,
  Form,
  message,
  Spin,
  DatePicker,
  TimePicker,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../../actions/bookActions";

const BookMentor = ({ isModalVisible, handleToggle, id }) => {
  const dispatch = useDispatch();

  const bookCreate = useSelector((state) => state.bookCreate);
  const { loading, error, success } = bookCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (success) {
      handleToggle();
      message.success("schedule successful added");
    }
    if (error) {
      message.error(error);
    }
  }, [success, error]);

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && date) {
      dispatch(
        createBook({
          booking: {
            mentor: id,
            name: userInfo.user.name,
            image: userInfo.user.profile,
            time,
            date,
          },
        })
      );
    } else {
      message.warning("Please fill all the fields");
    }
  };

  return (
    <>
      <Modal
        title="Become a Mentor Today"
        visible={isModalVisible}
        onOk={handleToggle}
        onCancel={handleToggle}
        footer={null}
      >
        <Form>
          <Row gutter={[16]}>
            <Col span={12}>
              <label>Date</label>
              <DatePicker
                // value={date}
                onChange={(date, dateString) => setDate(dateString)}
                format="YYYY-MM-DD"
                placeholder="Select Date"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={12}>
              <label>Time</label>
              <TimePicker
                // value={time}
                onChange={(time, timeString) => setTime(timeString)}
                format="HH:mm"
                placeholder="Select Time"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <Button onClick={handleSubmit} htmlType="submit" type="primary">
                {loading ? <Spin /> : "Book Now"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default BookMentor;
