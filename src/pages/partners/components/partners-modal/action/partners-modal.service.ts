import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import partnersModel from '../models/partners-modal.models';

export const getPartnersModal = () => {
    return axiosInstance.get(`${API.partners}`).then(res => {
        return res.data.map((partners :any) => new partnersModel(partners));
    });
};