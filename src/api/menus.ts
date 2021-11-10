import axios from '@/utils/axios';
import { AxiosResponse } from 'axios';

type Menu = {
  id: number;
  parent_id: number;
  name: string;
  icon: string;
  sort: number;
  children: Menu[] | null;
};

type MenusType = {
  data: Menu[];
  code: number;
  msg: string;
};

const getList = () => {
  return axios.get<{}, AxiosResponse<MenusType>>('/api/v1/menus-all');
};

export default { getList };
