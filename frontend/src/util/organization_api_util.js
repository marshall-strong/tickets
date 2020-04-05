import axios from 'axios';

export const getAllOrgs = () => (
  axios.get('/api/organizations')
);

export const getOneOrgById = orgId => (
  axios.get(`/api/organizations/${orgId}`)
);