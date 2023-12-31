import { Link as RouterLink } from "react-router-dom";

import { useGetReleasesQuery } from "../slices/releaseApiSlice";

const Discography = () => {
    const { data, error, isLoading } = useGetReleasesQuery();

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
                            <RouterLink to={`./${release.slug}`}>
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
