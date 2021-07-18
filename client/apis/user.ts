import axios, { AxiosResponse } from 'axios';

export const getCurrentUser = (): Promise<any> => axios.get('/api/v1/user');

export const fetchOrganizations = (): Promise<AxiosResponse<any>> =>
  axios.get('/api/v1/user/organizations');
