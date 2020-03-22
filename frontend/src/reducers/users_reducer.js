import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from "../actions/session_actions";
import { RECEIVE_ORG_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state) 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.id] = action.payload
            return nextState;
        case RECEIVE_ORG_USERS:
            for (let i = 0; i < action.users.length; i++) {
                nextState[action.users[i]._id] = action.users[i]
            };
            return nextState;
        // case RECEIVE_ORG_USERS:
        //     action.users.forEach(user => {
        //         nextState[user.id] = user
        //     })
        //     return nextState;
        default:
            return nextState;
    }
}

export default usersReducer;