//IMPORT EXPRESS
const express = require("express");

//IMPORT DATA
let posts = require("../data/array-blog");

//SET ROUTER
const router = express.Router();

// CRUD
//# INDEX --------------------------------
router.get("/", (req, res) => {
  res.json({
    message: "Visualizzo tutti i post",
    posts,
  });
});

//# SHOW --------------------------------
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  res.json({
    message: `Visualizzo il post ${id}`,
    post,
  });
});

//# STORE --------------------------------
router.post("/", (req, res) => {
  res.json({
    message: "Aggiungo un post",
  });
});

//# UPDATE --------------------------------
router.put("/:id", (req, res) => {
  res.json({
    message: "Modifico un post",
  });
});

//# MODIFY --------------------------------
router.patch("/:id", (req, res) => {
  res.json({
    message: "Modifico un post",
  });
});

//# DESTROY --------------------------------
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const error = posts.find((post) => post.id === id);

  !error
    ? res.send("Elemento non trovato")
    : (posts = posts.filter((post) => post.id !== id));

  res.json({
    message: `Ho rimosso il post ${id}`,
    posts,
  });
});

module.exports = router;
