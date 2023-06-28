import { configureStore } from '@reduxjs/toolkit';
import { bikesApi } from "../services/bikesApi.ts";


export const store =  configureStore({
    reducer: {
        [bikesApi.reducerPath]: bikesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bikesApi.middleware)
})
