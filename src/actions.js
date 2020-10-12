export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SEND_CARD = "SEND_CARD";
export const REGISTRATION = "SEND_CARD";
export const GETLIST = "GETLIST";
export const MAKELIST = "MAKELIST";
export const GETROUTE = "GETROUTE";
export const DRAWROUTE = "DRAWROUTE";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});
export const sendCard = (cardNumber, cardDate, cardUserName, cardCvc) => ({
  type: SEND_CARD,
  payload: { cardNumber, cardDate, cardUserName, cardCvc },
});
export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});
export const getList = () => ({
  type: GETLIST,
});
export const makeList = (success) => ({ type: MAKELIST, payload: { success } });
export const getRoute = (address1, address2) => ({
  type: GETROUTE,
  payload: { address1, address2 },
});
export const drawRoute = (path) => ({ type: DRAWROUTE, payload: { path } });
