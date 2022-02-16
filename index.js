const express = require("express");
const app = express();
const path = require('path')
const apiRoute = require("./rotes/api")

const PORT = 3000;

app.use("/api",apiRoute);

app.use(express.static(path.join(__dirname ,"public")));

app.listen(PORT,()=>{
    console.log("server running on port",PORT);
})
