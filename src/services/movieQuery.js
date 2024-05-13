import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = "http://localhost:3000/";

export const movieAPI = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        //get all
        getAllMovie: builder.query({
            query: () => `sliders`,
        }),
        getOneMovie: builder.query({
            query: (id) => `sliders/${id}`,
        }),
        deleteMovie: builder.mutation({
            query: (id) => ({
                url: `sliders/${id}`,
                method: "DELETE",
            }),
        }),
        postMovie: builder.mutation({
            query: (newCategory) => ({
                url: "sliders",
                body: newCategory,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        patchMovie: builder.mutation({
            query: (id, updatedCategory) => ({
                url: `sliders/${id}`,
                body: updatedCategory,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

//RTK - hooks auto generate
export const {
    useGetAllMovieQuery,
    useDeleteMovieMutation,
    useGetOneMovieQuery,
    usePostMovieMutation,
    usePatchMovieMutation
} = movieAPI;