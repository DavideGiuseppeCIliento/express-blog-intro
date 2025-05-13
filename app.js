//# IMPORT ARRAY POSTS
const posts = require("./array-blog");

// # IMPORT EXPRESS

const express = require("express");
const app = express();
const port = 3000;

// SET PUBLIC DIRECTORY
app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Lettura della porta: ${port}`);
});
