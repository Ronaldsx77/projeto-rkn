const express = require('express');
const env = require('dotenv/config');
const rknRouter = require('./rknRouter');
const database = require('./db');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions))

app.use('/rkn', rknRouter)

app.listen(process.env.PORT, async () => {
    const resultDB = await database.sync();
    console.log('sever started');
})