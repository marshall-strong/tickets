import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return { isAuthenticated: false, user: undefined }
        default:
            return state;
    }
}

export default sessionReducer;