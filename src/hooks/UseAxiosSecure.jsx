import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './UseAuth';


const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});


const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth()


  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Logout the user and navigate to login page
          logOut().then(() => {
            navigate('/login');
          });
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
