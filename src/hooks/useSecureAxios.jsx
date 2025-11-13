import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecureInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

const useSecureAxios = () => {

    const { user, logOut } = useAuth();

    useEffect(() => {
        // req interceptor
        const requestInterceptor = axiosSecureInstance.interceptors.request.use(
            (config) => {
                if (user?.accessToken) {
                    config.headers.authorization = `Bearer ${user.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );


        // res interceptor
        const responseInterceptor = axiosSecureInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    await logOut?.();
                }
                return Promise.reject(error);
            }
        );

        // cleanup
        return () => {
            axiosSecureInstance.interceptors.request.eject(requestInterceptor);
            axiosSecureInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [user, logOut])

    return axiosSecureInstance;
};

export default useSecureAxios;