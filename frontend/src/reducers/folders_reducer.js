import { RECEIVE_FOLDER, RECEIVE_FOLDERS, REMOVE_FOLDER } 
from '../actions/folder_actions'

const foldersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type){
        case(RECEIVE_FOLDER):
            nextState[action.folder._id] = action.folder;
            return nextState;
        case(RECEIVE_FOLDERS):
            return action.payload;
        case(REMOVE_FOLDER):
            delete nextState[action.id];
            return nextState;
        default: 
            return state;
    }
}

export default foldersReducer;