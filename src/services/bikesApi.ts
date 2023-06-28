// @ts-ignore
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bikesApi = createApi({
    reducerPath: 'bikes/api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (build) => ({
        getBikes: build.query({
            query: () => 'bikes',
        })
    })
})

export const { useGetBikesQuery } = bikesApi
