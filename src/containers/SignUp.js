import React from "react";
import { Form, Input } from "antd";
import {
  StyledButton,
  StyledDatePicker,
  StyledResetButton,
} from "../styles/SignupPage";
import moment from "moment";

function SignUp() {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    let birthDate = moment(values.birthDate).format("DD/MM/YYYY");
    let userData = { ...values, birthDate };
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.reload();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          name="birthDate"
          label="BirthDate"
          rules={[
            {
              type: "object",
              required: true,
              message: "Please select birth date!",
            },
          ]}
        >
          <StyledDatePicker
            format={"DD/MM/YYYY"}
            placeholder=""
            placement="bottomRight"
            disabledDate={(d) =>
              !d ||
              d.isAfter(moment().add(1, "days").format("YYYY-MM-DD")) ||
              d.isSameOrBefore("1960-01-01")
            }
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

export default SignUp;
