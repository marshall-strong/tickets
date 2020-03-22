import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { RECEIVE_ORG_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state) 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.payload.id] = action.payload
            return newState;
        case RECEIVE_ORG_USERS:
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState;
        default:
            return newState;
    }
}

export default usersReducer;