import { types } from "../type/types";

const inicialState = {
    active:true,
}

export const sidebarReducer = (state = inicialState, action) => {
    switch (action.type) {
        case types.sidebarSet:
            return {
                ...state,
                active:action.payload.state
            }

        default:
            return state;
    }
}