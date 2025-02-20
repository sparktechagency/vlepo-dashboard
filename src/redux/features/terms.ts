import { baseApi } from "../base/baseApi";

const terms = baseApi.injectEndpoints({
    endpoints: (builder) => ({   
        getTerms:builder.query({
            query:()=>{ 
              return{
                url:`/terms-and-condition` 
            } 
            }
          }) , 

        createTerms:builder.mutation({
            query:(value)=>({
              url:"/terms-and-condition" ,
              method:"POST" ,
              body:value
            })
          }) ,
        
    }) 
})  

export const {useCreateTermsMutation , useGetTermsQuery} = terms