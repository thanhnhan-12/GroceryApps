import instance from './axiosClient';

const cartApi = {
  cart: async () => {
    return await instance.get(`/cart/get-cart`);
  },
};

export default cartApi;
