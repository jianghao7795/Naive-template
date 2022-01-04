import axios from '@/utils/axios';
import { AxiosResponse } from 'axios';

type UserMe = {
  name: string;
  id: number;
};

type UserType = {
  data: UserMe;
  code: number;
  msg: string;
};

const getMe = async () => {
  const res = await axios.get<{ Authorization: string }, AxiosResponse<UserType>>('/auth/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return res.data;
};

export default { getMe };
