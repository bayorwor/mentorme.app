import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import items from "../utils/items";

const { Header, Content, Footer } = Layout;

const LayoutComponent = (props) => {
  return (
    <Layout
      style={{
        minHeight: "95vh",
      }}
      className="layout"
    >
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {items.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={`${item.href}`}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#00474f",
          color: "white",
          marginTop: "30px",
        }}
      >
        MentorMe Platform {new Date().getFullYear()} Created by MentorMe Team
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
