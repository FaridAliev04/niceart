import {useSelector} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store.reducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const useStore = (key: keyof any) => {
    const data = useSelector((state: any) => state[key]);
    return data;
};
