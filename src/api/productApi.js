import instance from './axiosClient';

const productApi = {
  product: async () => {
    return await instance.get(`/product/get-product`);
  },

  productSelling: async () => {
    return await instance.get(`/product/get-productselling`);
  },

  productPopular: async () => {
    return await instance.get(`/product/get-productpopular`);
  },

  productDetail: async productID => {
    return await instance.get(`/product/get-productdetail/${productID}`);
  },

  getListAllProduct: async () => {
    return await instance.get(`/product/get-listallproduct`);
  },

  createProduct: async payload => {
    return await instance.post(`/product/createproduct`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default productApi;
