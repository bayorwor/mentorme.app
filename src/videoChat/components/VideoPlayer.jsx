import React, { useContext, useEffect } from "react";
import { Row, Typography, Card, Col } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SocketContext } from "../Context";

const VideoPlayer = () => {
  const navigate = useNavigate();

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <Row>
      {stream && (
        <Col span={12}>
          <Card>
            <Typography.Title level={5}>
              {name || userInfo.user.name}
            </Typography.Title>
            <video playsInline muted ref={myVideo} autoPlay />
          </Card>
        </Col>
      )}
      {callAccepted && !callEnded && (
        <Col span={12}>
          <Card>
            <Typography.Text>{call.name || "Name"}</Typography.Text>
            <video playsInline ref={userVideo} autoPlay />
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default VideoPlayer;
