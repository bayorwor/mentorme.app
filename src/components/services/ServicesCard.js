import React from "react";
import { Card } from "antd";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        hoverable
        headStyle={{ color: "#00474f", fontSize: 25 }}
        title={title}
      >
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default ServicesCard;
