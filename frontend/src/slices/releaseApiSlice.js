import { apiSlice } from "./apiSlice";

const RELEASES_URL = "/api/releases";

export const releaseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReleases: builder.query({
            query: () => ({
                url: `${RELEASES_URL}`,
                method: "GET",
            }),
        }),
        getRelease: builder.query({
            query: (data) => ({
                url: `${RELEASES_URL}/${data.releaseId}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetReleasesQuery, useGetReleaseQuery } = apiSlice;
