import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hackernewsApi = createApi({
    reducerPath: 'hackernewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0'}),
    keepUnusedDataFor: 300,
    endpoints: (builder) => ({
        getStoriesByType: builder.query<any, string>({
            query: (storyType) => `${storyType}stories.json`
        }),
        getStoryDetails: builder.query<any, string>({
            query: (storyId) => `item/${storyId}.json`
        }),
    })
});

export const { useGetStoriesByTypeQuery, useGetStoryDetailsQuery } = hackernewsApi;