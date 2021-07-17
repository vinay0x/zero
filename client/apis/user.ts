import axios from 'axios';

export const getCurrentUser = (): Promise<any> => axios.get('/api/v1/user');
