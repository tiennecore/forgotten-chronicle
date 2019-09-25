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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.get('', function (req, res) {
    res.send("I'm the tiennelord API");
});

app.listen( port, () => {
    console.log("Runnning on " + port)
})
