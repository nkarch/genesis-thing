import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useGetReleaseBySlugQuery } from "../slices/releaseApiSlice";
import { useGetMediaByIdQuery } from "../slices/mediaSlice";

const ReleaseArtWork = ({ mediaId }) => {
    const { data, error, isLoading } = useGetMediaByIdQuery({ mediaId });

    return <>{data && <img width='200' height='200' src={data.src} alt={data.altText} />}</>;
};

const Release = () => {
    const { data, error, isLoading } = useGetReleaseBySlugQuery({ slug: useParams().slug });

    const mainProps = {
        title: "Title",
        recorded: "Recorded",
        releaseDate: "Release Date",
        studio: "Studio",
        label: "Label",
        producer: "Producer",
    };

    function formatProp(prop, str) {
        if (prop === "releaseDate") {
            const date = new Date(str);

            return date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
        } else {
            return str;
        }
    }

    return (
        <>
            <h1>Single Release:</h1>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.title}</h3>
                    {data.mediaId}

                    <Paper elevation={1}>
                        <CardContent>
                            <ReleaseArtWork mediaId={data.artwork.primary.mediaId} />

                            <table>
                                <tbody>
                                    {Object.keys(mainProps).map((prop) => (
                                        <tr key={prop}>
                                            <td>{mainProps[prop]} : </td>
                                            <td>{formatProp(prop, data[prop])}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Paper>
                </>
            ) : null}
        </>
    );
};
export default Release;
