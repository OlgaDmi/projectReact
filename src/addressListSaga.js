import { takeLatest, call, put } from "redux-saga/effects";
import { GETLIST, makeList } from "./actions";
import { serverAddressList } from "./api";

export function* addressListSaga(action) {
  const success = yield call(serverAddressList);
  if (success) {
    yield put(makeList(success));
  }
}
export function* addressSaga() {
  yield takeLatest(GETLIST, addressListSaga);
}
