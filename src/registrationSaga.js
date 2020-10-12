import { takeLatest, call, put } from "redux-saga/effects";
import { REGISTRATION, logIn } from "./actions";
import { serverRegistration } from "./api";

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const success = yield call(
    serverRegistration,
    email,
    password,
    name,
    surname
  );
  if (success) {
    yield put(logIn());
  }
}
export function* registSaga() {
  yield takeLatest(REGISTRATION, registrationSaga);
}
