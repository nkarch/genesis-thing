import { useState, useEffect } from "react";
import { Route, Link as RouterLink } from "react-router-dom";

import { useGetReleasesQuery, useGetReleaseQuery } from "../slices/releaseApiSlice";

const Discography = () => {
    const { data, error, isLoading } = useGetReleasesQuery();
    // const [singleRelease, setSingleRelease] = useState(null);

    // useEffect(() => {
    //     if (data && data[data.length - 1].releaseId) {
    //         setSingleRelease(data[data.length - 1].releaseId);
    //     }
    // }, [data]);

    return (
        <>
            <h1>Discography</h1>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <ul>
                    {data.map((release) => (
                        <li key={release.releaseId}>
                            <RouterLink to={`./${release.releaseId}`}>
                                {release.title} ({release.releaseId})
                            </RouterLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};
export default Discography;
