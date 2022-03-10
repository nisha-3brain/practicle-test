import React, { useState, useEffect } from "react";
import { Form, Input, Alert, Radio } from "antd";
import {
  StyledCard,
  StyledCol,
  StyledRow,
  StyledButton,
  StyledResetButton,
  StyledForm,
} from "../styles/TodoPage";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addTodoAction,
  getTodoAction,
  updateTodoAction,
} from "../redux/actions/todos";
import { useSelector } from "react-redux";

function AddToDo() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [completed, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  let {
    addTodoLoading,
    addTodoSuccess,
    updateTodoLoading,
    updateTodoSuccess,
    todo,
    error,
  } = useSelector((state) => ({
    addTodoLoading: state.todosReducer.addTodoLoading,
    addTodoSuccess: state.todosReducer.addTodoSuccess,
    updateTodoLoading: state.todosReducer.updateTodoLoading,
    updateTodoSuccess: state.todosReducer.updateTodoSuccess,
    todo: state.todosReducer.todo,
    error: state.todosReducer.error,
  }));

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      dispatch(getTodoAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      title: todo.title,
      completed: todo.completed,
    });
    // eslint-disable-next-line
  }, [todo]);

  useEffect(() => {
    if (addTodoSuccess || updateTodoSuccess) {
      navigate("/ToDo");
    }
  }, [addTodoSuccess, updateTodoSuccess, navigate]);

  const onCompletedChange = ({ completed }) => {
    setIsCompleted(completed);
  };

  const onFinish = (values) => {
    if (!isEdit) {
      dispatch(addTodoAction(values));
    } else {
      dispatch(updateTodoAction(values, todo.id));
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <StyledRow>
        <StyledCol span={24}>
          <StyledCard>
            <h1>{isEdit ? "Edit" : "Add"} ToDo</h1>
            {error !== "" && <Alert message={error} type="error"></Alert>}
            <StyledForm
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
              onValuesChange={onCompletedChange}
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input title!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="completed"
                label="completed"
                rules={[
                  {
                    required: true,
                    message: "Please select a status!",
                  },
                ]}
              >
                <Radio.Group value={completed} style={{ width: "100%" }}>
                  <Radio.Button value={true}>Yes</Radio.Button>
                  <Radio.Button value={false}>No</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                  loading={addTodoLoading || updateTodoLoading}
                >
                  Submit
                </StyledButton>

                <StyledResetButton htmlType="button" onClick={onReset}>
                  Reset
                </StyledResetButton>
              </Form.Item>
            </StyledForm>
          </StyledCard>
        </StyledCol>
      </StyledRow>
    </>
  );
}

export default AddToDo;
