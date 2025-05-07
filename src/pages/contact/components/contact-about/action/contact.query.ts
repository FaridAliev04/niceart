import { useQuery } from '@tanstack/react-query';
import { getContact, getContactFile } from './contact.service';

export const useContact = () => {
    return useQuery({
        queryKey: ['contact'], 
        queryFn: () => getContact(), 
    });
};

export const useContactFile = () => {
    return useQuery({
        queryKey: ['contact-file'], 
        queryFn: () => getContactFile(), 
    });
};