import { takeEvery, call, put } from "redux-saga/effects";
import { GETROUTE, drawRoute } from "./actions";
import { serverRoute } from "./api";

export function* routeAddressSaga(action) {
  const { address1, address2 } = action.payload;
  const path = yield call(serverRoute, address1, address2);
  // console.log(path);
  if (path) {
    yield put(drawRoute(path));
  }
}
export function* routeSaga() {
  yield takeEvery(GETROUTE, routeAddressSaga);
}
