import instance from './axiosClient';

const favouriteApi = {
  favourite: async () => {
    return await instance.get(`/favourite/get-favourite`);
  },
};

export default favouriteApi;
