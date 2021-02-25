import { RECEIVE_TAGS, RECEIVE_TAG } from "../actions/tag_actions";

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.payload;
    case RECEIVE_TAG:
      nextState[action.tag.name] = action.tag;
      return nextState;
    default:
      return state;
  }
};

export default tagsReducer;
