import { baseApi } from "../base/baseApi";

const dashboardHome = baseApi.injectEndpoints({
    endpoints: (builder) => ({    
         getState:builder.query({
             query:()=>{ 
               return{
                 url:`/dashboard/total-viewer-count-with-growth-rate`
                } 
             }
         }) ,   

         getUserChart:builder.query({
             query:(year)=>{  
                // const params = new URLSearchParams();
                // params.append('year', year);
               return{
                 url:`/dashboard/user-engagement/${year}`
                } 
             }
         }) ,   

         getCreatorCountChart:builder.query({
             query:(year)=>{ 
               return{
                 url:`/dashboard/views-and-creator-count/${year}`
                } 
             }
         }) ,  

    }) 
}) 

export const {useGetStateQuery , useGetUserChartQuery , useGetCreatorCountChartQuery} = dashboardHome