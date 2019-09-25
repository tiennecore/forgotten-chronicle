//express part
express = require('express')
app = express()
router= require('./routes/races')
bodyParser = require("body-parser")
logger = require("morgan")
port = process.env.PORT || 5000;


app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    app.get('*',(req, res) =>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}

app.get('', function (req, res) {
    res.send("I'm the tiennelord API");
});

app.listen( port, () => {
    console.log("Runnning on " + port)
})
