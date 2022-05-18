import React from "react";
import { Card, Button, Divider, Badge } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MentorsCard = ({ data }) => {
  return (
    <Badge.Ribbon text={`${data.yearsOfExperience} years`} color="red">
      <Card
        hoverable
        // style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={data.profile}
            style={{
              height: "300px",
              objectFit: "cover",
              objectPosition: "center",
              resizeMode: "contain",
            }}
          />
        }
        actions={[
          <FacebookOutlined key="setting" />,
          <TwitterOutlined key="edit" />,
          <InstagramOutlined key="ellipsis" />,
          <LinkedinOutlined key="ellipsis" />,
        ]}
      >
        <h2>{data.name}</h2>
        <h3 style={{ color: "blueviolet" }}>{data.profession}</h3>
        <Meta title="Let's talk about:" description={data.skills} />
        <Divider />
        <Link to={`/mentors/${data._id}`}>
          <Button type="primary" shape="round" icon={<ScheduleOutlined />}>
            Book Session
          </Button>
        </Link>
      </Card>
    </Badge.Ribbon>
  );
};

export default MentorsCard;
