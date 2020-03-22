import axios from 'axios';

export const fetchOrgUsers = orgHandle => {
    debugger
    return axios.get(
        `/api/users/${orgHandle}`
    )
};