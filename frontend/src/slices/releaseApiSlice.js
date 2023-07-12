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
        getReleaseBySlug: builder.query({
            query: (data) => {
                if (!data?.slug) return {};

                return {
                    url: `${RELEASES_URL}/${data.slug}`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const { useGetReleasesQuery, useGetReleaseBySlugQuery } = apiSlice;
