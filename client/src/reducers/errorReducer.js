import { types } from "../types/types";

export const errorReducer = (state = [], action) => {
    switch (action.type) {
        case types.registerError:
            return [...state, action.payload.error]

        case types.unRegisterError:
            return []
    
        default:
            return state;
    }
}