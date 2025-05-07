import { useQuery } from '@tanstack/react-query';
import { getEstate } from './estate.servece';

export const useEstate = () => {
    return useQuery({
        queryKey: ['leads'], 
        queryFn: () => getEstate(), 
    });
};