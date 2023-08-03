import { useGetDiscographyQuery } from "../slices/wikiApiSlice";
import { Link as RouterLink } from "react-router-dom";

const Discography = () => {
    const { data, error, isLoading } = useGetDiscographyQuery();

    return (
        <>
            <h1>This is the admin panel</h1>

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <ul>
                        {data.map((section) => (
                            <li key={section.slug}>
                                <span>{section.name}</span>
                                {section.categories && (
                                    <ul>
                                        {section.categories.map((category) => (
                                            <li key={category.slug}>
                                                <span>{category.name}</span>
                                                {category.releases && (
                                                    <ul>
                                                        {category.releases.map((release) => (
                                                            <li key={release.slug}>
                                                                <RouterLink
                                                                    to={`./release/${release.slug}`}
                                                                >
                                                                    {release.name}
                                                                </RouterLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.releases && (
                                    <ul>
                                        {section.releases.map((release) => (
                                            <li key={release.slug}>{release.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}

                        {/* <pre>{JSON.stringify(data)}</pre> */}
                    </ul>
                </>
            ) : null}
        </>
    );
};

export default Discography;
