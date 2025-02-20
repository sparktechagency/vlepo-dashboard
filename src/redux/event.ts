import { baseApi } from "./base/baseApi";

const eventApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        useGetEventsStatus: builder.query({
            query: (year) => {
                return {
                    url: `/dashboard/event-stat/${year}`
                }
            }
        }),

        getAllEvents: builder.query({
            query: () => {
                return {
                    url: `/dashboard/all-events`
                }
            }
        })
        
    })
})

export const { useGetAllEventsQuery, useUseGetEventsStatusQuery } = eventApi