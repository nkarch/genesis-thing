import { useParams } from "react-router-dom";

import { useGetReleaseQuery } from "../slices/releaseApiSlice";

const Release = () => {
    const { data, error, isLoading } = useGetReleaseQuery({ releaseId: useParams().slug });

    return (
        <div>
            <h1>Single Release:</h1>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.title}</h3>

                    <ul>
                        {Object.keys(data).map((thing, i) => (
                            <li key={i}>{`${thing}: ${data[thing]}`}</li>
                        ))}
                    </ul>
                </>
            ) : null}
        </div>
    );
};
export default Release;
