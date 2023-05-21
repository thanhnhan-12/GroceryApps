import instance from './axiosClient';

const categoryApi = {
  category: async () => {
    return await instance.get(`/category/get-category`);
  },

  categoryType: async (categoryID) => {
    return await instance.get(`/category/get-categorytype/${categoryID}`);
  },

};  

export default categoryApi;
