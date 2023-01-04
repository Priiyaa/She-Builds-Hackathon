var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
// Import the files //
require('dotenv').config();
require('./models/index')
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const ProjDetails =require('./models/projDetails');
const projDetails = require('./models/projDetails');
//const projDetails = require('./models/projDetails');

app.get('/menu',function(req,resp){
    ProjDetails.findAll().then(projDetails=>resp.json(projDetails))
})
//CREATING API
app.use(bodyParser.json());
app.post('/menu',function(req,res){
    ProjDetails.create({name:req.body.name}).then(function(projDetails){
res.json(projDetails);});
})

// app.post('/menu', async (req,res) => {
//     try {
//      ProjDetails = await ProjDetails.create({
//         id:req.body.id
            
//       })
//      res.status(201).send(ProjDetails)
//     } catch (error) {
//       res.status(422).send('UNABLE TO INSERT DATA')
//     }
    
//   })

  
  app.set('vie engine','hbs');
  app.set('vie engine','ejs');

app.get("/",(req,resp)=>{
    resp.send("Home page");
})



app.use('/',require('./routes/index'));


app.listen(process.env.APP_PORT,(res,req)=>{
    
    console.log("Appilcation server is up",process.env.APP_PORT);
  });
  module.exports = app;