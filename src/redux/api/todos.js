import mainApi from "../../lib/mainApi";

export let getTodosApi = () => {
  let url = "fakeTodos";
  let result = mainApi.GET(url);
  return result;
};

export let getTodoApi = (id) => {
  let url = `fakeTodos/${id}`;
  let result = mainApi.GET(url);
  return result;
};

export let addTodoApi = (data) => {
  let url = "fakeTodos";
  let result = mainApi.POST(url, data);
  return result;
};

export let updateTodoApi = (data, id) => {
  let url = `fakeTodos/${id}`;
  let result = mainApi.PUT(url, data);
  return result;
};

export let deleteTodoApi = (id) => {
  let url = `fakeTodos/${id}`;
  let result = mainApi.DELETE(url);
  return result;
};
