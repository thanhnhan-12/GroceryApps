import instance from './axiosClient';

const categoryApi = {
  category: () => {
    return instance.get(`/category/get-category`);
  },

  categoryType: categoryID => {
    return instance.get(`/category/get-categorytype/${categoryID}`);
  },
};

export default categoryApi;
