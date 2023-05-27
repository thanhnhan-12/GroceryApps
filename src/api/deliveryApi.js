import instance from './axiosClient';

const deliveryApi = {
  province: async () => {
    return await instance.get(`/delivery/get-province`);
  },

  district: async () => {
    return await instance.get(`/delivery/get-district`);
  },

  ward: async districtID => {
    return await instance.get(`/delivery/get-ward/${districtID}`);
  },

  userAddress: async body => {
    return await instance.post(`/delivery/update-useraddress`, body);
  },

  addressList: async userID => {
    return await instance.get(`/delivery/get-addresslist/${userID}`);
  },

  updateAddressById: async (idAddress, body) => {
    return await instance.put(
      `/delivery/update-addressbyid/${idAddress}`,
      body,
    );
  },

  deleteUserAddress: async ({userAddressID, userID}) => {
    return await instance.delete(
      `/delivery/delete-useraddress?userAddressID=${userAddressID}&userID=${userID}`,
    );
  },
};

export default deliveryApi;
