import React, { useState, useEffect } from "react";
import { Form, Input, Alert, notification } from "antd";
import { StyledButton, StyledResetButton } from "../styles/LoginPage";
import { ERRORS } from "../lib/errorConstants";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));
  const [canShowNotification, setCanShowNotification] = useState(false);
  const showNotification = localStorage.getItem("notificationShown");

  const onFinish = (values) => {
    if (values && !userData) {
      setError(ERRORS.USER_NOT_FOUND);
    } else {
      if (
        values.email === userData.email &&
        values.password === userData.password
      ) {
        setError("");
        setCanShowNotification(true);
        localStorage.setItem("loggedIn", true);
        navigate("/ToDo");
      } else {
        setError(ERRORS.INVALID_CRED);
      }
    }
  };

  useEffect(() => {
    if (canShowNotification && !showNotification) {
      let { birthDate } = userData;
      let bDate = birthDate.split("/");
      let currentDate = moment().format("DD/MM/YYYY");
      let curDate = currentDate.split("/");
      if (bDate[0] === curDate[0] && bDate[1] === curDate[1]) {
        notification.open({
          message: "Happy Birthday!!!",
          description:
            "We hope that you have a very happy birthday and a great year ahead.",
        });
      }
      localStorage.setItem("notificationShown", true);
    }
    // eslint-disable-next-line
  }, [showNotification, canShowNotification]);

  const onReset = () => {
    form.resetFields();
    setError("");
  };

  return (
    <>
      {error !== "" && <Alert message={error} type="error"></Alert>}
      <Form
        name="basic"
        layout="vertical"
        form={form}
        initialValues={{
          remember: true,
          layout: "vertical",
        }}
        onFinish={onFinish}
        requiredMark={"optional"}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password must be 8 characters long." },
            { max: 12, message: "Password should be less than 12 characters." },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Submit
          </StyledButton>

          <StyledResetButton htmlType="button" onClick={onReset}>
            Reset
          </StyledResetButton>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
