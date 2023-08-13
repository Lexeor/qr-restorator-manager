import axios from '../utils/fetch';
import authHeader from './auth-header';

export const getUserInfo = async () => {
  return await axios.get('/manager/me/', { headers: authHeader() });
};
