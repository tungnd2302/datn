import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from '../../features/LoginPage/Login';
import axiosInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

LoginPage.propTypes = {
    
};

function LoginPage(props) {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState('');
    const submit = async (values) => {
        try {
            const result = await axiosInstance.post('Accounts/login', {
                userName: values.username,
                password: values.password
              });
            if (result.data && result.status === 200) {
                if(!localStorage.getItem("Token")){
                    localStorage.setItem("Token",result.data.token);
                    localStorage.setItem("Role",result.data.role);
                    localStorage.setItem("UserName",result.data.user_name);
                    localStorage.setItem("EmployeeName",result.data.hoTen);
                }
                setErrMessage('');
                navigate('/')
            }
            
        }
        catch (e){
            if (e.response?.status === 401) {
                setErrMessage('Sai tai khoan hoac mk');
            }
        }
      };

    return (
        <Login onFinish={submit} errMessage={errMessage} />
    );
}

export default LoginPage;