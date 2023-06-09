import instance from './axiosClient';

const adminApi = {
  getAllUser: () => {
    return instance.get(`/admin/get-alluser`);
  },

  getStatistical: () => {
    return instance.get('/admin/get-statistical');
  },
};

export default adminApi;
