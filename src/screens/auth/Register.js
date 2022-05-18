import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox, Row, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../actions/userActions";
import withLayout from "../../components/withLayout";
import uploadImage from "../../utils/cloudinaryUpload";

const successMessage = () => {
  message.success("This is a success message");
};

const errorMessage = (error) => {
  message.error(`${error}`);
};

const warningMessage = () => {
  message.warning("password mismatch");
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      successMessage();
      navigate("/");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (error) {
      errorMessage(error.toString());
    }
  }, [error]);

  useEffect(() => {
    if (message) {
      warningMessage();
    }
  }, [message]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password mismatch");
    } else {
      dispatch(register(name, email, phone, profile, location, password));
    }
  };

  // if (message) {
  //   warningMessage();
  // }

  // if (error) {
  //   errorMessage();
  // }

  return (
    <div className="form-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={submitHandler}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input your location!",
            },
          ]}
        >
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Profile Picture"
          name="profile"
          rules={[
            {
              required: true,
              message: "Please upload your profile picture!",
            },
          ]}
        >
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
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={submitHandler} type="primary" htmlType="submit">
            {loading ? "Loading..." : "Register"}
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Row>
            <p>I have an Account? </p>
            <Link to="/login">Sign In</Link>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withLayout(Register);
