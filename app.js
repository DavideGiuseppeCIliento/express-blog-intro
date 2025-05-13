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
app.use("/bacheca", routerPosts);

//# LISTEN PORT
app.listen(port, () => {
  console.log(`Lettura della porta: ${port}`);
});
