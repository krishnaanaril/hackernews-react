import { hackernewsApi } from "@/services/hackernews";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [hackernewsApi.reducerPath]: hackernewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(hackernewsApi.middleware),
})

setupListeners(store.dispatch)