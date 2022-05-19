import React, { useState, useContext, useEffect } from "react";
import { Button, Row, Typography, Input, Col, Divider, Form } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PhoneOutlined, PhoneFilled, CopyOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import { SocketContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.user.name);
    } else {
      navigate("/login");
    }
  }, [userInfo, navigate, setName]);

  return (
    <div>
      <Form>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Typography.Title level={5}>Account Info</Typography.Title>
            <Input
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <Button type="primary" icon={<CopyOutlined />}>
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </Col>
          <Divider />
          <Col span={16}>
            <Typography.Text>Make a call</Typography.Text>
            <Input
              placeholder="Enter ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {callAccepted && !callEnded ? (
              <Button
                type="danger"
                icon={<PhoneOutlined />}
                onClick={leaveCall}
              >
                Hang Up
              </Button>
            ) : (
              <Button
                type="primary"
                icon={<PhoneFilled />}
                onClick={() => callUser(idToCall)}
              >
                Call
              </Button>
            )}
          </Col>
        </Row>
      </Form>
      {children}
    </div>
  );
};

export default Sidebar;
