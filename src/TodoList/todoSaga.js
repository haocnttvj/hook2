import { takeLatest, all } from "redux-saga/effects";

function* fetchTodoListSaga() {
  yield call(TodoService.getTodoList);
  // Handle the result or dispatch actions here if needed
}

function* todoSaga() {
  yield all([takeLatest("todo/fetchTodoListAction", fetchTodoListSaga)]);
}

export default todoSaga;
