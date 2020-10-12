import { GETLIST, MAKELIST } from "../actions";

const initialState = {
  addresses: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETLIST:
      return initialState;
    case MAKELIST:
      let { success } = action.payload;
      return {
        addresses: success,
      };
    default:
      return state;
  }
}

export default rootReducer;
