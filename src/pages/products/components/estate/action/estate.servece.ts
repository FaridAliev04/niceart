import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import estateModel from '../model/estate.model';

export const getEstate = () => {
    return axiosInstance.get(`${API.products}`).then(res => {
        return res.data.record.map((products :any) => new estateModel(products));
    });
};