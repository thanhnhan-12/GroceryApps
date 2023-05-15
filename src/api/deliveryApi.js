import instance from './axiosClient';

const deliveryApi = {
  province: async () => {
    return await instance.get(`/delivery/get-province`);
  },

  district: async () => {
    return await instance.get(`/delivery/get-district`);
  },

  ward: async () => {
    return await instance.get(`/delivery/get-ward`);
  },

};

export default deliveryApi;
