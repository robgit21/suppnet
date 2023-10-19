import { buildCacheCollectionHandler } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheCollection";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ytVideoItemApi = createApi({
  reducerPath: "ytVideoItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7246/api/",
  }),
  tagTypes: ["VideoItems"],

  endpoints: (builder) => ({
    getVideoItems: builder.query({
      query: () => ({
        url: "ytvideo",
      }),
      providesTags: ["VideoItems"],
    }),

    getVideoItemById: builder.query({
      query: (id) => ({
        url: `ytvideo/${id}`,
      }),
      providesTags: ["VideoItems"],
    }),
  }),
});

export const { useGetVideoItemsQuery, useGetVideoItemByIdQuery } =
  ytVideoItemApi;

export default ytVideoItemApi;
