import {database,connect, close} from "./database";
import {IdMongodb} from "./id-mongodb/id-mongodb";
import {JwtToken} from "./jwt-token/jwt-token";

const express = require("express")
const app = express()

app.use(express.json())
require('dotenv').config({path: `${__dirname}\.env`})

database.connect()

app.get('/team', JwtToken.authenticateToken,async (req, res) => {


    let idMongoDb = new IdMongodb()
    let newTeamId = await idMongoDb.getNextTeamId()



    res.send(newTeamId)

})

app.get('/admin', JwtToken.authenticateToken, (req, res) => {

    res.send({admin: req.admin})

})




app.get('/login',async (req: any, res: any) => {



    let jwtTokenObject = new JwtToken()
    let jwtToken = await jwtTokenObject.createToken(req, database)

    if (!jwtToken) {
        res.sendStatus(401)
    }
    if (jwtToken) {
        res.send(jwtToken)
    }


})



app.listen(3000)
