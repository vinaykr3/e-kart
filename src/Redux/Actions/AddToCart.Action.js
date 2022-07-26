import { AddToCart } from "../Types/AddToCart.type";


export const AddToCartAction = (response) => ({
    type: AddToCart,
    payload: response,
})
