import instance from './axiosClient';

const adminApi = {
  getAllUser: () => {
    return instance.get(`/admin/get-alluser`);
  },
};

export default adminApi;
