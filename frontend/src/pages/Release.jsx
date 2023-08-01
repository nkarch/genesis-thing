import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

import { useGetReleaseBySlugQuery } from "../slices/releaseApiSlice";
import { useGetMediaByIdQuery } from "../slices/mediaSlice";

const ReleaseArtWork = ({ mediaId }) => {
    const { data, error, isLoading } = useGetMediaByIdQuery({ mediaId });

    return <>{data && <CardMedia component='img' image={data.src} alt={data.altText} />}</>;
};

const Release = () => {
    const { data, error, isLoading } = useGetReleaseBySlugQuery({ slug: useParams().slug });

    const mainProps = {
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
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        <Typography variant='h4' component='h1' sx={{ display: { sm: "none" } }}>
                            {data.title}
                        </Typography>

                        <Paper
                            elevation={1}
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                                flexShrink: "0",
                                maxWidth: "20rem",
                            }}
                        >
                            <ReleaseArtWork mediaId={data.artwork.primary.mediaId} />

                            <CardContent
                                sx={{
                                    flex: "1",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    alignSelf: "start",
                                }}
                            >
                                <table>
                                    <tbody>
                                        {Object.keys(mainProps).map((prop) => (
                                            <tr key={prop}>
                                                <td>{mainProps[prop]}: </td>
                                                <td>{formatProp(prop, data[prop])}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Paper>
                        <Box sx={{ order: { md: "2" } }}>
                            <Typography
                                gutterBottom
                                variant='h4'
                                component='h1'
                                sx={{ display: { xs: "none", sm: "block" } }}
                            >
                                {data.title}
                            </Typography>
                            <Typography paragraph>{data.bodyText}</Typography>
                        </Box>
                    </Box>
                </>
            ) : null}
        </>
    );
};
export default Release;
