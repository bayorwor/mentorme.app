import React, { useState } from "react";
import { Modal, Button, Row, Input, Col, Divider } from "antd";

const BecomeMentor = ({ isModalVisible, handleToggle }) => {
  return (
    <>
      <Modal
        title="Become a Mentor Today"
        visible={isModalVisible}
        onOk={handleToggle}
        onCancel={handleToggle}
      >
        <Row gutter={[16]}>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
        </Row>
        <Divider />
        <Row gutter={[16]}>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
        </Row>
        <Divider />
        <Row gutter={[16]}>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
        </Row>
        <Divider />
        <Row gutter={[16]}>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
          <Col>
            <label>Name</label>
            <Input placeholder="First Name" />
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default BecomeMentor;
