import express from "express";
import { Express } from "express-serve-static-core";

const server = express();

server.get("/", (req, res) => {
    res.send("Hello world!!!");
});

server.listen(3000, () => {
    console.info(`Listening on http://localhost:3000`);
});
