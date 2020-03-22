import axios from 'axios';

export const fetchOrgUsers = orgHandle => (
    axios.get(
        `/api/users/${orgHandle}`
    )
);