import userStore from '@client/stores/user';
import axios from 'axios';

export const initializeAxios = (): void => {
  rehydrateAccessToken();
  registerIntercepts();
};

export const setAccessToken = (token: string) => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const removeAccessToken = (): void => {
  delete axios.defaults.headers['Authorization'];
};

const rehydrateAccessToken = (): void => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    setAccessToken(accessToken);
    userStore.authenticated = true;
  }
};

const handleSuccessResponse = (response) => {
  if (response) {
    response.success = response.status === 200;
  }
  return response;
};

const handleErrorResponse = (error) => {
  if (error.response?.status === 401) {
    userStore.authenticated = false;
  }
  return Promise.reject(error);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, (error) =>
    handleErrorResponse(error),
  );
};
