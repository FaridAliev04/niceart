import { API } from '../../../configs/api.config';
import axiosInstance from '../../../configs/axios.config';
import leadsModel from '../models/leads.model';

export const getLeads = () => {
    return axiosInstance.get(`${API.leads}`).then(res => {
        return res.data.record.map((apply :any) => new leadsModel(apply));
    });
};