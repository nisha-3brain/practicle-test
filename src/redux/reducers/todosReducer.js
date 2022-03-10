import {
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  UPDATE_TODO_LOADING,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  DELETE_TODO_LOADING,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_ERROR,
} from "../types";

const initialState = {
  todos: [],
  todo: {},
  todosLoading: false,
  todoLoading: false,
  addTodoLoading: false,
  updateTodoLoading: false,
  deleteTodoLoading: false,
  addTodoSuccess: false,
  updateTodoSuccess: false,
  deleteTodoSuccess: false,
  error: "",
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add Project Actions
    case GET_TODOS_LOADING:
      return {
        ...state,
        todosLoading: action.payload,
        error: "",
        todos: [],
        addTodoSuccess: false,
        updateTodoSuccess: false,
        todo: {},
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todosLoading: false,
        error: "",
        todos: action.payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        todosLoading: false,
        error: action.payload,
        todos: [],
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        todoLoading: action.payload,
        error: "",
        todo: {},
        addTodoSuccess: false,
        updateTodoSuccess: false,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todoLoading: false,
        error: "",
        todo: action.payload,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        todoLoading: false,
        error: action.payload,
        todo: {},
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        addTodoLoading: action.payload,
        error: "",
        addTodoSuccess: false,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        addTodoLoading: false,
        error: "",
        addTodoSuccess: action.payload,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        addTodoLoading: false,
        error: action.payload,
        addTodoSuccess: false,
      };
    case UPDATE_TODO_LOADING:
      return {
        ...state,
        updateTodoLoading: action.payload,
        error: "",
        updateTodoSuccess: false,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        updateTodoLoading: false,
        error: "",
        updateTodoSuccess: action.payload,
      };
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        updateTodoLoading: false,
        error: action.payload,
        updateTodoSuccess: false,
      };
    case DELETE_TODO_LOADING:
      return {
        ...state,
        deletTodoLoading: action.payload,
        error: "",
        deleteTodoSuccess: false,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        deleteTodoLoading: false,
        error: "",
        deleteTodoSuccess: action.payload,
      };
    case DELETE_TODO_ERROR:
      return {
        ...state,
        deleteTodoLoading: false,
        error: action.payload,
        deleteTodoSuccess: false,
      };
    default:
      return state;
  }
};
