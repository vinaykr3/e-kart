import { combineReducers } from "redux";
import AddToCartReducer from "./AddToCart.Reducer";
import NavbarReducer from "./NavbarReducer";

export const rootReducer = combineReducers({
    navbar: NavbarReducer,
    AddToCart: AddToCartReducer,
})