//# IMPORT

//IMPORT EXPRESS
const express = require("express");
const app = express();
//PORTA
const port = 3000;

//IMPORT DATA
const posts = require("./data/array-blog");

//IMPORT ROUTER POSTS
const routerPosts = require("./routers/posts");

//# SET PUBLIC DIRECTORY
app.use(express.static(`public`));

//# SET RUTER POSTS
app.use("/", routerPosts);

app.get("/bacheca", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Lettura della porta: ${port}`);
});
