import { useQuery } from '@tanstack/react-query';
import { getAboutImg } from './about-img.service';

export const useAboutImg = () => {
    return useQuery({
        queryKey: ['about'], 
        queryFn: () => getAboutImg(), 
    });
};