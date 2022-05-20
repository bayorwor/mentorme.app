import { useState } from "react";
import { PageHeader, Button, Dropdown, Menu, Space, Avatar } from "antd";
import {
  LogoutOutlined,
  DownOutlined,
  PlusCircleOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import BecomeMentor from "./mentors/BecomeMentor";

const ContactHeader = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <PageHeader
      ghost={false}
      avatar={{ src: "./assets/mlogo2.png" }}
      title={"MentorMe"}
      extra={[
        !userInfo ? (
          <>
            <Button key="3" type="danger">
              <Link to="/register">Register</Link>
            </Button>
            <Button key="1" type="primary">
              <Link to="/login">Login</Link>
            </Button>
          </>
        ) : (
          <Space size="middle">
            <Link to="/mybookings">
              <Button type="link" ghost icon={<ScheduleOutlined />}>
                My Schedules
              </Button>
            </Link>
            <Button
              onClick={handleToggle}
              type="dashed"
              danger
              ghost
              icon={<PlusCircleOutlined />}
            >
              Become A Mentor
            </Button>
            {
              <BecomeMentor
                isModalVisible={isModalVisible}
                handleToggle={handleToggle}
              />
            }
            <Dropdown
              key="2"
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to="/mentorbookings">my profile</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>
                    <Link to="/mybookings">schedules with me</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item onClick={handleLogout}>
                    <Button type="danger" icon={<LogoutOutlined />}>
                      Logout
                    </Button>
                  </Menu.Item>
                </Menu>
              }
            >
              <Space>
                <Avatar src={userInfo.user.profile} />
                {userInfo && userInfo.user.name}
                <DownOutlined />
              </Space>
            </Dropdown>
          </Space>
        ),
      ]}
    />
  );
};

export default ContactHeader;
