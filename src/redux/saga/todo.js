import { put, call, takeLatest } from "redux-saga/effects";
import {
  getTodosApi,
  getTodoApi,
  addTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../api/todos";
import {
  GET_TODOS,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODO,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
  ADD_TODO,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  UPDATE_TODO,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "../types/index";

function* getTodos() {
  yield put({ type: GET_TODOS_LOADING, payload: true });
  try {
    let res = yield call(getTodosApi);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: GET_TODOS_ERROR,
      payload: error.toString(),
    });
  }
}

function* getTodo(data) {
  yield put({ type: GET_TODO_LOADING, payload: true });
  try {
    let res = yield call(getTodoApi, data.payload);
    yield put({
      type: GET_TODO_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: GET_TODO_ERROR,
      payload: error.toString(),
    });
  }
}
function* addTodo(data) {
  yield put({ type: ADD_TODO_LOADING, payload: true });
  try {
    let res = yield call(addTodoApi, data.payload);
    if (res) {
      yield put({
        type: ADD_TODO_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    yield put({
      type: ADD_TODO_ERROR,
      payload: error.toString(),
    });
  }
}

function* updateTodo(data) {
  yield put({ type: UPDATE_TODO_LOADING, payload: true });
  try {
    let res = yield call(updateTodoApi, data.payload, data.todoId);
    if (res) {
      yield put({
        type: UPDATE_TODO_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    yield put({
      type: UPDATE_TODO_ERROR,
      payload: error.toString(),
    });
  }
}

function* deleteTodo(data) {
  yield put({ type: DELETE_TODO_LOADING, payload: true });
  try {
    let res = yield call(deleteTodoApi, data.payload, data.todoId);
    if (res) {
      yield put({
        type: DELETE_TODO_SUCCESS,
        payload: true,
      });
    }
  } catch (error) {
    yield put({
      type: DELETE_TODO_ERROR,
      payload: error.toString(),
    });
  }
}

function* watchTodoSaga() {
  yield takeLatest(GET_TODOS, getTodos);
  yield takeLatest(GET_TODO, getTodo);
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_TODO, updateTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
}

export default watchTodoSaga;
