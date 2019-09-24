import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "28ea9fcf-a1e5-474e-acfd-ed2d434e2742"
    }
});

export const userAPI = {
    authme() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    getUserProfile(userid = 1632){
        return instance.get(`profile/${userid}`)
            .then(response => {
                return response.data;
            })
    },
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    unFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    Follow(id){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
};
