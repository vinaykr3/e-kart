
import { CloseMenu } from "../Types/CloseMenu.type";
import { OpenMenu } from "../Types/OpenMenu.type";
export const NavbarInitialState = '-translate-x-[1279px]'

const NavbarReducer = (state = NavbarInitialState, action) => {
    switch (action.type) {
        case OpenMenu:
            return state = "translate-x-[0px]"
        case CloseMenu:
            return state = "-translate-x-[1279px]"
        default:
            return state;
    }
}

export default NavbarReducer;