import instance from './axiosClient';

const userApi = {
  getUserInfor: userID => {
    return instance.get(`/user/get-userinfor/${userID}`);
  },

  updateUserInforById: (userID, body) => {
    return instance.put(`/user/update-userinforbyid/${userID}`, body);
  },
};

export default userApi;
