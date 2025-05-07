import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    loader: false,
};

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLoader: (state: any, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
    },
});

export const { setLoader } = rootSlice.actions;

export default rootSlice.reducer;
