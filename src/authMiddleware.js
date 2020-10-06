import { logIn, saveCard } from "./actions";
import { serverLogin } from "./api";
import { serverCard } from "./api";
import { AUTHENTICATE } from "./actions";
import { SEND_CARD } from "./actions";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else if (action.type === SEND_CARD) {
    const { cardNumber, cardDate, cardUserName, cardCvc } = action.payload;
    const data = await serverCard(cardNumber, cardDate, cardUserName, cardCvc);
    if (data.success) {
      alert("success");
      store.dispatch(saveCard(cardNumber, cardDate, cardUserName, cardCvc));
    } else if (data.error !== "undefined") {
      alert(data.error);
    }
  } else {
    next(action);
  }
};
