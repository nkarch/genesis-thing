import axios from "axios";
import * as cheerio from "cheerio";

// Get Genesis discography from Wikipedia page and format into JSON object
// Configured specifically for DOM structure and content at URL as of August 3, 2023

const URL = "https://en.wikipedia.org/w/rest.php/v1/page/Genesis_discography/html";
const INCLUDE_SECTIONS = ["albums", "eps", "singles", "videos"];
const PATTERNS = {
    albums: "tr th[scope='row'] > i",
    eps: "tr th[scope='row'] > i",
    videos: "tr th[scope='row']",
    singles: "tr th[scope='row']",
};
const REGEX = /\[(.*?)\]/g; // remove text inside square brackets, including brackets (text in <sup> elements)

const generateReleases = ({ $, data, sectionSlug }) => {
    const releases = [];

    const pattern = PATTERNS[sectionSlug];

    $(data)
        .find(pattern)
        .each(function () {
            const release = {};

            release.name = $(this).text().replaceAll('"', "").replace(REGEX, "").trim();
            release.slug = release.name
                .replaceAll(" ", "_")
                .replaceAll(",", "")
                .replaceAll("'", "")
                .replaceAll(".", "")
                .toLowerCase();

            if ($(this).find("a[href]")) {
                release.url = $(this).find("a[href]").attr("href");
            }

            releases.push(release);
        });

    return releases;
};

const generateCategories = ({ $, data, sectionSlug }) => {
    const categoriesToParse = $(data).find("h3").parent();
    const categories = [];

    categoriesToParse.each(function () {
        const categoryToParse = $(this)[0];
        const heading = $(categoryToParse).find("h3");
        const slug = $(heading)?.attr("id").toLowerCase();
        categories.push({
            slug: slug,
            name: heading?.text(),
            releases: generateReleases({ $, data: categoryToParse, sectionSlug }),
        });
    });

    return categories;
};

const generateSections = ({ data }) => {
    const $ = cheerio.load(data);

    const sectionsToParse = $("h2").parent();
    const sections = [];

    $(sectionsToParse).each(function () {
        const sectionToParse = $(this)[0];
        const heading = $(sectionToParse).find("h2");
        const slug = $(heading)?.attr("id").toLowerCase();

        if (INCLUDE_SECTIONS.includes(slug)) {
            const section = {
                slug,
                name: heading?.text(),
            };

            if ($(sectionToParse).find("h3").length) {
                section.categories = generateCategories({
                    $,
                    data: sectionToParse,
                    sectionSlug: slug,
                });
            } else {
                section.releases = generateReleases({
                    $,
                    data: sectionToParse,
                    sectionSlug: slug,
                });
            }

            sections.push(section);
        }
    });

    return sections;
};

async function fetchDiscography() {
    try {
        const response = await axios.get(URL);
        return generateSections({ data: response.data });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export { fetchDiscography };
