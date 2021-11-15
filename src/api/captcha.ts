import axios from '@/utils/axios';
// import { useRequest } from 'v3hooks';
import type { AxiosResponse } from 'axios';

export type Captcha = {
  code: number;
  data: { id: string; picPath: string };
  msg: string | null;
};

const captcha = () => {
  return axios
    .get<{ Authorization: string }, AxiosResponse<Captcha>>('/user/captcha', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        mode: 'cors',
      },
    })
    .then((res) => res.data);
};

export default { captcha };
