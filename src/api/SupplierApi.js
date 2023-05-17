import instance from "./axiosClient";

const supplierApi = {
  supplier: async () => {
    return await instance.get(`/supplier/get-supplier`);
  },
   
}

export default supplierApi;