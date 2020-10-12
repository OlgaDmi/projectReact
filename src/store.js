import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./authSaga";
import { registSaga } from "./registrationSaga";
import { paySaga } from "./paymentSaga";
import { addressSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem("authStatus")
  ? JSON.parse(localStorage.getItem("authStatus"))
  : {};

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  localStorage.setItem("authStatus", JSON.stringify(store.getState()));
  // console.log("store changed", store.getState());
  // console.log(localStorage);
  // localStorage.clear();
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(registSaga);
sagaMiddleware.run(paySaga);
sagaMiddleware.run(addressSaga);
sagaMiddleware.run(routeSaga);
