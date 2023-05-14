import instance from "./axiosClient";

const categoryApi = {
    category: async () => {
        return await instance.get(`/category/get-category`);
    },
   
}

export default categoryApi;