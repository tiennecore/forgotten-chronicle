router = express.Router()
mysql= require('mysql')

router.get('/race/:id',(req,res) => {
    var raceNameID=req.params.id
    var QueryStringRace="SELECT rac.name,rac.description,rac.prejuge, n.*,car.*,rep.*, cap.* FROM noms n, race rac, carac car,repere rep,capacite_raciale cap where rac.ID= "+raceNameID+" and n.id = rac.noms_ID and car.ID=rac.carac_ID and rep.ID=rac.repere_ID and cap.ID=rac.capacite_raciale_ID ;"
    pool.query(QueryStringRace,(err, result, fieds) => {
        if (err){
          console.log("failed to load:" + err)
          res.sendStatus(500)
          return
        }
        res.json(result)
        res.end()

    })
})
router.get('/races',(req,res) => {
    var QueryStringRace="select id,name from race;"
    pool.query(QueryStringRace,(err, result, fieds) => {
        if (err){
          console.log("failed to load:" + err)
          res.sendStatus(500)
          return
        }
        res.json(result)
        res.end()

    })
})


pool = mysql.createPool({
    connectionLimit:10,
    host:'127.0.0.1',
    user:'foo',
    password:'bar', 
    database: 'race'
})

module.exports = router