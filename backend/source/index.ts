import {database} from "./database/database";
import {IdMongodb} from "./id-mongodb/id-mongodb";
import {JwtToken} from "./jwt-token/jwt-token";
import {RouteTeamHandler} from "./route-handler/route-team-handler";
import {TeamMongodb} from "./team-mongodb/team-mongodb";
import{setTeamAdmin} from "./team-mongodb/team-admin-mongodb"
import {getAllDatabaseNames} from "./database/getAllDatabaseNames";

const express = require("express")
const app = express()
const routeTeamHandler = new RouteTeamHandler()
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:4200"
}))

app.use(express.json())
require('dotenv').config({path: `${__dirname}\.env`})


database.connect()
setTeamAdmin()


app.post('/team', JwtToken.authenticateTokenAdmin,async (req, res) => {

    console.log('request arrived')
    routeTeamHandler.postTeamHandler(req, res, new TeamMongodb(), new IdMongodb(""))

})

app.get('/teams', JwtToken.authenticateTokenAdmin,async (req, res) => {

    routeTeamHandler.getTeamsHandler(req, res, new TeamMongodb())


})

app.get('/admin', JwtToken.authenticateToken, (req, res) => {

    res.send({admin: req.admin})

})

app.delete('/teams/:id', JwtToken.authenticateTokenAdmin,async (req, res) => {

    routeTeamHandler.deleteTeamHandler(req, res, new TeamMongodb())

})


app.post('/login',async (req: any, res: any) => {



    let jwtTokenObject = new JwtToken()
    let jwtToken = await jwtTokenObject.createToken(req, database)

    if (!jwtToken) {
        res.sendStatus(401)
    }
    if (jwtToken) {
        res.send(jwtToken)
    }


})

app.get("/evidence/:id", async(req,res)=> {

})

app.get("/evidence", async(req,res)=> {

})

app.post("/evidence", async(req,res)=> {

})

app.get("/hypotheses", async(req,res)=> {

})

app.get("/hypothesis/:id", async(req,res)=> {

})

app.post("/hypothesis", async(req,res)=> {

})



app.listen(3000)
