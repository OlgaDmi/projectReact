import { combineReducers } from "redux";
import auth from "./auth";
import card from "./card";
import registration from "./registration";
import address from "./address";
import router from "./router";

export default combineReducers({ auth, card, registration, address, router });
