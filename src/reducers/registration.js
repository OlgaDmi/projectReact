import { REGISTRATION } from "../actions";

const initialState = {
  email: "email@example.com",
  password: "password",
  name: "Name",
  surname: "Surname",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION:
      const { email, password, name, surname } = action.payload;
      return {
        email: email,
        password: password,
        name: name,
        surname: surname,
      };
    default:
      return state;
  }
}

export default rootReducer;
