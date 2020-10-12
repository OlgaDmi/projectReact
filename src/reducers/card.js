import { SEND_CARD } from "../actions";

const initialState = {
  isCard: false,
  cardNumber: "1000 0000 0000 0000",
  cardDate: "",
  cardUserName: "",
  cardCvc: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_CARD:
      const { cardNumber, cardDate, cardUserName, cardCvc } = action.payload;
      return {
        isCard: true,
        cardNumber: cardNumber,
        cardDate: cardDate,
        cardUserName: cardUserName,
        cardCvc: cardCvc,
      };
    default:
      return state;
  }
}

export default rootReducer;
