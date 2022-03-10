import { fork } from "redux-saga/effects";
import watchTodoSaga from "./todo";

export default function* rootSaga() {
  yield fork(watchTodoSaga);
}
