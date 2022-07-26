import { RemoveItem } from "../Types/RemoveItem.type";

export const RemoveItemAction = (id) => ({
    type: RemoveItem,
    payload: id,
})