import axios from '@/utils/axios';
import { AxiosResponse } from 'axios';

type LoginData = {
  username: string;
  password: string;
};

const login = (login: LoginData) => {
  return axios.post<LoginData, AxiosResponse<{ code: number; data: any; msg: string }>>('/user/login', { ...login });
};

export default { login };
