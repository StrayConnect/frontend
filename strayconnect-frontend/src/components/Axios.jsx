import axios from 'axios'

const axiosInstance = axios.create({
        baseURL: 'http://localhost:8285/',
        timeout: 1000,
})

export default axiosInstance