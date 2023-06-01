import instance from './axiosClient';

const cartApi = {
  cart: userID => {
    return instance.get(`/cart/get-cart/${userID}`);
  },

  createCart: payload => {
    return instance.post(`/cart/create-cart`, payload);
  },

  decreaseQuantity: payload => {
    return instance.post(`/cart/decrease-quantity`, payload);
  },

  deleteCart: ({cartID, userID}) => {
    return instance.delete(
      `/cart/delete-cart?cartID=${cartID}&userID=${userID}`,
    );
  },

  payments: payload => {
    return instance.post(`/cart/payments`, payload);
  },
};

export default cartApi;
