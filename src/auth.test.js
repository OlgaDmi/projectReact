import React from "react";
import rootReducer from './reducers/auth'
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("UserContext", () => {
    describe("#rootReducer", () => {
      it("sets 'isLoggedIn' to false or true", () => {
        let isLoggedIn;
        let logIn;
  
        expect(isLoggedIn).toBe(false);
        act(() => {
          logIn('test@test.com', '123123');
        })
        expect(isLoggedIn).toBe(true);
      });
    });
  });