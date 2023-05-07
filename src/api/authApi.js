import instance from "./axiosClient";

const authApi = {
    login: async (payload) => {
        return await instance.post(`/auth/login`, payload);
    },
    register: async (data) => {
        return await instance.post(`/auth/register`, data);
    },
}

export default authApi;