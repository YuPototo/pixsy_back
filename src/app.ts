import express from "express";

const server = express();
const port = process.env.PORT || 3000;

server.get("/", (req, res) => {
    res.send("Hello world!!!");
});

server.listen(port, () => {
    console.info(`Listening on http://localhost:${port}`);
});
