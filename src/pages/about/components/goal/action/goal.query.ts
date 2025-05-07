import { useQuery } from '@tanstack/react-query';
import { getPurposes } from './goal.service';

export const usePurposes = () => {
    return useQuery({
        queryKey: ['purposes'], 
        queryFn: () => getPurposes(), 
    });
};