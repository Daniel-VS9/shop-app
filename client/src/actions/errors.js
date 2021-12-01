import { types } from "../types/types"

export const registerError = (error) => ({
    type: types.registerError,
    payload: {
        error
    }
})

export const removeError = () => ({
    type: types.unRegisterError,
    payload: {}
})