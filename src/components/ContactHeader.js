import { PageHeader, Button, Dropdown, Menu, Space, Avatar } from "antd";
import { LogoutOutlined, DownOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const ContactHeader = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
            <Button type="secondary" icon={<DownOutlined />}>
              Become A Mentor
            </Button>
            <Dropdown
              key="2"
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to="/profile">my profile</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/profile">schedules</Link>
                  </Menu.Item>
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
