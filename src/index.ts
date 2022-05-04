
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use("/css", express.static(__dirname + "/../public/css"));
app.use("/img" ,express.static(__dirname + "/../public/images"));
app.use("/js" ,express.static(__dirname + "/../public/js"));

const PORT = 3000;

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/calculator", (req, res) => {
    res.render("calculator");
});

app.get("/games", (req, res) => {
    res.render("games");
});

const server = app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
});
