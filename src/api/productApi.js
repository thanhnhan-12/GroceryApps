import instance from "./axiosClient";

const productApi = {
    product: async (payload) => {
        return await instance.get(`/product`, payload);
    },
   
}

export default productApi;