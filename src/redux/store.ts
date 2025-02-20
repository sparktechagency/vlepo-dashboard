
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./base/baseApi";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})