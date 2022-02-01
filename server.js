const express=require('express')
const cors=require('cors');
constbodyParser=require('body-parser');
const config=require('./config');
const bodyParser = require('body-parser');
const studentRouter=require('./routes/students.routes')
const app=express()
app.use(express.json());
app.use(cors()) 
app.use(bodyParser.json());

app.use('/api',studentRouter.router);

app.listen(config.port,()=>console.log('App is listening on url ' + config.url))