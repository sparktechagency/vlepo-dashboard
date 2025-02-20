import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getFromLocalStorage } from "../../utils/local-stroage";

 
const token  = getFromLocalStorage("vlepoToken")

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://10.0.80.49:6002/api/v1" ,
        // baseUrl: "http://192.168.10.195:5000/api" 
        headers: {
            Authorization: `Bearer ${token}`,
          }
    }),
    endpoints: () => ({})
});

// export const imageUrl = "http://206.189.231.81:5000";
export const imageUrl = "http://10.0.80.49:6002/";