import {database,connect, close} from "./database";
import {IdMongodb} from "./id-mongodb/id-mongodb";
import {JwtToken} from "./jwt-token/jwt-token";
import {RouteHandler} from "./route-handler/route-handler";
import {TeamMongodb} from "./team-mongodb/team-mongodb";

const express = require("express")
const app = express()
const routeHandler = new RouteHandler()
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:4200"
}))

app.use(express.json())
require('dotenv').config({path: `${__dirname}\.env`})

database.connect()

app.post('/team', JwtToken.authenticateToken,async (req, res) => {

    routeHandler.postTeamHandler(req, res, new TeamMongodb(), new IdMongodb(""))

})

app.get('/admin', JwtToken.authenticateToken, (req, res) => {

    res.send({admin: req.admin})

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
