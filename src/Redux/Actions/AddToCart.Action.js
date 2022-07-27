import { AddToCart } from "../Types/AddToCart.type";


export const AddToCartAction = (response, quantity) => ({
    type: AddToCart,
    payload: {response, quantity},
})
