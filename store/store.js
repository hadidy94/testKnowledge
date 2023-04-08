import { configureStore  } from '@reduxjs/toolkit';
import iconsReducers from './iconsSlice';

export const store = configureStore({
    reducer: {
        iconsVisible: iconsReducers,
    }
});