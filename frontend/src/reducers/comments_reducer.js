
import { RECEIVE_COMMENTS, RECEIVE_NEW_COMMENT, DELETE_COMMENT } from "../actions/comment_actions";

const commentReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_COMMENTS: 
            for (let i = 0; i < action.comments.length; i++) {
                nextState[action.comments[i]._id] = action.comments[i]
            }
            return nextState;
        case RECEIVE_NEW_COMMENT: 
            nextState[action.comment._id] = action.comment;
            return nextState
        case DELETE_COMMENT: 
            delete nextState[action.comment._id]
            return nextState
        default: 
            return state
    }
}

export default commentReducer

