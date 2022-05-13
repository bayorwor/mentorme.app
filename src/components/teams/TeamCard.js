import React from "react";
import { Card, Avatar } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const TeamCard = ({ data }) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={data.img} />}
        actions={[
          <FacebookOutlined key="setting" />,
          <TwitterOutlined key="edit" />,
          <InstagramOutlined key="ellipsis" />,
          <LinkedinOutlined key="ellipsis" />,
        ]}
      >
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
