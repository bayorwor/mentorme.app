import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Row,
  Input,
  Col,
  Divider,
  Upload,
  Form,
  message,
  Spin,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createMentor } from "../../actions/mentorActions";

const { TextArea } = Input;

const BecomeMentor = ({ isModalVisible, handleToggle }) => {
  const dispatch = useDispatch();

  const mentorCreate = useSelector((state) => state.mentorCreate);
  const { loading, error, success } = mentorCreate;

  useEffect(() => {
    if (success) {
      handleToggle();
      message.success("Mentor created successfully");
    }
    if (error) {
      message.error(error);
    }
  }, [success, error]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState("");
  const [profession, setProfession] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [address, setAddress] = useState("");
  const [profile, setProfile] = useState(
    "https://media.istockphoto.com/photos/portrait-of-a-teenage-3d-character-picture-id1330874290?b=1&k=20&m=1330874290&s=170667a&w=0&h=bMv6ET7KluHY6DC-zcU2fjjvAfsxElq4sH5xjhSfQ1w="
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name &&
      email &&
      phone &&
      city &&
      state &&
      country &&
      skills &&
      profession &&
      yearsOfExperience &&
      address &&
      profile
    ) {
      dispatch(
        createMentor({
          name,
          email,
          phone,
          city,
          state,
          country,
          skills,
          profession,
          yearsOfExperience,
          address,
          profile,
        })
      );
    } else {
      message.warning("Please fill all the fields");
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <Modal
        title="Become a Mentor Today"
        visible={isModalVisible}
        onOk={handleToggle}
        onCancel={handleToggle}
        footer={null}
      >
        <Form>
          <Row gutter={[16]}>
            <Col span={12}>
              <label>Name</label>
              <Input
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label>Contact Email</label>
              <Input
                required
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <label>Address</label>
              <Input
                required
                placeholder="enter adress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label>Country</label>
              <Input
                required
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <label>State</label>
              <Input
                required
                placeholder="state of residing"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label>City</label>
              <Input
                required
                placeholder="Which city are you from"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <label>Profession</label>
              <Input
                required
                placeholder="what your profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label>Years Of Experience</label>
              <Input
                required
                type={"number"}
                placeholder="Enter years of experience"
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={24}>
              <label>Skills</label>
              <TextArea
                required
                placeholder="please seperate your skills by comma e.g Coding, playing, dancing"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <label>Phone Number</label>
              <Input
                required
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <label>Name</label>
              <Upload
                listType="picture-card"
                className="avatar-uploader"
                // showUploadList={false}
                maxCount={1}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onPreview={onPreview}
              >
                <Button>
                  <UploadOutlined />
                </Button>
              </Upload>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[16]}>
            <Col span={12}>
              <Button onClick={handleSubmit} htmlType="submit" type="primary">
                {loading ? <Spin /> : "Send Request"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

export default BecomeMentor;
