import { baseApi } from "../base/baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({     
        getUsers: builder.query({
            query: () => ({
                url: "/dashboard/all-users"
            }),
            transformResponse: (res: any) => {
              
                return res; 
            }
        }) , 
         
        updateUserStatus: builder.mutation({ 
            query: (id) => ({ 
                url: `/dashboard/restrict/${id}` , 
                method: "PATCH" 
            }) 
        })
    }) 
});

export const { useGetUsersQuery , useUpdateUserStatusMutation } = usersApi;