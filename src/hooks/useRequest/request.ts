import { watchEffect } from 'vue';
import { useRequest } from 'v3hooks';
import axios from '@/utils/axios';
import type { AxiosResponse } from 'axios';

// type Config = {
//   header: {
//     Authorization: string;
//     mode: 'cors';
//   };
// };

type Response = {
  code: number;
  data: any;
  msg: string | null;
};

const request = () => {
  const { data, loading } = useRequest<AxiosResponse<Response>>(() => {
    return axios.get<{ Authorization: string; mode: 'cors' }, AxiosResponse<Response>>('/user/captcha', {
      headers: {
        Authorization: localStorage.getItem('token') as string,
        mode: 'cors',
      },
    });
  });

  watchEffect(() => {
    console.log(data.value, loading);
  });

  return { data, loading };
};

export default request;
