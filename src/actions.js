export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SEND_CARD = "SEND_CARD";
export const SAVE_CARD = "SAVE_CARD";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const saveCard = (cardNumber, cardDate, cardUserName, cardCvc) => ({
  type: SAVE_CARD,
  payload: { cardNumber, cardDate, cardUserName, cardCvc },
});
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const sendCard = (cardNumber, cardDate, cardUserName, cardCvc) => ({
  type: SEND_CARD,
  payload: { cardNumber, cardDate, cardUserName, cardCvc },
});
