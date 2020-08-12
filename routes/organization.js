var express = require("express");
var router  = express.Router();
var passport= require("passport");

router.get("/", function(req, res){
    res.render("business_login");
});

router.post("/", (req,res)=>{
    //where the mongoose check the database for user ID and gives authentication
    //If login success, go to event page, if login fails, redirect to login page
    res.send("You reached the post route");
});

module.exports = router;