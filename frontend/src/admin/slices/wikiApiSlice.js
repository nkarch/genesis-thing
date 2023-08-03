import { apiSlice } from "./slicesConfig";

const WIKI_URL = "/api/wiki";

export const wikiApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDiscography: builder.query({
            query: () => ({
                url: `${WIKI_URL}/discography`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetDiscographyQuery } = apiSlice;
