const express = require("express");

const router = express.Router();

const {BooksRead , BooksCreate , BooksUpdate , BooksDelete} = require("./contollers/library.controllers.js");



router.get("/" ,BooksRead);

router.post("/",BooksCreate);

router.put("/:id" , BooksUpdate);

router.delete("/:id" , BooksDelete);

module.exports = router;