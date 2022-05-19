import React, { useContext } from "react";
import { Row, Typography, Card, Col } from "antd";
import { useSelector } from "react-redux";

import { SocketContext } from "../Context";

const VideoPlayer = () => {
  const { callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Row>
      {stream && (
        <Col span={12}>
          <Card>
            <Typography.Title level={5}>{userInfo.user.name}</Typography.Title>
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
