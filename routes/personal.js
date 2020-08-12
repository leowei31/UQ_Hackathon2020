var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
    res.render("personal_login");
});


module.exports = router;