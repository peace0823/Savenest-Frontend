import axios from "axios";

const apiManager = axios.create({
    baseURL: '',
    responseType: 'json',
    withCredentials: true
})

export default apiManager