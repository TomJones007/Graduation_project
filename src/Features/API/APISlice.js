import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const APISlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getSushi: builder.query({
      query: () => "sushi",
    }),
    getRolls: builder.query({
      query: () => "rolls",
    }),
    getSets: builder.query({
      query: () => "sets",
    }),
    getSnacks: builder.query({
      query: () => "snacks",
    }),
    getBaverages: builder.query({
      query: () => "baverages",
    }),
    getSauces: builder.query({
  query: () => "/sauces",
}),

  }),
});

export const {
  useGetSushiQuery,
  useGetRollsQuery,
  useGetSetsQuery,
  useGetSnacksQuery,
  useGetBaveragesQuery,
  useGetSaucesQuery,
} = APISlice;

