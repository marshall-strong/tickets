import axios from 'axios';

export const fetchOneUser = userId => {
    return axios.get(
        `/api/users/${userId}`
    )
};

export const fetchOrgUsers = orgHandle => {
    return axios.get(
        `/api/users/${orgHandle}`
    )
};
