import axios, {AxiosResponse,InternalAxiosRequestConfig} from 'axios';
import {environment} from './app.config';
import { store } from '../../store/store.config';
import { setLoader } from '../../store/store.reducer';

const axiosInstance = axios.create({
    baseURL: environment.apiMain,
    
    headers: {
        'X-Master-Key': '$2a$10$16UVMFx1T5AAoHL7XxpMYOnxKvrhzBoLpp.vBumZ2KlmPqU5aHI.2',
    },
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        store.dispatch(setLoader(true));
        return config;
    }, (error) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {

        if (response.data) {
            store.dispatch(setLoader(false));
        }
        return response;
    },
);
export default axiosInstance;


