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

  productDetail: async (productID) => {
    return await instance.get(`/product/get-productdetail/${productID}`);
  },
};

export default productApi;
