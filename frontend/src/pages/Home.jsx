import { useState, useEffect } from "react";
import { useGetReleasesQuery, useGetReleaseQuery } from "../slices/releaseApiSlice";

const Home = () => {
    const { data, error, isLoading } = useGetReleasesQuery();
    const [singleRelease, setSingleRelease] = useState(null);

    const {
        data: data1,
        error: error1,
        isLoading: isLoading1,
    } = useGetReleaseQuery({ releaseId: singleRelease });

    useEffect(() => {
        if (data && data[data.length - 1].releaseId) {
            setSingleRelease(data[data.length - 1].releaseId);
        }
    }, [data]);

    return (
        <>
            <h1>All Releases:</h1>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <ul>
                    {data.map((release) => (
                        <li key={release.releaseId}>
                            {release.title} ({release.releaseId})
                        </li>
                    ))}
                </ul>
            ) : null}

            <h1>Single Release:</h1>

            <p>(Just showing whatever is the last item in Releases object)</p>

            {error1 ? (
                <>Oh no, there was an error</>
            ) : isLoading1 ? (
                <>Loading...</>
            ) : data1 ? (
                <h3>{data1.title}</h3>
            ) : null}
        </>
    );
};
export default Home;
