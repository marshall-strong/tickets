import * as TagAPIUtil from '../util/tag_api_util';


// action type constants
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';


// action creators
const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag: tag.data
});

const receiveTags = tags => {
  const payload = {};
  tags.data.forEach(tag => payload[tag._id] = tag);
  return({
    type: RECEIVE_TAGS,
    payload: payload
  })
};

const receiveTagErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors: errors.response.data
});


// dispatch asynchronous thunk actions
export const createTag = tag => dispatch => (
  TagAPIUtil.createTag(tag)
  .then(tag => dispatch(receiveTag(tag)))
  .catch(errors => dispatch(receiveTagErrors(errors))) 
);

export const getOrgTags = (orgHandle) => dispatch => (
  TagAPIUtil.getOrgTags(orgHandle)
  .then(tags => dispatch(receiveTags(tags)))
);

export const getTag = (name) => dispatch => (
  TagAPIUtil.getTag(name)
  .then(tag => dispatch(receiveTag(tag)))
  .catch(errors => dispatch(receiveTagErrors(errors)))
);
