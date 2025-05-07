import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import purposesModel from '../model/goal.model';

export const getPurposes = () => {
    return axiosInstance.get(`${API.purposes}`).then(res => {
        return res.data.record.map((e:any)=>new purposesModel(e))
    });
};