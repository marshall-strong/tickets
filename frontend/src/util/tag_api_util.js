import axios from 'axios';

export const getOrgTags = (orgHandle) => (
  axios.get(`/api/tags/${orgHandle}`)
);

export const getTag = name => (
  axios.get(`/api/tags/${name}`)
);

export const createTag = tag => (
  axios.post(`/api/tags`, tag)
);
