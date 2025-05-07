import { useQuery } from '@tanstack/react-query';
import { getStrategy } from './strategy.service';

export const useStrategy = () => {
    return useQuery({
        queryKey: ['strategy'], 
        queryFn: () => getStrategy(), 
    });
};