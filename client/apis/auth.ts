import userStore from '@client/stores/user';
import axios, { AxiosResponse } from 'axios';

interface LoginPayload {
  email: string;
  password: string;
}

export const login = (payload: LoginPayload): Promise<AxiosResponse<any>> =>
  axios.post('/api/v1/login', payload);

export const signup = (payload): Promise<AxiosResponse<any>> =>
  axios.post('/api/v1/signup', payload);

export const logout = (): void => {
  localStorage.removeItem('accessToken');
  userStore.authenticated = false;
};
