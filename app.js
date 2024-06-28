const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

const port = 2020 || process.env.PORT;

app.listen(port, () => console.log("server corriendo ${port}"));

app.get("/", function (req,res){
    res. sendFile (path.resolve("./views/index.html"));
});

app.get("/views/index.html", function (req,res){
    res. sendFile (path.resolve("./views/index.html"));
});

app.get("/views/login.html", function (req,res){
    res. sendFile (path.resolve("./views/login.html"));
});

app.get("/views/register.html", function (req,res){
    res. sendFile (path.resolve("./views/register.html"));
});



