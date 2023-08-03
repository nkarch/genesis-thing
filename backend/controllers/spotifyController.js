import https from "node:https";
import { promisify } from "util";

const httpsRequestAsync = promisify(https.get);

// https://api.spotify.com/v1/artists/3CkvROUTQ6nRi9yQOcsB50/albums?6ofEQubaL265rIW6WnCU8y
// https://api.spotify.com/v1/artists/3CkvROUTQ6nRi9yQOcsB50

import axios from "axios";

const getSpotifyReleases = (req, res) => {
    async function makeRequest() {
        const url =
            "https://api.spotify.com/v1/artists/3CkvROUTQ6nRi9yQOcsB50/albums?limit=40&include_groups=album";
        const headers = {
            Authorization:
                "Bearer BQDdNWIT0nsDvkeHZ-8d7vSInObhDKYqU_xZ6Z_rSSvU1OCP94ZlnnuqHmOpCVvGf6IFGPlS2iz4Pvjemg6vSX2X_lo1Q6pMvCqinjgJcGC2SbnOPHQ",
        };

        try {
            const response = await axios.get(url, { headers });

            const releases = [];
            const albums = response.data.items;
            const regex = /\((.*?)\)/;

            albums.forEach((album, i) => {
                if (i == 0) {
                    console.log(album);
                }
                // remove duplicate albums (comparing release date)
                if (
                    typeof albums[i + 1] !== "undefined" &&
                    album.release_date !== albums[i + 1].release_date
                ) {
                    releases.push({
                        name: album.name.replace(regex, ""),
                        type: album.type,
                        id: album.id,
                        releaseDate: album.release_date,
                        img: album.images[0].url,
                    });
                }
            });

            releases.sort((a, b) => {
                return a.releaseDate > b.releaseDate ? 1 : -1;
            });

            // console.log(releases);
            res.json(releases);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    makeRequest();
};

export { getSpotifyReleases };
