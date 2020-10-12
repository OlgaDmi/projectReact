import { takeEvery, call } from "redux-saga/effects";
import { SEND_CARD } from "./actions";
import { serverCard } from "./api";

export function* paymentSaga(action) {
  const { cardNumber, cardDate, cardUserName, cardCvc } = action.payload;
  const success = yield call(
    serverCard,
    cardNumber,
    cardDate,
    cardUserName,
    cardCvc
  );
  if (success) {
    console.log(success);
  }
}
export function* paySaga() {
  yield takeEvery(SEND_CARD, paymentSaga);
}
