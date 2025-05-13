//IMPORT EXPRESS
const express = require("express");

//IMPORT DATA
const posts = require("../data/array-blog");

//SET ROUTER
const router = express.Router();

//# INDEX
router.get("/", (req, res) => {
  res.json({
    message: "Visualizzo tutti i post",
    posts,
  });
});

//# SHOW
router.get("/:id", (req, res) => {
  const post = posts.find((post) => post.id === id);

  res.json({
    message: `Visualizzo il post ${id}`,
    post,
  });
});

module.exports = router;
