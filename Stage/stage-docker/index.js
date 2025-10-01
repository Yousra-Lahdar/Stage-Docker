
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello depuis Docker 🚀");
});

app.listen(3000, () => {
    console.log("App1 démarrée sur http://localhost:3000");
});
