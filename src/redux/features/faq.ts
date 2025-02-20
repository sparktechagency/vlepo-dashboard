import { baseApi } from "../base/baseApi"


const faqApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({   
        getFaq:builder.query({
            query:()=>{ 
              return{
                url:`/faqs`} 
            } , 
            transformResponse: (res: any) => res.data
          }) ,  

        addFaq:builder.mutation({
        query:(value)=>({
          url:"/faqs" ,
          method:"POST" ,
          body:value
        })
        }) ,  

        updateFaq:builder.mutation({
          query:(data)=>{  
            return{
              url:`/faqs/${data?._id}` ,
              method:"PATCH" ,
              body:data
            }
          }
        }) ,  
        
        deleteFaq:builder.mutation({
          query:(id)=>({
            url:`/faqs/${id}` ,
            method:"DELETE"
          })
        }) , 
        
      }) 
}) 

export const {useAddFaqMutation , useDeleteFaqMutation , useGetFaqQuery ,useUpdateFaqMutation} = faqApi 