import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44375/api/v1',
    headers: {
        'Content-Type': 'application/json',
        // Các header khác nếu cần
      },
});

if(localStorage.getItem('Token')) {
    const token = localStorage.getItem('Token');
    axiosInstance.defaults.headers.common['Authorization'] = 'bearer ' + token;
}

export default axiosInstance;