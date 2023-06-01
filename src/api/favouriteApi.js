import instance from './axiosClient';

const favouriteApi = {
  favourite: () => {
    return instance.get(`/favourite/get-favourite`);
  },
};

export default favouriteApi;
