import instance from './axiosClient';

const cartApi = {
  cart: async userID => {
    return await instance.get(`/cart/get-cart/${userID}`);
  },

  createCart: async payload => {
    return await instance.post(`/cart/create-cart`, payload);
  },

  decreaseQuantity: async payload => {
    return await instance.post(`/cart/decrease-quantity`, payload);
  },

  deleteCart: async ({cartID, userID}) => {
    return await instance.delete(
      `/cart/delete-cart?cartID=${cartID}&userID=${userID}`,
    );
  },

  payments: async payload => {
    return await instance.post(`/cart/payments`, payload);
  },
};

export default cartApi;
