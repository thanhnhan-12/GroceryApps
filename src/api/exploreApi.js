import instance from './axiosClient';

const exploreApi = {
  explore: () => {
    return instance.get(`/category/get-category`);
  },
};

export default exploreApi;
