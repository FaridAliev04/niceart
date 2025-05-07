import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import contactFileModel from '../models/contact-file.model';
import contactModel from '../models/contact.model';

export const getContact = () => {
    return axiosInstance.get(`${API.contact}`).then(res => {
        return new contactModel(res.data); 
    });
};

export const getContactFile = () => {
    return axiosInstance.get(`${API.contact_files}`).then(res => {
       return res.data.record.map((partners :any) => new contactFileModel(partners));
    });
};