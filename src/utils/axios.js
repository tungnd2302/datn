import axios from "axios";
import { notification } from 'antd';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44375/api/v1',
    headers: {
        'Content-Type': 'application/json',
        // Các header khác nếu cần
    },
});

const handleAxiosError = (error) => {
    if (error.response) {
        // if (error.response.status === 401 && localStorage.getItem('Token')) {

        //     localStorage.removeItem("Token");
        //     localStorage.removeItem("Role");
        //     localStorage.removeItem("UserName");
        //     localStorage.removeItem("EmployeeName");
        //     window.location.href = '/login';
        // }
        // Request được thực hiện và server phản hồi với status code không nằm trong khoảng 2xx
        notification.error({
            message: `Error ${error.response.status}`,
            description: error.response.data.message || error.message,
            placement: 'topRight',
        });
    } else if (error.request) {
        // Request được thực hiện nhưng không nhận được phản hồi
        notification.error({
            message: 'Error',
            description: 'No response received from the server.',
            placement: 'topRight',
        });
    } else {
        // Có vấn đề trong quá trình cài đặt request
        notification.error({
            message: 'Error',
            description: error.message,
            placement: 'topRight',
        });
    }
    return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
    response => response,
    error => handleAxiosError(error)
);

if (localStorage.getItem('Token')) {
    const token = localStorage.getItem('Token');
    axiosInstance.defaults.headers.common['Authorization'] = 'bearer ' + token;
}

export default axiosInstance;