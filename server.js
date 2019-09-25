//express part
express = require('express')
app = express()
bodyParser = require("body-parser")
logger = require("morgan")
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
