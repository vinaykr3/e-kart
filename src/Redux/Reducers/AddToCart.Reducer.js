import { AddToCart } from "../Types/AddToCart.type";
import { RemoveItem } from "../Types/RemoveItem.type";

export const AddToCartInitialState = {
    product: [],
}

const AddToCartReducer = (state = AddToCartInitialState, action) => {
    switch (action.type) {
        case AddToCart:
            const {response} = action.payload;
            response.qty = 0;
            const check = state.product.find(prot => prot.id === response.id);
            if (check) {
                return state;
            } else {
                const {response, quantity} = action.payload;
                response.qty = quantity;
                const totalPrice = response.price * quantity;
                const result = { ...response, price: totalPrice }
                return { ...state, product: [...state.product, result], ...state.product.qty = quantity };
            }
        case RemoveItem:
            const leftOver = state.product.filter(pro => pro.id !== action.payload);
            return {
                ...state, product : leftOver,
            }
        case "SEARCH":
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}

export default AddToCartReducer;