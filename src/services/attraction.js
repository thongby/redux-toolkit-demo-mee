// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const attractionApi = createApi({
  reducerPath: 'attractionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.mecallapi.com/api/' }),
  endpoints: (builder) => ({
    getAllAttractions: builder.query({
      query: () => `th/attractions`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAttractionsQuery } = attractionApi