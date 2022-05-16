import React from "react";
import { Card, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const MentorsCard = ({ data }) => {
  return (
    <Card
      hoverable
      // style={{ width: 300 }}
      cover={<img alt="example" src={data.img} />}
      actions={[
        <FacebookOutlined key="setting" />,
        <TwitterOutlined key="edit" />,
        <InstagramOutlined key="ellipsis" />,
        <LinkedinOutlined key="ellipsis" />,
      ]}
    >
      <h2>Smith Alison</h2>
      <h3 style={{ color: "blueviolet" }}>Mobile App Developer</h3>
      <Meta
        title="Let's talk about:"
        description="Web Development, PHP, Databases, Freelancing, PC games, Card & board
        games"
      />
      <Button
        type="primary"
        shape="round"
        icon={<ScheduleOutlined />}
        // size={size}
      >
        Book Session
      </Button>
    </Card>
  );
};

export default MentorsCard;
