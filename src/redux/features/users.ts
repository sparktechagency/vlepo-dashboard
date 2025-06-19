import { baseApi } from "../base/baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({     
        getUsers: builder.query({
            query: ({page, search , limit}) => {  
                const params = new URLSearchParams(); 
                if(search) params.append('searchTerm', search); 
                if(page) params.append('page', page);  
                if(limit) params.append('limit', limit);
                return{
                    url: `/dashboard/all-users?${params.toString()}`
                }
            },
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