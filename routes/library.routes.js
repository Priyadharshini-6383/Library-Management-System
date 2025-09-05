const express = require("express");

const router = express.Router();

router.get("/" , (req , res) => {
res.send("Books read Successfully");
});

router.post("/",(req , res ) => {
res.send("Books created successfully");
});

router.put("/:id" , (req , res) =>{
res.send("Books updated successfully");
});

router.delete("/:id" , (req , res) => {
res.send("Books deleted successfully");
});

module.exports = router;