import instance from './axiosClient';

const exploreApi = {
  explore: async () => {
    return await instance.get(`/category/get-category`);
  },
};

export default exploreApi;
