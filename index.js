const express = require("express");
const app = express();
const path = require('path')
const apiRoute = require("./rotes/api")
const cors =  require("cors")
const PORT = process.env.PORT || 5000;

app.use(cors())

app.use("/api",apiRoute);

app.use(express.static(path.join(__dirname ,"public")));

app.listen(PORT,()=>{
    console.log("server running on port",PORT);
})
