import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer, // we connecting the counter Slice with the Store
    },
});
