import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';

export const getAboutImg = () => {
    return axiosInstance.get(`${API.video}`).then(res => {
        return res.data
    });
};