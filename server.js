//express part
express = require('express')
app = express()
router = require('./routes/races')
path = require('path')
cors = require("cors")
bodyParser = require("body-parser")
logger = require("morgan")
const proxy = require("http-proxy-middleware")
port = process.env.PORT || 5000;


app.use(logger('dev'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*')
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.use(express.static(path.join(__dirname, '/src')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

//app listen on localhost:5000
app.listen( port, () => {
    console.log("Runnning on " + port)
})

module.exports = function(app) {
    app.use(
      proxy(["/api", , "/otherApi"], { target: "http://localhost:5000" })
    );
  }