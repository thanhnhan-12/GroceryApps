import instance from './axiosClient';

const deliveryApi = {
  province: () => {
    return instance.get(`/delivery/get-province`);
  },

  district: () => {
    return instance.get(`/delivery/get-district`);
  },

  ward: districtID => {
    return instance.get(`/delivery/get-ward/${districtID}`);
  },

  userAddress: body => {
    return instance.post(`/delivery/update-useraddress`, body);
  },

  addressList: userID => {
    return instance.get(`/delivery/get-addresslist/${userID}`);
  },

  updateAddressById: (idAddress, body) => {
    return instance.put(`/delivery/update-addressbyid/${idAddress}`, body);
  },

  deleteUserAddress: ({userAddressID, userID}) => {
    return instance.delete(
      `/delivery/delete-useraddress?userAddressID=${userAddressID}&userID=${userID}`,
    );
  },
};

export default deliveryApi;
