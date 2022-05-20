import React, { useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import { Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ContextProvider } from "./Context";

const VideoChat = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <ContextProvider>
      <Row>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </Row>
    </ContextProvider>
  );
};

export default VideoChat;
