import React from "react";
import { Card, Avatar, Row, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const TeamCard = ({ data }) => {
  return (
    <div data-aos="flip-up">
      <Card
        hoverable
        style={{
          // width: 300,
          margin: "auto",
          marginTop: "20px",
        }}
        // cover={

        // }

        actions={[
          <FacebookOutlined key="setting" />,
          <TwitterOutlined key="edit" />,
          <InstagramOutlined key="ellipsis" />,
          <LinkedinOutlined key="ellipsis" />,
        ]}
      >
        <Row justify="center">
          <Avatar alt={data.name} size={200} src={data.img} />
        </Row>
        <Divider orientation="left" />
        <Meta
          avatar={<Avatar src={data.img} />}
          title={data.name}
          description={data.description}
        />
      </Card>
    </div>
  );
};

export default TeamCard;
