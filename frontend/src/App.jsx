import { useGetReleasesQuery, useGetReleaseQuery } from "./slices/releaseApiSlice";

const App = () => {
    const { data, error, isLoading } = useGetReleasesQuery();
    const {
        data: data1,
        error: error1,
        isLoading: isLoading1,
    } = useGetReleaseQuery({ releaseId: 2 });

    return (
        <>
            <h1>All Releases:</h1>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>{data.releases.map((release) => release.title)}</>
            ) : null}
            <h1>Single Release:</h1>

            {error1 ? (
                <>Oh no, there was an error</>
            ) : isLoading1 ? (
                <>Loading...</>
            ) : data1 ? (
                <>{data1.title}</>
            ) : null}
        </>
    );
};

export default App;
