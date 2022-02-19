const express = require("express");
const router = express.Router();
const  posts = require('../model/posts');
const cors = require('cors');
const { use } = require("express/lib/application");




router.use(cors())

router.get("/all",(req,res)=>{

    res.json(JSON.stringify(posts.getAll()))
    
})
router.post("/new",express.json(),(req,res)=>{

    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title,description);
    

    res.send("Post adiocionado");
})
router.delete("/delete",express.json(),(req,res)=>{
    let delitem = req.body.id;
    posts.deletePost(delitem);
    res.send("Post deletado com sucesso!")

})
module.exports = router;