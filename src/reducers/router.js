import { GETROUTE, DRAWROUTE } from "../actions";

const initialState = {
  address1: "",
  address2: "",
  path: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETROUTE:
      const { address1, address2 } = action.payload;
      return {
        address1: address1,
        address2: address2,
      };
    case DRAWROUTE:
      const { path } = action.payload;
      return {
        path: path,
      };
    default:
      return state;
  }
}

export default rootReducer;
