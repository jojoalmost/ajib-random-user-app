import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
let api = axios.create({
    baseURL: baseUrl || 'https://randomuser.me/api/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;