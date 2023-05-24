
import { USER_ACTION_TYPES } from "./user.types"


const INITIAL_USER_STATE = {
    currentUser: null
}

// reducer 
export const userReducer = (state = INITIAL_USER_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state

    }
}
