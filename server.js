const express = require("express");
const app = express();
const PORT = 5000;

const Accessrouter = require("./routes/library.routes.js");

app.get("/" , (req , res ) => {
res.send(" Welcome to Library Management System");
});
// using middleware for using routes

app.use("/library" , Accessrouter);

app.listen(PORT , () => {
    console.log(`The server will be run on http://localhost:${PORT}`);
});