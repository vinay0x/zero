import userStore from '@client/stores/user';
import axios from 'axios';

export const initializeAxios = (): void => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    setAccessToken(accessToken);
    userStore.authenticated = true;
  }
};

export const setAccessToken = (token: string) => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const removeAccessToken = (): void => {
  delete axios.defaults.headers['Authorization'];
};
