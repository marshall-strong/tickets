import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state) 
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.payload.id] = action.payload
            return newState;
        default:
            return newState;
    }
}

export default usersReducer;