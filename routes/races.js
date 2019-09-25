router = express.Router()
mysql= require('mysql')

router.get('/api/raceInfoNames/:id',(req,res) => {
    var raceId = req.params.id
    var QueryStringRace="select * from names_race n where n.id="+raceId
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

router.get('/api/raceInfoCarac/:id',(req,res) => {
    var raceId = req.params.id
    var QueryStringRace="select * from carac_race n where n.id="+raceId
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

router.get('/api/raceInfoRepere_race/:id',(req,res) => {
    var raceId = req.params.id
    var QueryStringRace="select * from repere_race n where n.id="+raceId
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

router.get('/api/raceInfoCapacite_raciale/:id',(req,res) => {
    var raceId = req.params.id
    var QueryStringRace="select * from capacite_raciale n where n.id="+raceId
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

router.get('/api/raceInfoCarac/:id',(req,res) => {
    var raceId = req.params.id
    var QueryStringRace="select * from names_race n where n.id="+raceId
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

router.get('/api/race/:id',(req,res) => {
    var raceId=req.params.id
    var QueryStringRace="select * from race n where n.id="+raceId
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
router.get('/api/races',(req,res) => {
    var QueryStringRace="select id,name from race;"
    pool.query(QueryStringRace,(err, result, fieds) => {
        if (err){
          res.sendStatus(500)
          return
        }
        res.json(result)
        res.end()

    })
})
function stringmysql(value){
    if(value!= null){
        isnum = /-?\d+$/.test(value);
        if(isnum==false){
            var str = value.replace(/'/g,"\'")
            var pressepapier = str.replace(/\n|\r/g,'')
            return ("'"+pressepapier+"'")
        }else{
            return value
        }
    }else{
        return value
    }
}

router.post('/api/newrace',(req,res) => {
    var body = req.body
    var queryCapacite="insert into capacite_raciale (nom,description) values ("+
        stringmysql(body.capaciteName)+","+
        stringmysql(body.capaciteDescription) +");"
    var queryCapaciteId="set @idcapacite_racial=LAST_INSERT_ID();"
    var queryCarac="insert into carac_race(inte,cha,dex,con,sag,c_for) values("+
        stringmysql(body.caracInt)+","+
        stringmysql(body.caracCha)+","+
        stringmysql(body.caracDex)+","+
        stringmysql(body.caracCon)+","+
        stringmysql(body.caracSag)+","+
        stringmysql(body.caracFor)+");"
    var queryCaracId="set @idcarac=LAST_INSERT_ID();"
    var queryRepere="insert into repere_race(AGE_MIN,AGE_MAX,TAILLE_MIN,TAILLE_MAX,POID_MIN,POID_MAX,DESCRIPTION)values("+
        stringmysql(body.repereAgeMin)+","+
        stringmysql(body.repereAgeMax)+","+
        stringmysql(body.repereTailleMin)+","+
        stringmysql(body.repereTailleMax)+","+
        stringmysql(body.reperePoidMin)+","+
        stringmysql(body.reperePoidMax)+","+
        stringmysql(body.repereDescription)+");"
    var queryRepereId="set @idrepere=LAST_INSERT_ID();"
    var queryNom="insert into names_race(DESCRIPTION,MASC,FEM)values("+
        stringmysql(body.nomDescription)+","+
        stringmysql(body.nomMasc)+","+
        stringmysql(body.nomFem)+");"
    var queryNomId="set @idnoms=LAST_INSERT_ID();"
    var queryrace="insert into race (NAME,DESCRIPTION,PREJUGE,noms_ID,carac_ID,repere_ID,capacite_raciale_ID)values("+
        stringmysql(body.raceName)+","+
        stringmysql(body.raceDescription)+","+
        stringmysql(body.racePrejuge)+","+"@idnoms,@idcarac,@idrepere,@idcapacite_racial);"
    var querystring=queryCapacite+queryCapaciteId+queryCarac+queryCaracId+queryRepere+queryRepereId+queryNom+queryNomId+queryrace
    console.log(querystring)
    pool.query(querystring,(err, result, fieds) => {
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
    host:'us-cdbr-iron-east-02.cleardb.net',
    user:'b39eb4b516d894',
    password:'bec50a5c', 
    database: 'heroku_ba8e04e09313376'
})

module.exports = router