import axios from "axios";

export const fetchOneUser = (userId) => axios.get(`/api/users/${userId}`);

export const fetchOrgUsers = (orgHandle) =>
  axios.get(`/api/users/orgHandle/${orgHandle}`);

export const updateUser = (user) => axios.patch(`/api/users/${user._id}`, user);

export const getUsersByOrgHandleAndNameFragment = (orgHandle, nameFragment) =>
  axios.get(
    `/api/users/search?orgHandle=${orgHandle}&nameFragment=${nameFragment}`
  );
