import { fetchDiscography } from "../services/discographyFetchService.js";

const getDiscographyWiki = async (req, res) => {
    const thing = await fetchDiscography();
    res.json(thing);
};

export { getDiscographyWiki };
