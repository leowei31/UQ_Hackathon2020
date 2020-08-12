const normalizePort = require('normalize-port');
var express = require("express"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    app = express();

var indexRoute		= require("./routes/index"),
    personalRoute	= require("./routes/personal"),
    organizationRoute  = require("./routes/organization");

var port = normalizePort(process.env.PORT || '3000');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));


app.use(require("express-session")({
    secret: "hi.re",
    resave: false,
    saveUninitialized: false
}));

app.use("/", indexRoute);
app.use("/personal", personalRoute);
app.use('/organization', organizationRoute);

app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(port, process.env.IP, () => console.log("Server is live now"));