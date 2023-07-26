import { apiSlice } from "./apiSlice";

const MEDIA_URL = "/api/media";

export const mediaApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMedia: builder.query({
            query: () => ({
                url: `${MEDIA_URL}`,
                method: "GET",
            }),
        }),
        getMediaById: builder.query({
            query: (data) => {
                if (data?.mediaId === undefined || data?.mediaId === null) return {};

                return {
                    url: `${MEDIA_URL}/${data.mediaId}`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const { useGetMediaQuery, useGetMediaByIdQuery } = apiSlice;
