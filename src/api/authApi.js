import instance from './axiosClient';

const authApi = {
  login: payload => {
    return instance.post(`/auth/login`, payload);
  },
  register: data => {
    return instance.post(`/auth/register`, data);
  },
};

export default authApi;
