import instance from './axiosClient';

const productApi = {
  product: () => {
    return instance.get(`/product/get-product`);
  },

  productSelling: () => {
    return instance.get(`/product/get-productselling`);
  },

  productPopular: () => {
    return instance.get(`/product/get-productpopular`);
  },

  productDetail: productID => {
    return instance.get(`/product/get-productdetail/${productID}`);
  },

  getListAllProduct: () => {
    return instance.get(`/product/get-listallproduct`);
  },

  createProduct: payload => {
    return instance.post(`/product/createproduct`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  updateProductById: (idProduct, body) => {
    return instance.put(`/product/update-productbyid/${idProduct}`, body);
  },

  findProductByName: (productName) => {
    return instance.get(`/product/find-productbyname/${productName}`);
  },
};

export default productApi;
