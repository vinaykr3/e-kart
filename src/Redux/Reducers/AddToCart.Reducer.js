import { AddToCart } from "../Types/AddToCart.type";
import { RemoveItem } from "../Types/RemoveItem.type";

export const AddToCartInitialState = {
    product: [],
}

const AddToCartReducer = (state = AddToCartInitialState, action) => {
    switch (action.type) {
        case AddToCart:

            const response = action.payload;
            response.quantity = 1;
            const check = state.product.find(prot => prot.id === response.id);
            if (check) {
                return state;
            } else {
                const resp = action.payload;
                const totalPrice = resp.price * resp.quantity
                const response = { ...resp, price: totalPrice }
                console.log(response)
                return { ...state, product: [...state.product, response], };
            }
        case RemoveItem:
            const leftOver = state.product.filter(pro => pro.id !== action.payload);
            console.log(leftOver);
            return {
                ...state, product : leftOver,
            }
        default:
            return state;
    }
}

export default AddToCartReducer;