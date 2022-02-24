import {database,connect, close} from "./database";
import {IdMongodb} from "./id-mongodb/id-mongodb";
import {JwtToken} from "./jwt-token/jwt-token";
import {RouteHandler} from "./route-handler/route-handler";
import {TeamMongodb} from "./team-mongodb/team-mongodb";

const express = require("express")
const app = express()
const routeHandler = new RouteHandler()

app.use(express.json())
require('dotenv').config({path: `${__dirname}\.env`})

database.connect()

app.post('/team', JwtToken.authenticateToken,async (req, res) => {

    routeHandler.postTeamHandler(req, res, new TeamMongodb(), new IdMongodb(""))

    res.send("hi")

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
