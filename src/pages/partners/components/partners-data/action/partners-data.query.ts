import { useQuery } from '@tanstack/react-query';
import { getPartnersData } from './partners-data.service';

export const usePartnersData = () => {
    return useQuery({
        queryKey: ['partners'], 
        queryFn: () => getPartnersData(), 
    });
};