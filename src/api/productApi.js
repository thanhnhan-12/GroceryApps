import instance from "./axiosClient";

const productApi = {
    product: async () => {
        return await instance.get(`/product/get-product`);
    },

    productSelling: async () => {
        return await instance.get(`/product/get-productselling`)
    },
   
}

export default productApi;