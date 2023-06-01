import instance from './axiosClient';

const orderApi = {
  getAllOrders: userID => {
    return instance.get(`/order/get-allorders/${userID}`);
  },

  getAllUserOrders: orderStatus => {
    return instance.get(`/order/get-alluserorders/${orderStatus}`);
  },

  updateListOrderStatus: body => {
    return instance.put(`/order/update-orderstatus`, body);
  },
};

export default orderApi;
