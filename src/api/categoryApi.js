import instance from "./axiosClient";

const categoryApi = {
    category: async (payload) => {
        return await instance.get(`/category`, payload);
    },
   
}

export default categoryApi;