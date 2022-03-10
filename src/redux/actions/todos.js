import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from "../types";

export const getTodosAction = () => ({
  type: GET_TODOS,
});

export const addTodoAction = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const getTodoAction = (todoId) => ({
  type: GET_TODO,
  payload: todoId,
});

export const updateTodoAction = (data, todoId) => ({
  type: UPDATE_TODO,
  payload: data,
  todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
});
