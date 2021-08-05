import axios from 'axios';

export const checkout = (payload): Promise<any> => axios.post('/api/v1/billing/checkout', payload);