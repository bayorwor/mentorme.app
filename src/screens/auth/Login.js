import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Alert, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import withLayout from "../../components/withLayout";
import { login } from "../../actions/userActions";

const successMessage = () => {
  message.success("This is a success message");
};

const errorMessage = (error) => {
  message.error(`${error}`);
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

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

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(login(email, password));
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container">
      {error && <Alert.ErrorBoundary>{error}</Alert.ErrorBoundary>}

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
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
            {loading ? "Loading..." : "Login"}
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Row>
            <p>I don't have an Account? </p>
            <Link to="/register">Register</Link>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withLayout(Login);
