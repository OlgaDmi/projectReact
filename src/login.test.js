import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("UserContext", () => {
    describe("#logIn", () => {
      it("sets 'isLoggedIn' to false", () => {
        let isLoggedIn;
        let logIn;
  
        expect(isLoggedIn).toBe(false);
        act(() => {
          logIn('test@test.com', '123123');
        })
        expect(isLoggedIn).toBe(true);
      });
    });
  
    describe("#logOut", () => {
      it("sets 'isLoggedIn' to false", () => {
        let isLoggedIn;
        let logOut;
        let logIn;
        act(() => {
          logIn('test@test.com', '123123');
          logOut();
        });
        expect(isLoggedIn).toBe(false);
      });
    });
  });