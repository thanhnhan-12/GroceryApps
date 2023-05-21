import instance from './axiosClient';

const cartApi = {
  cart: async (userID) => {
    return await instance.get(`/cart/get-cart/${userID}`);
  },

  createCart: async (payload) => {
    return await instance.post(`/cart/create-cart`, payload);
  },

  decreaseQuantity: async (payload) => {
    console.log();
    return await instance.post(`/cart/decrease-quantity`, payload);
  },
};

export default cartApi;
