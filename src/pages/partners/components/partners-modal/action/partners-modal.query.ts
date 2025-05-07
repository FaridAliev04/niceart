import { useQuery } from '@tanstack/react-query';
import { getPartnersModal } from './partners-modal.service';

export const usePartnersModal = () => {
    return useQuery({
        queryKey: ['partners'], 
        queryFn: () => getPartnersModal(), 
    });
};