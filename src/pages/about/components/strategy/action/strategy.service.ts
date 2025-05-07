import { API } from '../../../../../core/configs/api.config';
import axiosInstance from '../../../../../core/configs/axios.config';
import strategyModel from '../model/strategy.model';

export const getStrategy = () => {
    return axiosInstance.get(`${API.strategies}`).then(res => {
        return res.data.record.map((strategy :any) => new strategyModel(strategy));
    });
};