import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import { Row } from "antd";

const VideoChat = () => {
  return (
    <Row>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </Row>
  );
};

export default VideoChat;
