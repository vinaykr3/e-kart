import { combineReducers } from "redux";
import NavbarReducer from "./NavbarReducer";

export const rootReducer = combineReducers({
    navbar: NavbarReducer,
})