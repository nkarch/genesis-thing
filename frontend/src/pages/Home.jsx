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
            <h1>Home</h1>
        </>
    );
};
export default Home;
