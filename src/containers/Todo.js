import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import {
  deleteTodoAction,
  getTodoAction,
  getTodosAction,
} from "../redux/actions/todos";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Loader from "../components/Loader";
import {
  CheckOutlined,
  CloseOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal, Alert, Card, Row, Col } from "antd";

const customStyles = {
  table: {
    style: {
      minHeight: "20em !important",
      width: "100%",
    },
  },
  cells: {
    style: {
      fontSize: "1.1em",
      fontWeight: "400",
      paddingRight: "0px",
    },
  },
};

function Todo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let {
    todos,
    todosLoading,
    deleteLoading,
    addTodoSuccess,
    deleteTodoSuccess,
    updateTodoSuccess,
    todo,
    error,
  } = useSelector((state) => ({
    todos: state.todosReducer.todos,
    todosLoading: state.todosReducer.todosLoading,
    deleteLoading: state.todosReducer.deleteLoading,
    todo: state.todosReducer.todo,
    error: state.todosReducer.error,
    addTodoSuccess: state.todosReducer.addTodoSuccess,
    updateTodoSuccess: state.todosReducer.updateTodoSuccess,
    deleteTodoSuccess: state.todosReducer.deleteTodoSuccess,
  }));

  let [viewModal, setViewModal] = useState(false);
  let [todoId, setTodoId] = useState(null);
  let [deleteModal, setDeleteModal] = useState(false);

  const userTableColumns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      width: "13%",
    },
    {
      name: "Title",
      selector: "title",
      width: "35%",
    },
    {
      name: "Status",
      center: true,
      cell: (row) => (row.completed ? <CheckOutlined /> : <CloseOutlined />),
    },
    {
      name: "View",
      center: true,
      cell: (row) => (
        <span
          onClick={() => {
            setViewModal(true);
            setTodoId(row.id);
          }}
        >
          <EyeOutlined style={{ color: "#52c41a" }} />
        </span>
      ),
    },
    {
      name: "Edit",
      center: true,
      cell: (row) => (
        <span onClick={() => navigate(`/ToDo/Update/${row.id}`)}>
          <EditOutlined style={{ color: "#1890ff" }} />
        </span>
      ),
    },
    {
      name: "Remove",
      center: true,
      cell: (row) => (
        <span
          onClick={() => {
            setDeleteModal(true);
            setTodoId(row.id);
          }}
        >
          <DeleteOutlined style={{ color: "red" }} />
        </span>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getTodosAction());
    if (deleteTodoSuccess) {
      setDeleteModal(false);
    }
  }, [dispatch, addTodoSuccess, updateTodoSuccess, deleteTodoSuccess]);

  useEffect(() => {
    if (viewModal) {
      dispatch(getTodoAction(todoId));
    }
  }, [viewModal, todoId, dispatch]);

  const handleDelete = () => {
    dispatch(deleteTodoAction(todoId));
  };

  const handleCancel = () => {
    setDeleteModal(false);
    setTodoId(null);
  };

  const handleViewModalCancel = () => {
    setViewModal(false);
  };
  return (
    <>
      {todosLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Header />
          {error !== "" && <Alert message={error} type="error"></Alert>}
          <DataTable
            noHeader
            fixedHeader={true}
            customStyles={customStyles}
            columns={userTableColumns}
            data={todos}
            highlightOnHover={true}
            className="pb-0"
            pagination={true}
          />
        </>
      )}
      <Modal
        title="Confirm"
        visible={deleteModal}
        onOk={handleDelete}
        confirmLoading={deleteLoading}
        onCancel={handleCancel}
      >
        <span>Are you sure you want to delete?</span>
      </Modal>
      <Modal
        title="Todo Details"
        visible={viewModal}
        footer={null}
        onCancel={handleViewModalCancel}
      >
        <Card>
          <Row>
            <Col span={3}>Id</Col>
            <Col span={18} className="todo-data">
              {todo.id}
            </Col>
          </Row>
          <Row className="mt-4">
            <Col span={3}>Title</Col>
            <Col span={18} className="todo-data">
              {todo.title}
            </Col>
          </Row>
        </Card>
      </Modal>
    </>
  );
}

export default Todo;
