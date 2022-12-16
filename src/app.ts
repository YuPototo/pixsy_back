import express from "express";
import cors from "cors";
import data from "./data";
import { isKeywordInPhoto } from "./utils";

const server = express();
const port = process.env.PORT || 3000;

server.use(cors());

// api: get photos
server.get("/photos", (req, res) => {
    console.log("GET /photos");

    // parse query
    const { page = 1, limit = 10, topic, searchTerm } = req.query;
    const pageInt = page ? parseInt(page as string) : 1;
    const limitInt = limit ? parseInt(limit as string) : 10;

    const startIndex = (pageInt - 1) * limitInt;
    const endIndex = pageInt * limitInt;

    let photosToReturn = data;

    // ! in a real service, we would use a database to query the photos
    // ! this is just a mock service

    // get photos by topic
    if (topic) {
        photosToReturn = photosToReturn.filter((photo) => {
            return photo.topics.includes(topic as string);
        });
    }

    // get photos by search term
    if (searchTerm) {
        photosToReturn = photosToReturn.filter((photo) =>
            isKeywordInPhoto(photo, searchTerm as string)
        );
    }

    // get photos by page
    const photos = photosToReturn.slice(startIndex, endIndex);

    // has previous page
    const hasPreviousPage = startIndex > 0;

    // has next page
    const hasNextPage = endIndex < photosToReturn.length;

    return res.json({ photos, hasPreviousPage, hasNextPage });
});

// api: topics
const topics = data.map((photo) => photo.topics).flat();
const uniqueTopics = [...new Set(topics)].sort((a, b) => a.localeCompare(b));

server.get("/topics", (req, res) => {
    console.log("GET /topics");
    return res.json({ topics: uniqueTopics });
});

server.listen(port, () => {
    console.info(`Listening on http://localhost:${port}`);
});
