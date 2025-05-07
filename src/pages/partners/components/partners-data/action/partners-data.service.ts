import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import partnersDataModel from '../models/partners-data.models';

export const getPartnersData = () => {
    return axiosInstance.get(`${API.partners}`).then(res => {
        // return res.data;
        return res.data.record.map((partners :any) => new partnersDataModel(partners));
    });
};