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
import uploadImage from "../../utils/cloudinaryUpload";

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
  const [profile, setProfile] = useState("");

  // const handleUpload = (info) => {
  //   if (info.file.status === "uploading") {
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     const { secure_url } = info.file.response.data;
  //     setProfile(secure_url);
  //   }
  // };

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
                // action="https://api.Cloudinary.com/v1_1/mentorme/image/upload"
                name="file"
                customRequest={(option) => {
                  if (option.file.status === "uploading") {
                    return;
                  }
                  if (option.file.status === "done") {
                  }

                  uploadImage(option.file).then((res) => {
                    setProfile(res);
                  });
                }}
                maxCount={1}
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
